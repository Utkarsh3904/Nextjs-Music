import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8 gap-12">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a modern music learning platform dedicated to helping
            aspiring musicians, producers, and composers master their craft.
            Learn from industry professionals and build real-world skills.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-white transition cursor-pointer"
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("instructors")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-white transition cursor-pointer"
              >
                Instructors
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-white transition cursor-pointer"
              >
                Contact Us
              </button>
            </li>
            
            <li>
              <span className="opacity-50 cursor-not-allowed">
                Pricing (Coming Soon)
              </span>
            </li>
            
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">YouTube</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@musicacademy.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Mumbai, India</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Music Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
