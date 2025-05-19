import type { NextApiRequest, NextApiResponse } from "next";
import { metadata } from "./data";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let id = req.query.id;

  let item = metadata.find((val) => val.edition == Number(id));

  //   res.status(200).json({ name: "John Doe" });

  res.json(item);
}
