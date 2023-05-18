import HomePage from "@/components/Home/HomePage";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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