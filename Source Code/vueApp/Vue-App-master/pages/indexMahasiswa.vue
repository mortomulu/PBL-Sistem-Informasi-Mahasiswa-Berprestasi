<template>
  <section>
    <SectionHeroMahasiswa />
    <SectionTentang />
    <SectionFiturMahasiswa />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "mahasiswa",
});
</script>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({
      // Konfigurasi AOS
    });
  },
};
</script>
