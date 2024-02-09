// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stdout } from 'process';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
    }
    const { id } = req.query;
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Api-Key': process.env.UMBRACO_FORMS_API_KEY + ''
    };
    const response = await fetch(process.env.NEXT_PUBLIC_MEDIA_DOMAIN + '/umbraco/forms/api/v1/entries/' + id, {
        method: 'POST',
        body: req.body,
        headers: headers
    });
    const data = await response.text();
    res.status(response.status).send(data);
}
