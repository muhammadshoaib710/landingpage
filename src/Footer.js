import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
          &copy; {new Date().getFullYear()} Scramble Tech Soft. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/muhammadshoaib710/" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-400">
            LinkedIn
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-400">
            Twitter
          </a>
          <a href="https://github.com/muhammadshoaib710" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}