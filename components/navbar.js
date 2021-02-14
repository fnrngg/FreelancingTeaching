class NavBar extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <nav class="navBar">
                <a class="menuIcon" > &#9776; </a>
                <a class="logo" id="homeLogo" href="homepage.html" id="">
                    <pre>Freelance<br>     Teaching</pre>
                </a>

                <form id="searchForm">
                    <input class="searchInput" id="searchInputId" type="text">
                    <button class="searchButton" id="searchButtonId" >Search</button>
                </form>

                <a href="../loginpage.html" class="navBarIconContainer">
                    <img id="logoutIcon" class="navBarIcons" src="../images/logout.png">
                </a>

                <a href="../account.html?name=${getMyName(localStorage.getItem("accessToken"))}" class="navBarIconContainer">
                    <img id="profileIcon" class="navBarIcons" src="../images/acc.jpg">
                </a>
            </nav>
        `
        document.getElementsByClassName("menuIcon")[0].addEventListener("click", function(event) {
            document.getElementsByClassName("menu")[0].className = "menu opened";
        })

        document.getElementById("logoutIcon").addEventListener("click", function (event) {
            console.log("rafaca")
            localStorage.removeItem("accessToken")
        })
    }

    constructor() {
        super()
    }
}

window.customElements.define("my-nav-bar", NavBar)