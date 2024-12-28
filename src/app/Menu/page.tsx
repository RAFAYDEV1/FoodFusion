"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { createClient } from "next-sanity";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-12-10",
  useCdn: false,
});

type MenuItem = {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
};

export default function Menu() {
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "menuItem" && defined(image.asset->url)] | order(_createdAt desc) { 
        _id, 
        name, 
        "imageUrl": image.asset->url, 
        description, 
        price 
      }`
      )
      .then((data) => {
        setMenuItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const { addToCart} = useCart();

  const handleAddToCart = (item: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }) => {
    addToCart(item);
  };

  return (
    <section className="min-h-screen w-full px-4 py-8 md:px-8 lg:px-12">
      <h1 className="text-center text-3xl text-orange-500 md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {isLoading ? (
          // Show skeleton cards while loading
          Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="shadow-lg flex flex-col h-full">
              <Skeleton className="w-full h-40 sm:h-48 md:h-52 rounded-t-lg" />
              <CardHeader className="p-4">
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))
        ) : (
          menuItems.map((item) => (
            <Card key={item._id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative w-full h-40 sm:h-48 md:h-52">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.name || "Image not available"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="rounded-t-lg object-cover"
                  />
                ) : (
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Image not available"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="rounded-t-lg object-cover"
                  />
                )}
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg md:text-xl font-bold min-h-4">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm md:text-md text-gray-600 line-clamp-3 min-h-[6rem]">{item.description}</p>
                <p className="mt-2 font-bold text-green-600 text-lg md:text-xl">
                  {item.price.toFixed(2)} Rs
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black text-sm md:text-base py-2"
                  onClick={() => {
                    handleAddToCart({
                      id: item._id,
                      name: item.name,
                      imageUrl: item.imageUrl,
                      price: item.price,
                    });
                    toast.success(`${item.name} added to cart`, {
                      style: {
                        backgroundColor: '#f97316',
                        color: '#000000',
                        fontFamily: 'var(--font-chinese)',
                      }
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}
