import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];
export const DISHES = [
  {
    image: dish1,
    title: "Crispy Fried Chicken",
    description: "Golden, crunchy fried chicken with secret Bangladeshi spices.",
  },
  {
    image: dish2,
    title: "Zinger Burger",
    description: "Spicy crispy chicken fillet with fresh lettuce and mayo in a soft bun.",
  },
  {
    image: dish3,
    title: "Spicy Chicken Wings",
    description: "Juicy chicken wings coated in a fiery spice blend, served with dipping sauce.",
  },
  {
    image: dish4,
    title: "Grilled Chicken",
    description: "Tender, flame-grilled chicken with a smoky BBQ glaze.",
  },
  {
    image: dish5,
    title: "Chicken Popcorn",
    description: "Bite-sized crispy chicken pieces with a crunchy, flavorful coating.",
  },
  {
    image: dish6,
    title: "French Fries",
    description: "Golden crispy fries, perfectly seasoned and served hot.",
  },
  {
    image: dish7,
    title: "Chicken Fried Rice",
    description: "Flavorful fried rice with shredded chicken and aromatic spices.",
  },
  {
    image: dish8,
    title: "Peri Peri Chicken",
    description: "Spicy grilled chicken infused with tangy peri peri sauce.",
  },
  {
    image: dish9,
    title: "Coleslaw",
    description: "Creamy and refreshing coleslaw made with fresh cabbage and carrots.",
  },
  {
    image: dish10,
    title: "Chocolate Mousse",
    description: "Smooth and rich chocolate mousse for the perfect sweet ending.",
  },
];

export const ABOUT = {
  header: "The Ultimate Fried Chicken Experience!",
  content:
    "We bring you the best of fried chicken with our own signature touch. Every bite is packed with crunch, spice, and flavor! Whether you're craving our famous Zinger Burger or spicy Peri Peri Chicken, we have something for every fried chicken lover. Come and experience crispy perfection like never before!",
};

export const MISSION =
  "Our mission is to serve high-quality, crispy fried chicken with mouthwatering flavors, ensuring an unforgettable fast-food experience.";

export const CUSINES = [
  {
    number: "01.",
    image: japanese,
    title: "Fried Chicken",
    description:
      "Crispy, golden, and packed with flavor – our signature fried chicken is a must-try.",
  },
  {
    number: "02.",
    image: italian,
    title: "Grilled Specials",
    description:
      "For those who love smoky flavors, our grilled chicken options are a treat.",
  },
  {
    number: "03.",
    image: indian,
    title: "Fast Food Classics",
    description:
      "From crispy fries to creamy coleslaw, we serve all your fast-food favorites.",
  },
];

export const REVIEW = {
  name: "Tanveer Ahmed",
  profession: "Food Enthusiast",
  content:
    "“I’ve tried many fried chicken spots, but this place is something special! The crispy chicken is perfect, the Zinger Burger is packed with spice, and the peri peri wings are a game-changer. Highly recommended for all fast-food lovers!”",
};

export const CONTACT = [
  { key: "address", value: "Address: 55 Gulshan Avenue, Dhaka, Bangladesh" },
  { key: "phone", value: "Phone: +880 1234-567890" },
  { key: "email", value: "Email: contact@bdchickenhouse.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
