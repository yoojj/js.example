import * as Board from '../mvc/controller/Board.ts'
import { Status, Router } from 'https://deno.land/x/oak/mod.ts'



const router = new Router();

router
  .get('/boards', Board.getBoardList)
  .get('/board/:id', Board.getBoard)
  .post('/board/:id', Board.createBoard)
  .put('/board/:id', Board.updateBoard)
  .delete('/board/:id', Board.deleteBoard);



export default router;