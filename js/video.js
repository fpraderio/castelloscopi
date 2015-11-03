$(function() 
{
	 $("#videoBox")
	.dialog({ 
		position: { my: "left top", at: "left top", of: window },
		resizable: false,
		width:'auto',
		autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 },
		close: function() { 
			$("#videoBox").empty();
            $(document).unbind('click'); }
	});
});