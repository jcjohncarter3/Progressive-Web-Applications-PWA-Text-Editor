const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt");
  event.preventDefault();
  butInstall.style.visibility = "visible";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("click");
  butInstall.setAttribute("disabled", true);
  butInstall.textContent = "Installed!";
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("appinstalled");
  console.log("👍", "appinstalled", event);
});
