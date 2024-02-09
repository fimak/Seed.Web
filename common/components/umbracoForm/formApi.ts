import { User } from "common/util/withSessionRoute";
import useSWR from "swr";

export async function submitForm(formId: string, data: JSON, culture: string = '') {
    return fetch('/api/forms/' + formId + '/', {
        method: 'POST',
        body: JSON.stringify(data),
        cache: 'no-cache'
    });
}

export type PdfResponse = {
    success: number,
    returnMessage: string,
    pdf: string
}

export async function injectPdf(data: NodeJS.Dict<any>, accessToken?: string) {
    var res = await fetch('/api/forms/injectPdf/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "accessToken": accessToken || ''
        },
        cache: 'no-cache'
    });
    if (!res.ok) {
        const json = await res.json();
        throw new Error(json.message as string);
    }
    return res.json() as Promise<PdfResponse>;
}

export function useResourceData(params: NodeJS.Dict<any>, headers: NodeJS.Dict<any>, service: string, cacheAlias: string, valid: boolean) {
    return useSWR<NodeJS.Dict<string>, Error>(service && valid ? 'resource-data-' + cacheAlias : null, async () => {
        var res = await fetch(`/api/forms/resourceData/`, {
            method: 'POST',
            body: JSON.stringify({
                data: params,
                service
            }),
            headers: {
                additionalheaders: headers ? JSON.stringify(headers) : ''
            }
        });
        if (!res.ok) {
            const json = await res.json();
            throw new Error(json.message as string);
        }
        return res.json()
            .then(result => result as NodeJS.Dict<string>);
    }, {
        shouldRetryOnError: false
    });
}

export async function getReferralData() {
    var res = await fetch(`/api/referData/`, {
        method: 'GET'
    });
    if (!res.ok) {
        const error = await res.text();
        throw new Error(error);
    }
    return res.json()
        .then(result => result as User);
}