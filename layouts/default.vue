<script lang="ts" setup>
const menuToggler = ref(false);

</script>

<template>
  <section class="min-h-screen flex flex-col">
    <header
      class="sticky top-0 text-primary dark:text-white p-5 md:px-10 bg-white dark:bg-brand-secondary flex justify-between items-center gap-1"
    >
      <nuxt-link class="w-1/6" to="/">
        <SvgsLogo class="w-32 md:w-[160px] h-auto" />
      </nuxt-link>
      <nav class="md:w-5/6 flex justify-between items-center gap-5 md:gap-0">
        <el-button type="primary" class="bg-primary" size="large">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_475_5351"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path d="M22 2H2V22H22V2Z" fill="white" />
            </mask>
            <g mask="url(#mask0_475_5351)">
              <path
                d="M10.4325 17.5001C14.4826 17.5001 17.7658 14.2168 17.7658 10.1667C17.7658 6.1166 14.4826 2.83334 10.4325 2.83334C6.38238 2.83334 3.09912 6.1166 3.09912 10.1667C3.09912 14.2168 6.38238 17.5001 10.4325 17.5001Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3496 15.6152L20.901 21.1667"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </el-button>
        <div class="hamburger flex flex-col gap-[6px] md:hidden" @click="menuToggler = !menuToggler">
          <div class="hamburger__line pb-1 w-2/3 rounded bg-primary" :class="{'hamburger__line--active' : menuToggler }" />
          <div class="hamburger__line pb-1 w-full rounded bg-primary transition-all" :class="{'hamburger__line--active' : menuToggler }" />
          <div class="hamburger__line pb-1 w-2/3 rounded bg-primary" :class="{'hamburger__line--active' : menuToggler }" />
        </div>
        <div class="py-32 md:py-0 md:items-center gap-5 md:gap-10 fixed md:relative top-20 md:top-auto bottom-0 md:bottom-auto right-0 md:right-auto left-0 ms:left-auto flex-col md:flex-row" :class="menuToggler ? 'flex bg-background-light dark:bg-background-dark md:bg-white' : 'hidden md:flex md:bg-white'">
          <div class="flex flex-col md:flex-row gap-2 md:gap-5">
            <nuxt-link to="/" class="bg-primary bg-opacity-5 text-primary md:text-black dark:text-white md:hover:text-primary px-10 py-4 md:p-2"
              >Home</nuxt-link
            >
            <nuxt-link to="/our-symbiosis" class="bg-primary bg-opacity-5 text-primary md:text-black dark:text-white md:hover:text-primary px-10 py-4 md:p-2"
              >Our Symbiosis</nuxt-link
            >
            <nuxt-link to="/blog" class="bg-primary bg-opacity-5 text-primary md:text-black dark:text-white md:hover:text-primary px-10 py-4 md:p-2"
              >Blog</nuxt-link
            >
            <nuxt-link to="/about-us" class="bg-primary bg-opacity-5 text-primary md:text-black dark:text-white md:hover:text-primary px-10 py-4 md:p-2"
              >About Us</nuxt-link
            >
          </div>
          <div class="flex items-center gap-5">
            <nuxt-link
              to="/"
              class="text-black p-3 rounded-md border border-transparent hover:border-primary hover:text-primary transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_475_5367"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                >
                  <path d="M22 2H2V22H22V2Z" fill="white" />
                </mask>
                <g mask="url(#mask0_475_5367)">
                  <path
                    d="M2.86768 21.1667V19.1963C2.86768 16.7804 4.82094 14.8271 7.23683 14.8271H16.7633C19.1792 14.8271 21.1325 16.7804 21.1325 19.1963V21.1667"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0002 11.3318C14.347 11.3318 16.2494 9.42937 16.2494 7.0826C16.2494 4.73582 14.347 2.83337 12.0002 2.83337C9.65342 2.83337 7.75098 4.73582 7.75098 7.0826C7.75098 9.42937 9.65342 11.3318 12.0002 11.3318Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </nuxt-link>
            <nuxt-link
              to="/"
              class="text-black p-3 rounded-md border border-transparent hover:border-primary hover:text-primary transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8934 6.94223L21.04 4.08C20.6668 2.88889 19.3511 2 18.0534 2H5.94673C4.66673 2 3.33339 2.88889 2.96007 4.08L2.12451 6.88889"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4357 11.6711C16.4357 14.1245 14.4446 16.1156 11.9914 16.1156C9.53798 16.1156 7.54688 14.1245 7.54688 11.6711"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.9778 4.93329H5.02222C3.35309 4.93329 2 6.28638 2 7.95551V18C2 19.669 3.35309 21.0221 5.02222 21.0221H18.9778C20.6469 21.0221 22 19.669 22 18V7.95551C22 6.28638 20.6469 4.93329 18.9778 4.93329Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
            <nuxt-link to="/">
              <el-button type="primary" class="bg-primary" size="large">Be Symbiotic</el-button>
            </nuxt-link>
            <div class="ml-4 flex flex-col gap-2 text-black dark:text-white">
              <svg
                class="cursor-pointer"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="16" fill="white" />
                <path
                  d="M20 19C20.8333 19 21.5417 18.7083 22.125 18.125C22.7083 17.5417 23 16.8333 23 16C23 15.1667 22.7083 14.4583 22.125 13.875C21.5417 13.2917 20.8333 13 20 13C19.1667 13 18.4583 13.2917 17.875 13.875C17.2917 14.4583 17 15.1667 17 16C17 16.8333 17.2917 17.5417 17.875 18.125C18.4583 18.7083 19.1667 19 20 19ZM20 21C18.6167 21 17.4373 20.5123 16.462 19.537C15.4867 18.5617 14.9993 17.3827 15 16C15 14.6167 15.4877 13.4373 16.463 12.462C17.4383 11.4867 18.6173 10.9993 20 11C21.3833 11 22.5627 11.4877 23.538 12.463C24.5133 13.4383 25.0007 14.6173 25 16C25 17.3833 24.5123 18.5627 23.537 19.538C22.5617 20.5133 21.3827 21.0007 20 21ZM10 17C9.71667 17 9.479 16.904 9.287 16.712C9.095 16.52 8.99934 16.2827 9 16C9 15.7167 9.096 15.479 9.288 15.287C9.48 15.095 9.71734 14.9993 10 15H12C12.2833 15 12.521 15.096 12.713 15.288C12.905 15.48 13.0007 15.7173 13 16C13 16.2833 12.904 16.521 12.712 16.713C12.52 16.905 12.2827 17.0007 12 17H10ZM28 17C27.7167 17 27.479 16.904 27.287 16.712C27.095 16.52 26.9993 16.2827 27 16C27 15.7167 27.096 15.479 27.288 15.287C27.48 15.095 27.7173 14.9993 28 15H30C30.2833 15 30.521 15.096 30.713 15.288C30.905 15.48 31.0007 15.7173 31 16C31 16.2833 30.904 16.521 30.712 16.713C30.52 16.905 30.2827 17.0007 30 17H28ZM20 9C19.7167 9 19.479 8.904 19.287 8.712C19.095 8.52 18.9993 8.28267 19 8V6C19 5.71667 19.096 5.479 19.288 5.287C19.48 5.095 19.7173 4.99934 20 5C20.2833 5 20.521 5.096 20.713 5.288C20.905 5.48 21.0007 5.71734 21 6V8C21 8.28334 20.904 8.521 20.712 8.713C20.52 8.905 20.2827 9.00067 20 9ZM20 27C19.7167 27 19.479 26.904 19.287 26.712C19.095 26.52 18.9993 26.2827 19 26V24C19 23.7167 19.096 23.479 19.288 23.287C19.48 23.095 19.7173 22.9993 20 23C20.2833 23 20.521 23.096 20.713 23.288C20.905 23.48 21.0007 23.7173 21 24V26C21 26.2833 20.904 26.521 20.712 26.713C20.52 26.905 20.2827 27.0007 20 27ZM13.65 11.05L12.575 10C12.375 9.81667 12.279 9.58334 12.287 9.3C12.295 9.01667 12.391 8.775 12.575 8.575C12.775 8.375 13.0167 8.275 13.3 8.275C13.5833 8.275 13.8167 8.375 14 8.575L15.05 9.65C15.2333 9.85 15.325 10.0833 15.325 10.35C15.325 10.6167 15.2333 10.85 15.05 11.05C14.8667 11.25 14.6377 11.346 14.363 11.338C14.0883 11.33 13.8507 11.234 13.65 11.05ZM26 23.425L24.95 22.35C24.7667 22.15 24.675 21.9123 24.675 21.637C24.675 21.3617 24.7667 21.1327 24.95 20.95C25.1333 20.75 25.3627 20.6543 25.638 20.663C25.9133 20.6717 26.1507 20.7673 26.35 20.95L27.425 22C27.625 22.1833 27.721 22.4167 27.713 22.7C27.705 22.9833 27.609 23.225 27.425 23.425C27.225 23.625 26.9833 23.725 26.7 23.725C26.4167 23.725 26.1833 23.625 26 23.425ZM24.95 11.05C24.75 10.8667 24.654 10.6377 24.662 10.363C24.67 10.0883 24.766 9.85067 24.95 9.65L26 8.575C26.1833 8.375 26.4167 8.279 26.7 8.287C26.9833 8.295 27.225 8.391 27.425 8.575C27.625 8.775 27.725 9.01667 27.725 9.3C27.725 9.58334 27.625 9.81667 27.425 10L26.35 11.05C26.15 11.2333 25.9167 11.325 25.65 11.325C25.3833 11.325 25.15 11.2333 24.95 11.05ZM12.575 23.425C12.375 23.225 12.275 22.9833 12.275 22.7C12.275 22.4167 12.375 22.1833 12.575 22L13.65 20.95C13.85 20.7667 14.0873 20.675 14.362 20.675C14.6367 20.675 14.866 20.7667 15.05 20.95C15.25 21.1333 15.346 21.3627 15.338 21.638C15.33 21.9133 15.234 22.1507 15.05 22.35L14 23.425C13.8167 23.625 13.5833 23.721 13.3 23.713C13.0167 23.705 12.775 23.609 12.575 23.425Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                class="cursor-pointer"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="32" rx="16" class="fill-black dark:fill-white" />
                <path
                  d="M20 25C17.5 25 15.375 24.125 13.625 22.375C11.875 20.625 11 18.5 11 16C11 13.5 11.875 11.375 13.625 9.625C15.375 7.875 17.5 7 20 7C20.2333 7 20.4627 7.00833 20.688 7.025C20.9133 7.04167 21.134 7.06667 21.35 7.1C20.6667 7.58333 20.1207 8.21267 19.712 8.988C19.3033 9.76333 19.0993 10.6007 19.1 11.5C19.1 13 19.625 14.275 20.675 15.325C21.725 16.375 23 16.9 24.5 16.9C25.4167 16.9 26.2583 16.6957 27.025 16.287C27.7917 15.8783 28.4167 15.3327 28.9 14.65C28.9333 14.8667 28.9583 15.0873 28.975 15.312C28.9917 15.5367 29 15.766 29 16C29 18.5 28.125 20.625 26.375 22.375C24.625 24.125 22.5 25 20 25ZM20 23C21.4667 23 22.7833 22.5957 23.95 21.787C25.1167 20.9783 25.9667 19.9243 26.5 18.625C26.1667 18.7083 25.8333 18.775 25.5 18.825C25.1667 18.875 24.8333 18.9 24.5 18.9C22.45 18.9 20.704 18.179 19.262 16.737C17.82 15.295 17.0993 13.5493 17.1 11.5C17.1 11.1667 17.125 10.8333 17.175 10.5C17.225 10.1667 17.2917 9.83333 17.375 9.5C16.075 10.0333 15.0207 10.8833 14.212 12.05C13.4033 13.2167 12.9993 14.5333 13 16C13 17.9333 13.6833 19.5833 15.05 20.95C16.4167 22.3167 18.0667 23 20 23Z"
                  class="fill-white dark:fill-black"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <section class="px-5 md:px-10 bg-background-light dark:bg-background-dark min-h-[85vh]">
      <slot />
    </section>
  </section>
</template>

<style lang="scss" scoped>
  .hamburger {
    width: 30px;
    &__line {
      transition: all ease-in-out 300ms;
      &--active {
        width: 100%;
        transform: rotate(45deg) translate(0, 5px);

        &:last-of-type {
          transform: rotate(-45deg) translate(1px, -7px);
        }
        &:nth-of-type(even) { display: none; }
      }
      
    }
  }
</style>
