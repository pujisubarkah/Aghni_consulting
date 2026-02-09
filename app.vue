
<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }
  ]
})
</script>

<template>
  <div>
    <Navbar />
    <div class="pt-16">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
