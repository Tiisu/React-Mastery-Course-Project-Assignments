function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour < closeHour;

    return (
        <footer className="footer">
            <div className="order">
                <p>
                    We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
                </p>
                <button className="btn">Order Now</button>
            </div>
        </footer>
    )
}

export default Footer;
