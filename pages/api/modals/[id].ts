// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ModalData from '@lib/umbraco/types/modalData.type';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ModalData | null>) {
    const { id, culture } = req.query;
    const response = await fetch(process.env.DATA_API_BASEURL + 'modals/' + id + '?culture=' + culture, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY + ''
        }
    });
    const data = await response.json();
    res.status(response.status).send(data);
}
