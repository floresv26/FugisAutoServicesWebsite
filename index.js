$(document).ready(function() {

	/*---------- Refresh page on resize ----------*/
	$(window).resize(function() {
		location.reload();
	});


	/*---------- Pin NAV to top when scrolling ----------*/
	var mn = $(".main-nav");
	var mns = "main-nav-scrolled";
	var hdr = $('header').height();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 110) {
			mn.addClass(mns);
		} else {
			mn.removeClass(mns);
		}
	});


	/*---------- Active Navigation Link ----------*/
	// Get all links with class="nav-item" inside the container
	var navItems = document.getElementsByClassName("nav-item");
	console.log(navItems.length);

	// Loop through the links and add the active class to the current link
	for (var i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace("active", "");
			this.className += " active";
		});
	}


	/*---------- List Multiple Columns ----------*/
	// Create 2 columns for shuttle-list when there is more screen space.
	function createColumns (numColumns) {
		var columns = numColumns;
		var listCount = $("#shuttle-list li").length;
		console.log("#", listCount);

		var count = Math.ceil(listCount/columns);
		console.log("Columns", count);
		var column = 0;

		for (var i = 0; i < listCount; i += count) {
			column++;

			$("#shuttle-list-mult").append('<ul id="shuttle-list' + column + '" class="shuttle-lists"></ul>');
			// $("#shuttle-list-mult").append('<ul class="shuttle-lists"></ul>');
			$("#shuttle-list" + column).html($("#shuttle-list li").splice(0, count));
			console.log("column", column);
		}
		$("#shuttle-list").remove();
	}


	/*-----------------------------------*/
	/*---------- MEDIA QUERIES ----------*/
	/*-----------------------------------*/

	if ( $(window).width() >= 576) {      
	  //Add your javascript for large screens here 
	  createColumns(2);
	} 
	else {
	  //Add your javascript for small screens here 
	}








});