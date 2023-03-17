import { appRouter } from '@/deps.ts'
import { auth } from '@/middleware/auth.ts'
import { validate } from '@/middleware/validate.ts'
import BoardController from '@/mvc/app.board/BoardController.ts'



appRouter
  .get('/boards', BoardController.getBoardList)
  .get('/board/:id', BoardController.getBoard)
  .post('/board/:id', BoardController.createBoard)
  .put('/board/:id', BoardController.updateBoard);

/*  
appRouter.delete(
  '/board/:id', 
  auth(),
  validate(),
  Board.deleteBoard,
);
*/


export default appRouter;
