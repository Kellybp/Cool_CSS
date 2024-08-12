const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      //Show element upon observer trigger
      entry.target.classList.add("show");
    } else {
      //Show EVERY time element is observed
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".item");

hiddenElements.forEach((el) => observer.observe(el));
