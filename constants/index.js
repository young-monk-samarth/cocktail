const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
	id: "menu",
	title: "Menu",
  },
  {
	id: "contact",
	title: "Contact",
  },
 
];

const cocktailLists = [
  {
    name: "Desi Mojito",
    country: "IN",
    detail: "Mint, Lime, Sugarcane, White Rum - 300 ml",
    price: "₹350",
  },
  {
    name: "Masala Martini",
    country: "IN",
    detail: "Vodka, Indian Spices, Lemon Twist - 250 ml",
    price: "₹400",
  },
  {
    name: "Aam Panna Margarita",
    country: "IN",
    detail: "Tequila, Raw Mango, Cumin - 300 ml",
    price: "₹450",
  },
  {
    name: "Kala Khatta Vodka Fizz",
    country: "IN",
    detail: "Kala Khatta Syrup, Vodka, Soda - 300 ml",
    price: "₹380",
  },
];


const mockTailLists = [
  {
    name: "Nimbu Pudina Cooler",
    country: "IN",
    detail: "Mint, Lemon, Cumin - 300 ml",
    price: "₹180",
  },
  {
    name: "Aam Ras Refresher",
    country: "IN",
    detail: "Raw Mango, Black Salt, Chilli - 300 ml",
    price: "₹200",
  },
  {
    name: "Jamun Sparkle",
    country: "IN",
    detail: "Jamun Pulp, Lemon, Soda - 300 ml",
    price: "₹220",
  },
  {
    name: "Rose Kokum Spritz",
    country: "IN",
    detail: "Kokum, Rose Syrup, Sparkling Water - 300 ml",
    price: "₹210",
  },
];


const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
  "Inspired by Indian classics",
  "Blended with local spices",
  "Served chilled, every time",
  "Balanced with Ayurvedic twists",
];

const goodLists = [
  "Locally sourced ingredients",
  "Traditional meets modern mixology",
  "Crafted with regional flavors",
  "Fresh herbs & fruit infusions",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "12, MG Road, Indiranagar, Bengaluru, KA 560038",
  contact: {
    phone: "+91 98765 43210",
    email: "hello@desicocktails.in",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "12:00pm – 11:00pm" },
  { day: "Fri", time: "12:00pm – 1:00am" },
  { day: "Sat", time: "11:00am – 1:00am" },
  { day: "Sun", time: "11:00am – 11:00pm" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
	
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};