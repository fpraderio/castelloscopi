$(function() 
{
	 $("#videoBox")
	.dialog({ 
		position: { my: "center center", at: "center center", of: window },
		resizable: true,
		width:'auto',
		autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 },
		close: function() { 
			$("#videoBox").empty();
            $(document).unbind('click'); }
	});
});