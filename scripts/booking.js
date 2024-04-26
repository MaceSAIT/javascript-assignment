/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dayCost = 35;
var dayNum = 0;




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function click(button){
    //console.log("Click")

    if (!button.classList.contains("clicked")){
        button.classList.add("clicked");
        console.log("Clicked");
        dayNum += 1;
        calculate();
    }else if(button.classList.contains("clicked")){
        button.classList.remove("clicked");
        console.log("Unclicked");
        dayNum -= 1;
        calculate();
    }
}

var mon = document.getElementById("monday");
mon.addEventListener("click", function(){click(mon);});

var tues = document.getElementById("tuesday");
tues.addEventListener("click", function(){click(tues);});

var wed = document.getElementById("wednesday");
wed.addEventListener("click", function(){click(wed);});

var thurs = document.getElementById("thursday");
thurs.addEventListener("click", function(){click(thurs);});

var fri = document.getElementById("friday");
fri.addEventListener("click", function(){click(fri);});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clear(){
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thurs.classList.remove("clicked");
    fri.classList.remove("clicked");

    console.log("Cleared");
    dayNum = 0;
    calculate();
}


var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){clear();});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function daySet(portion){

    if (portion == "full"){
        dayCost = 35;
        fullDay.classList.add("clicked");
        halfDay.classList.remove("clicked");
        console.log("Set full day");
        calculate();
    }else if (portion == "half"){
        dayCost = 20;
        halfDay.classList.add("clicked");
        fullDay.classList.remove("clicked");
        console.log("Set half day");
        calculate();
    }

}



var fullDay = document.getElementById("full");
fullDay.addEventListener("click", function(){daySet("full");});
var halfDay = document.getElementById("half");
halfDay.addEventListener("click", function(){daySet("half");});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let htmlCost = document.getElementById("calculated-cost");
    let totalCost = dayNum * dayCost;

    htmlCost.textContent = totalCost;
}
