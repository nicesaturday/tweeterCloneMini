import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";
import widthHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;
  const nameCheck = await db.user.findUnique({
    where: {
      name,
    },
  });

  const emailCheck = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (nameCheck?.name == name) {
    return res.status(401);
  }

  if (emailCheck?.email == email) {
    return res.status(401);
  }

  await db.user.create({
    data: {
      name,
      email,
    },
  });

  return res.status(200).json({ create: true });
}

export default widthHandler("POST", handler);
