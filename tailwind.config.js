module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {
      colors:{
        "primary-blue" : "#0E3EDA",
        "primary-blue-100" : "#E0E7FF",
        "background" : "#FCF1FF",
        "dark-background" : "#FAE5FF"
      },
      borderRadius: {
        "4xl"  : "2.125rem"
      }
    },
  },
  plugins: [require("daisyui")],
}
