let dayBefore = document.getElementById("dayBefore");
let dayToday = document.getElementById("dayToday");
let dayAfter = document.getElementById("dayAfter");
let btnPrint = document.querySelector(".btnPrint");
let inputPrint = document.getElementById("inputPrint");
coord = document.querySelector(".coord");
changer = document.getElementById("inputPrint").value;
const weatherApi = new XMLHttpRequest();
const DateMethod = new Date();

month = DateMethod.getMonth();

dayNum = DateMethod.getDate();
dayNum1 = DateMethod.getDate() + 1;
dayNum2 = DateMethod.getDate() + 2;

dayName = DateMethod.getDay();
dayName1 = DateMethod.getDay() + 1;
dayName2 = DateMethod.getDay() + 2;

if (dayName1 >= 7) {
  dayName1 = dayName1 - 7;
}
if (dayName2 >= 7) {
  dayName2 = dayName2 - 7;
}
// console.log(dayName,dayNum)
// console.log(dayName1,dayNum1)
// console.log(dayName2,dayNum2)

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

inputPrint.addEventListener("keyup", function () {
  changer = document.getElementById("inputPrint").value;
  return changer;
});

async function WeatherStart (){
    if (changer==''){
        changer='moscow'}

    var weather = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c91e7b20b33b4502831135845221001&q=${changer}&days=3`
      );
      weatherData = await weather.json();
      latCoord = weatherData.location.lat;
      lonCoord = weatherData.location.lon;
      coord.src = `https://yandex.com/map-widget/v1/?from=mapframe&ll=${lonCoord}2964%2C${latCoord}7101&z=8`;
      Dir = weatherData.current.wind_dir;

  if (Dir == "SW") {
    Dir = "South West";
  } else if (Dir == "SE") {
    Dir = "South East";
  } else if (Dir == "NE") {
    Dir = "North East";
  } else if (Dir == "NW") {
    Dir = "North West";
  } else if (Dir == "W") {
    Dir = "West";
  } else if (Dir == "E") {
    Dir = "East";
  } else if (Dir == "N") {
    Dir = "North";
  } else if (Dir == "S") {
    Dir = "South";
  }
    //day 1
  concat = `<div class=" d-flex justify-content-between pe-5 m-auto">
  <h5>${weekDays[dayName]}</h5>
  <h5>${dayNum}  ${yearMonths[month]}</h5>
</div>
<h4>${weatherData.location.name}</h4>
<div class="d-flex row position-relative">
  <h2 class=" tempFont ">${weatherData.current.temp_c}<span class="col-3 fs-5 position-absolute top-0 start-25 ">o</span>  C</h2>
</div>
<div class="d-flex justify-content-between">
    <img src="${weatherData.current.condition.icon}"class="w-25" alt="" srcset="">
    <p class="text-success fw-bold">${weatherData.current.condition.text}</p>
</div>
<div class="d-flex justify-content-between">
  <i></i><p>${weatherData.current.humidity} %</p>
  <i></i><p>${weatherData.current.wind_kph} km/h</p>
  <i></i><p>${Dir}</p>
</div>
</div>`;
dayBefore.innerHTML = concat;

//day2
concatday2 = `<div class=" d-flex justify-content-between pe-5 m-auto">
<h5>${weekDays[dayName1]}</h5>
<h5>${dayNum1}  ${yearMonths[month]}</h5>
</div>
<h4>${weatherData.location.name}</h4>
<div class="d-flex row position-relative">
  <h2 class=" tempFont ">${weatherData.forecast.forecastday[1].day.avgtemp_c}<span class="col-3 fs-5 position-absolute top-0 start-25 ">o</span>  C</h2>
</div>
<div class="d-flex justify-content-between">
<img src="${weatherData.forecast.forecastday[1].day.condition.icon}"class="w-25" alt="" srcset="">
<p class="text-success fw-bold">${weatherData.forecast.forecastday[1].day.condition.text}</p>
</div>
<div class="d-flex justify-content-between">
<i></i><p>${weatherData.forecast.forecastday[1].day.avghumidity} %</p>
<i></i><p>${weatherData.forecast.forecastday[1].day.maxwind_kph} km/h</p>
<i></i><p>${Dir}</p>
</div>
</div>`;

dayToday.innerHTML = concatday2;

//day3
concatday3 = `<div class=" d-flex justify-content-between pe-5 m-auto ">
<h5>${weekDays[dayName2]}</h5>
<h5>${dayNum2}  ${yearMonths[month]}</h5>
</div>
<h4>${weatherData.location.name}</h4>
<div class="d-flex row position-relative">
  <h2 class=" tempFont ">${weatherData.forecast.forecastday[2].day.avgtemp_c}<span class="col-3 fs-5 position-absolute top-0 start-25 ">o</span>  C</h2>
</div>
<div class="d-flex justify-content-between">
<img src="${weatherData.forecast.forecastday[2].day.condition.icon}"class="w-25" alt="" srcset="">
<p class="text-success fw-bold">${weatherData.forecast.forecastday[2].day.condition.text}</p>
</div>
<div class="d-flex justify-content-between">
<i></i><p>${weatherData.forecast.forecastday[2].day.avghumidity} %</p>
<i></i><p>${weatherData.forecast.forecastday[2].day.maxwind_kph} km/h</p>
<i></i><p>${Dir}</p>
</div>
</div>`;

dayAfter.innerHTML = concatday3;

}

WeatherStart ()

inputPrint.addEventListener("keyup",WeatherStart )










// inputPrint.addEventListener("keyup", async function () {
//   var weather = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=c91e7b20b33b4502831135845221001&q=${changer}&days=3`
//   );
//   weatherData = await weather.json();
//   console.log(weatherData);
//   console.log(weatherData.location.name);
//   console.log(weatherData.location.country);
//   latCoord = weatherData.location.lat;
//   lonCoord = weatherData.location.lon;
//   coord.src = `https://yandex.com/map-widget/v1/?from=mapframe&ll=${lonCoord}2964%2C${latCoord}7101&z=8`;

//   Dir = weatherData.current.wind_dir;

//   if (Dir == "SW") {
//     Dir = "South West";
//   } else if (Dir == "SE") {
//     Dir = "South East";
//   } else if (Dir == "NE") {
//     Dir = "North East";
//   } else if (Dir == "NW") {
//     Dir = "North West";
//   } else if (Dir == "W") {
//     Dir = "West";
//   } else if (Dir == "E") {
//     Dir = "East";
//   } else if (Dir == "N") {
//     Dir = "North";
//   } else if (Dir == "S") {
//     Dir = "South";
//   }

//   //day 1
//   concat = `<div class=" d-flex justify-content-between pe-5 m-auto">
//             <h5>${weekDays[dayName]}</h5>
//             <h5>${dayNum}  ${yearMonths[month]}</h5>
//           </div>
//           <h4>${weatherData.location.name}</h4>
//           <div class="d-flex row position-relative">
//             <h2 class=" tempFont ">${weatherData.current.temp_c}<span class="col-3 fs-5 position-absolute top-0 start-25 ">o</span>  C</h2>
//           </div>
//           <div class="d-flex justify-content-between">
//               <img src="${weatherData.current.condition.icon}"class="w-25" alt="" srcset="">
//               <p class="text-success fw-bold">${weatherData.current.condition.text}</p>
//           </div>
//           <div class="d-flex justify-content-between">
//             <i></i><p>${weatherData.current.humidity} %</p>
//             <i></i><p>${weatherData.current.wind_kph} km/h</p>
//             <i></i><p>${Dir}</p>
//           </div>
//         </div>`;
//   dayBefore.innerHTML = concat;

//   //day2
//   concatday2 = `<div class=" d-flex justify-content-between pe-5 m-auto">
//   <h5>${weekDays[dayName1]}</h5>
//   <h5>${dayNum1}  ${yearMonths[month]}</h5>
// </div>
// <h4>${weatherData.location.name}</h4>
// <div class="d-flex row position-relative">
//             <h2 class=" tempFont ">${weatherData.forecast.forecastday[1].day.avgtemp_c}<span class="col-3 fs-5 position-absolute top-0 start-25 ">o</span>  C</h2>
//           </div>
// <div class="d-flex justify-content-between">
//     <img src="${weatherData.forecast.forecastday[1].day.condition.icon}"class="w-25" alt="" srcset="">
//     <p class="text-success fw-bold">${weatherData.forecast.forecastday[1].day.condition.text}</p>
// </div>
// <div class="d-flex justify-content-between">
//   <i></i><p>${weatherData.forecast.forecastday[1].day.avghumidity} %</p>
//   <i></i><p>${weatherData.forecast.forecastday[1].day.maxwind_kph} km/h</p>
//   <i></i><p>${Dir}</p>
// </div>
// </div>`;
//   console.log(weatherData.forecast.forecastday[1].day.avgtemp_c);
//   dayToday.innerHTML = concatday2;

//   //day3
//   concatday3 = `<div class=" d-flex justify-content-between pe-5 m-auto ">
//   <h5>${weekDays[dayName2]}</h5>
//   <h5>${dayNum2}  ${yearMonths[month]}</h5>
// </div>
// <h4>${weatherData.location.name}</h4>
// <div class="d-flex row position-relative">
//             <h2 class=" tempFont ">${weatherData.forecast.forecastday[2].day.avgtemp_c}<span class="col-3 fs-5 position-absolute top-0 start-25 ">o</span>  C</h2>
//           </div>
// <div class="d-flex justify-content-between">
//     <img src="${weatherData.forecast.forecastday[2].day.condition.icon}"class="w-25" alt="" srcset="">
//     <p class="text-success fw-bold">${weatherData.forecast.forecastday[2].day.condition.text}</p>
// </div>
// <div class="d-flex justify-content-between">
//   <i></i><p>${weatherData.forecast.forecastday[2].day.avghumidity} %</p>
//   <i></i><p>${weatherData.forecast.forecastday[2].day.maxwind_kph} km/h</p>
//   <i></i><p>${Dir}</p>
// </div>
// </div>`;

//   dayAfter.innerHTML = concatday3;
// });
