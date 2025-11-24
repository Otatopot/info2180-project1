/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    var email = '';
    var subscribe = document.getElementsByTagName('button')[0];
    var message = document.getElementsByClassName("message")[0];
    
    subscribe.onclick = getmail;
    
    
    function getmail(event){
        event.preventDefault();
        email = document.getElementById('email').value;
        if (email == "") {
            message.innerHTML = "Please enter a valid email address";
        }
        else {
            message.innerHTML = "Thank you! Your email address " + email + " has been added to our email list."
        }

    }

})
