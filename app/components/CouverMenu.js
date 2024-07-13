import styles from './couverMenu.module.scss'

export default function couvertMenu() {
    return (
        <>
            <div className={styles.couvertMenu}>
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
        </>
    )
}