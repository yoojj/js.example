import { MiddlewareHandlerContext } from "$fresh/server.ts";



export async function handler(req: Request, ctx: MiddlewareHandlerContext) {

  console.log(`url >> ${req.url}`);

  return ctx.next();
};
