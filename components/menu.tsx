'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, Leaf, Flame, Coffee } from "lucide-react";
import { menuSections, name } from "@/app/lib/fake-data";

export function Menu({ restaurantId }: { restaurantId: string }) {
	console.log("Restaurant ID:", restaurantId); // For debugging
	const router = useRouter();
  const [activeSection, setActiveSection] = useState("appetizers");

  return (
    <div className="max-w-md mx-auto space-y-4 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost" 
          size="sm"
          onClick={() => router.push("/"+restaurantId)}
          className="p-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1>{name} Menu</h1>
          <p className="text-sm text-muted-foreground">All dishes made fresh daily</p>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {menuSections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveSection(section.id)}
            className="flex-shrink-0"
          >
            <span className="ml-2">{section.title}</span>
          </Button>
        ))}
      </div>

      {/* Menu Items */}
      {menuSections.map((section) => (
        <div
          key={section.id}
          className={activeSection === section.id ? "space-y-4" : "hidden"}
        >
          <div className="flex items-center gap-2 mb-4">
            <h2>{section.title}</h2>
          </div>

          <div className="space-y-4">
            {section.items.map((item) => (
              <Card key={item.id} className="overflow-hidden py-1">
                <CardContent className="p-0">
                  {item.image && (
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
												width={1080}
												height={1080}
                        className="w-full h-32 object-cover"
                      />
                      {/* <div className="absolute top-2 left-2 flex gap-1">
                        {item.isPopular && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        {item.isNew && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            🆕 New
                          </Badge>
                        )}
                      </div> */}
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3>{item.name}</h3>
                          <div className="flex gap-1">
                            {item.isVegetarian && (
                              <Leaf className="h-3 w-3 text-green-600" />
                            )}
                            {item.isSpicy && (
                              <Flame className="h-3 w-3 text-red-500" />
                            )}
                          </div>
                        </div>
                        {/* {!item.image && (
                          <div className="flex gap-1 mb-2">
                            {item.isPopular && (
                              <Badge variant="secondary" className="text-xs">
                                <Star className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                            {item.isNew && (
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                                🆕 New
                              </Badge>
                            )}
                          </div>
                        )} */}
                      </div>
                      <div className="text-right">
                        <span className="font-medium text-primary">{item.price}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <Card className="mt-8">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Questions about ingredients or allergies?
          </p>
          <p className="text-sm">
            Ask your server - we're happy to help!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
