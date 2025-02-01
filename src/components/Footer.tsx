"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/classtocloud",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/ClassToCloud",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "https://divyanshulohani.xyz/" },
  { label: "Get Started", href: "/auth/signup/" },
];

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-white transition duration-200"
  >
    {children}
  </Link>
);

const SocialIcon = ({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-400 hover:text-white transition duration-200"
  >
    <Icon size={20} />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Class To Cloud"
                width={40}
                height={40}
              />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Class To Cloud
              </h3>
            </div>
            <p className="text-gray-400">
              Your gateway to seamless online education and coaching.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-gray-400" />
              <a
                href="mailto:divyanshu@divyanshulohani.xyz"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                divyanshu@divyanshulohani.xyz
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Class To Cloud. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
