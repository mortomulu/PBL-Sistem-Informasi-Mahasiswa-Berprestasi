<template>
  <div id="tentang" class="pt-10 md:pt-20">
    <div class="container space-y-12">
      <div class="text-center">
        <h1
          class="text-white font-poppins text-xl mb-4 md:text-2xl font-bold text-[#ffff]">
          Infografis SIMAPRES
        </h1>
        <p
          class="max-w-2xl mx-auto text-lg font-light font-poppins text-[#FFC436]">
          Informasi Terkait Beasiswa Dan Lomba Terkini
        </p>
      </div>
      <div class="flex gap-8 md:gap-10 md:flex-row flex-col-reverse">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="200"
          class="w-full md:w-2/3 space-y-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="p-4 rounded space-y-2 bg-transparent border-2 border-fourth text-fourth hover:bg-third hover:text-[#263A59] hover:border-none transition ease-linear duration-300">
            <h2 class="text-lg md:text-xl text-white font-bold">
              {{ item.title }}
            </h2>
            <p class="text-primary">{{ item.description }}</p>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="100"
            src="~/assets/images/logo-vokasi-simapres.jpg"
            alt="Preview"
            class="rounded-full w-[300px] mx-auto mt-24" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Beasiswa ID Camp",
    description: "Beasiswa Dari Indosat yang berkerja sama dengan Dicoding ",
  },
  {
    title: "Beasiswa Astra",
    description:
      "Menjelaskan Tentang Angkatan baru atau Generasi baru yang menciptakan Inovasi luar biasa kepada organisasi dan mahasiswa",
  },
  {
    title: "Sambati UB",
    description: "Acara Sambut Mahasiswa Baru Untuk Mengenal lingkungan Kampus",
  },
  {
    title: "Technotion",
    description:
      "Event Besar yang ada di tahun ini dan memiliki berbagai macam event lagi dan Sambati menjadi Salah satunya",
  },
];
</script>
