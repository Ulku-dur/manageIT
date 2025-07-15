

/**
 * Footer Component
 * 
 * A responsive footer with social links, navigation sections, and copyright information.
 * 
 * @param {string} [website="domain.com"] - The website name to display in the footer
 * @param {string} [websiteDescription="This is a description of the website"] - Description text for the website
 * @param {string} [handle="@username"] - The creator's handle to display in the "Made by" section
 * @param {string} [classname] - Additional CSS classes to apply to the footer container
 * 
 * Usage Example:
 * 
 * <Footer1 
 *   website="MyApp"
 *   websiteDescription="The best app for your needs"
 *   handle="devteam"
 *   classname="bg-gray-100 dark:bg-gray-900"
 * />
 * 
 * The footer includes:
 * - Left section with website name, description, and social media links
 * - Right section with configurable navigation links (Solutions and Organization by default)
 * - Copyright information and "Made with love" section
 * 
 
 */



import React from "react";
import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface SocialLink {
  href: string;
  icon: IconType;
}

interface FooterNavigation {
  [key: string]: { label: string; href: string }[];
}

const socialLinks: SocialLink[] = [
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaYoutube },
  { href: "#", icon: FaFacebook },
  { href: "#", icon: FaTwitter },
  { href: "#", icon: FaLinkedin },
];

const footerNavigation: FooterNavigation = {
  Solutions: [
    { label: "Summary", href: "#" },
    { label: "Plans", href: "#" },
    { label: "Store", href: "#" },
    { label: "Capabilities", href: "#" },
  ],
  Organization: [
    { label: "Profile", href: "#" },
    { label: "Members", href: "#" },
    { label: "News", href: "#" },
    { label: "Jobs", href: "#" },
  ],
};

export default function Footer1({
  website = "domain.com",
  websiteDescription = " This is a description of the website",
  handle = "@username",
  classname,
}: {
  website?: string;
  websiteDescription?: string;
  handle?: string;
  classname?: string;
}) {
  // LEFT SECTION
  function LeftSection() {
    return (
      <div className="w-1/2">
        <div className="mb-4 font-semibold text-xl">{website}</div>
        <p className="text-muted-foreground mb-4">{websiteDescription}</p>
        <div className="flex items-center space-x-4 text-muted-foreground">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-500 hover:text-[#3B82F6] transition-colors duration-200">
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  function RightSection() {
    return (
      <div className="flex flex-wrap gap-28">
        {Object.entries(footerNavigation).map(([title, links]) => (
          <div key={title}>
            <div className="mb-4 font-semibold text-md">{title}</div>
            <ul className="space-y-2 text-muted-foreground">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  //MAIN JSX
  return (
    <footer
      className={`w-full   py-4 flex flex-col gap-2 text-sm
      px-14 mt-10 ${classname}`}
    >
      <div className="flex items-start justify-between gap-8 mb-10 max-md::flex max-md:flex-col max-md:gap-14 ">
        <LeftSection />
        <RightSection />
      </div>
      <Separator className="h-[1px]" />
      <div className="flex justify-between items-center mt-4 max-md:flex-col">
        <div>
          <span className="font-semibold text-foreground">{website}</span>{" "}
          &copy; All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <Heart className="text-red-500 h-4 w-4 fill-current" />
          <span>by</span>
          <span className="font-semibold text-foreground">@{handle}</span>
        </div>
      </div>
    </footer>
  );
}
