<template>
<section class="py-16 px-6">
  <div class="max-w-4xl mx-auto">
    <header class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-4">Konsultasi Gratis</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Dapatkan panduan awal untuk kebutuhan aplikasi Anda.
        Kami siap membantu mengidentifikasi solusi yang tepat.
      </p>
    </header>

    <!-- Benefits -->
    <div class="grid md:grid-cols-2 gap-6 mb-12">
      <div class="bg-white rounded-2xl p-6 shadow">
        <h3 class="font-semibold text-lg mb-2">Estimasi Awal</h3>
        <p class="text-gray-600 text-sm">
          Gambaran waktu dan kompleksitas pengembangan (non-binding).
        </p>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow">
        <h3 class="font-semibold text-lg mb-2">Next Step Jelas</h3>
        <p class="text-gray-600 text-sm">
          Rekomendasi langkah lanjutan yang realistis dan terukur.
        </p>
      </div>
    </div>

    <!-- Form -->
    <div class="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-center">Ajukan Konsultasi Gratis</h2>

      <form class="grid gap-5">
        <input
          type="text"
          placeholder="Nama Lengkap"
          class="input"
        />
        <input
          type="text"
          placeholder="Instansi / Perusahaan"
          class="input"
        />
        <input
          type="email"
          placeholder="Email"
          class="input"
        />
        <input
          type="text"
          placeholder="Nomor WhatsApp"
          class="input"
        />
        <select class="input">
          <option value="">Jenis Kebutuhan</option>
          <option>Aplikasi Baru</option>
          <option>Pengembangan Sistem Existing</option>
          <option>Survey / Assessment System</option>
          <option>Dashboard & Data</option>
          <option>Lainnya</option>
        </select>
        <textarea
          rows="4"
          placeholder="Ceritakan singkat kebutuhan atau masalah Anda"
          class="input"
        ></textarea>

        <button
          type="submit"
          class="bg-blue-900 hover:bg-blue-800 text-white rounded-xl py-3 font-medium"
        >
          Ajukan Konsultasi Gratis
        </button>
      </form>

      <p class="text-xs text-gray-500 mt-4 text-center">
        Konsultasi bersifat rahasia dan tidak mengikat.
      </p>
    </div>
  </div>
</section>
</template>

<script setup>
// submit handler bisa ditambahkan ke API / email / WhatsApp
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900;
}
</style>