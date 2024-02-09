import { SearchResult } from "pages/api/search";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import PaginatedContent from "../types/paginatedContent.type"
import { UmbracoNode } from "../types/umbracoNode.type";
import { Json } from "./dataApi";
import ModalData from "../types/modalData.type";

const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
    
const parseDates = (data: any) : any => {
    if (!data) {
        return data;
    }
    if (Array.isArray(data)) {
        return data.map(item => {
            return parseDates(item);
        })
    }
    else if (typeof (data) === 'object') {
        var keys = Object.keys(data);
        var result : Json = {};
        keys.forEach(key => {
            result[key] = parseDates(data[key]);
        });
        return result;
    }
    else if (typeof (data) === 'string') {
        var match = dateRegex.exec(data);
        if (match) {
            return new Date(data);
        }
    }
    return data;
}

export function useSearch(query: string, page: number, pageSize: number, rootId?: number, culture?: string) {
    const data = JSON.stringify({
        query,
        page,
        pageSize,
        rootId,
        culture
    });
    return useSWR<PaginatedContent<SearchResult>>('search-' + data, () => {
        return fetch(`/api/search/?query=${query || ''}&page=${page}&pageSize=${pageSize}&rootId=${rootId || 0}&culture=${culture || ''}`)
            .then(res => {
                const json = res.json();
                return json.then(result => parseDates(result) as PaginatedContent<SearchResult>);
            });
    });
}

async function getCollection(data: string) {
    var res = await fetch('/api/collection/', {
        method: 'POST',
        body: data
    });
    if (!res.ok) {
        const json = await res.json();
        throw new Error(json.message as string);
    }
    return res.json()
        .then(result => parseDates(result) as UmbracoNode[]);
}

async function getModal(id: string, culture: string) {
    return fetch('/api/modals/' + id + '?culture=' + culture, {
        method: 'GET'
    })
        .then(res => {
            const json = res.json();
            return json.then(result => parseDates(result) as ModalData);
        });
}

export function useModal(id: string, culture: string) {
    return useSWR<ModalData>(id ? 'modal-' + id + '-' + culture : null, () => getModal(id, culture));
}

export function useCollection(pageId: number, page: number, pageSize: number, sources?: number | number[], query?: string, allowedTypes?: string[], preview: boolean = false, culture?: string) {
    const data = JSON.stringify({
        pageId,
        sources,
        query,
        page,
        pageSize,
        allowedTypes,
        preview,
        culture
    });
    return useSWR<UmbracoNode[]>('collection-' + data, () => getCollection(data))
}

export function useCollectionInfinite(pageId: number, page: number, pageSize: number, sources?: number | number[], query?: string, allowedContentTypes?: string[], sortBy?: string, startDate?: Date, endDate?: Date, preview: boolean = false, culture?: string) {
    const data = {
        pageId,
        sources,
        query,
        page,
        pageSize,
        allowedContentTypes,
        sortBy,
        startDate,
        endDate,
        preview,
        culture
    };
    return useSWRInfinite<UmbracoNode[], Error>(
        (index) => {
            data.page = index + 1;
            return 'collection-' + JSON.stringify(data);
        },() => getCollection(JSON.stringify(data))
    );
}