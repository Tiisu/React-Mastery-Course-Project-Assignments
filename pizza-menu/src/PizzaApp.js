import './App.css'

function PizzaApp(){
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Pizza() {
    return (
        <div>
            <img src='./pizzas/pizza1.jpeg' />
            <h3>Follacia</h3>
            <p>Descriptiong of the pizza</p>
            <p>50.00</p>

        </div>
    )
}

function Header(){
    return (
        <h1> Press Q Pizza </h1>
    )
}

function Menu() {
    return (
        <div>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    )
}

function Footer(){
    return (
        <footer>
            <h4>tHIS IS THE FOOOTER</h4>
        </footer>
    )
}

export default PizzaApp;