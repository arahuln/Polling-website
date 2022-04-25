var messageRef = firebase.database().ref('message');

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html")
    } else {
        document.getElementById("user").innerHTML = "We're proud that you chose to conduct poll on our website " + user.email;
    }
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function logout() {
    firebase.auth().signOut()
}








document.getElementById('create').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();

    var yourname = getInputVal('yourname');
    var email = getInputVal('email');
    var date = getInputVal('date');
    var number = getInputVal('number');
    var option = getInputVal('option');
    savemessage(yourname,email,date,number, option);
}

function getInputVal(id) {
    return document.getElementById(id).value;

}

function savemessage(yourname,email,date,number, option) {
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        yourname: yourname,
        email: email,
        date: date,
        number: number,
        option: option
    })
}

function listitem(yourname, email,date,number, option) {
    var ul = document.getElementById('list');

    var yourname = document.createElement('li');
    var email = document.createElement('li');
    var date = document.createElement('li');
    var number = document.createElement('li');
    var option = document.createElement('li');


    yourname.innerHTML = 'Question: ' + question;
    email.innerHTML = 'Option1: ' + option1;
    date.innerHTML = 'Option2: ' + option2;
    number.innerHTML = 'Option3: ' + option3;
    option.innerHTML = 'Option4: ' + option4;

    ul.appendChild(yourname);
    ul.appendChild(email);
    ul.appendChild(date);
    ul.appendChild(number);
    ul.appendChild(option);
}

function lisa() {
    messageRef.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let yourname = childSnapshot.val().yourname;
            let email = childSnapshot.val().email;
            let date = childSnapshot.val().date;
            let number = childSnapshot.val().number;
            let option = childSnapshot.val().option;
            listitem(yourname, email,date,number, option));
        });
    });
}