$(function() 
{
	 $("#videoBox")
	.css( 
	{
	   "background":"rgba(255,255,255,0.5)"
	})
	.dialog({ autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 },
		close: function() { 
			$("#videoBox").empty();
            $(document).unbind('click'); }
	});
});