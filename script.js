document.addEventListener("DOMContentLoaded", function () {
  var aboutLink = document.getElementById("aboutLink");

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();

    var aboutMain = document.getElementById("aboutMain");
    var aboutMainOffsetTop = aboutMain.offsetTop;

    window.scrollTo({
      top: aboutMainOffsetTop,
      behavior: "smooth",
    });
  });
});
