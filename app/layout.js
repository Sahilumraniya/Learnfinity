import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learnfinity",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="https://img.icons8.com/color/48/learning.png" />
      </Head>
      <body className={inter.className}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        {children}
        <Footer />
      </body>
    </html>
  );
}
