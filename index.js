let btn = document.getElementById("myBtn");
btn.addEventListener("click", function(){
  alert("Button was clicked!");
});

let allP = document.getElementsByTagName("p");
for(let i = 0; i < allP.length; i++) {
  allP[i].addEventListener("mouseover", function(){
    this.style.color = "#4CAF50";
  });
  allP[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
}
