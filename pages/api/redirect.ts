// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Redirect from '@lib/umbraco/types/redirect.type';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Redirect>) {
    const response = await fetch(process.env.DATA_API_BASEURL + `redirect/?url=${req.query.url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY + ''
        }
    });
    const data = await response.json();
    res.status(data.result && data.result.destination ? 200 : 201).send(data.result);
}
