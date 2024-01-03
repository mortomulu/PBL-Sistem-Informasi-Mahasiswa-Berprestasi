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
          class="px-6 py-4 font-poppins font-medium bg-third text-secondary shadow-inner shadow-[#000000]"
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
        class="my-8 w-full rounded-md bg-third p-2 font-medium hover:bg-primary hover:text-[#fff] transition ease-in duration-150"
        onclick="window.location.href='data_datadiri.html'">
        Data Lomba
      </button>
      <table
        class="min-w-full divide-y divide-primary shadow-lg shadow-primary mb-8">
        <caption class="my-4 hidden">
          Sertifikasi
        </caption>
        <thead class="bg-primary">
          <tr>
            <th
              scope="col"
              class="px-3 py-6 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Jenis Prestasi
            </th>
            <th
              scope="col"
              class="px-3 py-6 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Nama Perlombaan
            </th>
            <th
              scope="col"
              class="px-3 py-6 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Tingkat Perlombaan
            </th>
            <th
              scope="col"
              class="px-3 py-6 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Jenis Lomba
            </th>
            <th
              scope="col"
              class="px-3 py-6 text-left text-xs font-medium text-[#fff] uppercase tracking-wider">
              Keterangan Lomba & Juara
            </th>
          </tr>
        </thead>
        <tbody class="bg-third bg-opacity-80 divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">John Doe</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              john@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">Admin</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">Akademik</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Medali Perunggu
            </td>
          </tr>
        </tbody>
        <tbody class="bg-primary divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Naufal Daffa Zaidan Anwar
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              naufaldaffa@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Front End Developer
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Non-Akademik
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Medali Perak
            </td>
          </tr>
        </tbody>
        <tbody class="bg-third bg-opacity-80 divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Risma Qurrotu Aini
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              rmsaini@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">Manager</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Non-Akademik
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Medali Emas
            </td>
          </tr>
        </tbody>
        <tbody class="bg-primary divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">John Doe</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              john@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">Admin</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">Akademik</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Medali Perunggu
            </td>
          </tr>
        </tbody>
        <tbody class="bg-third bg-opacity-80 divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Naufal Daffa Zaidan Anwar
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              naufaldaffa@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Front End Developer
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Non-Akademik
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Medali Perak
            </td>
          </tr>
        </tbody>
        <tbody class="bg-primary divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Risma Qurrotu Aini
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              rmsaini@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">Manager</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">
              Non-Akademik
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#fff]">Medali Emas</td>
          </tr>
        </tbody>
        <tbody class="bg-third bg-opacity-80 divide-y divide-primary">
          <tr>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Risma Qurrotu Aini
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              rmsaini@example.com
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">Manager</td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Non-Akademik
            </td>
            <td class="px-3 py-4 whitespace-nowrap text-[#000000]">
              Medali Emas
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
