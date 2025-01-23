import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-center text-sm mb-2">
          Developed by <span className="font-bold">Emanuel</span>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/emanuel-conte-cardoso-20b75614b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/emanuelconte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="text-center text-xs mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
