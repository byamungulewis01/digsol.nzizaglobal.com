import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import { Button } from "@/components/ui/button";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="max-w-[85rem] flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-primary"
                : "font-medium text-gray-700 hover:text-primary transition-colors"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-primary"
                : "font-medium text-gray-700 hover:text-primary transition-colors"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-primary"
                : "font-medium text-gray-700 hover:text-primary transition-colors"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-primary"
                : "font-medium text-gray-700 hover:text-primary transition-colors"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-primary"
                : "font-medium text-gray-700 hover:text-primary transition-colors"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-primary"
                : "font-medium text-gray-700 hover:text-primary transition-colors"
            }
          >
            Faq
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <Button>Get Free Quote</Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden bg-gray-100 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-primary text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              }
              onClick={() => setMobileMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-primary text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-primary text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-primary text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
