const getInitialTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const applyTheme = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const ball = document.getElementById("toggle-ball");
if (ball) {
  if (isDarkMode) {
    ball.classList.add("translate-x-6");
  } else {
    ball.classList.remove("translate-x-6");
  }
}

let isDarkMode = getInitialTheme();
applyTheme(isDarkMode);

export const toggleTheme = () => {
  isDarkMode = !isDarkMode
  applyTheme(isDarkMode)

  const ball = document.getElementById("toggle-ball");
  ball?.classList.toggle("translate-x-6");
}
