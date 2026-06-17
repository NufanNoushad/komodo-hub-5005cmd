// Komodo Hub - Demo Authentication
// Hardcoded credentials for evaluation/testing purposes only

const USERS = {
  student01: { password: "student123", role: "student", redirect: "pages/student.html" },
  teacher01: { password: "teacher123", role: "teacher", redirect: "pages/teacher.html" },
  admin01:   { password: "admin123",   role: "admin",   redirect: "pages/admin.html" }
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  const user = USERS[username];

  if (!user) {
    errorEl.textContent = "Username not found. Please check the demo credentials below.";
    return;
  }

  if (user.password !== password) {
    errorEl.textContent = "Incorrect password.";
    return;
  }

  if (user.role !== role) {
    errorEl.textContent = `This account is registered as a ${user.role}, not ${role}.`;
    return;
  }

  // Store session info for the dashboard to read
  sessionStorage.setItem("komodoUser", username);
  sessionStorage.setItem("komodoRole", user.role);

  window.location.href = user.redirect;
});
