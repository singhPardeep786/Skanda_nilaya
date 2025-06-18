

//====TO---TOP---BUTTON---START====//

const topBtn = document.querySelector('.to_top_btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    topBtn.style.visibility = "visible";
    topBtn.style.transform = "translateY(0)";
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.visibility = "hidden";
    topBtn.style.transform = "translateY(-100%)";
    topBtn.style.opacity = "0";
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//====TO---TOP---BUTTON---END====//

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


if(window.innerWidth > 992){
  gsap.to(".slider", {
    transform: "translateX(-400%)",
    duration: 5,
    scrollTrigger: {
        trigger: ".pin_container",
        scroller: "body",
        // markers: true,
        start: "top -3%",
        end: "top -400%",
        scrub: 2,
        pin: true,
    }
  })
}

const overlay1 = document.querySelectorAll('.overlay1')
const overlay3 = document.querySelectorAll('.overlay3')
overlay1.forEach((overlay)=>{
  gsap.to(overlay,{
    transform: "translateX(-100%)",
    duration: 1,
    scrollTrigger: {
      trigger: overlay,
      scroller: "body",
      start: "top 60%",
      end: "top 40%",
      scrub: 2,
      // markers: true,
    }
  })
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

overlay3.forEach((thirdOverlay)=>{
  gsap.to(thirdOverlay,{
    transform: "translateX(-100%)",
    duration: 1,
    scrollTrigger: {
      trigger: thirdOverlay,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
      // markers: true,
    }
  })
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
  duration: 2,
  stagger: 0.5,
  ease: "power2.ease",
  scrollTrigger: {
    trigger: ".courtyard_popup",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    // markers: true,
  }
})

// gsap.to('.overlay5',{
//   transform: "translateX(100%)",  
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".overlay5",
//     scroller: "body",
//     start: "top 80%",
//     end: "top 60%",
//     scrub: 2,
//     // markers: true,
//   }
// })



function NavarAnimation() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.top_logo');
    const isScrolled = window.scrollY > 50;
    // navbar.style.backgroundColor = isScrolled ? "var(--maincolor2)" : "var(--maincolor4)";
    navbar.style.backdropFilter = isScrolled ? "blur(10px)" : "blur(0)";
    
    if (window.innerWidth > 992) {
      // navbar.style.padding = isScrolled ? "1rem 0" : "1.5rem 0";
      // logo.style.width = isScrolled ? "7%" : "10%";
    } else {
      // navbar.style.padding = isScrolled ? ".5rem 0" : "1rem 0";
      // logo.style.width = isScrolled ? "3%" : "5%";
    }
    // document.querySelectorAll('#logo').forEach(logo => {
    //   window.addEventListener('scroll', function() {
    //     if (window.scrollY > 100) {
    //       logo.src = 'images/logo_new2.png';
    //     } else {
    //       logo.src = 'images/logo.png';
    //     }
    //   });
    // });
  });

  var links = document.querySelectorAll('.navbar ul li');


  links.forEach(link => {
    // link.style.color = isScrolled ? "var(--creamclr)" : "var(--black)";
    gsap.fromTo(link, {
      opacity: 0,
      y: 20,
      ease: "power2.out"
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    })
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

//=======FORM---RESET---ONSUBMIT=========//

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   form.reset();
// });

//=======FORM---RESET---ONSUBMIT=========//


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


function textScrollAnimation(){
  document.addEventListener('DOMContentLoaded', function() {
    const texts = ['Om Purnamadah Purnamidam', 'Purnatpurnamudacyate', 'Purnasya Purnamadaya', 'Purnamevavasisyate'];
    const lineIds = ['line1', 'line2', 'line3', 'line4'];
    
    // Create text fill elements if they don't exist
    lineIds.forEach((lineId, index) => {
      const lineElement = document.getElementById(lineId);
      if (lineElement && !document.getElementById(`fill${index + 1}`)) {
        const fillElement = document.createElement('div');
        fillElement.id = `fill${index + 1}`;
        fillElement.className = 'text-fill';
        fillElement.textContent = texts[index];
        lineElement.appendChild(fillElement);
      }
    });
  
    // Create timeline for smoother animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sticky-highlight',
        start: 'top 55%',
        end: 'top 20%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          lineIds.forEach((lineId, index) => {
            const lineProgress = Math.max(0, Math.min(1, (progress - (index * 0.25)) / 0.5));
            const fillElement = document.getElementById(`fill${index + 1}`);
            
            if (fillElement) {
              gsap.to(fillElement, {
                width: `${lineProgress * 100}%`,
                duration: 1.5,
                ease: "none"
              });
            }
          });
        }
      }
    });
  });
}
textScrollAnimation()  


function profoundBoxesAnimation(){
  const boxes = document.querySelectorAll('.profound_box');
  const rightBox = document.querySelectorAll('.profound_right_content_box');
  boxes.forEach((box, index) => {
    if(window.innerWidth > 820){
      gsap.fromTo(box, {
        x: index === 0 ? -300 : 300,
        y: 0
      }, {
        x: 0,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".profound_left_content",
          start: "top 70%",
          end: "top 20%",
          scrub: 2
        }
      });
    } else {
      // Mobile animation
      gsap.fromTo(box, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "top 70%",
          scrub: 1
        }
      });
    }
  });

  if(window.innerWidth > 920){
    gsap.fromTo(rightBox, {
      y: -300,
    }, {
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        scroller: "body",
        trigger: ".profound_right_content",
        start: "top 70%",
        end: "top 20%",
        scrub: 2,
      }
    })
  } else {
    gsap.fromTo(rightBox, {
      y: -200,
    }, {
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        scroller: "body",
        trigger: ".profound_right_content",
        start: "top 70%",
        end: "top 20%",
        scrub: 2,
      }
    })
  }
}
profoundBoxesAnimation()

function harmonySectionAnimations(){
  const heading = document.querySelectorAll('.harmony h2');
  heading.forEach((headings) => {
    gsap.fromTo(headings, {
      y: 100,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 2.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".harmony",
        start: "top 85%",
        end: "top 60%",
        scrub: 1.5,
        toggleActions: "play none none reverse"
      }
    });
  });
}
harmonySectionAnimations()

function profoundBoxesAnimation() {
  const profound = document.querySelectorAll('.profound_box')
  profound.forEach((profound) => {
    gsap.fromTo(profound, {
      opacity: 0,
      transform: "rotateX(-160deg)",
    }, {
      opacity: 1,
      transform: "rotateX(0)",
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".profound_content",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        // markers: true
      }
    })
  })
}
profoundBoxesAnimation()


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