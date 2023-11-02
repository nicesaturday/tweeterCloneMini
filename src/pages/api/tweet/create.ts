import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";
import widthHandler from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {main} = req.body;
    const {user} = req.session;

       if(!user) {
        return res.status(401).json({ok:false});
        }
        
        await db.tweet.create({
            data:{
                user:{
                 connect: {
                     id: user?.id,
                 }
                },
                main,
                isLike:false
            }
        })

        return res.status(200).json({create:true});
}

export default withApiSession(widthHandler("POST", handler));