import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-4 text-center space-y-4">
      <div className="flex justify-center space-x-4">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-6 w-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;