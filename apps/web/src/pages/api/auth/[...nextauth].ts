import { posthogApiHandler } from "@rallly/posthog/server";
import type { NextApiRequest, NextApiResponse } from "next";

import { AuthApiRoute } from "@/auth";
import { composeApiHandlers } from "@/utils/next";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "HEAD") {
    res.status(200).end();
    res.setHeader("Content-Length", "0");
  } else {
    return composeApiHandlers(AuthApiRoute, posthogApiHandler)(req, res);
  }
}
