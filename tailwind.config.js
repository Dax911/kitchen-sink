module.exports = {


  content: [
    '{layouts,pages,components}/**/*.{j,t}s*',
    '{src,layouts,pages,components}/**/**/*.{j,t}s*'
],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.75s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
	  daisyui:
	   {
       themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
    daisyui: {
  styled: true,
  themes: true,
  base: true,
  utils: true,
  logs: true,
  rtl: false,
  prefix: "",
  darkTheme: "business",
},


}
