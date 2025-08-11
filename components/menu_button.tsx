'use client';

import { Button } from '@/components/ui/button';
import {
	Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function MenuButton() {
	const router = useRouter();

	return (
					<Button
				className="w-full h-14"
				onClick={() => router.push("/soju_haus/menu")}
			>
				<Menu className="h-5 w-5 mr-2" />
				View Full Menu
			</Button>
		);
}
