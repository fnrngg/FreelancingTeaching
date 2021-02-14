var users = ["Owner", "Designer", "Back", "Middle", "Front", "Tester"];
var emails = ["owner@gmail.com", "designer@gmail.com", "back@gmail.com", "middle@gmail.com", "front@gmail.com", "tester@gmail.com"];
var passwords = new Map([
    ["Owner", "allInOne"],
    ["owner@gmail.com", "allInOne"],
    ["Designer", "allInOne"],
    ["designer@gmail.com", "allInOne"],
    ["Back", "allInOne"],
    ["back@gmail.com", "allInOne"],
    ["Middle", "allInOne"],
    ["middle@gmail.com", "allInOne"],
    ["Front", "allInOne"],
    ["front@gmail.com", "allInOne"],
    ["Tester", "allInOne"],
    ["tester@gmail.com", "allInOne"]
]);
var tokens = new Map([
    ["Owner", "oyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["Owner@gmail.com", "oyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["Designer", "dmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["designer@gmail.com", "dmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["Back", "bmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["back@gmail.com", "bmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["Middle", "mmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["middle@gmail.com", "qmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["Front", "fmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["front@gmail.com", "qmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["Tester", "tmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"],
    ["tester@gmail.com", "tmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"]
]);

var names = new Map([
    ["oyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "Owner"],
    ["dmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "Designer"],
    ["bmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "Back"],
    ["mmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "Middle"],
    ["fmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "Front"],
    ["tmlkjhciOiJIUzIchaisInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjlkaTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "Tester"],
]);

var bio = new Map([
    ["Owner",
        '{"proffession": "Product Owner","city": "Tbilisi","education": "ESM"}'
    ],
    ["Designer",
        '{"proffession": "Designer", "city": "Tbilisi", "education": "VAADS"}'
    ],
    ["Back",
        '{"proffession": "Back developer", "city": "Tbilisi", "education": "MACS"}'
    ],
    ["Middle",
        '{"proffession": "Middle developer", "city": "Tbilisi", "education": "MACS"}'
    ],
    ["Front",
        '{"proffession": "Front developer", "city": "Tbilisi", "education": "MACS"}'
    ],
    ["Tester",
        '{"proffession": "Quality Assistant", "city": "Tbilisi", "education": "MACS"}'
    ]
])

var offers = [
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation",
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation",
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation",
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation",
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation",
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation",
    "I'm looking for a web developer who has experience in education. He/She must understand what web developer does and asign excatly that and not \"Do whatever you want\", which means give DESIGN+documentation"
]

function getBio(name) {
    return bio.get(name)
}

function getMyName(token) {
    return names.get(token)
}


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