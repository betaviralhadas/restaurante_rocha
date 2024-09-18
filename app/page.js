import Link from "next/link"
import Image from "next/image"
import styles from "./page.scss"
import Layout from './layout'
import About from "./components/About"
import Header from "./components/Header"
import Slider from "./components/HomeSlider"
import Footer from "./components/Footer"
import Menu from "../public/img/ementa1.webp"
import Gallery from "../public/img/restaurante2.webp"
import Head from "next/head"

export default function Home() {
  return (
   
    <Layout className={styles.page}>
      <Header />
      <main className="page">
        <Slider />
        <About />
        <section className="menu_gallery">
          <Link href={"/menu"} className="menu_link">
            <Image
              className="image_link"
              src={Menu}
              alt="menu"
            />
            <h2>Menu</h2>
          </Link>
          <Link href={"/gallery"} className="gallery_link">
            <h2>Gallery</h2>
            <Image
              className="image_link"
              src={Gallery}
              alt="gallery"
            />
          </Link>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}