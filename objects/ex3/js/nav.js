
class Nav {
    render() {
        const conteudoNav = `
        <img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
            <input class="input__search" type="search" placeholder="Search" aria-label="Search">
            <button class="button__search" > Search </button
        </div>    
        `

        document.getElementById("nav").insertAdjacentHTML("beforeend", conteudoNav)
    }
    
    
}

const criaNav = new Nav()
criaNav.render()

