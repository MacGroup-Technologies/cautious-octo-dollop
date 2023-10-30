import { defineStore } from 'pinia';
import { productInterface } from '~/interfaces/products';

export const useUserStore = defineStore("userStore", {
  state: () => ({
    cart: [] as productInterface[],
    wishlist: [] as productInterface[]
  }),
  actions: {
    addToUserCart(payload: productInterface) {
      if (this.isInCart(payload.id)) {
        this.cart = useRemove(this.cart, (item: productInterface) => {
          return item.id !== payload.id;
        })
      }
      else {
        this.cart.push(payload);
      }
    },
    isInCart(id: string) {
      return !isEmpty(useFind(this.cart, { id: id }));
    },
    // Wishlist
    addToUserWishlist(payload: productInterface) {
      if (this.isInWishlist(payload.id)) {
        this.wishlist = useRemove(this.wishlist, (item: productInterface) => {
          return item.id !== payload.id;
        })
      }
      else {
        this.wishlist.push(payload);
      }
    },
    isInWishlist(id: string) {
      return !isEmpty(useFind(this.wishlist, { id: id }));
    },
  },
  persist: true
})