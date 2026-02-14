import Pizza from './Pizza';

function Menu({ pizzas }) {
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p className="menu-intro">
                        Authentic Ghanaian fusion pizzas. 6 creative dishes inspired by Ghana's rich culinary heritage. All made fresh from our stone oven.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </main>
    )
}

export default Menu;
