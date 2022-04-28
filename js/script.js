function addShow() {
  const targetElementLoad = document.querySelectorAll(".js_target_h");
  for (let i = 0; i < targetElementLoad.length; i++ ) {
    targetElementLoad[i].classList.add("show");
  }
}

setTimeout(addShow, 1500);



function AddWhileScroll() {
  const targetElement = document.querySelectorAll(".js_target");
  document.addEventListener("scroll", () => {
    for (let i = 0; i < targetElement.length; i++ ) {
      const targetDistance = targetElement[i].getBoundingClientRect().top + 150;
      if (window.innerHeight > targetDistance) {
        targetElement[i].classList.add("show");
      } 
    }
  });
}

AddWhileScroll();


$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  infinite: true,
  variableWidth: true,
});

