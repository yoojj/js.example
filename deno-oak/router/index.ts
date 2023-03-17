import { Application } from '@/deps.ts'
import authRouter from './mvc.auth.ts'
import boardRouter from './mvc.board.ts'
import etcRouter from './mvc.etc.ts'
  


const init = (app: Application) => {

  app.use(authRouter.routes());
  app.use(authRouter.allowedMethods());

  app.use(boardRouter.routes());
  app.use(boardRouter.allowedMethods());

  app.use(etcRouter.routes());
  app.use(etcRouter.allowedMethods());

};



export default {
  init,
}