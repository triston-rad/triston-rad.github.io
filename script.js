function openForm() {
  const button = document.getElementById("contact_button");
  const form = document.getElementById("contact_form");
  if (!button || !form) return;

  button.addEventListener("click", () => {
    form.style.display = "flex";
  });
}

function closeForm() {
  const form = document.getElementById("contact_form");
  if (!form) return;
  form.style.display = "none";
}

function wireUpNavHandlers() {
  const closeBtn = document.getElementById("close_form");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeForm);
  }
  openForm();
}

function create_nav_bar() {
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("nav-placeholder").innerHTML = html;

      // ✅ NOW everything exists
      wireUpNavHandlers();
    });
}

document.addEventListener("DOMContentLoaded", create_nav_bar);
