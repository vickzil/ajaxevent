const testimonial = document.querySelector(".owl-carousel");


var testimonials = [
{
	img: "p1.jpg",
	title: "Everything was lovely! Thank You! This was my daughter's dream wedding and your venue was the only place we looked at because it was the only place she wanted... It was Wonderful!!",
	name: "Chief MRS. Okeke",
	company: "MD Caspers Insurance"
},
{
	img: "p2.jpeg",
	title: "I want to thank you guys for everything you did for us. The ceremony and reception were both exactly what we wanted. Just about everyone commented on how cool and intimate the location was, THANK YOU SO MUCH!!",
	name: "Martha C. Douglas",
	company: "ASP Head Lead"
},
{
	img: "p3.jpg",
	title: "Thank You for your hard work and effort put into our wedding reception. We've gotten so many compliments on the venue and are so happy we chose Ajax. You were great to work with!",
	name: "Mr Femi Akelere",
	company: "Project Manager, DC Associates"
}
]



function getTestimonial() {
	let testimonialOutput = "";
	testimonials.forEach(items => {
		testimonialOutput += 
		`<div class="item">
            <div class="test-body">
              	<img src="img/${items.img}">
              	<h5>${items.title}</h5>
              	<h6 class="text-center">${items.name}</h6>
              	<span class="text-center">${items.company}</span>
            </div>
         </div>`;
	});

	testimonial.innerHTML = testimonialOutput;
	carouselSetting();
}


function carouselSetting() {

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      autoplay:true,
      autoplayTimeout:4400,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
     });
}

// INITIALIZE FUNCTIONS
document.addEventListener("DOMContentLoaded", () => {
  getTestimonial();
});
