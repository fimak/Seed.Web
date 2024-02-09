// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPage } from '@lib/umbraco/util/dataApi';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<{message?: string}>) {
    if (req.query.secret !== process.env.UMBRACO_PREVIEW_KEY|| !req.query.slug) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    const data = await getPage(req.query.slug + '', true);
    if (!data) {
        return res.status(401).json({ message: 'Invalid slug'});
    }
    else if (!data.page) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    res.setPreviewData({});
    res.redirect(req.query.slug.toString());
}
