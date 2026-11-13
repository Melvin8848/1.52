const form = document.getElementById("form");
const ny = document.getElementById("ny");
const lista = document.getElementById("lista");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = ny.value.trim();
  if (!text) return;

  const id = "o" + Date.now();
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" id="${id}"> <label for="${id}"></label> <button type="button">Ta bort</button>`;
  li.querySelector("label").textContent = text;
  li.querySelector("button").setAttribute("aria-label", "Ta bort " + text);
  lista.append(li);

  ny.value = "";
  ny.focus();
});


lista.addEventListener("change", (e) => {
  e.target.closest("li").classList.toggle("klar", e.target.checked);
});
   
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") e.target.closest("li").remove();
});