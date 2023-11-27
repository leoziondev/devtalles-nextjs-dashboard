import { CartCounter } from "@/shopping-cart";

export const metadata = {
 title: 'Cart Products',
 description: 'Count product cart',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart Products</span>
      <CartCounter value={12} />
    </div>
  );
}