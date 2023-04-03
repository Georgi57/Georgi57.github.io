	
function resize_video()
{
	// Window properties
	var window_width = window.innerWidth
		|| document.documentElement.clientWidth

	if (window_width < 1920 + 32)
	{
		document.getElementById("youtube_video").width = window_width - 32;
		document.getElementById("youtube_video").height = Math.floor((window_width - 32)/16*9);
	}
	else
	{
		document.getElementById("youtube_video").width = 1920;
		document.getElementById("youtube_video").height = 1080;
	}
}