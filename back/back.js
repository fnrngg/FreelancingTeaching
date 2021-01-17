var users = ["grogu", "luke"];
var emails = ["grogu@gmail.com", "luke@gmail.com"];
var passwords = new Map([
    ["grogu", "aaa"],
    ["grogu@gmail.com", "aaa"],
    ["luke", "bbb"],
    ["luke@gmail.com", "bbb"]
]);
var tokens = new Map([
["grogu", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
["grogu@gmail.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
["luka", "qmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
["luke@gmail.com", "qmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"]
]);


function validateUser(userNameOrEmail, password) {
    if (users.includes(userNameOrEmail) || emails.includes(userNameOrEmail)) {
        if (passwords.get(userNameOrEmail) === password) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function getToken(userNameOrEmail) {
    return tokens.get(userNameOrEmail)
}