function welcomeUser(isMember, name="Guest") {
    console.log(name)
    if (isMember == true) {
        console.log(`Welcome Back,VIP ${name}`)
    }else if (isMember == false) {
        console.log(`Hello and Welcome ${name}`)
    }
}

welcomeUser(true)
welcomeUser(true, "Tiisu")
welcomeUser(false)
welcomeUser(false, "Tiisu")
