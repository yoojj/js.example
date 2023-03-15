import { ErrorPageProps } from "$fresh/server.ts";
import Layout from "@/common/Layout.tsx";



export default function Error500Page({ error }: ErrorPageProps) {

  return (
    <Layout headTitle="500">

      <section>
        <h2>error</h2>

        <p>{(error as Error).message}</p>
      </section>

    </Layout>
  );
}
