import type { ComponentChildren } from "preact";
import { Head, asset } from "$fresh/runtime.ts";
import Loding from "@/common/components/Loding.tsx";



type LayoutProps = {
  head: {
    title: string;
  }

  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>{props.headTitle ? props.headTitle : "타이틀"}</title>
      </Head>

      <header>
        <h1>
          <a href="/">
            <img src={asset("/logo.svg")} alt="logo img" />
            <p class="hide">로고</p>
          </a>
        </h1>
      </header>
      <hr />

      <main>
        <h2 class="hide">컨텐츠</h2>

        {props.children}

      </main>
      <hr />

      <footer>
        <h2 class="hide">연락처</h2>
      </footer>
    </>
  );
}
