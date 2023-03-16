import { config as appEnv } from 'https://deno.land/x/dotenv/mod.ts'
import { Application, FlashServer, hasFlash, isHttpError } from 'https://deno.land/x/oak/mod.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'
import AppRouter from './router/index.ts'



appEnv({ export: true });

const appOptions = hasFlash() ? { serverConstructor: FlashServer } : undefined;
const app = new Application(appOptions);

const corsOptions = {
};

app.use(oakCors(corsOptions));



app.use(async (ctx, next) => {
   try {
      await next();
      const rt = ctx.response.headers.get('X-Response-Time');
      console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);

   } catch (err) {
      if(isHttpError(err)) {
         console.log(err)
      }
   }
});

app.use(async (ctx, next) => {
   const start = Date.now();
   await next();
   const ms = Date.now() - start;
   ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});



AppRouter.init(app);



app.addEventListener('error', (evt) => {
   console.log(evt.error);
});

app.addEventListener('listen', ({ secure, hostname, port }) => {
   console.log('--- server start ---')
});

await app.listen({ port: Deno.env.get('PORT') });