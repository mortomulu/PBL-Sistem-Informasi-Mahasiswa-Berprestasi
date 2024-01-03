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
        onclick="window.location.href='data_datadiri.html'"
        class="px-8 py-2 bg-transparent border-2 shadow-sm shadow-third border-third rounded-lg text-third mt-8 hover:bg-third hover:shadow-lg hover:shadow-primary hover:text-primary transition ease-linear duration-200">
        Edit Data
      </button>
    </div>
    <div class="mt-12 w-full rounded-md bg-secondary p-3">
      <nav
        class="flex w-full flex-row items-center justify-center border-b-[1px] border-b-third">
        <NuxtLink
          to="/curicullum-vitae"
          class="px-6 py-4 font-poppins font-medium text-[#fff] hover:bg-third hover:text-secondary transition ease-linear duration-300"
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
          class="px-6 py-4 font-poppins font-medium bg-third text-secondary shadow-inner shadow-[#000000]"
          >Sertifikasi</NuxtLink
        >
      </nav>
      <button
        class="my-8 w-full rounded-md bg-third p-2 font-medium hover:bg-primary hover:text-[#fff] transition ease-in duration-150"
        onclick="window.location.href='data_datadiri.html'">
        Sertifikasi
      </button>
      <table class="m-8 font-poppins shadow-lg shadow-primary mx-auto">
        <caption
          class="hidden p-3 my-4 font-poppins text-sm bg-primary bg-opacity-30 w-1/2 mx-auto">
          Sertifikasi
        </caption>
        <thead
          class="rounded-lg bg-primary text-[#fff] font-poppins text-sm uppercase font-light p-8">
          <tr class="m-6">
            <th class="p-4" style="width: 30%">Judul Lomba</th>
            <th class="p-4" style="width: 30%">Sertifikat Perlombaan</th>
            <th class="p-4" style="width: 30%">Dokumentasi Perlombaan</th>
            <th class="p-4" style="width: 30%">Surat Pembimbing Perlombaan</th>
          </tr>
        </thead>
        <tbody class="">
          <tr class="bg-third bg-opacity-80 text-[#000000]">
            <td class="text-center">Beasiswa Id Camp</td>
            <td>
              <img
                class="mx-auto w-[100px] items-center"
                src="~/assets/images/Foto-Profil.jpg"
                alt="" />
            </td>
            <td class="">
              <img
                class="mx-auto w-[100px] items-center"
                src="~/assets/images/Logo Vokasi.png"
                alt="" />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <embed
                src="https://example.com/path/to/another/file.pdf"
                type="application/pdf"
                width="100"
                height="100" />
            </td>
          </tr>
          <tr class="bg-primary bg-opacity-70">
            <td class="text-center text-[#fff]">Neutron</td>
            <td>
              <img
                class="mx-auto w-[100px] items-center"
                src="~/assets/images/Foto-Profil.jpg"
                alt="" />
            </td>
            <td
              class="
            ">
              <img
                class="mx-auto w-[100px] items-center"
                src="~/assets/images/Logo Vokasi.png"
                alt="" />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <embed
                src="https://example.com/path/to/another/file.pdf"
                type="application/pdf"
                width="100"
                height="100" />
            </td>
          </tr>
          <tr class="bg-third bg-opacity-80 text-[#000000]">
            <td class="text-center">Dicoding Challange</td>
            <td>
              <img
                class="mx-auto w-[100px] items-center"
                src="~/assets/images/Foto-Profil.jpg"
                alt="" />
            </td>
            <td
              class="
            ">
              <img
                class="mx-auto w-[100px] items-center"
                src="~/assets/images/Logo Vokasi.png"
                alt="" />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <embed
                src="https://example.com/path/to/another/file.pdf"
                type="application/pdf"
                width="100"
                height="100" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
