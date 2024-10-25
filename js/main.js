
// product slider js coder here
$(document).ready(function(){
    $(".product_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

// scroll to top button js code here
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll function for both sticky header and scroll button
window.onscroll = () => {
    handleScroll();
    scrollFunction();
};

// Function to show/hide the scroll-to-top button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

// Function to handle sticky header
const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

const handleScroll = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};



// popup card section start
document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('productList').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('productList').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('productList')) {
        document.getElementById('productList').style.display = 'none';
    }
});

// popup card section end

// <!-- SwiperJS for image gallery slider -->



const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);