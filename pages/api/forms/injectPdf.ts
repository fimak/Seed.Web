// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stdout } from 'process';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
    }
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Api-Key': process.env.UMBRACO_FORMS_API_KEY + '',
        "accessToken": req.headers['accesstoken'] as string
    };
    const response = await fetch(process.env.NEXT_PUBLIC_MEDIA_DOMAIN + `/api/form-data/inject-pdf/` , {
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
