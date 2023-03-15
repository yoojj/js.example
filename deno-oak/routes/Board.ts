


const getBoardList = ({ request, response }: { request: any; response: any }) => {
  response.status = 200;
  response.body = {
    success: true,
    data: 'test',
  };
}



const getBoard = ({ request, response }: { request: any; response: any }) => {
    response.status = 200;
    response.body = {
      success: true,
      data: 'test',
    };
}   



const createBoard = async ({ request, response }: { request: any; response: any }) => {

}



const updateBoard = async ({ request, response }: { request: any; response: any }) => {

}



const deleteBoard = ({ request, response }: { request: any; response: any }) => {

}



export {
    getBoardList,
    getBoard,
    createBoard,
    updateBoard,
    deleteBoard,
};