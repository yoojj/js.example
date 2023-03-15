import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as Board from './board.ts'



const router = new Router();

router.get('/404', ({ response }: { response: any }) => {
  response.status = 404;
  response.body = {
    success: false,
    message: '404',
  };
})

router.get('/', ({ response }: { response: any }) => {
  response.body = `
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

router
  .get('/boards', Board.getBoardList)
  .get('/board/:id', Board.getBoard)
  .post('/board/:id', Board.createBoard)
  .put('/board/:id', Board.updateBoard)
  .delete('/board/:id', Board.deleteBoard);


  
export default router;