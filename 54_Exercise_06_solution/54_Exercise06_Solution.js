console.log("Solution of Exercise 6: Alarm Clock");
//Alarm Clock

let alarmSubmit = document.getElementById("alarmSubmit");
//ADD AN EVENT LISTENER TO THE SUBMIT BUTTON.
alarmSubmit.addEventListener("click", setAlarm);


var audio = new Audio('./52_hold On Audio.mp3');
//FUNCTION TO PLAY THE ALARM RING TONE.
function ringBell(){
    audio.play();
}


let alarm =document.getElementById("alarm");
//date input validation
alarm.addEventListener("blur", () => {


    console.log("The alarm element is blured");
    let regularEx = /^([0-9]){4}([-]){1}([0-9]){0,2}([-]){1}([0-9]){0,2}\s([0-9]){0,2}([:]){1}([0-9]){0,2}([:]){1}([0-9]){0,2}$/;
    let string = alarm.value;
    console.log(regularEx);

    if (regularEx.test(string)) {
        // console.log("your alarm is valid");
        alarm.classList.remove("is-invalid");
        

    }
    else {
        // console.log("your alarm is not valid");
        alarm.classList.add("is-invalid");
        

    }
})


//THIS FUNCTION WILL BE RUN WHENEVER ALARM IS SET FORM UI
function setAlarm(element){
    let alarm =document.getElementById("alarm");


    let alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm...${alarmDate}`);

    let now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);

    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now...");
            ringBell();
        }, timeToAlarm);
    }

    element.preventDefault();
} 