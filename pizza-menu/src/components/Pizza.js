function Pizza({ pizzaObj }) {
    return (
        <li className="pizza">
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>GH₵ {pizzaObj.price}</span>
            </div>
        </li>
    )
}

export default Pizza;
