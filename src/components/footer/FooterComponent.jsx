
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <footer className="bg-pink-50 dark:bg-gray-900 flex">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/SigmaLogo.svg"
                className="h-8"
                alt="Voyant Logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/nosotros" className="hover:underline me-4 md:me-6">
                  About Us
                </a>
              </li>
              <li>
                <a href="/soluciones" className="hover:underline me-4 md:me-6">
                  Busisness
                </a>
              </li>
              <li>
                <a href="/sectores" className="hover:underline me-4 md:me-6">
                  Team
                </a>
              </li>
              <li>
                <a href="/sectores" className="hover:underline me-4 md:me-6">
                  News
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              SIGMA™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
  );
}
