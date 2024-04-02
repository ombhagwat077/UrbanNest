const firebaseConfig = {
    apiKey: "AIzaSyAUtWN89SbSIQ6YNNMrXLYXbre7Piy226o",
    authDomain: "login-with-firebase-data-963d6.firebaseapp.com",
    projectId: "login-with-firebase-data-963d6",
    storageBucket: "login-with-firebase-data-963d6.appspot.com",
    messagingSenderId: "389702801068",
    appId: "1:389702801068:web:e8490885b28020841c3109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initializing variables
const auth = firebase.auth()
const database = firebase.database()

function register() {
    names = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    cpassword = document.getElementById('cpassword').value

    if (validate_email(email) == false || validate_password(password) == false || validate_cpassword(cpassword) == false) {
        alert('Email or Password is outta line!')
        return
    }
    if (validate_names(names) == false) {
        alert('One or More field is outta line!')
        return
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()
            var user_data = {
                names: names,
                email: email,
                last_login: Date.now()
            }
            database_ref.child('users/' + user.uid).set(user_data)


            alert('User Created!')
        })
        .catch(function(error) {
            var error_message = error.message

            alert(error_message)
        })
    }


function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_cpassword(cpassword) {
    if (cpassword != password) {
        return false
    } else {

        return true;
    }
}

function validate_names(names) {
    if (names == null) {
        return false
    }
    if (names.length < 5) {
        return false
    } else {
        return true
    }
}
