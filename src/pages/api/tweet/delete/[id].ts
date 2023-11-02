import { withApiSession } from "../../../../libs/server/withSession";
import widthHandler from "../../../../libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest,res:NextApiResponse) {
    const {id} = req.query;
    console.log(id)
    await db?.tweet.delete({
        where: {
            id: Number(id),
        }
    });
    return res.status(200).json({ok:true});
}

export default withApiSession(widthHandler("GET", handler));