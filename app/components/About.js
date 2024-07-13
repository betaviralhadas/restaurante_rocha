import Image from "next/image";
import AboutImg from '.../public/img/logo.jpg'
import styles from './about.module.scss'

const About = () => {
    return (
        <div className={styles.about}>
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
export default About;