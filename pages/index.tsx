import HomePage from "@/components/Home/HomePage";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar/>
   <HomePage/>
   <Footer/>
    </>
  )
}