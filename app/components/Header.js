import Image from 'next/image'
import Logo from ".../public/img/logo2.png";
import styles from './header.module.scss'
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <section className='header'>
                <Image
                    className="logo"
                    src={Logo}
                    alt="restaurantRocha"
                />
                <nav>
                    <ul className='navigation_header'>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/menu"}>Menu</Link></li>
                        <li><Link href={"/gallery"}>Gallery</Link></li>
                        <li><Link href={"#contact"}>Contact</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}