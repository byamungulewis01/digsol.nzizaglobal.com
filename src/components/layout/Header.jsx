import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import { Button } from "@/components/ui/button";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", exact: true },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
    // { path: "/portfolio", label: "Portfolio" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "font-medium text-gray-700 hover:text-primary transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button>Get a Free Quote</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden bg-gray-100 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white shadow-lg">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-primary text-white"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Button - Positioned below navigation */}
            <div className="pt-2 pb-3">
              <Button className="w-full">Get a Free Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
