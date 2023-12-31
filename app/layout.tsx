import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Provider } from "react-redux";
// import store from "@/redux-toolkit/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/* <Provider store={store}> */}
        <body className={inter.className}>{children}</body>
    {/* </Provider> */}
      </html>
  );
}
