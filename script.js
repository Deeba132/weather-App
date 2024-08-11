document.getElementById("get weather").addEventListener("click",()=>{
    const Location=document.getElementById("location").value;
    apikey="989b6c5979714469a98102707241108";
    const apiURl=`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${Location}&aqi=no`
 fetch(apiURl)
   .then(response=>response.json())
   .then(data=>{
    const weatherinfo=document.getElementById("weather-info");
    weatherinfo.innerHTML=`
    <h2>Weather in ${data.location.name},${data.location.country}</h2>
    <p>Temparature: ${data.current.temp_c}°C</p>
    <p>Condition: ${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" alt="condition-icon"</img>`;   
})
    .catch(error=>{
        console.error("Error fetching weather data", error)
    })
});