// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import LogLevel from '@lib/umbraco/types/logLevel.type';
import Redirect from '@lib/umbraco/types/redirect.type';
import { log } from '@lib/umbraco/util/dataApi';
import { User, ironSessionKey } from 'common/util/withSessionRoute';
import { getIronSession } from 'iron-session';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Redirect | string>) {
    const referrers = process.env.ALLOWED_REFERRERS?.split(",");
    const {tok, mbrID} = req.query;
    await log(JSON.stringify(req.headers), LogLevel.Debug);
    const refererHost = req.headers.referer ? new URL(req.headers.referer).host : '';
    if (!req.query.target || (referrers && referrers.length && !referrers.includes(refererHost))) {
        res.status(400).send("Bad Request");
    }
    else {
        if (tok && mbrID) {
            const session = await getIronSession<User>(req, res, {
                password: ironSessionKey,
                cookieName: "referral-data",
                cookieOptions: {
                    secure: true,
                    maxAge: 3600
                    //domain: req.headers['x-forwarded-host']?.toString()
                }
            });
            session.token = tok as string;
            session.memberId = mbrID as string;
            await session.save();
        }
        var target = req.query.target as string;
        if (!target.endsWith("/")) {
            target += "/";
        }
        res.status(307).redirect(target);
    }
}
