
import { useState } from "react";

const Support = () => {
  const [copied, setCopied] = useState(false);
  const email = "support@freorva.io";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-3xl font-light mb-8">Support</h1>
        <div 
          className="flex items-center justify-center space-x-2 bg-secondary px-4 py-3 rounded-lg cursor-pointer"
          onClick={handleCopy}
        >
          <span className="text-foreground/90 select-all">{email}</span>
          <span className="text-xs text-foreground/50">
            {copied ? "Copied" : "Click to copy"}
          </span>
        </div>
        <a 
          href={`mailto:${email}`}
          className="mt-6 inline-block text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          Open in mail app
        </a>
      </div>
    </div>
  );
};

export default Support;
