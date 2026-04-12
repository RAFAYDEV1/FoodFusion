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
import { motion, Variants } from "framer-motion";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: "production",
  apiVersion: "2023-12-10",
  useCdn: false,
});

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn('Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not defined');
}

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen w-full px-4 py-16 md:px-8 lg:px-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.8)]">Menu</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="shadow-lg flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
              <Skeleton className="w-full h-48 md:h-56 bg-white/10 rounded-none" />
              <CardHeader className="p-5">
                <Skeleton className="h-7 w-3/4 bg-white/10" />
              </CardHeader>
              <CardContent className="p-5 pt-0 flex-grow">
                <Skeleton className="h-4 w-full mb-3 bg-white/10" />
                <Skeleton className="h-4 w-5/6 mb-4 bg-white/10" />
                <Skeleton className="h-6 w-1/3 bg-white/10" />
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Skeleton className="h-12 w-full bg-white/10 rounded-xl" />
              </CardFooter>
            </Card>
          ))
        ) : (
          menuItems.map((item) => (
            <motion.div key={item._id} variants={cardVariants}>
              <Card className="shadow-2xl hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-shadow duration-300 flex flex-col h-full bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden group">
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name || "Image not available"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src="/images/placeholder.jpg"
                      alt="Image not available"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardHeader className="p-5 pb-2 relative z-10 -mt-10">
                  <CardTitle className="text-xl md:text-2xl font-bold min-h-4 text-white drop-shadow-md">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-2 flex-grow">
                  <p className="text-sm md:text-md text-gray-300 line-clamp-3 min-h-[4.5rem] font-sans leading-relaxed">{item.description}</p>
                  <p className="mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-xl md:text-2xl drop-shadow">
                    {item.price.toFixed(2)} Rs
                  </p>
                </CardContent>
                <CardFooter className="p-5 pt-0 mt-auto">
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black text-sm md:text-base py-6 rounded-xl font-bold tracking-wide transition-all transform group-hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    onClick={() => {
                      handleAddToCart({
                        id: item._id,
                        name: item.name,
                        imageUrl: item.imageUrl,
                        price: item.price,
                      });
                      toast.success(`${item.name} added to cart`, {
                        style: {
                          backgroundColor: 'rgba(249,115,22,0.9)',
                          color: '#000000',
                          border: '1px solid rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(8px)',
                        }
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
}
