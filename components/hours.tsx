'use client';
import { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/components/ui/collapsible"
import {
	ChevronDown,
	Clock,
} from "lucide-react";
import { hours } from "@/app/lib/fake-data";

export function Hours() {
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
	);
}