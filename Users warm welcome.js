
//Users Warm welcome

let names = "User";// change to your name
let today = new Date();

let month = today.getMonth() + 1; // getMonth() is zero-based
let year = today.getFullYear();
let date = today.getDate();
let current_date = `${month}/${date}/${year}`;

let hours = today.getHours(); // 24-hour format
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());

// Convert to 12-hour format
let period = hours >= 12 ? "PM" : "AM";
let formattedHour = hours % 12 || 12;

let current_time = `${formattedHour}:${minutes}:${seconds} ${period}`;

console.log("Current Date:", current_date);

// Greet based on time
if (hours >= 0 && hours < 12) {
    console.log(`Good Morning ${names}, it's ${formattedHour}:${minutes} ${period}`);
} else if (hours >= 12 && hours < 18) {
    console.log(`Good Afternoon ${names}, it's ${formattedHour}:${minutes} ${period}`);
} else {
    console.log(`Good Evening ${names}, it's ${formattedHour}:${minutes} ${period}`);
}

// Function to add zero padding
function addZero(num) {
    return num < 10 ? `0${num}` : num;
}
