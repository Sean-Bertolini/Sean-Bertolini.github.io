var timeTilAlarmMillis =15000;

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var allNodes = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (let i=0; i<allNodes.length; i++) {
      allNodes[i].classList.add("alarm");
    }
    document.getElementsByTagName("body")[0].classList.add("alarm");
  }, timeTilAlarmMillis);
});