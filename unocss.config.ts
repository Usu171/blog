import { presetIcons, transformerDirectives, presetWebFonts, presetUno, defineConfig } from "unocss";

export default defineConfig({
  safelist: ["transition-colors", "duration-300", "duration-500"],
  transformers: [transformerDirectives()],
  presets: [presetUno(), presetWebFonts(
    {
      provider: "fontsource",
      fonts: {
        noto: {
          name: "Noto Sans",
          weights: [400, 700, 900],
        }
      }
    }
  ),
presetIcons(

)],
  theme: {
    colors: {
      themeColor: "#5a5df0",
      themeColordark: "#5154d2",
      bgColor: "#fcfcfe",
      bgColor1: "#f1f1f1",
      bgColorh: "#f0f0f4",
      bgColorb: "#e4e4e7",
      bgColor2: "#f4f5f7",
      textColor: "#000106",
      textColor2: "#656567",

      bgColordark: "#090c14",
      bgColor1dark: "#212121",
      bgColorhdark: "#1c1f27",
      bgColorbdark: "#292c33",
      bgColor2dark: "#010308",
      textColordark: "#dedee0",
      textColor2dark: "#ffffffb3",
    },
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    }
  },
});
