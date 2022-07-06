// create time function so date will show.
function date (){
    var date = $("#date")
    date.text(moment().format("LLLL"))
}
// Call Date function
date()

// Create var for all save buttons
var svBtn9am = $("9amSvBtn")
var svBtn10am = $("10amSvBtn")
var svBtn11am = $("11amSvBtn")
var svBtn12pm = $("12pmSvBtn")
var svBtn1pm = $("1pmSvBtn")
var svBtn2pm = $("2pmSvBtn")
var svBtn3pm = $("3pmSvBtn")
var svBtn4pm = $("4pmSvBtn")
var svBtn5pm = $("5pmSvBtn")

// Realized I needed to create a way to get whatever user is inputing
var inputArray = $("input").get() 
console.log(inputArray)

var jq9am = $(inputArray[0])
var jq10am = $(inputArray[1])
var jq11am = $(inputArray[2])
var jq12pm = $(inputArray[3])
var jq1pm = $(inputArray[4])
var jq2pm = $(inputArray[5])
var jq3pm = $(inputArray[6])
var jq4pm = $(inputArray[7])
var jq5pm = $(inputArray[8])

// Have to create save button that allows user to save the value in local storage

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var nineam = '';
    console.log(input);
    nineam = input;
    localStorage.setItem("eventsStored", JSON.stringify(nineam));
    console.log(nineam)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var tenam = '';
    console.log(input);
    tenam = input;
    localStorage.setItem("eventsStored", JSON.stringify(tenam));
    console.log(tenam)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var elevenam = '';
    console.log(input);
    elevenam = input;
    localStorage.setItem("eventsStored", JSON.stringify(elevenam));
    console.log(elevenam)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var twelvepm = '';
    console.log(input);
    twelvepm = input;
    localStorage.setItem("eventsStored", JSON.stringify(twelvepm));
    console.log(twelvepm)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var onepm = '';
    console.log(input);
    onepm = input;
    localStorage.setItem("eventsStored", JSON.stringify(onepm));
    console.log(onepm)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var twopm = '';
    console.log(input);
    twopm = input;
    localStorage.setItem("eventsStored", JSON.stringify(twopm));
    console.log(twopm)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var threepm = '';
    console.log(input);
    threepm= input;
    localStorage.setItem("eventsStored", JSON.stringify(threepm));
    console.log(threepm)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var fourpm = '';
    console.log(input);
    fourpm = input;
    localStorage.setItem("eventsStored", JSON.stringify(fourpm));
    console.log(fourpm)
})

svBtn9am.on("click", function(event) {
    event.preventDefault()
    var input = jq9am.val();
    var fivepm = '';
    console.log(input);
    fivepm = input;
    localStorage.setItem("eventsStored", JSON.stringify(fivepm));
    console.log(fivepm)
})

// I need to be able to get data from local storage

function retrieval(){
    var storage = JSON.parse(localStorage.getItem("eventsStored"))
    if (storage == null) {
        return
    }
    console.log(storage)
    jq9am.val(storage)
    jq10am.val(storage)
    jq11am.val(storage)
    jq12pm.val(storage)
    jq1pm.val(storage)
    jq2pm.val(storage)
    jq3pm.val(storage)
    jq4pm.val(storage)
    jq5pm.val(storage)

}

// call upon retrieval function
retrieval()

// Need to create a function that changes the color based on the hour. Realized I needed to create a time variable to reference for my for loop

var clock = parseInt(moment().format("H"))
console.log(clock)

function color() {
    for (i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i]) ;
        var hour= $(inputArray[i]) ; 
        console.log(hour)
        console.log(parseInt(inputArray[i].dataset.timeindex))

        if (inputArray[i].dataset.timeindex < clock) {
            hour.addClass("past")
            
        } else if (inputArray[i].dataset.timeindex == clock) {
            hour.addClass("present")
        } else if (inputArray[i].dataset.timeindex > clock) {
            hour.addClass("future")
        }
    }
}

// call for function 
color()


