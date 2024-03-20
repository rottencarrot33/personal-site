

// Navbar Toggle change

let toggleButton = $('.toggle-button');
let navbarLinks = $('.navbar-links');

toggleButton.on('click', function () {
  $(this).toggleClass('active');
  navbarLinks.toggleClass('active');
});

// Close the dropdown when the user scrolls the page
$(window).on('scroll', function () {
  navbarLinks.removeClass('active');
  toggleButton.removeClass('active');
});




// Animations

function reveal() {
  let reveals = document.querySelectorAll(".animationEffect,.navbarToggler");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Call the reveal function on page load
reveal();

// Trigger the reveal function on scroll
window.addEventListener("scroll", reveal);


//Header img animation on hover

const targetElement = $('.head-img');

targetElement.on('mouseover', function () {
  targetElement.on('mousemove', parallax);
});

targetElement.on('mouseout', function () {
  targetElement.off('mousemove', parallax);
});

function parallax(e) {
  $('.jiggling').each(function () {
    const speed = $(this).data('speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    $(this).css('transform', `translateX(${x}px) translateY(${y}px)`);
  });
}



// Theme switch



const darkButtonSmscrn = document.getElementById('dark-smscrn');
const lightButtonSmscrn = document.getElementById('light-smscrn');
const darkButtonLgscrn = document.getElementById('dark-lgscrn');
const lightButtonLgscrn = document.getElementById('light-lgscrn');
const body = document.body;


darkButtonSmscrn.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
  document.querySelector('.light-mode').style.display = "none";
  document.querySelector('.dark-mode').style.display = "block";
};

lightButtonSmscrn.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
  document.querySelector('.dark-mode').style.display = "none";
  document.querySelector('.light-mode').style.display = "block";
};

darkButtonLgscrn.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
  document.querySelector('.light-mode').style.display = "none";
  document.querySelector('.dark-mode').style.display = "block";
};

lightButtonLgscrn.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
  document.querySelector('.dark-mode').style.display = "none";
  document.querySelector('.light-mode').style.display = "block";
};

// set the initial display of the images based on the active mode
if (body.classList.contains('dark')) {
  document.querySelector('.light-mode').style.display = "none";
  document.querySelector('.dark-mode').style.display = "block";
} else {
  document.querySelector('.dark-mode').style.display = "none";
  document.querySelector('.light-mode').style.display = "block";
}





