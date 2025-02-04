import Image from "next/image";
import Link from "next/link";
import { createClient } from "src/utils/supabase/server";
import { ArrowRight, Mail } from "lucide-react";
import type { ProductsType } from "./store/page";
import CheckSubscriptionStatus from "src/app/components/CheckSubscriptionStatus";
import NewProductsSlider from "src/app/components/NewProductsSlider";
import { Button } from "src/app/components/ui/button";
import ShopByCategory from "src/app/components/ShopByCategory";
import MostPopularProducts from "src/app/components/MostPopularProducts";

export default async function HomePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select("*").limit(8);
  if (error) {
    console.error(error);
    return;
  }
  const products = data as ProductsType[];
  const isProMember = await CheckSubscriptionStatus();

  return (
    <>
      {/* Hero Section */}
      <section className="flex max-sm:flex-col max-sm:justify-end max-sm:pb-16 w-full h-[38rem] sm:h-[40rem] md:h-[44rem] lg:h-[48rem] bg-cover bg-top items-center bg-[url('/assets/bg-img-small.png')] sm:bg-[url('/assets/bg-img.png')]">
        <div className="bg-black/20 w-full h-full flex justify-center items-center max-sm:items-end">
          <div className="w-full max-w-[90rem] my-0 mx-auto px-6 md:px-12 lg:px-20 py-0">
            <div className="flex flex-col max-sm:items-center max-sm:gap-6 gap-10 max-w-[32rem]">
              <div className="rounded-2xl flex flex-col gap-4">
                <h1 className="max-sm:text-center bg-text-gradient bg-clip-text max-w-[32rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[3rem] sm:leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5rem] text-white">
                  Power Your Life with the Best in Tech.
                </h1>
                <p className="max-sm:text-center text-base sm:text-xl text-white font-sans">
                  Whether you&apos;re just getting started, upgrading your
                  setup, or a tech pro, your device is as unique as you.
                </p>
              </div>
              <Link href="/store" className="w-1/2">
                <Button
                  className="text-sm sm:text-lg font-sans font-medium h-12 w-full hover:bg-[#38CB89]/80 transition-all duration-300"
                  variant="default"
                >
                  Shopping Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="w-full flex flex-col max-sm:items-center gap-12 overflow-hidden max-w-[90rem] my-0 mx-auto px-6 md:px-12 lg:px-20 py-0">
        <h2 className="text-2xl md:text-3xl font-medium">New Products</h2>
        <NewProductsSlider products={products} />
      </section>

      {/* Shop by Categories */}
      <ShopByCategory />
      {/* Most Popular Products */}
      <MostPopularProducts />

      {/* Latest Articles */}
      <section className="w-full flex flex-col gap-12 max-w-[90rem] my-0 mx-auto px-6 md:px-12 lg:px-20 py-0">
        <div className="w-full flex justify-between gap-16">
          <h2 className="text-2xl md:text-3xl font-medium">Latest Articles</h2>
          <Link
            href="/blog"
            className="flex gap-2 items-center hover:text-primary transition-all duration-300"
          >
            <p className="text-sm sm:text-base font-medium">View More</p>
            <ArrowRight className="size-5" />
          </Link>
        </div>

        <div className="flex gap-8 flex-wrap justify-center">
          <div className="flex flex-col gap-4 items-start">
            <Image
              src="/assets/article-1.png"
              width={500}
              height={500}
              quality={100}
              alt="Latest Articles"
              className="w-full h-full object-cover"
            />
            <p className="text-base md:text-xl font-medium">
              Air Jordan x Travis Scott Event
            </p>
            <Link
              href="/blog"
              className="flex gap-2 items-center hover:text-primary transition-all duration-300"
            >
              <p className="text-sm md:text-base font-medium">Read More</p>
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <Image
              src="/assets/article-2.png"
              width={500}
              height={500}
              quality={100}
              alt="Latest Articles"
              className="w-full h-full object-cover"
            />
            <p className="text-base md:text-xl font-medium">
              The timeless classics on the green
            </p>
            <Link
              href="/blog"
              className="flex gap-2 items-center hover:text-primary transition-all duration-300"
            >
              <p className="text-sm md:text-base font-medium">Read More</p>
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <Image
              src="/assets/article-3.png"
              width={500}
              height={500}
              quality={100}
              alt="Latest Articles"
              className="w-full h-full object-cover"
            />
            <p className="text-base md:text-xl font-medium">
              The 2023 Ryder Cup
            </p>
            <Link
              href="/blog"
              className="flex gap-2 items-center hover:text-primary transition-all duration-300"
            >
              <p className="text-sm md:text-base font-medium">Read More</p>
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
