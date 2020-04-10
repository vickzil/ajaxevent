const imageContainer = document.querySelector(".image-container");


var imageGallery = [
{
  images: "wed/bg1.jpg",
  category: "one all"
},
{
  images: "eng/bg15.jpg",
  category: "two"
},
{
  images: "e2.jpg",
  category: "four"
},
{
  images: "eng/bg16.jpg",
  category: "two"
},
{
  images: "e3.jpg",
  category: "two"
},

{
  images: "wed/bg2.jpg",
  category: "one"
},
{
  images: "wed/bg3.jpg",
  category: "one"
},
{
  images: "eng/bg13.jpg",
  category: "two"
},
{
  images: "wed/bg4.jpg",
  category: "one"
},
{
  images: "eng/bg17.jpg",
  category: "two"
},
{
  images: "ani/bg15.jpg",
  category: "three"
},
{
  images: "wed/bg5.jpg",
  category: "one"
},
{
  images: "wed/bg6.jpg",
  category: "one"
},
{
  images: "wed/bg7.jpg",
  category: "one"
},
{
  images: "ani/bg13.jpg",
  category: "three"
},
{
  images: "e1.jpg",
  category: "four"
},
{
  images: "wed/bg8.jpg",
  category: "one"
},
{
  images: "ani/bg14.jpg",
  category: "three"
},
{
  images: "bg7.jpg",
  category: "two"
},
{
  images: "ani/bg16.jpg",
  category: "three"
},
{
  images: "wed/bg9.jpg",
  category: "one"
},
{
  images: "bg6.jpg",
  category: "two"
},
{
  images: "wed/bg10.jpg",
  category: "one"
},
{
  images: "ani/bg17.jpg",
  category: "three"
},
{
  images: "e4.jpg",
  category: "four"
},
{
  images: "ani/bg18.jpg",
  category: "three"
},
{
  images: "eng/bg1.jpg",
  category: "two"
},
{
  images: "e5.jpg",
  category: "four"
},
{
  images: "eng/bg2.jpg",
  category: "two"
},
{
  images: "e6.jpg",
  category: "four"
},
{
  images: "eng/bg3.jpg",
  category: "two"
},
{
  images: "e7.jpg",
  category: "four"
},
{
  images: "eng/bg4.jpg",
  category: "two"
},
{
  images: "eng/bg5.jpg",
  category: "two"
},
{
  images: "wed/bg11.jpg",
  category: "one"
},
{
  images: "eng/bg6.jpg",
  category: "two"
},
{
  images: "wed/bg12.jpg",
  category: "one"
},
{
  images: "eng/bg7.jpg",
  category: "two"
},
{
  images: "bg3.jpg",
  category: "one"
},
{
  images: "eng/bg8.jpg",
  category: "two"
},
{
  images: "wed/bg13.jpg",
  category: "one"
},
{
  images: "eng/bg9.jpg",
  category: "two"
},
{
  images: "bg13.jpg",
  category: "four"
},
{
  images: "wed/bg14.jpg",
  category: "one"
},
{
  images: "eng/bg10.jpg",
  category: "two"
},
{
  images: "bg5.jpg",
  category: "one"
},
{
  images: "wed/bg15.jpg",
  category: "one"
},
{
  images: "eng/bg11.jpg",
  category: "two"
},
{
  images: "bg8.jpg",
  category: "one"
},
{
  images: "wed/bg16.jpg",
  category: "one"
},
{
  images: "eng/bg12.jpg",
  category: "two"
},
{
  images: "wed/bg17.jpg",
  category: "one"
},
{
  images: "bg10.jpg",
  category: "four"
},
{
  images: "ani/bg1.jpg",
  category: "three"
},
{
  images: "wed/bg18.jpg",
  category: "one"
},
{
  images: "ani/bg2.jpg",
  category: "three"
},
{
  images: "wed/bg19.jpg",
  category: "one"
},
{
  images: "e8.jpg",
  category: "four"
},
{
  images: "bg14.jpg",
  category: "one"
},
{
  images: "ani/bg3.jpg",
  category: "three"
},
{
  images: "wed/bg20.jpg",
  category: "one"
},
{
  images: "bg11.jpg",
  category: "one"
},
{
  images: "ani/bg4.jpg",
  category: "three"
},
{
  images: "wed/bg21.jpg",
  category: "one"
},
{
  images: "e9.jpg",
  category: "four"
},
{
  images: "wed/bg22.jpg",
  category: "one"
},
{
  images: "ani/bg5.jpg",
  category: "three"
},
{
  images: "bg12.jpg",
  category: "one"
},
{
  images: "bg9.jpg",
  category: "four"
},
{
  images: "wed/bg23.jpg",
  category: "one"
},
{
  images: "ani/bg6.jpg",
  category: "three"
},
{
  images: "wed/bg24.jpg",
  category: "one"
},
{
  images: "bg1.jpg",
  category: "four"
},
{
  images: "wed/bg25.jpg",
  category: "one"
},
{
  images: "ani/bg7.jpg",
  category: "three"
},
{
  images: "wed/bg26.jpg",
  category: "one"
},
{
  images: "ani/bg8.jpg",
  category: "three"
},
{
  images: "wed/bg30.jpg",
  category: "one"
},
{
  images: "bg2.jpg",
  category: "four"
},
{
  images: "wed/bg27.jpg",
  category: "one"
},
{
  images: "ani/bg9.jpg",
  category: "three"
},
{
  images: "wed/bg28.jpg",
  category: "one"
},
{
  images: "ani/bg10.jpg",
  category: "three"
},
{
  images: "wed/bg29.jpg",
  category: "one"
},
{
  images: "bg4.jpg",
  category: "four"
},

]





function getImageGallery() {
  let imageOutput = "<h2 class='hide-mobile'>Photo Gallery</h2>";
  imageGallery.forEach(items => {
    imageOutput += 
    `<div class="filter ${items.category}">
            <a href="img/${items.images}" data-toggle="lightbox" data-gallery="example-gallery">
              <img src="img/${items.images}" class="img-fluid hover-shadow">
            </a>
        </div>`;
  });

  imageContainer.innerHTML = imageOutput;
}


// INITIALIZE FUNCTIONS
document.addEventListener("DOMContentLoaded", () => {

  getImageGallery();

});