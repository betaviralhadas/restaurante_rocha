import Image from "next/image"
import dishes from "../../public/DishMenu.json"
import styles from './dishMenu.scss'

export default function DishMenu() {
    const categories = ["Especialidades", "Carnes", "Peixes", "Mariscos", "Vegan"];

    return (
        <>
        <div className={styles.dishmenu}>
                <h2>Couvert</h2>
                <p>Pão</p>
                <p>Azeitonas</p>
                <p>Manteiga</p>
                <p>Paté</p>
                <p>Queijo</p>
                <p>Salada de Mexilhão</p>
            </div>
            <div>
                <h2>Entradas Quentes</h2>
                <p>Gambas à Rocha</p>
                <p>Ameijoas à Bolhão Pato</p>
                <p>Mexilhão à Rocha</p>
            </div>
            <div>
                <h2>Sopas</h2>
                <p>Sopa de Peixe</p>
                <p>Sopa de Legumes</p>
            </div>
        <div>
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
                                    width={300}
                                    height={300}
                                />
                                <p className="description_text">{dish.description}</p>
                            </article>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    );
}