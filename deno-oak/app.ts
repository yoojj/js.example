import { Application, FlashServer, hasFlash, isHttpError, oakCors } from '@/deps.ts'
import config from '@/config/config.ts'
import { log } from '@/middleware/logger.ts'
import router from '@/router/index.ts'



const appOptions = hasFlash() ? { serverConstructor: FlashServer } : undefined;
const app = new Application(appOptions);

const corsOptions = {
};

app.use(oakCors(corsOptions));



app.use(async (ctx, next) => {
   try {
      await next();
      const rt = ctx.response.headers.get('X-Response-Time');
      log.info(`${ctx.request.method} ${ctx.request.url} - ${rt}`);

   } catch (err) {
      if(isHttpError(err)) {
         log.error(err)
      }
   }
});

app.use(async (ctx, next) => {
   const start = Date.now();
   await next();
   const ms = Date.now() - start;
   ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});



router.init(app);



app.addEventListener('error', (evt) => {
   log.info(evt.error);
});

app.addEventListener('listen', ({ secure, hostname, port }) => {
   log.info('--- server start ---')
});

await app.listen({ port: config.port });