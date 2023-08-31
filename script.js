let DOB = document.getElementById('DOB')
let submit_button = document.getElementById('submit_button');
let year_count = document.querySelector('.year_count');
let month_count = document.querySelector('.month_count');
let day_count = document.querySelector('.day_count');
let hour_count = document.querySelector('.hour_count');
let min_count = document.querySelector('.min_count');
let sec_count = document.querySelector('.sec_count');
let h4_enter_DOB = document.querySelector('#h4');
let parent_output_time = document.querySelector(".parent_output_time");
let go_back = document.querySelector("#go_back");
let life_timer = document.querySelector("#life_timer");

let year;
let month;
let day;
let presentDate;
let yearOld;
let monthOld;
let dayOld;
let currentYear;
let currentMonth;
let currentDay;
let currenthour;
let currentminute;
let currentsecond;
let interval;
let check = false;


const counter_active = () => {
    parent_output_time.classList.toggle('slide_left');
    life_timer.classList.toggle('display_none');
    h4_enter_DOB.textContent = "Enter Your Date Of Birth";
    if (check) {
        clearInterval(interval);
    }
    check = !check;
}

const journeyCalc = () => {
    // console.log(`current year = ${currentYear}, currentMonth = ${currentMonth} , current date = ${currentDate}, current hour = ${currenthour} , current min = ${currentminute} , currentsecond = ${currentsecond} `)
    interval = setInterval(() => {
        let presentDate = new Date();
        currentYear = presentDate.getFullYear();
        currentMonth = presentDate.getMonth() + 1;
        currentDay = presentDate.getDate();
        console.log(currentDay)
        currenthour = presentDate.getHours();
        currentminute = presentDate.getMinutes();
        currentsecond = presentDate.getSeconds();
        yearOld = currentYear - year;
        monthOld = currentMonth - month;
        dayOld = currentDay - day;
        if (year > currentYear) {
            return;
        }
        if (month > currentMonth) {
            monthOld = -monthOld
        }
        if (day > currentDay) {
            dayOld = -dayOld
        }
        console.log(yearOld, monthOld, dayOld, currenthour, currentminute, currentsecond);
        year_count.textContent = yearOld;
        month_count.textContent = monthOld;
        day_count.textContent = dayOld;
        hour_count.textContent = currenthour;
        min_count.textContent = currentminute;
        sec_count.textContent = currentsecond;
    }, 1000)

    counter_active();
}




const getDOB = () => {
    let strDOB = DOB.value;
    // console.log(strDOB)
    let newDate = new Date(`${strDOB}`);
    year = newDate.getFullYear();
    month = newDate.getMonth() + 1;
    day = newDate.getDate();
console.log(day);
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        h4_enter_DOB.textContent = "Enter a valid DOB"
        return;
    }
    // console.log(`year = ${year} , month = ${month} , date = ${day}`);
    journeyCalc();
}

// journeyCalc();
submit_button.addEventListener('click', getDOB);
go_back.addEventListener('click', counter_active);
