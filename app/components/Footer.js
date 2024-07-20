import styles from './footer.scss'
import Collapse from './Collapse'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section id="contact">
                <div className="content_footer">
                    <div className="footer">
                        <article className="footer_text">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Avenida do Mar nº 21, 2520-205 Peniche, Portugal</p>
                        </article>
                        <article className="footer_text">
                            <i class="fa-solid fa-phone icon"></i>
                            <p>+351 262 782 147</p>
                        </article>
                        <article className="footer_text">
                            <i class="fa-solid fa-at icon"></i>
                            <a href="mailto:beta_viralhadas@hotmail.com">restaurante-rocha@hotmail.com</a>
                        </article>
                    </div>
                    <Collapse
                        title={<h4 className="time">Time</h4>}
                        description={<div className="content_time">
                            <div className="week">
                                <p className="day_week">Sun</p>
                                <p>12:00 PM - 12:00 AM</p>
                            </div>
                            <div className="week">
                                <p className="day_week">Mon</p>
                                <p>12:00 PM - 12:00 AM</p>
                            </div>
                            <div className="week">
                                <p className="day_week">Tue</p>
                                <p>12:00 PM - 3:30 PM</p>
                            </div>
                            <div className="week">
                                <p className="day_week">Wed</p>
                                <p>12:00 PM - 12:00 AM</p>
                            </div>
                            <div className="week">
                                <p className="day_week">Thu</p>
                                <p>12:00 PM - 12:00 AM</p>
                            </div>
                            <div className="week">
                                <p className="day_week">Fri</p>
                                <p>12:00 PM - 12:00 AM</p>
                            </div>
                            <div className="week">
                                <p className="day_week">Sat</p>
                                <p>12:00 PM - 12:00 AM</p>
                            </div>
                        </div>
                        } />
                    <div className="footer_link">
                        <a href="https://www.tripadvisor.com/Restaurant_Review-g608952-d8299191-Reviews-Restaurante_Rocha-Peniche_Leiria_District_Central_Portugal.html"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-solid fa-binoculars icon"></i>
                        </a>
                        <a href="https://www.thefork.com/restaurant/rocha-r494883"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-solid fa-utensils icon"></i>
                        </a>
                        <a href="https://www.facebook.com/Rest.Rocha/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-facebook icon"></i>

                        </a>
                        <a href="https://www.instagram.com/rest.rocha/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-instagram icon"></i>
                        </a>
                    </div>
                </div>
                <div className="copy_right">
                    <i class="fa-solid fa-copyright"></i>
                    <p>All rights reserved</p>
                </div>
            </section>
        </footer>
    );
}