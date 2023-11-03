import { NextApiRequest, NextApiResponse } from "next";
import widthHandler from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();

  return res.status(200).json({ create: true });
}

export default withApiSession(widthHandler("GET", handler));
