import { withApiSession } from "../../../../libs/server/withSession";
import widthHandler from "../../../../libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id: queryId },
    session: { user: id },
  } = req;
  const existLike = await db?.like.findFirst({
    where: {
      tweetId: Number(queryId),
      userId: Number(id),
    },
  });
  console.log(existLike, "ㅇ?");
  if (existLike) {
    await db?.like.delete({
      where: {
        id: existLike.id,
      },
    });
    return res.status(200).json({ ok: true });
  }
  if (!existLike) {
    const madeLike = await db?.like.create({
      data: {
        user: {
          connect: {
            id: id,
          },
        },
        tweet: {
          connect: {
            id: queryId,
          },
        },
      },
    });
    console.log(madeLike, "ㅇㅇ?");
    return res.status(200).json(madeLike);
  }
}

export default withApiSession(widthHandler("GET", handler));
