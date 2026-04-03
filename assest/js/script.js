document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('main-navbar');
    const contactSection = document.getElementById('contact-section');

    // Create a placeholder to prevent content jump
    const placeholder = document.createElement('div');
    placeholder.style.display = 'none';
    navbar.parentNode.insertBefore(placeholder, navbar.nextSibling);

    // Scroll event to fix navbar after contact section
    window.addEventListener('scroll', () => {
        if (window.scrollY >= contactSection.offsetHeight) {
            if (!navbar.classList.contains('fixed')) {
                navbar.classList.add('fixed');
                placeholder.style.height = navbar.offsetHeight + 'px';
                placeholder.style.display = 'block';
            }
        } else {
            navbar.classList.remove('fixed');
            placeholder.style.display = 'none';
        }
    });

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            const navbarHeight = navbar.offsetHeight;

            window.scrollTo({
                top: target.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });

});
const checkin = flatpickr("#checkin", {
  altInput: true,
  altInputClass: "form-control custom-form",
  altFormat: "d M Y",
  dateFormat: "Y-m-d",
  minDate: "today",
  allowInput: true,
  disableMobile: true, //  for mobile

  onChange: function(selectedDates) {
    if (selectedDates.length) {
      checkout.set("minDate", selectedDates[0]);
    }
  },
  onReady: function(_, __, instance) {
    if (!instance.selectedDates.length) {
      instance.altInput.setAttribute("placeholder", "Check In");
    }
  }
});

const checkout = flatpickr("#checkout", {
  altInput: true,
  altInputClass: "form-control custom-form",
  altFormat: "d M Y",
  dateFormat: "Y-m-d",
  allowInput: true,
  disableMobile: true, // for mobile

  onReady: function(_, __, instance) {
    if (!instance.selectedDates.length) {
      instance.altInput.setAttribute("placeholder", "Check Out");
    }
  }
});
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  autoplay:{
    delay:4000
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  breakpoints:{
    0:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
    992:{
      slidesPerView:3
    }
  }
});


// changing content when clicked

const buttons = document.querySelectorAll(".location-btn");

const addressEl = document.getElementById("address");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");

const data = {
    abraka: {
        address: "Goldstep Hotels at Benin junction, obiaruko road, Abraka, Delta State.",
        email: "contact@goldstephotels.com",
        phone: "+234 906 236 1374"
    },
    asaba: {
        address: "Black arrow street,Jesse town, Jesse, Delta State.",
        email: "contact@goldstephotels.com",
        phone: "0916 516 6859"
    },
    sapele: {
        address: "4, Along Okoloba Road, Off Effurun/ Sapele Road, Opposite NEPA Station, Effurun.",
        email: "contact@goldstephotels.com",
        phone: "0806 632 7610"
    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // active state
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const location = button.dataset.location;

        // FADE OUT
        [addressEl, emailEl, phoneEl].forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(10px)";
        });

        setTimeout(() => {
            // CHANGE CONTENT
            addressEl.textContent = data[location].address;
            emailEl.textContent = data[location].email;
            phoneEl.textContent = data[location].phone;

            // FADE IN
            [addressEl, emailEl, phoneEl].forEach(el => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            });

        }, 300); // must match CSS transition
    });
});

// about code

const navbar = document.getElementById("main-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// event-form script
flatpickr("#datePicker", {
  dateFormat: "d/m/Y"
});

const picker = flatpickr("#datePicker", {
  dateFormat: "d/m/Y"
});

document.querySelector(".date-box i").addEventListener("click", () => {
  picker.open();
});