import { PageData } from "../types/pageData.type";
import SitemapEntry from "../types/sitemapEntry";
import Redirect from "../types/redirect.type";
import UrlWithCulture from "../types/urlWithLocale.type";
import PaginatedContent from "../types/paginatedContent.type";
import { SearchResult } from "pages/api/search";
import LogLevel from "../types/logLevel.type";

export interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray | undefined;
}
export interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

async function fetchAPI<T>(action: string, params: Json = {}, preview: boolean = false) {
    var query = '';
    var keys = Object.keys(params);
    if (keys.length) {
        query = '?';
        keys.forEach((key, i) => {
            if (i > 0) {
                query += '&';
            }
            query += `${key}=${params[key] + ''}`
        })
    }
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(?:Z|(\+|-)([\d|:]*))?$/;
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

    const requestSettings = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY + '',
            'Preview-Key': ''
        }
    };
    if (preview || params.preview) {
        requestSettings.headers['Preview-Key'] = process.env.UMBRACO_PREVIEW_KEY + '';
    }
    const res = await fetch(process.env.DATA_API_BASEURL + action + query, requestSettings);
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    const results = parseDates(json);
    return results as T;
}

export async function getPage(slug: string, preview: boolean = false, culture: string = '') {
    var data = await fetchAPI<PageData>('page', { slug, preview, culture });
    return data;
}

export async function getErrorPage(errorCode: number, preview: boolean = false, culture: string = '') {
    var data = await fetchAPI<PageData>('error-page', { errorCode, preview, culture });
    return data;
}

export async function getPages(preview: boolean = false) {
    return await fetchAPI<UrlWithCulture[]>('pages', {preview});
}

export async function getCollection(source: string, page: number, pageSize: number, allowedTypes?: string[], preview: boolean = false, culture?: string) {
    return await fetchAPI<string[]>('collection');
}

export async function getSearchResults(query: string, page: number, pageSize: number, rootId?: number, culture?: string) {
    return await fetchAPI<PaginatedContent<SearchResult>>('search', { query, page, pageSize, rootId, culture });
}

export async function getSitemap(host?: string) {
    return await fetchAPI<SitemapEntry[]>('sitemap', { host });
}

export async function getRobots(host?: string) {
    return await fetchAPI<string[]>('robots', { host });
}

export async function getRedirects(host?: string) {
    return await fetchAPI<Redirect[]>('redirects', { host });
}

export async function log(message: string, level: LogLevel) {
    await fetch(process.env.DATA_API_BASEURL + 'log/', {
        method: 'POST',
        body: JSON.stringify({ message, level}),
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY + ''
        }
    });
}