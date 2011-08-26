
jQuery(document).ready(function() {

	//Default Action
	jQuery(".tab_content").hide(); //Hide all content
	jQuery("#tour-tab-links li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab_content:first").show(); //Show first tab content

	//On Click Event
	jQuery("#tour-tab-links li").click(function() {
		jQuery("#tour-tab-links li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab_content").hide(); //Hide all tab content
		var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});
