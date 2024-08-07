import Image from "next/image"
import AboutImg from '../../public/img/logo.webp'
import styles from './about.scss'

export default function About () {
    return (
        <div className={`${styles.about} about_section`}>
            <section className="about">
                <Image
                    className="about_image"
                    src={AboutImg}
                    alt="restaurant"
                />
                <article className="text_about">
                    <h2>About</h2>
                    <p>CUISINES Seafood, Mediterranean, European, Portuguese. SPECIAL DIETS Gluten Free Options. MEALS Lunch, Dinner. hhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhh hhhhh</p>
                </article>
            </section>
        </div>
    )
}