import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import Banner from "@/components/banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>THANACHIT</title>
        <meta
          name="description"
          content="This is a website that gathers Thanachit's projects and skills."
        />
        <meta
          name="keywords"
          content="thanachit sengsalee, sengsalee, thanachit portfolio, thanachit, benz, ธนชิต เส็งสาลี, ธนชิต, เส็งสาลี, benz thanachit, benz sengsalee, sengsalee family"
        />
        {/* Facebook meta tags below */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="benz.sengsalee.com" />
        <meta
          property="og:title"
          content="My portfolio - Hi, i am Thanachit Sengsalee."
        />
        <meta
          property="og:description"
          content="This is a website that gathers Thanachit's projects and skills."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/mydev_eonlineshop/others/thumbnails/1676697057106_1024x1024.png"
        />
        <meta
          name="google-site-verification"
          content="2HSSIHsakNFao9y4Sywcx-siP9G1a1ccev9hdetKkak"
        />
      </Head>
      <div className="container mx-auto bg-white dark:bg-black">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
