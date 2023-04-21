module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        my_theme: {
          "primary": "#39B54A",
          "secondary": "#84DA8F",
          "accent": "#E3FBE8",
          "neutral": "#000000",
          "base-100": "#ffffff",
          "info": "#515151",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        my_dark: {
          "primary": "#39B54A",
          "secondary": "#84DA8F",
          "accent": "#E3FBE8",
          "neutral": "#000000",
          "base-100": "#ffffff",
          "info": "#515151",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light",
      "dracula",
    ],
  },
  plugins: [require("daisyui")],
}