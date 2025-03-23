
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors">
            Freorva LLC
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/support" 
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              Support
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
