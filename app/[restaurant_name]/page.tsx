import Image from "next/image";
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	MapPin
} from "lucide-react";
import { address, phoneNumber } from "@/app/lib/fake-data";
import { MenuButton } from "@/components/menu_button";
import { Hours } from "@/components/hours";
import { CustomButtons } from "@/components/custom_buttons";

export default async function RestaurantInfo({ params }: { params: Promise<{ restaurant_name: string }> }) {
	const { restaurant_name } = await params;

	console.log("Restaurant Name in RestaurantInfo:", restaurant_name); // For debugging

	return (
		<div className="max-w-md mx-auto space-y-4 p-4">
			{/* header */}
			<Card>
				<CardContent className="pt-6">
					<div className="mb-4 text-center">
						{/* This is temporary since the avatar is too small. */}
						<div className="mb-4">
							<Image
								src="/okdongsik_logo.jpg"
								width={1080}
								height={1080}
								alt="Okdongsik Logo"
								className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-border"
							/>
						</div>
					</div>
					<div className="text-center">
						<h1 className="mb-2">Soju Haus</h1>
						<p className="pb-2 text-sm text-muted-foreground">
							Authentic Korean BBQ & Soju Bar
						</p>
						<Link href={"tel:" + phoneNumber} className="text-blue-600 hover:text-blue-800 underline">{phoneNumber}</Link>
					</div>
					{/* Hours Section */}
					<Hours />

					{/* Location */}
					<div className="flex items-start gap-2 pt-2 border-t border-border">
						<MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
						<div className="flex-1">
							<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
								{address}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			<MenuButton />

			<CustomButtons />
		</div>);
}