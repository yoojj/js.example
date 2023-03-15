import { Application, FlashServer } from 'https://deno.land/x/oak/mod.ts'
import AppRouter from './routes/index.ts'



const app = new Application();

//app.use(logger.logger);

app.use(AppRouter.routes())
app.use(AppRouter.allowedMethods())

app.addEventListener('listen', ({ secure, hostname, port }) => {
   console.log(`server start port :: ${port}`)
});

await app.listen({ port: 9000 })