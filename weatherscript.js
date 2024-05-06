'use strict';

let key = "9cbedb070bb90949b95f1cfcd4b1932a";

let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let inputvalue = document.querySelector(".top1");
let serbtn = document.querySelector(".top2");

var audio1 = new Audio("rain.mp3");
var audio2 = new Audio("sparrow.mp3");
var audio3 = new Audio("thunder.mp3");
var audio4 = new Audio("drizzle.mp3");
var audio5 = new Audio("mist.mp3");

async function weather(city)
{
    const response = await fetch(url + city +  `&appid=${key}`);
    var data = await response.json();
    console.log(data);
    document.querySelector("#spa--1").innerHTML = Math.round(data.main.temp )+` °c`;
    document.querySelector("#spa--2").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+` %`;
    document.querySelector(".wind").innerHTML = data.wind.speed+` km/hr`;
    if(data.weather[0].main == "Clouds")
    {
        audio3.play();
        document.querySelector(".ima--1").src = "clouds.png";
    }

    else if(data.weather[0].main === "Clear")
    {

        audio2.play();

        document.querySelector(".ima--1").src = "clear.png";
    }
    else if(data.weather[0].main === "Drizzle")
    {

        audio4.play();
        document.querySelector(".ima--1").src = "drizzle.png";
    }
    else if(data.weather[0].main === "Mist")
    {

        audio5.play();
        document.querySelector(".ima--1").src = "Mist.png";
    }
    else if(data.weather[0].main === "Haze")
    {

        audio5.play();
        document.querySelector(".ima--1").src = "Mist.png";
    }
    else
    {
        audio1.play();

        document.querySelector(".ima--1").src = "rain.png";
    }

}
serbtn.addEventListener("click", ()=>{
    weather(inputvalue.value);
})
