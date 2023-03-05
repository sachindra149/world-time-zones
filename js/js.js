// Time Zones
let ist = {
    abbr: "Asia/Calcutta",
    zone: "Indian Standard time",
    image: "images/india.jpeg",
    id: "ist",
    states: "Chennai, New Delhi, Calcutta",
};
let pct = {
    abbr: "America/Los_Angeles",
    zone: "Pacific Time",
    image: "images/washington.jpeg",
    id: "pct",
    states: "California, Los Angeles",
};
let mt = {
    abbr: "America/Denver",
    zone: "Mountain Time",
    image: "images/montana.jpeg",
    id: "mt",
    states: "Arizona, Colorado, Utah",
};
let ct = {
    abbr: "America/Kentucky/Louisville",
    zone: "Central Time",
    image: "images/texas.jpeg",
    id: "ct",
    states: "Illinois, Iowa, Missouri, North Dakota, Oklahoma, Tennessee, Texas",
    dst: 1,
};
let et = {
    abbr: "America/Virgin",
    zone: "Eastern Time",
    image: "images/new-york.jpeg",
    id: "et",
    states: "Florida, New Jersey, New York, North Carolina, Washington DC",
    dst: 1,
};
let wet = {
    abbr: "Europe/London",
    zone: "Western European Time",
    image: "images/london.webp",
    id: "wet",
    states: "UK, Ireland",
};
let cet = {
    abbr: "Europe/Paris",
    zone: "Central European Time",
    image: "images/paris.jpeg",
    id: "cet",
    states: "Denmark, France, Germany, Italy, Netherlands, Norway, Spain",
};
let eet = {
    abbr: "Europe/Helsinki",
    zone: "Eastern European Time",
    image: "images/helsinki.jpeg",
    id: "eet",
    states: "Finland, Latvia, Lithuania",
};
let most = {
    abbr: "Europe/Moscow",
    zone: "Moscow and Turkey Time",
    image: "images/moscow.jpeg",
    id: "most",
    states: "Moscow, Turkey",
};
let arr = [ist, most, eet, cet, wet, mt, pct, ct, et];
const options = {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
    },
};
let dom = [];
// function getTimeZoneDetails(e) {
//     fetch(endpoint + e.abbr)
//         .then((response) => response.json())
//         .then((response) => {
//             let zone = e.zone;
//             let day = response.dayOfWeek;
//             let time = response.time;
//             let date = response.date;
//             let dst = response.dstActive ? " - DST" : "";
//             let result =
//                 "<div class='card'><img src='" +
//                 e.image +
//                 "' width='100%' /><div class='card_content'><h2>" +
//                 time +
//                 "</h2><h3>" +
//                 zone +
//                 dst +
//                 "</h3><h4>" +
//                 e.states +
//                 "</h4></div></div>";
//             document.getElementById(e.id).innerHTML = result;
//         })
//         .catch((err) => console.error(err));
// }

function checkDst() {
    var currentDate = new Date().toJSON().slice(0, 10);
    var from = new Date("2023/03/2");
    var to = new Date("2023/11/05");
    var check = new Date(currentDate);

    return check >= from && check <= to;
}
let isDst;
if (checkDst()) {
    isDst = true;
} else {
    isDst = false;
}
function addHours(date, hours) {
    if (isDst) {
        date.setHours(date.getHours() - hours);
    } else {
        date.setHours(date.getHours());
    }
    return date;
}
function getTimeZoneDetails(offset, dst) {
    // const response = await fetch(endpoint + e.abbr, options);
    // const data = await response.json();
    // let zone = e.zone;
    // let day = data.dayOfWeek;
    // let time = data.time;
    // let date = data.date;
    // let dst = data.dstActive ? " - DST" : "";
    // let result = `<div class='card'><img src='${e.image}' width='100%' /><div class='card_content'><h2>${time}</h2><h3>${zone}${dst}</h3><h4>${e.states}</h4></div></div>`;
    // document.getElementById(e.id).innerHTML = result;
    // return data;
    let date = new Date();
    let nd = addHours(date, dst);
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: offset,
    };
    let value = nd.toLocaleTimeString("en-US", options);
    let returnString = [value.split(" at ")[0], value.split(" at ")[1], offset];
    return returnString;
}
for (let i = 0; i < arr.length; i++) {
    let dst = arr[i].dst ? arr[i].dst : 0;
    document.getElementById(arr[i]["id"]).innerHTML =
        "<div class='image' style='background:url(" +
        arr[i]["image"] +
        ") no-repeat; background-size:cover'><div class='card_content'><div class='zone'>" +
        arr[i]["zone"] +
        " - " +
        getTimeZoneDetails(arr[i]["abbr"], dst)[0] +
        "</div><div class='time'>" +
        getTimeZoneDetails(arr[i]["abbr"], dst)[1] +
        "</div><div class='states'>" +
        arr[i]["states"] +
        "</div></div></div></div>";
    // console.log(arr[i]["abbr"], getTimeZoneDetails(arr[i]["abbr"], dst)[1]);
}
function showPopUp(e) {
    document.getElementById(e).classList.remove("hide");
    document.getElementById("map").classList.remove("hide");
    document.getElementById("web").classList.add("overflow_hidden");
}
function hidePopUp() {
    document.getElementById("us").classList.add("hide");
    document.getElementById("eu").classList.add("hide");
    document.getElementById("map").classList.add("hide");
    document.getElementById("web").classList.remove("overflow_hidden");
}
// fetch(endpoint + cet.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));
// fetch(endpoint + eet.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));

// fetch(endpoint + most.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));
// fetch(endpoint + pct.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));

// fetch(endpoint + mt.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));
// fetch(endpoint + ct.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));

// fetch(endpoint + et.abbr)
//     .then((response) => response.json())
//     .then((response) => {
//         let zone = response.timeZone;
//         let day = response.dayOfWeek;
//         let time = response.time;
//         console.log(response);
//         let doc = document.getElementById("ist");
//     })
//     .catch((err) => console.error(err));
