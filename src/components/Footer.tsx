import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import logoImage from '../assets/white-logo.svg';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Quality', href: '/quality' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    'PPR/CPVC/UPVC Inserts',
    'Precision Turned Parts',
    'Valves & Fittings',
    'Electric Fittings',
    'Bushes & Fasteners',
    'Hardware Components'
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Maruti Nandan Enterprise Logo" 
                className="h-12 w-auto drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
              />
            </div>
            <p className="text-white/80 text-sm font-inter">
              Precision crafted brass components for global industries. Manufacturing excellence since 2000.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <Facebook className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors duration-300" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <Linkedin className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors duration-300" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <Twitter className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors duration-300" />
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="relative text-white/80 hover:text-white text-sm font-inter transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-poppins">Our Products</h3>
            <ul className="space-y-2">
              {productCategories.slice(0, 5).map((product) => (
                <li key={product}>
                  <span className="text-white/80 text-sm font-inter">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-poppins">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm font-inter">
                  <p>Shead NO:- 524, GIDC, PHASE-II, DARED, Jamnagar</p>
                  <p>Gujarat 361006, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-sm font-inter">+91-80589-75797</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-sm font-inter">info@marutinandan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-sm font-inter">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm font-inter">
              © 2024 Maruti Nandan Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-white/60 text-sm font-inter hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-white/60 text-sm font-inter hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;