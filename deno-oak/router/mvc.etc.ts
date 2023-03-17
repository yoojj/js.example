import { appRouter, Status } from '@/deps.ts'



appRouter.get('/', (ctx) => {

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

appRouter.get('/(.*)', async (ctx) => {

  ctx.response.status = Status.NotFound;
  ctx.response.body = {
    success: false,
    status: Status.NotFound,
    message: 'Page not Found',
  };

})



export default appRouter;