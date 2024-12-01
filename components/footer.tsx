import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Postaify</span>
              <Image
                src={"/postaify.png"}
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-gray-500"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-500"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-gray-500"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-gray-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
