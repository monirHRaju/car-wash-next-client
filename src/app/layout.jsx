import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  weight: ["200","400","500","700", "800"],
  variables: ["--font-roboto"],
});

export const metadata = {
  title: "Car Wash",
  description: "clean your car easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
