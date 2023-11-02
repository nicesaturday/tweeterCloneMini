import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(methods: String, handler: any) {
  if (methods == "POST" || "GET") {
    return async function (
      req: NextApiRequest,
      res: NextApiResponse,
    ): Promise<any> {
      await handler(req, res);
    };
  }
}
