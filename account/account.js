let currlocation = window.location.search;
let parameters = new URLSearchParams(currlocation);
let currName = parameters.get("name")
let currAccBio = JSON.parse(getBio(currName))


setTimeout(() => {
    loadBio();
}, 1000);

function loadBio() {
    document.getElementById("accountProffession").innerHTML = "Proffession: " + currAccBio.proffession;

    document.getElementById("accountCity").innerHTML = "City: " + currAccBio.city;

    document.getElementById("accountEducation").innerHTML = "Education: " + currAccBio.education;
}

// const HTTP_STATUS_OK = 200

// var request = new XMLHttpRequest();
// var url = "ragacaurl";
// request.onreadystatechange = function() {
//     if (this.status == HTTP_STATUS_OK) {
//         loadBio(JSON.parse(this.responseText))
//     }
// }

// request.open("GET", url)
// let token = localStorage.getItem("accessToken");
// request.setRequestHeader("AccessToken", "Bearer "+token)
// request.send()
