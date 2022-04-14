document.querySelector("#submit").addEventListener("click", submit)
let movies;
function submit(){
   movies=document.querySelector("#search").value
   fetch(`http://www.omdbapi.com/?apikey=f925545c&t=${movies}`)
   .then(response=>response.json())
   .then(data => {
        
        if(data.Response=="False"){
          errorbatao()
        }
        else{
          result(data)
        }
   })
   .catch((error) => {
console.log(error)    

   
   });
}
function result(dat){
  document.querySelector("#searchresult").innerHTML=null
  let div=document.createElement("div")
  var img=document.createElement("img")
  img.src=dat.Poster
  let h3=document.createElement("h3")
  h3.innerText=dat.Title
  let p=document.createElement("h4")
  p.innerText=`IMDB: ${dat.imdbRating}`
  let p1=document.createElement("h4")
  p1.innerText=dat.Year
  let r=document.createElement("h4")
  r.innerText="RECOMMENDED"
  if(dat.imdbRating>8.5){
    div.append(img,h3,p,p1,r)
  }
  else{
    div.append(img,h3,p,p1)
  }
  
  document.querySelector("#searchresult").append(div)
}

function errorbatao(){
  document.querySelector("#searchresult").innerHTML=null
  let image= document.createElement("img")
  image.src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
  document.querySelector("#searchresult").append(image)
}

