import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";
import withHandler from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await db.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });

  if (profile) {
    res.status(200).json(profile);
  } 
  if (!profile){
    res.status(500).json({ok:false});
  }
}

export default withApiSession(withHandler("GET", handler));
