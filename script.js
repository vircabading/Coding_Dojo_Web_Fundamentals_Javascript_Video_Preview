////////////////////////////////////////////////////////////
// Coding Dojo > Web Fundamentals > Javascript Video Preview
// Virgilio D. Cabading Jr. October 18, 2021
////////////////////////////////////////////////////////////

//// FUNCTIONS /////////////////////////////////////////////

function preview_video(element) {                               // Function to start playing video on mute
    var video_object = document.getElementById("main_video");   // get an instance of the video object
    video_object.muted = true;                                  // turn on mute
    video_object.play();
}

function pause_video(element) {                                 // Function to stop playing video on mute
    var video_object = document.getElementById("main_video");   // get an instance of the video project
    video_object.muted = false;
    video_object.pause();
}

function get_main_video_title() {                               // Function that returns the title of the video
    var video_object = document.getElementById("main_video");
    return video_object.title;
}

//// MAIN EXECUTABLE SECTION ///////////////////////////////

console.log("page loaded...");

document.getElementById("main_video_title").innerText = get_main_video_title();  // Place the title of the main video
