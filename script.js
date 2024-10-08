

//===BANNER---SWIPER---START===//

var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1500,
  effect: 'fade',
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      // pauseOnMouseEnter: true,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
  // dynamicBullets: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

});


//===BANNER---SWIPER---END===//

var swiper = new Swiper(".mySwiper2", {
  loop: true,
  speed: 1500,
  effect: 'fade',
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});


gsap.to(" .slider", {
  transform: "translateX(-405%)",
  duration: 5,
  scrollTrigger: {
      trigger: ".pin_container",
      scroller: "body",
      // markers: true,
      start: "top -3%",
      end: "top -405%",
      scrub: 2,
      pin: true,
  }
})

gsap.to('.overlay1',{
  transform: "translateX(-100%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay1",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.overlay2',{
  transform: "translateX(100%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay2",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.overlay3',{
  transform: "translateX(-100%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay3",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.overlay3a',{
  transform: "translateY(100%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay3a",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.overlay4',{
  transform: "translateY(-100%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay4",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.overlay4a',{
  transform: "translateX(100%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay4a",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.courtyard_popup',{
  // y: -100,
  opacity: 1,
  duration: 1,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".courtyard_popup",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
    // markers: true,
  }
})

gsap.to('.overlay5',{
  transform: "translateX(100%)",  
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay5",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
    // markers: true,
  }
})

function NavarAnimation() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar ul li a');
    const logo = document.querySelector('.top_logo');

    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "var(--brown)";
      navbar.style.padding = "0";

      logo.style.width = "3%";

      // links.forEach(link => {
      //   link.style.color = "var(--white)";
      // });

      logo.style.width = "5%";
      logo.style.src = "./images/logo.png";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.padding = ".5rem 0";

      logo.style.width = "7%";

      // links.forEach(link => {
      //   link.style.color = "var(--white)";
      // });

      logo.style.width = "7%";
      logo.style.src = "./images/intro_img/intro_logo.jpg";
    }
  });

  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
  });
}

document.querySelectorAll('.link_hover').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.toggler').classList.remove('active');
  });
});



NavarAnimation();


// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     // loop: true,
//     centeredSlides: true,
//     speed: 1500,
//     grabCursor: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
    
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 20
//     }
//   }
//   });


  



$(".carousel1").flickity({
    wrapAround: true,
    groupCells: 1,
    autoPlay: 3000,
    prevNextButtons: true,
    selectedAttraction: 0.01,
    friction: 0.15,
})



$.fn.responsiveTabs = function() {

  return this.each(function() {
    var el = $(this),
        tabs = el.find('dt'),
        content = el.find('dd'),
        placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

    tabs.on('click', function() {
      var tab = $(this);

      tabs.not(tab).removeClass('active');
      tab.addClass('active');

      placeholder.html( tab.next().html() );
    });

    tabs.filter(':first').trigger('click');
  });

}


$('.responsive-tabs').responsiveTabs();
 

// ----ACCORDION---//

// $(document).ready(function(){
//   $(".accordion1").on("click", ".heading", function() {

//   $(this).toggleClass("active").next().slideToggle();

//   $(".contents").not($(this).next()).slideUp(300);
               
//   $(this).siblings().removeClass("active");
//   });
//  });

 document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-item-header1');

  accordionHeaders.forEach(header => {
    const accordionItem = header.parentElement;
    const accordionBody = accordionItem.querySelector('.accordion-item-body1');
    const icon = header.querySelector('.icon');

    // Hide all accordion bodies by default
    accordionBody.style.maxHeight = 0;

    header.addEventListener('click', function() {
      // Close all other accordion items
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          const otherItem = otherHeader.parentElement;
          const otherBody = otherItem.querySelector('.accordion-item-body1');
          const otherIcon = otherHeader.querySelector('.icon');

          otherItem.classList.remove('open');
          otherBody.style.maxHeight = 0;
          otherIcon.classList.remove('minus');
          otherIcon.classList.add('plus');
        }
      });

      // Toggle the current accordion item
      accordionItem.classList.toggle('open');
      icon.classList.toggle('minus');
      icon.classList.toggle('plus');

      if (accordionItem.classList.contains('open')) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
      } else {
        accordionBody.style.maxHeight = 0;
      }
    });
  });
});

function fancyBox(){
  Fancybox.bind('[data-fancybox="gallery"]', {
    groupAll : true,
    animated: true,
    showClass: fancybox-fadeIn,
    hideClass: false,
     caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
    Image: {
      Panzoom: {
        zoomFriction: 0.7,
        maxScale: function () {
          return 5;
        },
      },
    },
    Thumbs: {
      Carousel: {
        Sync: {
          friction: 0.9,
        },
      },
    },
  
    click: false,
  
    dragToClose: true,
  
    Toolbar: {
      display: [{ id: "counter", position: "center" },
         "close"],
    },
  })
}
fancyBox()