import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, FileText } from 'lucide-react';
import { Link } from '../components/ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold text-blue-600">
            DevPortfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="https://medium.com/@yishithvilasgreat/natural-acceptance-of-human-values-a-path-to-inner-clarity-and-harmony-ea24c9d37a34" >UHV</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <GitHub className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="#resume" 
                className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
              <Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="https://medium.com/@yishithvilasgreat/natural-acceptance-of-human-values-a-path-to-inner-clarity-and-harmony-ea24c9d37a34" onClick={() => setIsMenuOpen(false)}>UHV</Link>
              <div className="flex items-center space-x-4 pt-2">
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <GitHub className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
              <Link 
                href="#resume" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;