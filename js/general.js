const footer = document.querySelector(".footer");




function getFooter() {
	let footerOutput = "";
	footerOutput += 
	`<div class="container-fluid">
        <div class="row">
          	<div class="col-md-4">
	            <div class="row">
	              <h5><span class="gold-color">Quick</span> Menu</h5>
	            </div>
	            <p>
	              <a href="index.html">
	                <i class="fa fa-chevron-right mr-2" aria-hidden="true"></i>Home
	              </a>
	            </p>
	            <p>
	              <a href="about.html">
	                <i class="fa fa-chevron-right mr-2" aria-hidden="true"></i>About Us
	              </a>
	            </p>
	            <p>
	              <a href="services.html">
	                <i class="fa fa-chevron-right mr-2" aria-hidden="true"></i>Services
	              </a>
	            </p>
	            <p>
	              <a href="contact.html">
	                <i class="fa fa-chevron-right mr-2" aria-hidden="true"></i>Contact Us
	              </a>
	            </p>
          	</div>
          	<div class="col-md-4">
	            <div class="row">
	              <h5><span class="gold-color">Social</span> Menu</h5>
	            </div>
	            <p>
	              <a href="https://facebook.com">
	                <i class="fab fa-facebook-square mr-2" aria-hidden="true"></i>Facebook
	              </a>
	            </p>
	            <p>
	              <a href="https://twitter.com">
	                <i class="fab fa-twitter-square mr-2" aria-hidden="true"></i>Twitter
	              </a>
	            </p>
	            <p>
	              <a href="https://instagram.com">
	                <i class="fab fa-instagram mr-2" aria-hidden="true"></i>Instagram
	              </a>
	            </p>
	            <p>
	              <a href="https://youtube.com">
	                <i class="fab fa-youtube mr-2" aria-hidden="true"></i>YouTube
	              </a>
	            </p>
          	</div>
          	<div class="col-md-4">
	            <div class="row">
	              <h5><span class="gold-color">About</span> Us</h5>
	            </div>
            	<p>Ajax Events is a public relations and events management company committed to fulfilling our clients' needs and expectations through unsurpassed services and creative thinking.</p>
            	<span>
            		<i class="fa fa-phone mr-2" aria-hidden="true"></i> 09059053779</span>
            	<span>
            		<i class="fas fa-envelope mr-2" aria-hidden="true"></i> info@ajaxevents.com
            	</span>
         	</div>
        </div>
    </div>
	<div id="footer" class="text-center">
	    <p>copyright &copy; 2019 Ajax events</p>
	    <p>Designed By <a href="http://victornwakwue.online"> <span class="gold-color">Victor Nwakwue</span></a></p>
	</div>`;

	footer.innerHTML = footerOutput;
}

// INITIALIZE FUNCTIONS
document.addEventListener("DOMContentLoaded", () => {
  getFooter();
});
