function toggleVideo(videoID, videoURL) {
    var videoContainer = document.getElementById("videoContainer");
    
    // Clear existing video if any
    videoContainer.innerHTML = "";
    
    // Create the iframe element for the YouTube video
    var iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoURL}`;
    iframe.width = "480";
    iframe.height = "260";
    iframe.allowFullscreen = true;
    
    // Append the iframe to the video container
    videoContainer.appendChild(iframe);
    
    // Toggle the visibility of the video container
    videoContainer.style.display = (videoContainer.style.display === "none") ? "block" : "none";
    
}
