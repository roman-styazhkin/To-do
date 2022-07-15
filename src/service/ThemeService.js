class ThemeService {
  light = {
    '--body-bg': '#fff',
    '--accent-color': '#1e87f0',
    '--main-bg': '#fff',
    '--main-color': '#5a5656',
  }

  dark = {
    '--body-bg': '#22272e',
    '--accent-color': '#2d333b',
    '--main-bg': '#2d333b',
    '--main-color': '#fff',
  }

  setSelectedTheme = (themeName) => {
    Object.entries(this[themeName]).forEach(([key, value]) => {
      document.body.style.setProperty(key, value)
    })
  }

  initAppTheme = () => {
    const themeName = localStorage.getItem("appTheme") || "dark";
    this.setSelectedTheme(themeName);
  }
}

new ThemeService().initAppTheme()

export default ThemeService;