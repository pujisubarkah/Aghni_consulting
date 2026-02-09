<template>
  <nav class="bg-[#5a7868] shadow-lg fixed top-0 left-0 right-0 z-50 font-sans text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="text-xl font-bold text-white">Aghni Creative Consulting</a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="/tentang" class="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Tentang</a>
          <a href="#layanan" class="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Layanan</a>
          <a href="#artikel" class="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Artikel</a>
          <a href="/portofolio" class="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Portofolio</a>
          <a href="/konsultasi" class="bg-aghni-orange text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-aghni-orangeLight transition-colors duration-200">Konsultasi Gratis</a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#5a7868] border-t border-gray-600">
          <a href="/tentang" @click="isOpen = false" class="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tentang</a>
          <a href="#layanan" @click="isOpen = false" class="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Layanan</a>
          <a href="#artikel" @click="isOpen = false" class="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Artikel</a>
          <a href="/portofolio" @click="isOpen = false" class="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portofolio</a>
          <a href="/konsultasi" @click="isOpen = false" class="bg-aghni-orange text-white block px-3 py-2 rounded-md text-base font-medium">Konsultasi Gratis</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>