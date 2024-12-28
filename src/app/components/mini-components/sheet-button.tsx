import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export function CartButton() {
  const { cartItems, updateQuantity} = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-black text-sm md:text-base shadow-[0_0_15px_rgba(249,115,22,0.5)]">
          <span className="hidden sm:inline mr-2">Your Cart</span>
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-white text-lg md:text-xl">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {cartItems.length === 0 ? (
            <p className="text-white text-center mt-4 text-sm md:text-base">Cart is Empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-4 mb-4 border-b pb-4"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-white text-sm md:text-base">{item.name}</h2>
                    <p className="text-green-500 text-sm md:text-base">{item.price} Rupees</p>
                    <div className="flex items-center justify-center sm:justify-start mt-2 gap-2">
                      <Button
                        className="bg-gray-300 text-black hover:bg-red-500 h-8 w-8 md:h-10 md:w-10"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <span className="text-lg md:text-xl font-bold hover:text-white font-sans">-</span>
                      </Button>
                      <span className="px-2 md:px-4 text-white text-sm md:text-base">{item.quantity}</span>
                      <Button
                        className="bg-gray-300 text-black hover:bg-green-500 h-8 w-8 md:h-10 md:w-10"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <span className="text-lg md:text-xl font-bold font-sans">+</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-white text-lg md:text-xl font-semibold mt-4 text-center">
                Total Amount: {totalAmount.toFixed(2)} Rupees
              </div>
            </>
          )}
        </div>
        <SheetFooter className="mt-4">
          <SheetClose asChild>
            <Button type="submit" className="w-full tracking-widest bg-orange-500 hover:bg-orange-600 text-black text-sm md:text-base py-2 md:py-3">
              Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
