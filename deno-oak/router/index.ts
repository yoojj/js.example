import { Application } from 'https://deno.land/x/oak/mod.ts'
import { Status, Router } from 'https://deno.land/x/oak/mod.ts'
import boardRouter from './router.board.ts'



const router = new Router();

router.get('/', (ctx, next) => {

  ctx.response.status = Status.OK;
  ctx.response.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
      <head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;

})

router.get('/(.*)', async (ctx) => {

  ctx.response.status = Status.NotFound;
  ctx.response.body = {
    success: false,
    status: Status.NotFound,
    message: 'Page not Found',
  };

})
  


const init = (app: Application) => {
  app.use(boardRouter.routes());
  app.use(boardRouter.allowedMethods());

  app.use(router.routes());
  app.use(router.allowedMethods());
}



export default { init };