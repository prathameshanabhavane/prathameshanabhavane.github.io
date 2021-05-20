// Make sure service wotker are supported

function serviceWorker() {
    if ('serviceWorker' in navigator) {
        // console.log('Service Worker Supported');
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('../service-worker.js')
                .then(reg => console.log('Service Worker: Registered'))
                .catch(err => console.log(`Service Worker: Error: ${err}`))
        })
    }
}


window.addEventListener("load", (event) => {
  // const statusDisplay = document.querySelector("body");
  // statusDisplay.textContent = navigator.onLine ? "Online" : "OFFline";
  if (navigator.onLine) {
      console.log("online");
      serviceWorker();
  } else {
    console.log("offline");
    serviceWorker();
  }
});
