function notify(message) {
  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display =  "block";
  notification.addEventListener("click", function(e) {
    notification.style.display = "none";
  });
}