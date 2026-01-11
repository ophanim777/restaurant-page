export default function loadMenu() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = 'Menu';
    const items = ['Fried Rice', 'Stinky Tofu', 'Meatballs'];
  items.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    div.appendChild(p);
  });
  content.appendChild(div);

}