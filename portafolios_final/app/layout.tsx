import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/75237417?v=4', // /public path
  },
  title: "Franco Wang",
  description: "Software engineering student with strong expertise in Python and a proven track record in solving complex problems on HackerRank. Adept at quickly adapting to new technologies and development environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}