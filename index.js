if (localStorage.getItem("accessToken") != null) {
    window.location.href = "homepage.html"
} else {
    window.location.href = "loginpage.html"
}