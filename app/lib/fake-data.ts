const hours = new Map<string, string>([
	['monday', "9:00 AM - 5:00 PM"],
	['tuesday', "9:00 AM - 5:00 PM"],
	['wednesday', "9:00 AM - 5:00 PM"],
	['thursday', "9:00 AM - 5:00 PM"],
	['friday', "9:00 AM - 5:00 PM"],
	['saturday', "10:00 AM - 4:00 PM"],
	['sunday', "10:00 AM - 4:00 PM"],
]);

const name = "Soju Haus";
const description = "A cozy place to enjoy authentic Korean BBQ and a wide selection of soju.";

const address = "123 Main St, San Francisco, CA 94101";
const phoneNumber = "+123-456-7890";

type LinkType = "reservation" | "social" | "online_order";

interface Link {
	type: LinkType;
	text: string;
	url: string;
}

const links: Link[] = [
	{
		type: "reservation",
		text: "Make Reservation",
		url: "https://resy.com/cities/new-york-ny/venues/soju-haus",
	},
	{
		type: "online_order",
		text: "Order Online",
		url: "https://ubereats.com",
	},
	{
		type: "social",
		text: "Instagram",
		url: "https://instagram.com/sojuhaus",}
];

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
}

interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        id: "bruschetta",
        name: "Classic Bruschetta",
        price: "$12",
        description: "Grilled bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil",
        isPopular: true,
        isVegetarian: true
      },
      {
        id: "calamari",
        name: "Crispy Calamari",
        price: "$16",
        description: "Fresh squid rings lightly battered and fried, served with marinara sauce and lemon",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxhbWFyaSUyMGZyaWVkJTIwc3F1aWR8ZW58MXx8fHwxNzU0MTA3MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        isPopular: true
      },
      {
        id: "antipasto",
        name: "Antipasto Platter",
        price: "$18",
        description: "Selection of cured meats, artisanal cheeses, olives, and roasted vegetables",
        isVegetarian: true
      },
      {
        id: "arancini",
        name: "Truffle Arancini",
        price: "$14",
        description: "Crispy risotto balls stuffed with truffle and parmesan, served with aioli",
        image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFuY2luaSUyMHJpc290dG8lMjBiYWxsc3xlbnwxfHx8fDE3NTQxMDcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        isVegetarian: true,
        isNew: true
      }
    ]
  },
  {
    id: "mains",
    title: "Main Courses", 
    items: [
      {
        id: "truffle-pasta",
        name: "Truffle Pappardelle",
        price: "$28",
        description: "Fresh pappardelle pasta with black truffle shavings, wild mushrooms, and parmesan cream sauce",
        isPopular: true,
        isVegetarian: true
      },
      {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        price: "$22",
        description: "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil",
        isPopular: true,
        isVegetarian: true
      },
      {
        id: "osso-buco",
        name: "Osso Buco Milanese",
        price: "$34",
        description: "Slow-braised veal shanks with saffron risotto, gremolata, and seasonal vegetables",
        isNew: true
      },
      {
        id: "salmon",
        name: "Pan-Seared Salmon",
        price: "$32",
        description: "Atlantic salmon with lemon herb butter, roasted vegetables, and quinoa pilaf",
      },
      {
        id: "diavola-pizza", 
        name: "Diavola Pizza",
        price: "$26",
        description: "Spicy salami, mozzarella, tomato sauce, chili oil, and fresh oregano",
        isSpicy: true
      },
      {
        id: "ribeye",
        name: "Grilled Ribeye",
        price: "$38",
        description: "12oz ribeye steak with garlic mashed potatoes, grilled asparagus, and red wine reduction",
        isPopular: true
      }
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "tiramisu",
        name: "Classic Tiramisu",
        price: "$12",
        description: "Traditional Italian dessert with espresso-soaked ladyfingers, mascarpone, and cocoa",
        isPopular: true
      },
      {
        id: "panna-cotta",
        name: "Vanilla Panna Cotta",
        price: "$10",
        description: "Silky vanilla custard with fresh berry compote and mint",
        isVegetarian: true
      },
      {
        id: "gelato",
        name: "Artisan Gelato",
        price: "$8",
        description: "Three scoops of house-made gelato: pistachio, stracciatella, and amaretto",
        isVegetarian: true
      },
      {
        id: "cannoli",
        name: "Sicilian Cannoli",
        price: "$11",
        description: "Crispy shells filled with sweet ricotta, chocolate chips, and pistachios",
        isVegetarian: true
      }
    ]
  },
  {
    id: "beverages", 
    title: "Beverages",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        price: "$4",
        description: "Rich, bold Italian espresso made from our signature blend"
      },
      {
        id: "cappuccino", 
        name: "Cappuccino",
        price: "$6",
        description: "Perfectly balanced espresso with steamed milk and foam"
      },
      {
        id: "wine-red",
        name: "Chianti Classico",
        price: "$12",
        description: "Full-bodied Tuscan red wine with notes of cherry and leather"
      },
      {
        id: "wine-white",
        name: "Pinot Grigio",
        price: "$10", 
        description: "Crisp white wine with citrus notes and a clean finish"
      },
      {
        id: "aperol-spritz",
        name: "Aperol Spritz",
        price: "$14",
        description: "Aperol, prosecco, soda water, and orange slice",
        isPopular: true
      }
    ]
  }
];

export { hours, address, description, links, phoneNumber, menuSections, name };