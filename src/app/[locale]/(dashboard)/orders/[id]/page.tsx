import Image from "next/image";
import { createClient } from "../../../../../utils/supabase/server";
import { createTranslator } from "next-intl";

interface paramsType {
  params: {
    id: string;
    locale: string;
  };
}

export default async function OrderDetailsPage({ params }: paramsType) {
  const locale = params.locale;
  const id = params.id;

  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });

  const supabase = await createClient();

  // Fetch products from products table
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (!products) {
    console.log("No products found");
    return;
  }

  // Fetch stripe_purchase_id from orders table according to order ID
  const { data } = await supabase
    .from("orders")
    .select("stripe_purchase_id")
    .eq("id", id)
    .single();

  if (!data) {
    console.log("No order found");
    return;
  }

  const stripe_purchase_id = data?.stripe_purchase_id;

  // Fetch order details from order_items table according to stripe_purchase_id
  const { data: orderItems } = await supabase
    .from("order_items")
    .select("*")
    .eq("stripe_purchase_id", stripe_purchase_id)
    .order("created_at", { ascending: false });

  if (!orderItems) {
    console.log("No order items found");
    return;
  }

  // Filter products by order items
  const filteredProducts = products?.filter((product) =>
    orderItems.some((orderItem) => orderItem.product_id === product.id)
  );

  return (
    <section className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-0">
      <h1 className="text-xl md:text-2xl font-medium text-foreground">
        {t("OrderDetails.title")}
      </h1>

      <ul className="flex flex-col gap-6 w-full">
        {orderItems?.map((orderItem, index) => (
          <li
            key={orderItem.id}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 bg-card border border-border rounded-lg w-full"
          >
            {/* Product Image */}
            <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-lg">
              <Image
                src={
                  filteredProducts[index].image_urls?.[0] ||
                  "/assets/placeholder-img.png"
                }
                alt={filteredProducts[index].name || "Product Image"}
                width={1000}
                height={600}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex items-center sm:items-start justify-between w-full gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-lg font-semibold text-foreground">
                  {filteredProducts[index].name}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("OrderDetails.orderItem.price")}:&nbsp;
                  <span className="font-medium text-primary">
                    ${filteredProducts[index].price / 100}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("OrderDetails.orderItem.quantity")}:{" "}
                  <span className="font-medium">{orderItem.quantity}</span>
                </p>
              </div>

              {/* Order Summary */}
              <div className="flex flex-col items-center sm:items-end gap-2">
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-primary">
                  {t("OrderDetails.orderItem.ammount")}: $
                  {(filteredProducts[index].price * orderItem.quantity) / 100}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {new Date(orderItem.created_at)
                    .toLocaleDateString("en-GB")
                    .replace(/\//g, ".")}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
