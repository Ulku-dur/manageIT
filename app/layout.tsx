import type { Metadata } from "next";
import {
  Lato,
  Montserrat,
  Open_Sans,
  Playfair,
  Poppins,
  Raleway,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "react-hot-toast";
import Navbar1 from "./components/nav-bar";
import { TableCellsMerge } from "lucide-react";
import Footer1 from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const playfairDisplay = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "manageit App", // Placeholder for title
  description: "Responsive landing page starter template with Next.js & TailwindCSS.", // Placeholder for description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable}
         ${roboto.variable} ${openSans.variable} 
         ${montserrat.variable} ${raleway.variable} 
         ${lato.variable} ${playfairDisplay.variable} 
          antialiased relative`}
      >
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar1 logo={<TableCellsMerge size={30}/>}
          authLinks={{
            login: {text: "Sign In", href: "/login" },
            register: {href: "/register", text: "Get Started"}
          }} className="p-12" domainName="ManageIT"/>
          {children}
          <Footer1  website="ManageIT"
            websiteDescription="The all-in-one platform for modern project teams to collaborate, track progress, and deliver work faster."
            handle="teamflowhq"/>
        </ThemeProvider>
      </body>
    </html>
  );
}
