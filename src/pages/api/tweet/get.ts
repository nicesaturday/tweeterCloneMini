import { withApiSession } from "../../../libs/server/withSession";
import widthHandler from "../../../libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest,res:NextApiResponse) {
    const dataAll = await db?.tweet.findMany();
    return res.status(200).json(dataAll);
}

export default withApiSession(widthHandler("GET", handler));