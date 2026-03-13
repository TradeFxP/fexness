// Single-file theme control. Edit the colors here to change the whole site's theme.
export const themes = {
  default: {
    '--primary': '#d3a21a', // gold-yellow
    '--primary-600': '#d3a21a', // darker gold
    '--accent': '#fbbf24',
    '--bg': '#ffffff',
    '--muted': '#6b7280',
    '--text': '#0f172a'
  },
  dark: {
    '--primary': '#d3a21a',
    '--primary-600': '#d3a21a',
    '--accent': '#fbbf24',
    '--bg': '#0b1220',
    '--muted': '#9ca3af',
    '--text': '#e6eef8'
  }
}

export function applyTheme(name = 'default'){
  const root = document.documentElement
  const t = themes[name] || themes.default
  Object.entries(t).forEach(([k,v]) => root.style.setProperty(k, v))
}
