export default function loadContact() {
  const content = document.getElementById('content');

  const div = document.createElement('div');
  const title = document.createElement('h1');
  const info = document.createElement('p');

  title.textContent = 'Contact';
  info.textContent = 'Email: ricky@restaurant.com';

  div.appendChild(title);
  div.appendChild(info);
  content.appendChild(div);
}
