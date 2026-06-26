import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item._id === product._id);
        
        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },
      
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item._id !== productId),
        });
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        set({
          items: get().items.map((item) =>
            item._id === productId ? { ...item, quantity } : item
          ),
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      getCartTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      
      getCartCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'ecommerce-cart',
    }
  )
);
