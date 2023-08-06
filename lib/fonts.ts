import { JetBrains_Mono as FontMono, Inter as FontSans, Cormorant_Garamond as FontSerif} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSerif = FontSerif({
  subsets: ['latin'],
  weight: "300",
  variable: "--font-serif",
})
