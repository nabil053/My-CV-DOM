function edu_1_action(){
  var edu_1 = document.getElementById("edu-1");
  var edu_1_btn = document.getElementById("edu-1-btn");

  if (edu_1.style.display === "block") {
    edu_1.style.display = "none";
    edu_1_btn.innerText = "+";
  } else {
    edu_1.style.display = "block";
    edu_1_btn.innerText = "-";
  }
}

function edu_2_action(){
  var edu_2 = document.getElementById("edu-2");
  var edu_2_btn = document.getElementById("edu-2-btn");

  if (edu_2.style.display === "block") {
    edu_2.style.display = "none";
    edu_2_btn.innerText = "+";
  }
  else {
    edu_2.style.display = "block";
    edu_2_btn.innerText = "-";
  }
}

function edu_3_action(){
  var edu_3 = document.getElementById("edu-3");
  var edu_3_btn = document.getElementById("edu-3-btn");

  if (edu_3.style.display === "block") {
    edu_3.style.display = "none";
    edu_3_btn.innerText = "+";
  } else {
    edu_3.style.display = "block";
    edu_3_btn.innerText = "-";
  }
}

function skill_1_action(){
  var skill_1 = document.getElementById("skill-1");
  var skill_1_btn = document.getElementById("skill-1-btn");

  if (skill_1.style.display === "block") {
    skill_1.style.display = "none";
    skill_1_btn.innerText = "+";
  } else {
    skill_1.style.display = "block";
    skill_1_btn.innerText = "-";
  }
}

function skill_2_action(){
  var skill_2 = document.getElementById("skill-2");
  var skill_2_btn = document.getElementById("skill-2-btn");

  if (skill_2.style.display === "block") {
    skill_2.style.display = "none";
    skill_2_btn.innerText = "+";
  } else {
    skill_2.style.display = "block";
    skill_2_btn.innerText = "-";
  }
}

function skill_3_action(){
  var skill_3 = document.getElementById("skill-3");
  var skill_3_btn = document.getElementById("skill-3-btn");

  if (skill_3.style.display === "block") {
    skill_3.style.display = "none";
    skill_3_btn.innerText = "+";
  } else {
    skill_3.style.display = "block";
    skill_3_btn.innerText = "-";
  }
}

function skill_4_action(){
  var skill_4 = document.getElementById("skill-4");
  var skill_4_btn = document.getElementById("skill-4-btn");

  if (skill_4.style.display === "block") {
    skill_4.style.display = "none";
    skill_4_btn.innerText = "+";
  } else {
    skill_4.style.display = "block";
    skill_4_btn.innerText = "-";
  }
}

function proj_1_action(){
  var proj_1 = document.getElementById("proj-1");
  var proj_1_btn = document.getElementById("proj-1-btn");

  if (proj_1.style.display === "block") {
    proj_1.style.display = "none";
    proj_1_btn.innerText = "+";
  } else {
    proj_1.style.display = "block";
    proj_1_btn.innerText = "-";
  }
}

function proj_2_action(){
  var proj_2 = document.getElementById("proj-2");
  var proj_2_btn = document.getElementById("proj-2-btn");

  if (proj_2.style.display === "block") {
    proj_2.style.display = "none";
    proj_2_btn.innerText = "+";
  } else {
    proj_2.style.display = "block";
    proj_2_btn.innerText = "-";
  }
}

function proj_3_action(){
  var proj_3 = document.getElementById("proj-3");
  var proj_3_btn = document.getElementById("proj-3-btn");

  if (proj_3.style.display === "block") {
    proj_3.style.display = "none";
    proj_3_btn.innerText = "+";
  } else {
    proj_3.style.display = "block";
    proj_3_btn.innerText = "-";
  }
}

function proj_4_action(){
  var proj_4 = document.getElementById("proj-4");
  var proj_4_btn = document.getElementById("proj-4-btn");

  if (proj_4.style.display === "block") {
    proj_4.style.display = "none";
    proj_4_btn.innerText = "+";
  } else {
    proj_4.style.display = "block";
    proj_4_btn.innerText = "-";
  }
}

function proj_5_action(){
  var proj_5 = document.getElementById("proj-5");
  var proj_5_btn = document.getElementById("proj-5-btn");

  if (proj_5.style.display === "block") {
    proj_5.style.display = "none";
    proj_5_btn.innerText = "+";
  } else {
    proj_5.style.display = "block";
    proj_5_btn.innerText = "-";
  }
}

function weatherDisplay(){
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=2be0f5da1ad4069a62950fce74581c5c&units=metric';

  axios.get(API_URL).then(function(response){
    temp = response.data.main.temp;
    feels_like = response.data.main.feels_like;
    humidity = response.data.main.humidity;
    wind = response.data.wind.speed;

    document.getElementById("temp").innerHTML = "<strong class=\"text-lg\">Temperature: </strong>" + temp + "°C";
    document.getElementById("feels_like").innerHTML = "<strong class=\"text-lg\">Feels like: </strong>" + feels_like + "°C";
    document.getElementById("humidity").innerHTML = "<strong class=\"text-lg\">Humidity: </strong>" + humidity + "%";
    document.getElementById("wind").innerHTML = "<strong class=\"text-lg\">Wind: </strong>" + temp + "km/h";

    document.getElementById("WeatherInfo").style.display = "block";

    setTimeout(function(){
      document.getElementById("WeatherInfo").style.display = "none";
    }, 5000);
    console.log(response.data);
  }).catch(function(error){
    console.log(error);
  });
}
