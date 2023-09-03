function Carousel({ children }) {
  return (
    <div id="Carousel" className="w-full h-full overflow-x-hidden  ">
      {children}
    </div>
  );
}

function toPage(page = 1) {
  var Carousel = document.getElementById("Carousel");
  Carousel.scrollTo({
    top: Carousel.offsetHeight * (page - 1),
    behavior: "smooth",
  });
}
Carousel.toPage = toPage;

export default Carousel;
