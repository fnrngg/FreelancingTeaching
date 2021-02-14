export default class Offer extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="offerMainDiv">
                <a href="./account.html?name=${this.getAttribute("name")}">
                    <img class="offerImage" src="/images/acc.jpg">
                </a>
                <p>${this.getAttribute("offerText")}</p>
            </div>
        `;
        document.getElementsByClassName("menuIcon")[0].addEventListener("click", function (event) {
            document.getElementsByClassName("menu")[0].className = "menu opened";
        })
    }

    constructor() {
        super();
    }
}

window.customElements.define("my-offer", Offer);
