'use client';

import { links  } from "@/app/lib/fake-data";
import { Button } from "@/components/ui/button";
import {
	Instagram,
	Calendar,
	Truck,
} from "lucide-react";

export function CustomButtons() {
	return (<div className="grid grid-cols-1 gap-3">
		{links.map((link) => (
			<Button variant="outline" className="w-full h-12" onClick={() => window.open(link.url, "_blank")} key={link.type}>
				{link.type === "reservation" && <Calendar className="h-5 w-5 mr-2" />}
				{link.type === "online_order" && <Truck className="h-5 w-5 mr-2" />}
				{link.type === "social" && <Instagram className="h-5 w-5 mr-2" />}
				{link.text}
			</Button>
		))}
	</div>);
}