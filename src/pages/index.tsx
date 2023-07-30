import Head from "next/head";
import { Header } from "~/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#111828] to-[#482C77]"></main>
    </>
  );
}
