import {Menu} from "@/components/menu";

export default async function Page({ params }: { params: { restaurant_name: string } }) {
	const { restaurant_name } = await params;
	console.log("Restaurant ID in page.tsx:", restaurant_name); // For debugging
	return (
		<Menu restaurantId={restaurant_name} />
	);
}