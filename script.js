var h1 = document.querySelector("h1")

var grow = 0

setInterval(function(){
  if(grow<100){
    grow += Math.floor(Math.random()*15)
    h1.innerHTML = grow + "%"
  }else{
    grow = 100
    h1.innerHTML = grow + "%"
  }
}, Math.floor(Math.random()*200))



// git add .
// git commit -m"aapka message"
// git push -u origin main