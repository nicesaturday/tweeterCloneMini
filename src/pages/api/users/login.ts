import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";
import withHandler from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (email) {
    let user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      req.session.user = {
        id: user?.id,
      };

      await req.session.save();
      res.status(200).json({ login: true });
    }
  }
}

export default withApiSession(withHandler("POST", handler));
