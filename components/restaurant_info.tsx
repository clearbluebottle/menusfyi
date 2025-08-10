'use client';

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/components/ui/collapsible"
import {
	Menu,
	Instagram,
	Calendar,
	Truck,
	ChevronDown,
	Clock,
	MapPin
} from "lucide-react";
import { hours, address, links, phoneNumber } from "@/app/lib/fake-data";

export function RestaurantInfo() {
	const [isHoursExpanded, setIsHoursExpanded] = useState(false);
	const daysOfWeek = [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
	];
	const dayLabels = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const currentDay = daysOfWeek[new Date().getDay()];
	const todayHours = hours.get(currentDay) || "Closed";

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
					<Collapsible
						open={isHoursExpanded}
						onOpenChange={setIsHoursExpanded}
						className="mt-4 mb-2"
					>
						<CollapsibleTrigger className="w-full">
							<div className="flex items-center justify-between hover:bg-muted/50 -mx-2 px-2 py-1 rounded transition-colors">
								<div className="flex items-center gap-2">
									<Clock className="h-4 w-4 text-primary" />
									<span className="text-sm">
										{isHoursExpanded ? "Hours" : "Today"}
									</span>
								</div>
								<div className="flex items-center gap-2">
									{!isHoursExpanded && (
										<span className="text-sm font-medium text-primary">
											{todayHours}
										</span>
									)}
									<ChevronDown
										className={`h-4 w-4 text-muted-foreground transition-transform ${isHoursExpanded ? "rotate-180" : ""
											}`}
									/>
								</div>
							</div>
						</CollapsibleTrigger>

						<CollapsibleContent className="space-y-2 mt-2">
							{daysOfWeek.map((day, index) => (
								<div
									key={day}
									className={`flex justify-between text-sm py-1 px-2 rounded ${day === currentDay
											? "bg-primary/5 text-primary font-medium"
											: "text-muted-foreground"
										}`}
								>
									<span>{dayLabels[index]}</span>
									<span>{hours.get(day) || "Closed"}</span>
								</div>
							))}
						</CollapsibleContent>
					</Collapsible>

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

			<Button
				className="w-full h-14"
			>
				<Menu className="h-5 w-5 mr-2" />
				View Full Menu
			</Button>
			{/* Action Buttons Grid */}
			<div className="grid grid-cols-1 gap-3">
				{links.map((link) => (
					<Button variant="outline" className="w-full h-12" onClick={() => window.open(link.url, "_blank")} key={link.type}>
						{link.type === "reservation" && <Calendar className="h-5 w-5 mr-2" />}
						{link.type === "online_order" && <Truck className="h-5 w-5 mr-2" />}
						{link.type === "social" && <Instagram className="h-5 w-5 mr-2" />}
						{link.text}
					</Button>
				))}
			</div>
		</div>);
}