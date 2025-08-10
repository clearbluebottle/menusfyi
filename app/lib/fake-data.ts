const hours = new Map<string, string>([
	['monday', "9:00 AM - 5:00 PM"],
	['tuesday', "9:00 AM - 5:00 PM"],
	['wednesday', "9:00 AM - 5:00 PM"],
	['thursday', "9:00 AM - 5:00 PM"],
	['friday', "9:00 AM - 5:00 PM"],
	['saturday', "10:00 AM - 4:00 PM"],
	['sunday', "10:00 AM - 4:00 PM"],
]);

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

export { hours, address, description, links, phoneNumber };