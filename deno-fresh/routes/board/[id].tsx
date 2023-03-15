import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Layout from "@/common/Layout.tsx";
import Counter from "@/islands/Counter.tsx";



interface Board {
  id: string;
  content: string;
}

interface Data {
  url: URL;
  board: Board;
}

export const handler: Handlers<Data> = {
  async GET(req: Request, ctx: HandlerContext) {

    const url = new URL(req.url);

    const data:Data = {
      url,
      board: ctx.params,
    };

    if([1, 2, 3, 4, 5].includes(Number(data.board.id)) == false) {
      return ctx.renderNotFound();
    }

    return ctx.render(data);
  },
};

export default function PropTest({ data }: PageProps<Data>) {

  const { url, board } = data;
  
  return (
    <Layout headTitle="board">

      <section>
        <h2>content title</h2>

        <Counter value={board.id} />

      </section>

    </Layout>
  );
}
