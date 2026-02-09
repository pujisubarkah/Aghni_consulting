<template>
  <section class="container mx-auto px-6 py-16">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Portofolio Proyek</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Berikut adalah contoh proyek digital yang kami rancang dan kembangkan. 
        Sebagian besar berangkat dari problem nyata di sektor publik dan pendidikan,
        dengan fokus pada dampak, keberlanjutan, dan kemudahan penggunaan.
      </p>
    </header>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="(item, index) in portfolios"
        :key="item.title"
        :class="[
          'rounded-2xl border p-6 shadow-sm hover:shadow-md transition',
          cardColors[index % cardColors.length]
        ]"
      >
        <h2 class="text-2xl font-semibold mb-2">{{ item.title }}</h2>
        <p class="text-sm text-gray-500 mb-3">{{ item.subtitle }}</p>

        <p class="mb-4 text-gray-700">{{ item.description }}</p>

        <div class="mb-4">
          <span
            v-for="tech in item.tech"
            :key="tech"
            class="inline-block text-xs px-3 py-1 mr-2 mb-2 rounded-full bg-gray-100"
          >
            {{ tech }}
          </span>
        </div>

        <a
          :href="item.link"
          target="_blank"
          class="text-primary font-medium hover:underline"
        >
          Lihat Aplikasi →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const cardColors = [
  'bg-blue-50 border-blue-200',
  'bg-green-50 border-green-200',
  'bg-purple-50 border-purple-200',
  'bg-orange-50 border-orange-200',
  'bg-pink-50 border-pink-200',
  'bg-indigo-50 border-indigo-200',
  'bg-teal-50 border-teal-200'
]

const portfolios = [
  {
    title: 'IKK LAN',
    subtitle: 'Indeks Kualitas Kebijakan',
    description:
      'Platform nasional untuk pengukuran kualitas kebijakan instansi pemerintah, mencakup proses, substansi, dan dampak kebijakan.',
    tech: ['Nuxt', 'PostgreSQL', 'Dashboard Analytics'],
    link: 'https://ikk.lan.go.id'
  },
  {
    title: 'INOLAND',
    subtitle: 'Innovation Online Dashboard',
    description:
      'Sistem monitoring dan visualisasi inovasi instansi pemerintah secara nasional untuk mendukung pengambilan keputusan berbasis data.',
    tech: ['Nuxt', 'API', 'Data Visualization'],
    link: 'https://inoland.lan.go.id'
  },
  {
    title: 'PEN Monitoring',
    subtitle: 'Pemantauan Program Strategis',
    description:
      'Aplikasi monitoring program Pemulihan Ekonomi Nasional dengan indikator capaian dan pelaporan berkala.',
    tech: ['Next.js', 'PostgreSQL', 'Role Based Access'],
    link: 'https://pen-monitoring.lan.go.id'
  },
  {
    title: 'EPPN',
    subtitle: 'Evaluasi Pascapelatihan Nasional',
    description:
      'Sistem evaluasi dampak pelatihan nasional untuk mengukur outcome dan perubahan kinerja alumni pelatihan.',
    tech: ['Web App', 'Survey Engine', 'Reporting'],
    link: '#'
  },
  {
    title: 'Survey Poliklinik',
    subtitle: 'Kepuasan Layanan Kesehatan',
    description:
      'Aplikasi survei digital untuk mengukur kepuasan pasien dan kualitas layanan poliklinik.',
    tech: ['SvelteKit', 'Survey System'],
    link: '#'
  },
  {
    title: 'Makarti CORPU',
    subtitle: 'Kesiapan Corporate University',
    description:
      'Instrumen asesmen digital untuk mengukur kesiapan instansi dalam membangun Corporate University.',
    tech: ['Nuxt', 'Assessment Engine'],
    link: '#'
  },
  {
    title: 'LMS Sekolah Rakyat & Akademi Pengentasan Kemiskinan',
    subtitle: 'Learning Management System',
    description:
      'Platform pembelajaran daring untuk pendidikan berbasis komunitas dan penguatan kapasitas SDM.',
    tech: ['LMS', 'Java-based Backend', 'Web Platform'],
    link: '#'
  }
]
</script>

<style scoped>
.text-primary {
  color: #1e3a8a;
}
</style>