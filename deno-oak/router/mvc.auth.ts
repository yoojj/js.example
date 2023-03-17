import { appRouter } from '@/deps.ts'
import AuthController from '@/mvc/app.auth/AuthController.ts'



appRouter.get('/auth/login', AuthController.login);



export default appRouter;
