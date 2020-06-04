const video = document.getElementById("video");
const play = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// NOTE Play and Pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// NOTE Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// NOTE Update video progress/timestamp

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // NOTE Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  // NOTE Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// NOTE Set progress of video
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// NOTE Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// NOTE Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);