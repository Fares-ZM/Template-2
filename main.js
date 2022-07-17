
//Start header
let more = document.querySelector(".more");
let sideMenue = document.querySelector(".sec-nav");
let burgerIcon = document.querySelector(".bars");
let items = document.querySelectorAll("header .main-nav li:not(:first-child)")


more.addEventListener("click", function(){
   if (sideMenue.classList.contains("hidden")){
      sideMenue.classList.remove("hidden");
      sideMenue.classList.add("display");
   }else{
      sideMenue.classList.add("hidden");
      sideMenue.classList.remove("display");
   }
})

burgerIcon.onclick = function(){
   items.forEach(e => e.classList.toggle("display"));
}

//end header

//start landing
let images = [
   {
      img: "images/concert-1.jpg",
      head: "Chicago",
      par: "Thank you, Chicago - A night we won't forget"
   },
   {
      img: "images/concert-2.jpg",
      head: "Los Angeles",
      par: "We had the best time playing at Venice Beach!"
   },
   {
      img: "images/concert-3.jpg",
      head: "New York",
      par: "The atmosphere in New York is lorem ipsum."
   }
];

   
let currentItem = 0;
let img = document.querySelector(".landing img");
let head = document.querySelector(".landing .text h3");
let par = document.querySelector(".landing .text p");

let imageSlider = setInterval(() => {
   img.setAttribute("src", images[currentItem].img);
   head.textContent = images[currentItem].head;
   par.textContent = images[currentItem].par;
   currentItem++;

   if (currentItem === images.length){
      currentItem = 0;
   }
   
}, 5000);


//end landing

/*start tour*/
let buttons = document.querySelectorAll(".tour .cities .city .text button");
let ticket = document.querySelector(".tour .container .ticket");
let closeButton = document.querySelector(".tour .container .ticket form button");
buttons.forEach(button => {
   button.addEventListener("click", function(){
      if (ticket.hasAttribute("hidden")){
         ticket.removeAttribute("hidden");
      }
   })
})

closeButton.onclick = function(){
   ticket.setAttribute("hidden", '');
}

/*end tour*/




