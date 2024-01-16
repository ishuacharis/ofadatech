// This will file will hold the fonts to be used for the project
import { Outfit, Raleway } from 'next/font/google';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ['latin'],
  weight: ["100", "900"],
  style: ["normal"],
  display: "swap",
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ['latin'],
  weight: ["100", "900"],
  style: ["normal", "italic"],
  display: "swap"
});

export { outfit, raleway };
