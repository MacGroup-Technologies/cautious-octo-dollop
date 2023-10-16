<script lang="ts" setup></script>
<template>
  <div class="">
    <section class="flex flex-col md:flex-row justify-between md:items-start py-5 gap-10">
      <div class="rounded overflow-hidden shadow-md md:w-[300px] order-2 md:order-1">
        <div class="capitalize text-white bg-primary px-5 py-8 font-bold text-xl">our products</div>
        <nuxt-link to="/" class="capitalize p-5 block bg-white text-black dark:bg-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b">laptops</nuxt-link>
        <nuxt-link to="/" class="capitalize p-5 block bg-white text-black dark:bg-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b">phones</nuxt-link>
        <nuxt-link to="/" class="capitalize p-5 block bg-white text-black dark:bg-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b">bluetooth speakers</nuxt-link>
        <nuxt-link to="/" class="capitalize p-5 block bg-white text-black dark:bg-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b">computer networking</nuxt-link>
        <nuxt-link to="/" class="capitalize p-5 block bg-white text-black dark:bg-secondary dark:text-white hover:bg-primary hover:bg-opacity-10 border-b">accessories</nuxt-link>
        <nuxt-link to="/" class="capitalize p-5 block bg-white text-black dark:bg-secondary dark:text-white hover:bg-primary hover:bg-opacity-10">others</nuxt-link>
      </div>
      <div class="md:w-full order-1 md:order-2">
        <h1 class="font-semibold text-xl text-primary dark:text-white">Welcome to Alexzy Polska Technology;</h1>
        <div class="bg-primary bg-opacity-40 rounded p-5 md:p-10 mt-3">
          <div class="flex flex-col md:flex-row items-center gap-5">
            <div class="">
              <p class="text-black font-bold text-2xl md:text-4xl mb-5">
                <span class="text-secondary">Your Trusted Source for Quality Technological Devices:</span>
                 Where Reputation Meets Performance
              </p>
              <el-button size="large" type="info">Explore Now</el-button>
            </div>
            <img src="~/assets/imgs/Woman-with-laptop.png" alt="Woman pointing to a laptop on her other hand" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>