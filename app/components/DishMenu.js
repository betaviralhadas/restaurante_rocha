import Image from "next/image";
import dishes from ".../public/DishMenu.json";
import styles from './dishMenu.module.scss'

export default function DishMenu() {
    const categories = ["Especialidades", "Carnes", "Peixes", "Mariscos", "Vegan"];

    return (
        <div className={styles.dishmenu}>
            {categories.map(category => (
                <div key={category}>
                    <h2>{category}</h2>
                    {dishes.filter(dish => dish.category === category).map(dish => (
                        <div className="dish" key={dish.id}>
                            <p>{dish.dish}<span>{dish.serving}</span></p>
                            <article className="description">
                                <Image
                                    className="img_dish"
                                    src={dish.image}
                                    alt={dish.dish}
                                    width={500}
                                    height={300}
                                />
                                <p className="description_text">{dish.description}</p>
                            </article>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
