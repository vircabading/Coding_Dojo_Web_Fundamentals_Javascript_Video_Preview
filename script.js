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

function get_todays_date() {                                    // Function that gets today's date
    var today = new Date();
    var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
    return date;
}

//// MAIN EXECUTABLE SECTION ///////////////////////////////

console.log("page loaded...");

document.getElementById("main_video_title").innerText = get_main_video_title();  // Place the title of the main video

document.getElementById("todays_date").innerText = get_todays_date();   // Place today's date on document