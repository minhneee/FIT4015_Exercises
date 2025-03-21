// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
}

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});

//Owl Carousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
$(document).ready(function() {
    $('#buy-btn').click(function() {
    alert('Đã thêm sản phẩm vào giỏ hàng!');
    });
});
const toastTriggers = document.querySelectorAll('.show-toast-btn');


const loginForm = document.getElementById('loginForm');
        const errorDiv = document.getElementById('error');
        const adminUsername = "admin";
        const adminPassword = "123456";

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === adminUsername && password === adminPassword) {
                window.location.href = "admin.html";
            } else {
                errorDiv.textContent = "Invalid username or password!";
            }
        });