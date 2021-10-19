////////////////////////////////////////////////////////////
// Coding Dojo > Web Fundamentals > Javascript Video Preview
// Virgilio D. Cabading Jr. October 18, 2021
////////////////////////////////////////////////////////////

//// FUNCTIONS /////////////////////////////////////////////

function preview_video(element) {                               // Function to start playing video on mute
    var video_object = document.getElementById("main_video");   // get an instance of the video object
    video_object.autoplay = true;                               // turn on autoplay
    video_object.muted = true;                                  // turn on mute
    video_object.load();                                        // reload the video
}

function pause_video(element) {                                 // Function to stop playing video on mute
    var video_object = document.getElementById("main_video");   // get an instance of the video project
    video_object.autoplay = false;                              // turn off autoplay
    video_object.muted = false;                                 // turn off mute
    video_object.load();                                        // reload the video
}

//// MAIN EXECUTABLE SECTION ///////////////////////////////

console.log("page loaded...");

