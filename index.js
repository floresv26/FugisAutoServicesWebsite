$(document).ready(function() {
	
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

	/*---------- Active Navigation Link ----------*/
	// Get the container element for navigation links
	var navBar = document.getElementById("nav-bar");

	// Get all links with class="nav-item" inside the container
	var navItems = navBar.getElementsByClassName("nav-item");

	// Loop through the links and add the active class to the current link
	for (var i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace("active", "");
			this.className += " active";
		});
	}



	/*-----------------------------------*/
	/*---------- MEDIA QUERIES ----------*/
	/*-----------------------------------*/

	if ( $(window).width() > 576) {      
	  //Add your javascript for large screens here 
	  createColumns(2);
	} 
	else {
	  //Add your javascript for small screens here 
	}

	
});
