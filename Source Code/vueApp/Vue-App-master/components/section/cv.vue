text-[#fff]
<template>
  <section class="flex flex-col items-center justify-center p-6 w-5/6 mx-auto">
    <div class="flex flex-col items-center justify-center">
      <img
        src="https://via.placeholder.com/150"
        alt="foto-profil"
        class="w-[120px] h-[150px] rounded-md bg-[#fff] mb-8"
        onerror="this.onerror=null;this.src='https://via.placeholder.com/150'" />
      <h2 class="font-normal font-montserrat text-[#fff] uppercase text-base">
        Naufal Daffa Zaidan Anwar
      </h2>
      <button
        onclick="window.location.href='data_datadiri.vue'"
        class="px-8 py-2 bg-transparent border-2 shadow-sm shadow-third border-third rounded-lg text-third mt-8 hover:bg-third hover:shadow-lg hover:shadow-primary hover:text-primary transition ease-linear duration-200">
        Edit Data
      </button>
    </div>
    <div class="mt-12 w-full rounded-md bg-secondary p-3">
      <nav
        class="flex w-full flex-row items-center justify-center border-b-[1px] border-b-third">
        <NuxtLink
          to="/curicullum-vitae"
          class="px-6 py-4 font-poppins font-medium bg-third text-secondary shadow-inner shadow-[#000000]"
          >Data Diri</NuxtLink
        >
        <NuxtLink
          to="/curicullum-vitae-data-lomba"
          class="px-6 py-4 font-poppins font-medium text-[#fff] hover:bg-third hover:text-secondary transition ease-linear duration-300"
          >Data Lomba</NuxtLink
        >
        <NuxtLink
          to="/curicullum-vitae-rekapitulasi"
          class="px-6 py-4 font-poppins font-medium text-[#fff] hover:bg-third hover:text-secondary transition ease-linear duration-300"
          >Rekapitulasi</NuxtLink
        >
        <NuxtLink
          to="/curicullum-vitae-sertifikasi"
          class="px-6 py-4 font-poppins font-medium text-[#fff] hover:bg-third hover:text-secondary transition ease-linear duration-300"
          >Sertifikasi</NuxtLink
        >
      </nav>
      <button
        class="my-8 w-full rounded-md bg-third p-2 font-medium hover:bg-[#0C356A] hover:text-[#fff] transition ease-in duration-150"
        onclick="window.location.href='data_datadiri.html'">
        Data Diri
      </button>
      <form class="mx-4 grid grid-cols-2 gap-4 mb-8" @submit.prevent="sendData">
        <div class="flex flex-col">
          <label class="font-poppins text-sm" for="nama-input"
            >Nama Lengkap</label
          >
          <input
            disabled
            v-model="nama"
            class="mt-2 rounded-md text-[#000000] bg-fourth p-2 outline-none outline-offset-2"
            id="nama-input"
            placeholder="Alexander Graham Bell"
            type="text" />
        </div>
        <div class="flex flex-col">
          <label class="font-poppins text-sm" for="prodi-input">Prodi</label>
          <input
            disabled
            v-model="prodi"
            class="mt-2 rounded-md text-[#000000] bg-fourth p-2 outline-none outline-offset-2"
            id="prodi-input"
            placeholder="Teknologi Informasi" />
        </div>
        <div class="flex flex-col">
          <label class="font-poppins text-sm" for="nim-input">NIM</label>
          <input
            disabled
            v-model="nim"
            type="number"
            class="mt-2 rounded-md text-[#000000] bg-fourth p-2 outline-none outline-offset-2"
            id="nim-input"
            placeholder="223140707231095" />
        </div>
        <div class="flex flex-col">
          <label class="font-poppins text-sm" for="angkatan-input"
            >Angkatan</label
          >
          <input
            disabled
            v-model="angkatan"
            type="number"
            min="2018"
            max="2030"
            step="1"
            class="mt-2 rounded-md text-[#000000] bg-fourth p-2 outline-none outline-offset-2"
            id="angkatan-input"
            placeholder="2023" />
        </div>
        <div class="flex flex-col">
          <label class="font-poppins text-sm" for="nohanphone-input"
            >No. Handphone</label
          >
          <input
            disabled
            v-model="no_hp"
            type="number"
            class="mt-2 rounded-md text-[#000000] bg-fourth p-2 outline-none outline-offset-2"
            id="nohanphone-input"
            placeholder="082109839023" />
        </div>
        <div class="flex flex-col">
          <label class="font-poppins text-sm" for="email-input"
            >Alamat email</label
          >
          <input
            disabled
            type="email"
            v-model="email"
            class="mt-2 rounded-md text-[#000000] bg-fourth p-2 outline-none outline-offset-2"
            id="email-input"
            placeholder="alexandergambel@gmail.com" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nama: "",
      prodi: "",
      nim: "",
      angkatan: "",
      no_hp: "",
      email: "",
    };
  },
  methods: {
    sendData() {
      this.$router.push({
        name: "curicullum-vitae",
        query: {
          nama: this.nama,
          prodi: this.prodi,
          nim: this.nim,
          angkatan: this.angkatan,
          no_hp: this.no_hp,
          email: this.email,
        },
      });
    },
  },
};
</script>
