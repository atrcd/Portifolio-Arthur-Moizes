const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);

if (currentTheme === 'light-mode') {
  toggleButton.textContent = '🌚  Dark Mode';
}

toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark-mode');
  if (isDarkMode) {
    body.classList.replace('dark-mode', 'light-mode');
    toggleButton.textContent = '🌚  Dark Mode';
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    toggleButton.textContent = '🌞 Light Mode';
    localStorage.setItem('theme', 'dark-mode');
  }
});