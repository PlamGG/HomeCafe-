import { CoffeeIcon, MenuIcon, InfoIcon, TagIcon, ImageIcon, MapPinIcon, StarIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Promotions from "./pages/Promotions.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <CoffeeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Menu",
    to: "/menu",
    icon: <MenuIcon className="h-4 w-4" />,
    page: <Menu />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Promotions",
    to: "/promotions",
    icon: <TagIcon className="h-4 w-4" />,
    page: <Promotions />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <ImageIcon className="h-4 w-4" />,
    page: <Gallery />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MapPinIcon className="h-4 w-4" />,
    page: <Contact />,
  },

];