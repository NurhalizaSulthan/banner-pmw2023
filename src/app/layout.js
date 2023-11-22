import Navbar from "@components/navbar/navbar.js";
import "@style/globals.css";

export const metadata = {
  title: "icha",
  description: "Made for pmw 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
