function clicked1() {
  var1 = document.getElementsByName("test")[0].checked
  var2 = document.getElementsByName("test")[1].checked

  document.getElementById("showit1").textContent = var1
  document.getElementById("showit2").textContent = var2
}

function showit(var1){
document.getElementById("divvy1").style.display='none'
document.getElementById("divvy2").style.display='none'
document.getElementById("divvy3").style.display='none'
document.getElementById("divvy4").style.display='none'
document.getElementById(var1).style.display='block'
}

function changeme() {

var element = document.getElementById("div1")
  
  if (element.style.fontSize=== "100px"){
  element.style.fontSize= "90px";
  element.innerText = "DJ"
  }
  else if (element.style.fontSize=== "90px"){
  element.style.fontSize= "80px";
  }
  else if (element.style.fontSize=== "80px"){
  element.style.fontSize= "70px";
  }
  else if (element.style.fontSize=== "70px"){
  element.style.fontSize= "60px";
  }
  else if (element.style.fontSize=== "60px"){
  element.style.fontSize= "50px"
  }
  else if (element.style.fontSize=== "50px"){
  element.style.fontSize= "40px"
  }
  else if (element.style.fontSize=== "40px"){
  element.style.fontSize= "30px"}
  else if (element.style.fontSize=== "30px"){
  element.style.fontSize= "20px"}
  else if (element.style.fontSize=== "20px"){
  element.style.fontSize= "10px"
  }
  else if (element.style.fontSize=== "10px"){
  element.style.fontSize= "100px"
  }
  }
