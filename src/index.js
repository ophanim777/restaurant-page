import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContact from "./pages/contact";

function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

function createHeader() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.id = "home-btn";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.id = "menu-btn";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.id = "contact-btn";

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  header.appendChild(nav);
  document.body.prepend(header);

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  
  if (!document.getElementById("content")) {
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
    document.body.appendChild(contentDiv);
  }

  createHeader();
  loadHome();
});
