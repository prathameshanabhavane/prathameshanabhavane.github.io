// Make sure service wotker are supported

if ('serviceWorker' in navigator) {
    // console.log('Service Worker Supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../service-worker-two.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}

window.addEventListener("load", (event) => {
  // const statusDisplay = document.getElementById("status");
  // statusDisplay.textContent = navigator.onLine ? "Online" : "OFFline";
  const notificationElement = document.querySelector('.notification-alert');
  if (navigator.onLine) {
    notificationElement.classList.remove('show');
  } else {
    notificationElement.classList.add('show');
  }
});
