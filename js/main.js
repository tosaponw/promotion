


function openArticle(evt, articleName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-centent-article");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-article");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(articleName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultArticle" and click on it
document.getElementById("defaultArticle").click();


let highlightSlide = new Swiper(".highlight-slide", {
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: false,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2
     
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2
    
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.5
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3
    },
     // when window width is >= 1300px
    1300: {
      slidesPerView: 3
      
    }
  }
 
});

// Initialize slider
highlightSlide.init()
console.log(highlightSlide)

let tabPromotion = new Swiper(".tab-promotion", {
  slidesPerView: 7,
  spaceBetween: 0,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.7,
      
     
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.3,
    
    
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4.3,
     
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 6.5
    },
    1200: {
      slidesPerView: 7
    },
     // when window width is >= 1300px
    1300: {
      slidesPerView: 7
      
    }
  }
});
// Initialize slider
tabPromotion.init()
console.log(tabPromotion)

let tabArticle = new Swiper(".tabs-article", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      
     
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
    
    
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
     
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3
    },
     // when window width is >= 1300px
    1300: {
      slidesPerView: 3
      
    }
  }
});
// Initialize slider
tabPromotion.init()
console.log(tabPromotion)

