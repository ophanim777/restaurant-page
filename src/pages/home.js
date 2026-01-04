export default function loadHome() {
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Ricky Restaurant";

  const text = document.createElement("p");
  text.textContent = "Best Asian food in town.";

  content.appendChild(title);
  content.appendChild(text);
}
