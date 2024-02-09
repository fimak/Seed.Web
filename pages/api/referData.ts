// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Redirect from '@lib/umbraco/types/redirect.type';
import { User, ironSessionKey} from 'common/util/withSessionRoute';
import { getIronSession } from 'iron-session';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<User | string>) {
    
    const session = await getIronSession<User>(req, res, {
        password: ironSessionKey,
        cookieName: "referral-data"
    });
    if (!session?.memberId && !session?.token) {
        res.status(400).send("No data found.");
    }
    else {
        res.status(200).send({
            memberId: session.memberId,
            token: session.token
        });
    }
}
