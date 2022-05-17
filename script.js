let searchForm = document.querySelector('.search-form');
console.log(searchForm)

var searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active")
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
})

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove("active");
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove("active");
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove("active");
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove("active");
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

//Function to show password onclick in create account form 
function showpassword(){
  
  var x = document.getElementById("password");
  var y = document.getElementById("cnfpassword");

  if(x.type == "password" && y.type == "password"){
    x.type = "text";
    y.type = "text";
  }else{
    x.type = "password"
    y.type = "password"
  }
}

//To show create form
var acc = document.getElementById("create_acc");
var createNow = document.getElementById("createAcc");
createNow.addEventListener("click", () =>{
acc.style.display = "block";
loginForm.classList.remove('active');
})

//To hide form onclick of close button
var closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click", () =>{
  acc.style.display = "none";
})

//To check whether user is already logged in or not
if (localStorage.getItem("grocoUsername") === null) {
  $("#grocoUserName").text("Welcome to the store")
 }else{
  var userName1 =  localStorage.getItem("grocoUsername");
  $("#grocoUserName").text(`Welcome to the store ${userName1}`) //string literal, temp string literal
 }

 //Function to make post request for login
function login(){

  const data = {
    email : document.getElementById('login_email').value,
    password: document.getElementById("login_password").value,
  }
  console.log(data)

const url = "https://groco-project.herokuapp.com/signin";  //Api or Endpoint

//SetTimeOut function is used to execute a function after certain time eg.here execute after 300 milisecinds 
setTimeout(() =>{
  $.post(url , data, function(data, status){ //callback function to collect response
    console.log(data);
    console.log(status);
    localStorage.setItem("grocoUsername" , data.userName)
    localStorage.setItem("grocoToken" , data.token)
    alert(`Logged in as ${data.userName}`)

  })
}, 300)

setTimeout(() => {
  if (localStorage.getItem("grocoUsername") != null) {
    var userName =  localStorage.getItem("grocoUsername");
     $("#grocoUserName").text(`Welcome to the store ${userName}`)
   }
},2000)
loginForm.classList.remove('active');

}

//Function to clear local storage and logout
function logout(){
  localStorage.removeItem("grocoUsername");
  localStorage.removeItem("grocoToken");
  $("#grocoUserName").text(`Welcome to the store`)
loginForm.classList.remove('active');
alert("Logged Out Succesfully")

}
