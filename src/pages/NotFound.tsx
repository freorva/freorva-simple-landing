
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">404</h1>
        <p className="text-foreground/70 mb-6">Page not found</p>
        <Link to="/" className="text-foreground/90 hover:text-foreground underline transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
