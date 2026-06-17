// Simple session check - redirect to login if not authenticated
const user = sessionStorage.getItem("komodoUser");
const role = sessionStorage.getItem("komodoRole");

if (!user) {
  window.location.href = "../index.html";
} else {
  const label = document.getElementById("userLabel");
  if (label) label.textContent = `Logged in as ${user} (${role})`;
}

function logout() {
  sessionStorage.removeItem("komodoUser");
  sessionStorage.removeItem("komodoRole");
  window.location.href = "../index.html";
}
