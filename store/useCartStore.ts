import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      
      addToCart: (item, quantity) => {
        const existingItem = get().cartItems.find(
          (i) => i.id === item.id && i.size === item.size && i.color === item.color
        );

        if (existingItem) {
          set((state) => ({
            cartItems: state.cartItems.map((i) =>
              i.id === item.id && i.size === item.size && i.color === item.color
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
          }));
        } else {
          set((state) => ({
            cartItems: [...state.cartItems, { ...item, quantity }],
          }));
        }
      },

      removeFromCart: (id, size, color) => {
        set((state) => ({
          cartItems: state.cartItems.filter(
            (i) => !(i.id === id && i.size === size && i.color === color)
          ),
        }));
      },

      updateQuantity: (id, size, color, quantity) => {
        if (quantity < 1) return;
        set((state) => ({
          cartItems: state.cartItems.map((i) =>
            i.id === id && i.size === size && i.color === color
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ cartItems: [] }),

      getSubtotal: () => {
        return get().cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    }),
    {
      name: "shop-co-cart",
    }
  )
);
