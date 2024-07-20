import styles from "./gallery.scss";
import Layout from '../layout'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PhotosGallery from "../components/PhotosGallery"

export default function Gallery() {
    return (
        <Layout className={styles.gallery}>
            <Header />
            <main className="page">
                <h1 className="title">Gallery</h1>
                <PhotosGallery />
            </main>
            <Footer />
        </Layout>
    )
}