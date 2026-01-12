import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContact from "./pages/contact";

function createNav() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const buttons = [
    { id: 'home-btn', text: 'Home', callback: loadHome },
    { id: 'menu-btn', text: 'Menu', callback: loadMenu },
    { id: 'contact-btn', text: 'Contact', callback: loadContact }
  ];

  buttons.forEach(btn => {
    const button = document.createElement('button');
    button.id = btn.id;
    button.textContent = btn.text;
    button.addEventListener('click', () => {
      document.getElementById('content').textContent = '';
      btn.callback();
    });
    nav.appendChild(button);
  });

  header.appendChild(nav);
  document.body.prepend(header);
}


document.addEventListener('DOMContentLoaded', () => {
  
  if (!document.getElementById('content')) {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    document.body.appendChild(contentDiv);
  }

  createNav();
  loadHome();
});
