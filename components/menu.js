

class Menu extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <ul class="menu">
                <li class="closeMenu">
                    &#10006;
                </li>
                <li class="menuItem">
                    Ragaca1
                    <ul class="menuContent">
                        <li class="closeContent">
                            &#8678;
                        </li>
                        <li>
                            Ragaca1-1
                        </li>
                        <li>
                            Ragaca1-2
                        </li>
                        <li>
                            Ragaca1-3
                        </li>
                        <li>
                            Ragaca1-4
                        </li>
                        <li>
                            Ragaca1-5
                        </li>
                    </ul>
                </li>
                <li class="menuItem">
                    Ragaca2
                    <ul class="menuContent">
                        <li class="closeContent">
                            &#8678;
                        </li>
                        <li>
                            Ragaca2-1
                        </li>
                        <li>
                            Ragaca2-2
                        </li>
                        <li>
                            Ragaca2-3
                        </li>
                        <li>
                            Ragaca2-4
                        </li>
                        <li>
                            Ragaca2-5
                        </li>
                    </ul>
                </li>
                <li class="menuItem">
                    Ragaca3
                    <ul class="menuContent">
                        <li class="closeContent">
                            &#8678;
                        </li>
                        <li>
                            Ragaca3-1
                        </li>
                        <li>
                            Ragaca3-2
                        </li>
                        <li>
                            Ragaca3-3
                        </li>
                        <li>
                            Ragaca3-4
                        </li>
                        <li>
                            Ragaca3-5
                        </li>
                    </ul>
                </li>
                <li class="menuItem">
                    Ragaca4
                    <ul class="menuContent">
                        <li class="closeContent">
                            &#8678;
                        </li>
                        <li>
                            Ragaca4-1
                        </li>
                        <li>
                            Ragaca4-2
                        </li>
                        <li>
                            Ragaca4-3
                        </li>
                        <li>
                            Ragaca4-4
                        </li>
                        <li>
                            Ragaca4-5
                        </li>
                    </ul>
                </li>
                <li class="menuItem">
                    Ragaca5
                    <ul class="menuContent">
                        <li class="closeContent">
                            &#8678;
                        </li>
                        <li>
                            Ragaca5-1
                        </li>
                        <li>
                            Ragaca5-2
                        </li>
                        <li>
                            Ragaca5-3
                        </li>
                        <li>
                            Ragaca5-4
                        </li>
                        <li>
                            Ragaca5-5
                        </li>
                    </ul>
                </li>
            </ul>
        `
        this.addHoverListeners()
        this.addCloseListeners()
    }

    handleMouseEnter = (event) => {
        event.target.getElementsByClassName("menuContent")[0].style.display = "block"
    }
    handleMouseLeave = (event) => {
        event.target.getElementsByClassName("menuContent")[0].style.display = "none"
    }

    addHoverListeners() {
        var lis = document.getElementsByClassName("menuItem")
        var matching = window.matchMedia("(max-width: 600px)")

        var _this = this
        window.addEventListener("resize", function () {
            for (let i = 0; i < lis.length; i++) {
                if (!matching.matches) {
                    lis[i].addEventListener("mouseenter", _this.handleMouseEnter)
                    lis[i].addEventListener("mouseleave", _this.handleMouseLeave)
                } else {
                    lis[i].removeEventListener("mouseenter", _this.handleMouseEnter, false)
                    lis[i].removeEventListener("mouseleave", _this.handleMouseLeave, false)
                }
            }
        })
        for (let i = 0; i < lis.length; i++) {
            if (!matching.matches) {
                lis[i].addEventListener("mouseenter", this.handleMouseEnter)
                lis[i].addEventListener("mouseleave", this.handleMouseLeave)
            }
            lis[i].addEventListener("click", function (event) {
                event.target.getElementsByClassName("menuContent")[0].style.display = "block"
            })
        }
    }

    addCloseListeners() {
        document.getElementsByClassName("closeMenu")[0].addEventListener("click", function (event) {
            document.getElementsByClassName("menu")[0].className = "menu closed";
        })

        let closeContents = document.getElementsByClassName("closeContent");
        for (let i = 0; i < closeContents.length; i++) {
            closeContents[i].addEventListener("click", function (event) {
                let contents = document.getElementsByClassName("menuContent");
                Array.from(contents).forEach(element => {
                    element.style.display = "none";
                });
            })
        }
    }

    constructor() {
        super()
    }

}


window.customElements.define('my-menu', Menu)