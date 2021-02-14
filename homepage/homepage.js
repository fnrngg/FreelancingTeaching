import Offer from '../components/offer.js'

// You can check example of request/respone handling in accounts.js, no back no real ajax

if (localStorage.getItem("accessToken") == null) {
    window.location.href = "/loginpage.html"
}

let myName = getMyName(localStorage.getItem("accessToken"))

let myProjects = ["usad", "sadhb", "sdajbd"]

setTimeout(() => {
    document.getElementById("myName").innerHTML = "Name: " + myName
    if (myProjects.length == 0) {
        document.getElementById("noProjectLi").style.display = "list-item"
    } else {
        let resLis = ""
        for (let i = 0; i < myProjects.length; i++) {
            resLis +="<li>"+myProjects[i]+"</li>"
        }
        document.getElementById("currentProjectsUl").innerHTML = resLis
    }

    if (offers.length != 0) {
        let res = ""
        for (let i = 0; i < offers.length; i++) {
            let newOffer = new Offer()
            newOffer.setAttribute("offerText", offers[i])
            newOffer.setAttribute("name", "Front")
            res += newOffer.outerHTML
        }
        document.getElementById("offersUl").innerHTML = res
    } else {
        document.getElementById("noOffersLi").style.display = "list-item"
    }

}, 1000);


