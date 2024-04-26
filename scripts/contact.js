// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submit = document.getElementById("submit-button");


function hide(){

    console.log("Submitting...");

    var main = document.getElementById("form");
    main.style.display = "none";

    var txt = document.getElementById("contact-header");
    txt.innerHTML = "Thank you for your message!";

    console.log("Submit Success!");
}


submit.addEventListener("click", function(){hide();});