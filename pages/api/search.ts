// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PaginatedContent from '../../lib/umbraco/types/paginatedContent.type';
import { UmbracoNode } from '../../lib/umbraco/types/umbracoNode.type';

export type SearchResult = {
    name: string,
    summary?: string,
    url: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedContent<SearchResult> | string>) {
    if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
    }
    const response = await fetch(process.env.DATA_API_BASEURL + `search/?query=${req.query.query}&page=${req.query.page}&pageSize=${req.query.pageSize}&rootId=${req.query.rootId}&culture=${req.query.culture}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY + ''
        }
    });
    const data = await response.json();
    res.status(response.status).send(data);
}
