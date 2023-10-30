<script lang="ts" setup>
import AppleProducts from "../assets/svgs/Apple-Products.svg";
import HPLaptop from "../assets/svgs/HP-Laptop.svg";
import GamingLaptop from "../assets/svgs/Gaming-Laptop.svg";
import Phone from "../assets/svgs/Phone.svg";
import BluetoothSpeaker from "../assets/svgs/Bluetooth-Speaker.svg";
import Charger from "../assets/svgs/Charger.svg";
import Pixel from "../assets/svgs/Pixel.svg";
import LaptopCharger from "../assets/svgs/Laptop-Charger.svg";

useSeoMeta({
  title: "Home | Alexzy Polska Technology",
  ogTitle: "Home | Alexzy Polska Technology",
  description: "Your Trusted Source for Quality Technological Devices: Where Reputation Meets Performance",
  ogDescription: "Your Trusted Source for Quality Technological Devices: Where Reputation Meets Performance",
  ogImage: "alexzy-polska-banner.png",
  twitterCard: "summary_large_image",
});

const catalogs = reactive({
  items: [
    {
      title: "Apple Products",
      description: "Checkout our Apple products",
      img: AppleProducts,
    },
    {
      title: "HP Laptops",
      description: "Checkout our different models on HP laptops",
      img: HPLaptop,
    },
    {
      title: "Gaming Laptops",
      description: "Checkout our high end gaming laptops",
      img: GamingLaptop,
    },
    {
      title: "Samsung Phones",
      description: "Checkout our varieties of Samsung products",
      img: Phone,
    },
    {
      title: "Bluetooth Speakers",
      description: "Checkout our store for quality speakers",
      img: BluetoothSpeaker,
    },
    {
      title: "Phone Accessories",
      description: "Checkout our quality chargers, powerbanks, e.t.c",
      img: Charger,
    },
    {
      title: "Andriod Phones",
      description: "View our store for Google Pixels, Redmi phones",
      img: Pixel,
    },
    {
      title: "Laptop Accessories",
      description: "View our store for quality laptop skins, chargers, e.t.c",
      img: LaptopCharger,
    },
  ],
});
const {
  data: products,
  pending: productPending,
  error: productFetchError,
} = await useMyFetch<any>("products/all_products/");

const userStore = useUserStore();
</script>
<template>
  <div class="">
    <section
      class="flex flex-col md:flex-row justify-between md:items-start py-5 gap-10"
    >
      <div
        class="rounded overflow-hidden shadow-md md:w-[300px] order-2 md:order-1"
      >
        <div
          class="capitalize text-white bg-primary px-5 py-8 font-bold text-xl"
        >
          our products
        </div>
        <nuxt-link
          to="/"
          class="capitalize p-5 block bg-white text-black dark:bg-brand-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b dark:border-b-white"
          >laptops</nuxt-link
        >
        <nuxt-link
          to="/"
          class="capitalize p-5 block bg-white text-black dark:bg-brand-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b dark:border-b-white"
          >phones</nuxt-link
        >
        <nuxt-link
          to="/"
          class="capitalize p-5 block bg-white text-black dark:bg-brand-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b dark:border-b-white"
          >bluetooth speakers</nuxt-link
        >
        <nuxt-link
          to="/"
          class="capitalize p-5 block bg-white text-black dark:bg-brand-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b dark:border-b-white"
          >computer networking</nuxt-link
        >
        <nuxt-link
          to="/"
          class="capitalize p-5 block bg-white text-black dark:bg-brand-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b dark:border-b-white"
          >accessories</nuxt-link
        >
        <nuxt-link
          to="/"
          class="capitalize p-5 block bg-white text-black dark:bg-brand-secondary dark:text-white hover:bg-primary hover:bg-opacity-10"
          >others</nuxt-link
        >
      </div>
      <div class="md:w-full order-1 md:order-2">
        <h1 class="font-semibold text-2xl text-primary dark:text-white">
          Welcome to Alexzy Polska Technology;
        </h1>
        <div class="bg-primary bg-opacity-40 rounded p-5 md:p-10 mt-3">
          <div class="flex flex-col md:flex-row items-center gap-5">
            <div class="">
              <p
                class="text-black dark:text-gray-300 font-bold text-2xl md:text-4xl mb-5"
              >
                <span class="text-secondary dark:text-primary"
                  >Your Trusted Source for Quality Technological Devices:</span
                >
                Where Reputation Meets Performance
              </p>
              <el-button size="large" type="info">Explore Now</el-button>
            </div>
            <img
              src="~/assets/imgs/Woman-with-laptop.png"
              alt="Woman pointing to a laptop on her other hand"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="py-5 md:py-10">
      <h2
        class="font-bold text-primary dark:text-white text-2xl flex gap-5 items-center"
      >
        Best Deals
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.63013 5.31367C4.60433 6.38415 4.70751 8.60249 6.01014 10.9369C6.83556 12.4072 7.85444 13.4003 8.57669 13.9935C8.51222 13.0262 8.0866 4.38508 14.7932 0C19.2686 7.37725 24.7241 7.66099 25.3173 15.3478C25.8462 22.3123 19.6555 28 12.6652 28C4.57853 28 0.0515964 20.2617 0 15.3478C0 14.316 0.167669 12.4717 0.967298 10.4726C2.02488 7.82865 3.68863 6.1391 4.63013 5.31367Z"
            fill="#FF3C3C"
          />
          <path
            d="M20.9668 14.3296C21.3279 19.0414 17.132 22.8935 12.4031 22.8935"
            stroke="white"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h2>
      <div class="text-red-500 p-5 mt-5 rounded bg-red-50 border border-red-200" v-if="productFetchError">
        <h2 class="font-bold">Error occured</h2>
        <p>
          Please check your network and try again.
        </p>
      </div>
      <div class="flex justify-between gap-5 mt-5 overflow-x-auto py-5" v-else>
        <template v-if="!productPending">
          <div
            class="bg-white dark:bg-brand-secondary shadow w-72 p-5 flex-shrink-0 rounded"
            v-for="product in products.results"
            :key="product.id"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-black dark:text-white font-bold text-lg">
                {{ product.product_name }}
              </h3>
              <div class="flex items-center gap-2">
                <IconsHeart
                  class="cursor-pointer hover:text-[#FF3C3C]"
                  :class="userStore.isInWishlist(product.id) ? 'text-[#FF3C3C]' : 'text-transparent'"
                  @click="userStore.addToUserWishlist(product);"
                />
                <IconsShare class="text-black dark:text-primary cursor-pointer hover:text-primary" />
              </div>
            </div>
            <div class="my-5">
              <img :src="product.images[0].image" class="rounded w-full h-auto" v-if="product.images.length !== 0" />
              <div class="bg-primary w-full h-48 rounded flex justify-center items-center" v-else>
                <IconsLogo class="w-32 md:w-[160px] h-auto text-white" />
              </div>
            </div>
            <div class="">
              <h2 class="font-bold text-xl text-black dark:text-white">₦ {{ formatMoney(product.price) }}</h2>
              <h3 class="font-semibold text-black dark:text-gray-300 mt-2">Specification</h3>
              <p class="line-clamp-3 text-black dark:text-gray-300">
                {{ product.description }}
              </p>
              <el-button
                type="primary"
                size="large"
                class="w-full mt-3"
                @click="userStore.addToUserCart(product)"
              >
                <IconsCart class="stroke-white mr-3" />
                {{ userStore.isInCart(product.id) ? 'Remove From' : 'Add To' }} Cart
              </el-button>
            </div>
          </div>
        </template>
        <div class="" v-else>Loading ...</div>
      </div>
    </div>

    <div class="py-5 md:py-10">
      <h2 class="font-bold text-primary dark:text-white text-2xl">
        Our Catalogs
      </h2>
      <div class="grid md:grid-cols-4 gap-5 mt-5">
        <div
          class="rounded overflow-hidden catalog"
          v-for="(catalog, i) in catalogs.items"
          :key="i"
        >
          <div
            class="h-full w-full dark:text-white bg-white dark:bg-brand-secondary px-5 py-10 2xl:py-20 text-center catalog__front"
          >
            <h2
              class="bg-gradient-to-r from-primary to-brand-secondary dark:to-primary text-transparent bg-clip-text font-bold text-xl inline-block"
            >
              {{ catalog.title }}
            </h2>
            <p class="mt-5">{{ catalog.description }}</p>
          </div>
          <div
            class="h-full w-full flex justify-center items-center dark:text-white bg-white dark:bg-brand-secondary catalog__back"
          >
            <img :src="catalog.img" />
          </div>
        </div>
      </div>
    </div>

    <div class="py-5 md:py-10">
      <h2
        class="font-bold text-primary dark:text-white text-2xl flex gap-5 items-center"
      >
        More Products
      </h2>
      <div class="text-red-500 p-5 mt-5 rounded bg-red-50 border border-red-200" v-if="productFetchError">
        <h2 class="font-bold">Error occured</h2>
        <p>
          Please check your network and try again.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 py-5" v-else>
        <template v-if="!productPending">
          <div
            class="bg-white dark:bg-brand-secondary shadow p-5 rounded"
            v-for="product in products.results"
            :key="product.id"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-black dark:text-white font-bold text-lg">
                {{ product.product_name }}
              </h3>
              <div class="flex items-center gap-2">
                <IconsHeart
                  class="cursor-pointer hover:text-[#FF3C3C]"
                  :class="userStore.isInWishlist(product.id) ? 'text-[#FF3C3C]' : 'text-transparent'"
                  @click="userStore.addToUserWishlist(product);"
                />
                <IconsShare class="text-black dark:text-primary cursor-pointer hover:text-primary" />
              </div>
            </div>
            <div class="my-5">
              <img :src="product.images[0].image" class="rounded w-full h-auto" v-if="product.images.length !== 0" />
              <div class="bg-primary w-full h-48 rounded flex justify-center items-center" v-else>
                <IconsLogo class="w-32 md:w-[160px] h-auto text-white" />
              </div>
            </div>
            <div class="">
              <h2 class="font-bold text-xl text-black dark:text-white">₦ {{ formatMoney(product.price) }}</h2>
              <h3 class="font-semibold text-black dark:text-gray-300 mt-2">Specification</h3>
              <p class="line-clamp-3 text-black dark:text-gray-300">
                {{ product.description }}
              </p>
            </div>
            <el-button
              type="primary"
              size="large"
              class="w-full mt-3"
              @click="userStore.addToUserCart(product)"
            >
              <IconsCart class="stroke-white mr-3" />
              {{ userStore.isInCart(product.id) ? 'Remove From' : 'Add To' }} Cart
            </el-button>
          </div>
        </template>
        <div class="" v-else>Loading ...</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  position: relative;
  perspective: 700px;

  &__front {
    transform: rotateY(0deg);
    transition: transform ease-out 0.3s;
    backface-visibility: hidden;
  }
  &__back {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform ease-in 0.3s;
  }

  &:hover &__back {
    transform: rotateY(0deg);
    backface-visibility: visible;
  }

  &:hover &__front {
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
}
</style>
