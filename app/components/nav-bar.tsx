
/**
 * Navbar1 Component
 * 
 * 
 * Props:
 * - domainName: string - The text displayed next to the logo (default: "Domain.com")
 * - logo: React.ReactNode - Custom logo component (default: Blocks icon from lucide-react)
 * - navLinks: Array<{name: string, href: string}> - Array of navigation links
 *   (default: [{ name: "Link1", href: "#" }, ...])
 * - authLinks: { login: {text, href}, register: {text, href} } - Authentication links configuration
 *   (default: { login: { text: "Login", href: "#" }, register: { text: "Register", href: "#" } })
 * - className: string - Additional CSS classes for the nav element (default: "")
 * 
 * Usage Example:
 * 
 * // Basic usage with defaults
 * <Navbar1 />
 * 
 * // Customized usage
 * <Navbar1
 *   domainName="MyApp"
 *   logo={<MyCustomLogo />}
 *   navLinks={[
 *     { name: "Home", href: "/" },
 *     { name: "Features", href: "/features" },
 *     { name: "Pricing", href: "/pricing" }
 *   ]}
 *   authLinks={{
 *     login: { text: "Sign In", href: "/login" },
 *     register: { text: "Get Started", href: "/register" }
 *   }}
 *   className="bg-white shadow-sm"
 * />
 * 
 */

"use client"


import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../dark-mode";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  domainName?: string;
  logo?: React.ReactNode;
  navLinks?: NavLink[];
  authLinks?: {
    login: { text: string; href: string };
    register: { text: string; href: string };
  };
  className?: string;
}

const Navbar1 = ({
  domainName = "Domain.com",
  logo = <Blocks size={30} />,
  navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  authLinks = {
    login: { text: "Login", href: "#" },
    register: { text: "Register", href: "#" },
  },
  className = "",
}: NavbarProps) => {
  return (
    <nav className={`py-4 px-6 flex items-center justify-between ${className}`}>
      {/* Logo + Domain name */}
      <div className="flex justify-center items-center gap-2">
        {logo}

        <h1 className="text-2xl font-bold">{domainName}</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex opacity-85 items-center text-lg text-muted-foreground space-x-8">
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Auth Links */}
      <div className="flex items-center space-x-4">
        <ModeToggle/>
        <Button className="h-10" variant="outline" asChild>
          <Link href={authLinks.login.href}>{authLinks.login.text}</Link>
        </Button>

        <Button className="h-10" asChild>
          <Link href={authLinks.register.href}>{authLinks.register.text}</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar1;
