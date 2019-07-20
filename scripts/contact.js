  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAamk2SxUGGiCjrkSy-8ocIzuzwUIrb0V4",
      authDomain: "contactform-d32c0.firebaseapp.com",
      databaseURL: "https://contactform-d32c0.firebaseio.com",
      projectId: "contactform-d32c0",
      storageBucket: "",
      messagingSenderId: "484602543552",
      appId: "1:484602543552:web:8da58d6efa69b813"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let messagesRef = firebase.database().ref('messages');


  // Form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  // Submit Form
  function submitForm(e) {
      e.preventDefault();
      // Get vals
      let name = getInputVal('name');
      let email = getInputVal('email');
      let message = getInputVal('message');
      // Save Msg
      saveMessage(name, email, message);


  }

  // Get form value
  function getInputVal(id) {
      return document.getElementById(id).value;
  }


  //   Save MSG to firebase
  function saveMessage(name, email, message) {
      let newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          message: message
      });
  }