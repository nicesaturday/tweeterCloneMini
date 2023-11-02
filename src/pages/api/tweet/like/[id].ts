import { withApiSession } from "../../../../libs/server/withSession";
import widthHandler from "../../../../libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest,res:NextApiResponse) {
    const {id} = req.query;

        await db?.tweet.update({
            where: {
                id: Number(id),
            },
            data:{
                isLike: true,
            }
        })
    return res.status(200).json({ok:true});

}

export default withApiSession(widthHandler("GET", handler));