import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold">Pet Adoption Platform</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Helping loving families find their perfect furry companions
              and giving pets a second chance at a happy home.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2"> <GrLocation /> Dhaka, Bangladesh</p>
              <p className="flex items-center gap-2"><FaPhoneAlt /> +880 1XXX-XXXXXX</p>
              <p className="flex items-center gap-2"><MdEmail /> support@petadoptionplatform.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm transition hover:bg-gray-700"
              >
                Facebook
              </a>

              <a
                href="#"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm transition hover:bg-gray-700"
              >
                Instagram
              </a>

              <a
                href="#"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm transition hover:bg-gray-700"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pet Adoption Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
