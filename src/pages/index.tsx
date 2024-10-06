import { Layout } from "@atrgpt/views/layouts/Layout";
import { Home } from "@atrgpt/views/pages/home/Home";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomePage() {
  return (
    <Layout mode="home">
      <Home />
    </Layout>
  );
}
