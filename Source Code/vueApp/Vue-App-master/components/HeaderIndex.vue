<template>
  <header class="py-4 border-b bg-third border-slate-800">
    <div class="px-24 flex items-center justify-between font-poppins">
      <NuxtLink
        to="/"
        class="font-extrabold text-[#0C356A] transition ease-in-out duration-300"
        >SIMAPRES</NuxtLink
      >
      <nav class="hidden md:flex items-center gap-10 text-sm">
        <NuxtLink
          to="/#Hero"
          class="text-[#0C356A] hover:border-b-2 hover:border-b-primary transition"
          >Home</NuxtLink
        >
        <!-- <NuxtLink to="/about" class="hover:text-[#FFC436] transition"
            >Curicullum Vitae</NuxtLink
          >
          <NuxtLink to="/kepengurusan" class="hover:text-[#FFC436] transition"
            >Data</NuxtLink
          > -->
        <NuxtLink
          to="/login"
          class="px-6 py-2 rounded-lg bg-transparent border-2 border-[#0C356A] text-[#0C356A] hover:bg-[#0C356A] hover:text-third transition text-white font-semibold"
          >Login / Sign Up</NuxtLink
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
