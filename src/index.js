import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContact from "./pages/contact";
function clearContent() {
  document.getElementById('content').textContent = '';
}
document.getElementById('home').addEventListener('click', () => {
  clearContent();
  loadHome();
  });

document.getElementById('menu').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.getElementById('contact').addEventListener('click', () => {
  clearContent();
  loadContact();
});

loadHome();

