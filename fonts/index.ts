import { Sigmar, Roboto } from "next/font/google";

export const sigmar = Sigmar({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sigmar",
});
export const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
