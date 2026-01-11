import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContact from "./pages/contact";
function clearContent() {
  document.getElementById('content').textContent = '';
}
document.getElementById('home-btn').addEventListener('click', () => {
  clearContent();
  loadHome();
  });

document.getElementById('menu-btn').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.getElementById('contact-btn').addEventListener('click', () => {
  clearContent();
  loadContact();
});

loadHome();

