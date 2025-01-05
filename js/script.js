const html = document.querySelector("html");
html.setAttribute("data-bs-theme", "dark");

document.addEventListener("DOMContentLoaded", () => {

    // Inicializar AOS

   
        AOS.init();




// ILUSTRACIÓN COPA CAMBIO IMAGEN
var copa = $("#coctel-img");

copa.hover(
    function() {
    $(this).attr("src", "img/HOME/coctel2.png");
    },
    function() {
        $(this).attr("src", "img/HOME/coctel1.png");
    }
);




        
    // --- Create LightBox
    const galleryGrid = document.querySelector(".gallery-grid");
    const links = galleryGrid.querySelectorAll("a");
    const imgs = galleryGrid.querySelectorAll("img");
    const lightboxModal = document.getElementById("lightbox-modal");
    const bsModal = new bootstrap.Modal(lightboxModal);
    const modalBody = lightboxModal.querySelector(".lightbox-content");

    function createCaption(caption) {
        return `<div class="carousel-caption d-none d-md-block">
        <h4 class="m-0">${caption}</h4>
      </div>`;
    }

    function createIndicators(img) {
        let markup = "",
            i,
            len;

        const countSlides = links.length;
        const parentCol = img.closest(".col");
        const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

        for (i = 0, len = countSlides; i < len; i++) {
            markup += `
        <button type="button" data-bs-target="#lightboxCarousel"
          data-bs-slide-to="${i}"
          ${i === curIndex ? 'class="active" aria-current="true"' : ""}
          aria-label="Slide ${i + 1}">
        </button>`;
        }

        return markup;
    }

    function createSlides(img) {
        let markup = "";
        const currentImgSrc = img.closest(".gallery-item").getAttribute("href");

        for (const img of imgs) {
            const imgSrc = img.closest(".gallery-item").getAttribute("href");
            const imgAlt = img.getAttribute("alt");

            markup += `
        <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
          <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
          ${imgAlt ? createCaption(imgAlt) : ""}
        </div>`;
        }

        return markup;
    }

    function createCarousel(img) {
        const markup = `
      <!-- Lightbox Carousel -->
      <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
        <!-- Indicators/dots -->
        <div class="carousel-indicators">
          ${createIndicators(img)}
        </div>
        <!-- Wrapper for Slides -->
        <div class="carousel-inner justify-content-center mx-auto">
          ${createSlides(img)}
        </div>
        <!-- Controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      `;

        modalBody.innerHTML = markup;
    }

    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const currentImg = link.querySelector("img");
            const lightboxCarousel = document.getElementById("lightboxCarousel");

            if (lightboxCarousel) {
                const parentCol = link.closest(".col");
                const index = [...parentCol.parentElement.children].indexOf(parentCol);

                const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
                bsCarousel.to(index);
            } else {
                createCarousel(currentImg);
            }

            bsModal.show();
        });
    }

    // --- Support Fullscreen
    const fsEnlarge = document.querySelector(".btn-fullscreen-enlarge");
    const fsExit = document.querySelector(".btn-fullscreen-exit");

    function enterFS() {
        lightboxModal
            .requestFullscreen()
            .then({})
            .catch((err) => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        fsEnlarge.classList.toggle("d-none");
        fsExit.classList.toggle("d-none");
    }

    function exitFS() {
        document.exitFullscreen();
        fsExit.classList.toggle("d-none");
        fsEnlarge.classList.toggle("d-none");
    }

    fsEnlarge.addEventListener("click", (e) => {
        e.preventDefault();
        enterFS();
    });

    fsExit.addEventListener("click", (e) => {
        e.preventDefault();
        exitFS();
    });
});

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUpContainer = document.querySelector('.sign-up-container');
const signInContainer = document.querySelector('.sign-in-container');

if (signInButton)  {
signUpButton.addEventListener('click'), () => {
    const signInContainer = document.querySelector('#signInContainer');
    const signUnContainer = document.querySelector('#signUnContainer');


    if (signInContainer && signUpContainer) {
        signInContainer.style.display ='none'; 
        signUnContainer.style.display = 'flex';
    }
}};


if (signInButton) {
    signUpButton.addEventListener('click', () => {
        const signInContainer = document.querySelector('#signIpContainer');
        const signUpContainer = document.querySelector('#signUpContainer');
    })
}

signInButton.addEventListener('click', () => {
    signInContainer.style.display = 'flex';
    signUpContainer.style.display = 'none';
});

























































const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}