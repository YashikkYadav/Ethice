import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";
import LEIBadge from "@/components/LEIBadge";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* LEI Verification Badge */}
      {/* <Script
        src="https://leiadmin.com/leibadge.js?color=dark&place=sticky&lei=9845005D15B2KFLI6483"
        strategy="afterInteractive"
      /> */}
      <LEIBadge lei="9845005D15B2KFLI6483" theme="dark" />
    </>
  );
}
