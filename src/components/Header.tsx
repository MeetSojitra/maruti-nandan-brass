import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import logoImage2 from "../assets/logo2.svg";
import LanguageSelector from "./LanguageSelector";
import { productCategories } from "@/data/products";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Dropdown management
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
      setActiveCategory(null);
    }, 150);
  };

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img
                src={logoImage2}
                alt="Maruti Nandan Enterprise Logo"
                className="h-8 sm:h-10 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-6 xl:space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                {item.name === "Products" ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={dropdownRef}
                  >
                    <Link
                      to={item.href}
                      className={`relative text-sm font-medium transition-all duration-300 hover:text-secondary group ${isActive(item.href)
                          ? "text-secondary"
                          : "text-muted-foreground"
                        }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${isActive(item.href) ? "w-full" : ""
                          }`}
                      ></span>
                    </Link>

                    {/* Products Dropdown */}
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-xl z-50"
                      >
                        <div className="p-2">
                          {productCategories.map((category) => (
                            <div
                              key={category.id}
                              className="relative"
                              onMouseEnter={() =>
                                category.subProducts.length > 0
                                  ? handleCategoryHover(category.id)
                                  : null
                              }
                            >
                              <Link
                                to={`/products/${category.id}`}
                                className={`flex items-center justify-between w-full px-3 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted/50 rounded-md transition-colors ${category.subProducts.length > 0
                                    ? ""
                                    : "justify-start"
                                  }`}
                              >
                                <span>{category.title}</span>
                                {category.subProducts.length > 0 && (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </Link>

                              {/* Second Level Dropdown - Only for categories with subProducts */}
                              {activeCategory === category.id &&
                                category.subProducts.length > 0 && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: "easeInOut",
                                    }}
                                    className="absolute left-full top-0 ml-1 w-72 bg-background border border-border rounded-lg shadow-xl z-[60]"
                                  >
                                    <div className="p-2">
                                      {category.subProducts.map((product) => (
                                        <Link
                                          key={product.id}
                                          to={`/products/${category.id}/${product.id}`}
                                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-muted/50 rounded-md transition-colors"
                                        >
                                          <div className="font-medium">
                                            {product.name}
                                          </div>
                                          <div className="text-xs text-muted-foreground/70">
                                            {product.description}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                            </div>
                          ))}

                          <div className="border-t border-border mt-2 pt-2">
                            <Link
                              to="/products"
                              className="flex items-center w-full px-3 py-2 text-sm font-medium text-secondary hover:bg-secondary/10 rounded-md transition-colors"
                            >
                              View All Products
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-secondary group ${isActive(item.href)
                        ? "text-secondary"
                        : "text-muted-foreground"
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${isActive(item.href) ? "w-full" : ""
                        }`}
                    ></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-4">
            {/* <LanguageSelector /> */}
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Get Quote
              </Button>
            </Link>

          </div>

          {/* Tablet & Mobile Controls */}
          <div className="flex items-center space-x-2">
            {/* <div className="hidden md:block lg:hidden">
              <LanguageSelector />
            </div>
            <div className="md:hidden">
              <LanguageSelector />
            </div> */}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-muted/50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                    <span className="text-sm font-medium text-muted-foreground">
                      Language
                    </span>
                    <LanguageSelector />
                  </div>
                  {navigationItems.map((item) =>
                    item.name === "Products" ? (
                      <Collapsible
                        key={item.name}
                        open={mobileProductsOpen}
                        onOpenChange={setMobileProductsOpen}
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-secondary p-2 rounded-lg hover:bg-muted/50 ${isActive(item.href)
                              ? "text-secondary bg-muted/30"
                              : "text-muted-foreground"
                            }`}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex-1 text-left"
                          >
                            {item.name}
                          </Link>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""
                              }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-4 mt-2 space-y-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/products/${category.id}`}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-muted-foreground hover:text-secondary p-2 rounded-lg hover:bg-muted/30"
                            >
                              {category.title}
                            </Link>
                          ))}
                          <Link
                            to="/products"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-medium text-secondary hover:bg-secondary/10 p-2 rounded-lg"
                          >
                            View All Products
                          </Link>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-secondary p-2 rounded-lg hover:bg-muted/50 ${isActive(item.href)
                            ? "text-secondary bg-muted/30"
                            : "text-muted-foreground"
                          }`}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Phone className="h-4 w-4" />
                      <span>+91-80589-75797</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Mail className="h-4 w-4" />
                      <span>info@marutinandan.com</span>
                    </div>
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
