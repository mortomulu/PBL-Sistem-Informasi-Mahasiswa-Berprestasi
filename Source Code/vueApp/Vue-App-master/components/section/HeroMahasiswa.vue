import type { NuxtLink } from '#build/components';
<template>
  <section id="home" class="pt-20 pb-32">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center pl-8 lg:w-1/2 xl:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="100"
            class="font-medium text-md text-white font-poppins mb-8 text-third">
            Sistem Informasi Mahasiswa Berprestasi ( SIMAPRES)
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="200"
            class="text-5xl font-bold font-poppins text-fourth">
            " Inspirasi, Inovasi, dan Prestasi: Membangun Masa Depan Unggul "
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="300"
            class="text-base font-light py-12 font-poppins line-clamp-3 text-fourth">
            Selamat datang di Sistem Informasi Mahasiswa Berprestasi! Temukan
            informasi terkini dan peluang-peluang menarik untuk meningkatkan
            prestasi akademis Anda.
          </p>

          <div class="">
            <NuxtLink
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="3000"
              class="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full bg-third text-primary hover:bg-secondary hover:text-third shadow-lg transition duration-300 ease-linear"
              to="/data_datadiri">
              Learn More
            </NuxtLink>
          </div>
        </div>
        <div class="w-full self-end px-4 lg:w-1/2 xl:w-1/2">
          <div class="relative mt-10 xl:mt-9 xl:right-0 w-[550px]">
            <img
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="3000"
              src="~/assets/images/Hero Section 2.png"
              alt="Adhicakra"
              class="w-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
