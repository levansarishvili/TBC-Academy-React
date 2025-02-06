"use client";

import Image from "next/image";
import { ProductsType } from "../page";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "src/app/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";

interface Props {
  product: ProductsType;
  isInCart: boolean;
}

export default function ProductDetails({ product, isInCart }: Props) {
  const [inBag, setInBag] = useState(isInCart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  console.log(isInCart);

  // Function to handle add to cart button click
  const handleAddToCart = async (productId: string) => {
    if (inBag) {
      setIsModalOpen(() => true);
      return;
    }
    try {
      const res = await fetch(`/api/add-to-cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.message === "Product already in cart") {
          console.log("Product already in cart");
          return;
        }
        console.error("Failed to add product to cart:", data.message);
        return;
      }
      setInBag(() => true);
      router.refresh();
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 mt-10 lg:mt-16">
      <h1 className="text-2xl lg:text-3xl font-medium">Product Details</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 rounded-2xl transition-all duration-300">
        {/* Product Details */}
        <div className="flex justify-center items-center w-full overflow-hidden h-auto transition-all duration-300">
          <Carousel className="w-full max-w-xs">
            <CarouselContent className="">
              {product?.image_urls?.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="p-1 w-2/3 md:w-full">
                    <Image
                      className="object-contain"
                      src={image || "/assets/placeholder-img.png"}
                      alt={product?.name}
                      width={1200}
                      height={600}
                      quality={100}
                      priority={true}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>

        {/* Product Settings */}
        <div className="flex flex-col items-start justify-center gap-6 max-w-[40rem] p-4">
          <div className="flex flex-col items-start justify-center gap-6">
            <h2 className="text-xl md:text-2xl font-medium">{product?.name}</h2>
            <p className="text-base md:text-lg text-primary font-medium">
              {product?.category}
            </p>
            <p className="text-sm md:text-base">{product?.description}</p>
          </div>
          <p className="text-sm md:text-base font-medium">
            Price: {product?.price / 100} $
          </p>
          <div className="flex">
            <Button
              variant={"default"}
              className="hover:bg-[#2ca76e] transition all duration-300 text-white text-sm w-[10rem]"
              onClick={() => handleAddToCart(product.id)}
            >
              <ShoppingCart className="size-4 fill-transparent stroke-white" />
              {`${inBag ? "In cart" : "Add to cart"}`}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal window for product is already in cart */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-sm:w-[16rem] max-w-[24rem] rounded-lg">
          <DialogHeader className="text-center flex flex-col gap-4">
            <DialogTitle className="text-sm md:text-base font-medium">
              Product Already in Cart
            </DialogTitle>
            <DialogDescription className="text-xs md:text-sm">
              This product is already in your cart. You can update the quantity
              in the cart.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Link href="/cart">
              <Button className="text-xs md:text-sm text-white hover:bg-[#38CB89]/80 transition-all duration-300">
                Go to cart
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
