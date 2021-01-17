document.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "loginTab":
      showForm(e, 'loginForm')
      break;

    case "registerTab":
      showForm(e, 'registerForm')
      break;

    default:
      break;
  }
})

function checkRegisterInputs() {
  if (getText("registerPassword") !== getText("registerSecondPassword")) {
    showInputError("registerPassword")
    showInputError("registerSecondPassword")
    window.document.getElementById("differentPasswords").style.display = "block"
    return false
  } else {
    return true
  }
}

function checkLoginInputs() {
  var userNameOrEmail = getText("loginEmail")
  if (validateUser(userNameOrEmail, getText("loginPassword"))) {
    saveToken(getToken(userNameOrEmail))
    return true
  } else {
    showInputError("loginPassword")
    showInputError("loginEmail")
    window.document.getElementById("incorrectPassword").style.display = "block"
    return false
  }
}

function saveToken(token) {
}


function getText(input) {
  return window.document.getElementById(input).value
}

function showInputError(element) {
  window.document.getElementById(element).className = "normalInputs error"
}