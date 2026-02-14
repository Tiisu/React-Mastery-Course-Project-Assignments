import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const pizzaData = [
    {
        name: "Jollof Supreme",
        ingredients: "Spicy tomato base, mozzarella, grilled chicken, bell peppers, and onions",
        price: 45,
        photoName: "./pizzas/pizza1.jpeg",
    },
    {
        name: "Waakye Special",
        ingredients: "Black-eyed peas, rice blend, sausage, boiled eggs, and spicy shito sauce",
        price: 50,
        photoName: "./pizzas/pizza2.avif",
    },
    {
        name: "Kelewele Delight",
        ingredients: "Sweet plantain, ginger, cayenne pepper, mozzarella, and honey drizzle",
        price: 40,
        photoName: "./pizzas/pizza3.avif",
    },
    {
        name: "Banku Bliss",
        ingredients: "Grilled tilapia, fresh tomatoes, hot pepper, onions, and herbs",
        price: 55,
        photoName: "./pizzas/pizza4.jpeg",
    },
    {
        name: "Fufu Fusion",
        ingredients: "Cassava crust, groundnut soup base, goat meat, mushrooms, and spinach",
        price: 60,
        photoName: "./pizzas/pizza5.avif",
    },
    {
        name: "Red Red Classic",
        ingredients: "Black-eyed beans, plantain, palm oil sauce, smoked fish, and gari topping",
        price: 48,
        photoName: "./pizzas/pizza6.avif",
    },
];

function PizzaApp(){
    return (
        <div className="container">
            <Header />
            <Menu pizzas={pizzaData} />
            <Footer />
        </div>
    )
}

export default PizzaApp;