<template>
  <div id="fitur" class="pt-10 pb-10 md:pt-20">
    <div class="container space-y-12">
      <div class="text-center">
        <h1 class="text-white text-xl md:text-2xl font-bold text-[#ffff]">
          Analytics
        </h1>
        <p class="max-w-2xl mx-auto text-[#FFC436]">
          Analisis Terkini Terkait Data yang diterima di SIMAPRES
        </p>
      </div>
      <div class="">
        <NuxtLink
          to="/analyticsMahasiswa"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="p-4 rounded space-y-2 bg-third hover:text-black transition text-center">
            <Icon :name="item.icon" size="3em" class="text-primary" />
            <h2
              class="text-lg md:text-xl text-white hover:text-black font-semibold text-primary">
              {{ item.title }}
            </h2>
            <p class="text-primary">
              {{ item.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtLink } from "#build/components";

const items = [
  {
    icon: "heroicons:document-check",
    title: "Peningkatan Prestasi Mahasiswa dari tahun ke tahun",
    description:
      "Analisis Menunjukkan bahwa pada tahun ini meningkat sebanyak 13% ",
  },
  {
    icon: "heroicons:chart-bar",
    title: "Peningkatan Mahasiswa Berprestasi Tahun 2023",
    description:
      "Berdasarkan analisis Mahasiswa Menyumbang prestasi pada tahun ini sebanyak 200+ Mahasiswa",
  },
  {
    icon: "heroicons:academic-cap",
    title: "Dominasi Prestasi",
    description:
      "Berdasarkan Analisis Prestasi Mahasiswa Vokasi lebih banyak ke Prestasi Akademik pada jenis Olahraga",
  },
];
</script>
