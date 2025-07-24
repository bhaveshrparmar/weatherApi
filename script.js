async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "d7131483f57583bee4cf69d1744aaa5f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 
  

  try {
    const res = await fetch(url);
    
    console.log(res);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    console.log(res);
    console.log(data);
    
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("description").textContent =
      data.weather[0].description;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
   
    
    document.getElementById("weatherCard").classList.remove("hidden");
  } catch (error) {
    alert("wrong" + error.message);
    document.getElementById("weatherCard").classList.add("hidden");
  }
}