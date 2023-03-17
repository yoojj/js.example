import type { RouterContext } from '@/deps.ts'
import { Status } from '@/deps.ts'



export default {

  getBoardList: ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = {
      success: true,
      data: 'test',
    };
  },

  getBoard: ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = {
      success: true,
      data: 'test',
    };
  },

  createBoard: async ({ request, response }: { request: any; response: any }) => {
 
  },

  updateBoard: async ({ request, response }: { request: any; response: any }) => {

  },

  deleteBoard: async ({ request, response }: { request: any; response: any }) => {

  },

}
