import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNav />
        <SearchBar />
        <MobileNav />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span className="sr-only">Acme Inc</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredProducts(filtered);
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-64"
        />
      </PopoverTrigger>
      {filteredProducts.length > 0 && (
        <PopoverContent className="w-64 p-2">
          <ul>
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="cursor-pointer hover:bg-muted p-2"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default Layout;