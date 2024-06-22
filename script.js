var animation = bodymovin.loadAnimation({
  container: document.querySelector("#container"), // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
  path: "sun.json", // Required
});

var animation1 = bodymovin.loadAnimation({
  container: document.querySelector("#shoecontainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "shoes.json",
});

var animation2 = bodymovin.loadAnimation({
  container: document.querySelector("#cloudcontainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "cloud.json",
});

var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();

var sun = document.querySelector("#container");
var cloud = document.querySelector("#twanim");
var shoe = document.querySelector("#shoecontainer");
var leftImages = document.querySelector("#limgs");
var rightImages = document.querySelector("#rimgs");
var arrow = document.querySelector("#arrow");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    tl.fromTo(
      ".nav",
      1,
      {
        transform: "scaleX(0)",
        transformOrigin: "left",
      },
      {
        ease: Power1.fadeInOut,
        transform: "scaleX(1)",
      }
    );
    tl2.fromTo(
      ".blocks",
      0.7,
      {
        delay: 0.5,
        transform: "scaleX(0)",
        transformOrigin: "left",
      },
      {
        ease: Expo.fadeInOut,
        stagger: 0.2,
        transform: "scaleX(1)",
      }
    );
  }, 1000);
  setTimeout(function () {
    sun.style.opacity = "1";
    cloud.style.opacity = "1";
    shoe.style.opacity = "1";
    leftImages.style.opacity = "1";
    rightImages.style.opacity = "1";
    arrow.style.opacity = "1";
  }, 3000);
});

$(".textil").textillate({
  initialDelay: 1000,
  in: {
    effect: "bounceInUp",
  },
});

tl4.fromTo(
  ".navanim",
  {
    opacity: 0,
    y: "-100%",
    // stagger: {
    //     each: 0
    // }
  },
  {
    opacity: 1,
    y: "0",
    ease: Power2.easeInOut,
    stagger: {
      each: 0.15,
    },
    // duration: 0.1
  },
  "+=2.5"
);

var f = 0;

setInterval(function () {
  if (f === 0) {
    leftImages.style.transform = "translate(-50%, -50%) translateX(-18%)";
    rightImages.style.transform = "translate(-50%, -50%) translateX(-18%)";
    f = 1;
  } else if (f === 1) {
    leftImages.style.transform = "translate(-50%, -50%) translateX(-36%)";
    rightImages.style.transform = "translate(-50%, -50%) translateX(-36%)";
    f = 2;
  } else if (f === 2) {
    leftImages.style.transform = "translate(-50%, -50%) translateX(-54%)";
    rightImages.style.transform = "translate(-50%, -50%) translateX(-54%)";
    f = 3;
  } else if (f === 3) {
    leftImages.style.transform = "translate(-50%, -50%) translateX(0%)";
    rightImages.style.transform = "translate(-50%, -50%) translateX(0%)";
    f = 0;
  }
}, 2500);

setInterval(function () {
  setInterval(function () {
    tl3
      // .from('#arrow img', 1, {
      //     x: '0%',
      //     ease: Power2.easeInOut,
      // })
      .to("#arrow img", 0.7, {
        x: "40%",
        ease: Power2.easeInOut,
      })
      .fromTo(
        "#arrow img",
        1,
        {
          x: "40%",
          ease: Power2.easeInOut,
        },
        {
          x: "0%",
          ease: Power2.easeInOut,
        }
      );
  }, 2000);
}, 1000);
