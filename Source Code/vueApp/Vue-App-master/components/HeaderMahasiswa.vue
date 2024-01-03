<template>
  <header class="py-4 bg-third border-b border-slate-800">
    <div class="px-24 flex items-start justify-between font-poppins">
      <NuxtLink
        to="/"
        class="flex text-xl font-poppins text-[#263A59] hover:bg-[#263A59] px-6 py-2 rounded-lg hover:text-third transition ease-linear duration-300">
        Simapres.</NuxtLink
      >
      <nav class="hidden md:flex items-center gap-10 text-sm">
        <NuxtLink
          to="/"
          class="text-[#263A59] hover:border-b-2 hover:border-b-[#263A59] transition ease-linear duration-300"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/curicullum-vitae"
          class="text-[#263A59] hover:border-b-2 hover:border-b-[#263A59] transition ease-linear duration-300"
          >Curicullum Vitae</NuxtLink
        >
        <NuxtLink
          to="/kepengurusan"
          class="text-[#263A59] hover:border-b-2 hover:border-b-[#263A59] transition ease-linear duration-300"
          >Data</NuxtLink
        >
        <NuxtLink
          to="#"
          class="px-6 py-2 rounded-lg bg-transparent border-2 border-[#263A59] text-[#263A59] hover:bg-[#0C356A] hover:text-third transition duration-300"
          >Logout</NuxtLink
        >
      </nav>
      <button class="md:hidden">
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
</template>
