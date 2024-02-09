// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stdout } from 'process';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
    }
    const { resourceData, service } = req.query;
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Api-Key': process.env.UMBRACO_FORMS_API_KEY + ''
    };
    var additionalHeaders = req.headers['additionalheaders'] as string;
    if (additionalHeaders) {
        var headerData = JSON.parse(additionalHeaders);
        var keys = Object.keys(headerData);
        keys.forEach(key => headers[key] = headerData[key]);
    }
    const response = await fetch(process.env.NEXT_PUBLIC_MEDIA_DOMAIN + `/api/form-data/resources/` , {
        method: 'POST',
        body: req.body,
        headers: headers
    });
    
    if (response.ok) {
        const data = await response.json();
        res.status(response.status).send(data);
    }
    else {
        res.status(response.status).send(JSON.stringify({
            message: await response.text()
        }));
    }
}
