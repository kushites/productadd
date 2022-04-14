document.querySelector("#gete").addEventListener("click", getresult)
function getresult(){
    console.log("abbrakadabra")
let city=document.querySelector("#city").value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d76b4df6fc5120abe55f0a35c13382`)
.then(function(res){
    return res.json()
})
.then(function(res){
    
    showresult(res)
})
.catch(function(err){
    console.log(err)
})
}
function showresult(data){
    document.querySelector("#result").innerHTML=null
    document.querySelector(".more").innerHTML=null
    document.querySelector(".weekly").innerHTML=null
    let image= document.createElement("iframe")
    image.setAttribute("class","gmap_canvas")
    image.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let image1= document.createElement("img")
    image1.src="https://pngset.com/images/clouds-animated-cute-cartoon-cloud-silhouette-sunglasses-accessories-accessory-transparent-png-1526672.png"
    let city=document.createElement("h2")
    city.innerText=data.name
    let min=document.createElement("p")
    var omin=data.main.temp_min-273.15
    min.innerHTML=`<i class="fa-solid fa-snowflake"></i> ${omin.toFixed(2)}°C`
    let max=document.createElement("p")
    var omax=data.main.temp_max-273.15
   max.innerHTML=`<i class="fa-solid fa-sun"></i> ${omax.toFixed(2)}°C`
    let temp=document.createElement("p")
    var otemp=data.main.temp-273.15
    temp.innerHTML=`<i class="fa-solid fa-temperature-half"></i> ${otemp.toFixed(2)}°C`
    let humi=document.createElement("p")
    humi.innerHTML=`Humidity: ${data.main.humidity}`
    let sunrise=document.createElement("p")
    sunrise.innerHTML=`<img src="https://wallpaperaccess.com/full/428690.jpg" style=height:50px;width:50px> ${data.sys.sunrise}`
    let sunset=document.createElement("p")
    sunset.innerHTML=`<img src="https://visitkochijapan.com/image/rendering/banner/155/trim.2000/2000/1000" style=height:50px;width:50px> ${data.sys.sunset}`
    let wind=document.createElement("p")
    wind.innerHTML=`<img src="https://www.animatedimages.org/data/media/1657/animated-wind-image-0001.gif" style=height:50px;width:50px> ${data.wind.speed}`
    document.querySelector("#result").append(image,image1,city,min,max,temp,humi)
    document.querySelector(".more").append(sunrise,wind,sunset)
    getmore(data.coord.lat,data.coord.lon)
    console.log((data.coord.lat,data.coord.lon))
  c=0

}
function getmore(lat,lon){
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=weekly&appid=a3d76b4df6fc5120abe55f0a35c13382`)
.then(function(res){
return res.json()
})
.then(function(res){
    weekly(res)
    
})
}
var c;
function weekly(data){
    data.daily.map(function(el){
      let div=document.createElement("div")
        let image= document.createElement("img")
     if("Clear"==el.weather[0].main){
         image.src="https://i.pinimg.com/originals/36/ae/97/36ae97d84e54e35b1530b94f99121328.png"
     }
     if("Clouds"==el.weather[0].main){
         image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/1280px-Cartoon_cloud.svg.png"
     }
     if("Rain"==el.weather[0].main){
         image.src="https://www.clipartmax.com/png/full/309-3092531_free-rain-cloud-clip-art-raining-free-clipart-cloud-rain-animation-transparent.png"
     }
     let min=document.createElement("p")
  min.innerText=(el.temp.min-273.15).toFixed(2)
  let max=document.createElement("p")
  max.innerText=(el.temp.max-273.15).toFixed(2)
  let counter=document.createElement("p")
  counter.innerText=c++
div.append(counter,image,max,min)
       document.querySelector(".weekly").append(div)
    })
}