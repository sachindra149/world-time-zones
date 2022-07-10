let endpoint = "https://timeapi.io/api/Time/current/zone?timeZone=";
// Time Zones
let ist = {
    abbr: "Asia/Calcutta",
    zone: "Indian Standard time",
    image: "images/india.jpeg",
    id: "ist",
};
let pct = {
    abbr: "America/Los_Angeles",
    zone: "Pacific Time",
    image: "images/washington.jpeg",
    id: "pct",
    states: "California",
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
    states: "Arkansas, Illinois, Iowa, Missouri, North Dakota, Oklahoma, Tennessee, Texas",
};
let et = {
    abbr: "America/Virgin",
    zone: "Eastern Time",
    image: "images/new-york.jpeg",
    id: "et",
    states: "Pennsylvania, Connecticut, Florida, Georgia, Indiana, Maryland, Massachusetts, Michigan, New Jersey, New York, North Carolina, Pennsylvania, Vermont, Washington DC",
};
let wet = {
    abbr: "Europe/London",
    zone: "Western European Time",
    image: "images/london.webp",
    id: "wet",
    states: "",
};
let cet = {
    abbr: "Europe/Paris",
    zone: "Central European Time",
    image: "images/paris.jpeg",
    id: "cet",
    states: "Belgium, Denmark, France, Germany, Hungary, Italy, Netherlands, Norway, Poland, Spain, Switzerland",
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
    states: "",
};
let arr = [most, eet, cet, wet, mt, pct, ct, et];
const options = {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
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
async function getTimeZoneDetails(e) {
    const response = await fetch(endpoint + e.abbr);
    const data = await response.json();
    let zone = e.zone;
    let day = data.dayOfWeek;
    let time = data.time;
    let date = data.date;
    let dst = data.dstActive ? " - DST" : "";
    let result =
        "<div class='card'><img src='" +
        e.image +
        "' width='100%' /><div class='card_content'><h2>" +
        time +
        "</h2><h3>" +
        zone +
        dst +
        "</h3><h4>" +
        e.states +
        "</h4></div></div>";
    document.getElementById(e.id).innerHTML = result;
    return data;
}
for (let i = 0; i < arr.length; i++) {
    getTimeZoneDetails(arr[i]);
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
