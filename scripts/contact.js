//   ==================================================
// Initialize Firebase

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAamk2SxUGGiCjrkSy-8ocIzuzwUIrb0V4",
    authDomain: "contactform-d32c0.firebaseapp.com",
    databaseURL: "https://contactform-d32c0.firebaseio.com",
    projectId: "contactform-d32c0",
    storageBucket: "contactform-d32c0.appspot.com",
    messagingSenderId: "484602543552",
    appId: "1:484602543552:web:8da58d6efa69b813"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.initializeApp(config);
var database = firebase.database();


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}