
import { Home, Layout } from "@atrgpt/features";
import localFont from "next/font/local";
import Head from "next/head";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ArtGPT | Home</title>
      </Head>
      <Layout mode="home">
        <Home />
      </Layout>
    </>
  );
}
