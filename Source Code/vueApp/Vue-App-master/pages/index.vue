<template>
  <section>
    <SectionHero />
    <SectionTentang />
    <SectionFitur />
  </section>
</template>
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
