import { withApiSession } from "../../../libs/server/withSession";
import widthHandler from "../../../libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest,res:NextApiResponse) {
    const {id} = req.query;
    console.log(id)
    const dataOne = await db?.tweet.findFirst({
        where: {
            id: Number(id),
        }
    });
    return res.status(200).json(dataOne);
}

export default withApiSession(widthHandler("GET", handler));