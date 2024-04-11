import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | yj4-next-test",
    default: "yj4-next-text",
  },
  description: "study nextjs in yj4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-sm w-full mx-auto`}>
        {children}
      </body>
    </html>
  );
}
