import styles from "./menu.scss";
import Layout from '../layout'
import Header from "../components/Header"
import Footer from "../components/Footer"
import DishMenu from "../components/DishMenu"
//import CouvertMenu from "./CouvertMenu"

export default function Menu() {
    return (
        <Layout className={styles.menu}>
            <Header />
            <main className="page">
                <h1 className="menu_title">Menu</h1>
                <div className="content_menu">
               
                    <DishMenu />
                </div>
            </main>
            <Footer />
        </Layout>
    )
}