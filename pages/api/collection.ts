// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PaginatedContent from '../../lib/umbraco/types/paginatedContent.type';
import { UmbracoNode } from '../../lib/umbraco/types/umbracoNode.type';

export default async function handler(req: NextApiRequest, res: NextApiResponse<UmbracoNode[] | string>) {
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
    }
    const response = await fetch(process.env.DATA_API_BASEURL + 'collection/', {
        method: 'POST',
        body: req.body,
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY + ''
        }
    });
    const data = await response.json();
    res.status(response.status).send(data);
}
