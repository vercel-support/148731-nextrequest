import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[test] req =', req)
  res.status(200).send({
    request: {
      url: req.url,
      rawHeaders: req.rawHeaders
    }
  });
};
