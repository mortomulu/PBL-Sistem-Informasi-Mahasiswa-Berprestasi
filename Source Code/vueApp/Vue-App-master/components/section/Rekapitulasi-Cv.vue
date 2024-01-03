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
          class="px-6 py-4 font-poppins font-medium bg-third text-secondary shadow-inner shadow-[#000000]"
          >Rekapitulasi</NuxtLink
        >
        <NuxtLink
          to="/curicullum-vitae-sertifikasi"
          class="px-6 py-4 font-poppins font-medium text-[#fff] hover:bg-third hover:text-secondary transition ease-linear duration-300"
          >Sertifikasi</NuxtLink
        >
      </nav>
      <button
        class="my-8 w-full rounded-md bg-third p-2 font-medium hover:bg-primary hover:text-[#fff] transition ease-in duration-150"
        onclick="window.location.href='data_datadiri.html'">
        Rekapitulasi
      </button>
      <table
        class="min-w-full divide-y divide-primary shadow-lg shadow-primary mb-8">
        <caption class="hidden">
          asdas
        </caption>
        <thead class="bg-primary">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Jenis Lomba
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Nama Lomba
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Tanggal
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              File PDF
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="bg-third bg-opacity-80 text-[#000000]">
            <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td class="px-6 py-4 whitespace-nowrap">Dicoding Challenge</td>
            <td class="px-6 py-4 whitespace-nowrap">4 Januari 2023</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <embed
                src="https://example.com/path/to/your/file.pdf"
                type="application/pdf"
                width="100"
                height="100" />
            </td>
          </tr>
          <tr class="bg-primary">
            <td class="px-6 py-4 text-[#fff] whitespace-nowrap">Jane Smith</td>
            <td class="px-6 py-4 text-[#fff] whitespace-nowrap">
              ID Camp Competition
            </td>
            <td class="px-6 py-4 text-[#fff] whitespace-nowrap">
              23 Desember 2023
            </td>
            <td class="px-6 py-4 text-[#fff] whitespace-nowrap">
              <embed
                src="https://example.com/path/to/another/file.pdf"
                type="application/pdf"
                width="100"
                height="100" />
            </td>
          </tr>
          <tr class="bg-third bg-opacity-80 text-[#000000]">
            <td class="px-6 py-4 whitespace-nowrap">Sam Smith</td>
            <td class="px-6 py-4 whitespace-nowrap">ID Posi Competition</td>
            <td class="px-6 py-4 whitespace-nowrap">23 November 2023</td>
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
