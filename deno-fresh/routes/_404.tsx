import { UnknownPageProps } from "$fresh/server.ts";
import Layout from "@/common/Layout.tsx";



export default function Error404Page({ params, url, route, data } : UnknownPageProps) {

  console.log( 'error >> ' + url )

  return (
    <Layout headTitle="404">

      <section>
        <h2>error</h2>

        <p>404</p>
      </section>

    </Layout>
  );
}
