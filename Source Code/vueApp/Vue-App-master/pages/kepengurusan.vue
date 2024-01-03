<template>
  <section>
    <div>
      <h2>Data yang Diinputkan</h2>
      <p>Nama: {{ $route.query.nama }}</p>
      <p>Prodi: {{ $route.query.prodi }}</p>
      <p>Nim: {{ $route.query.nim }}</p>
      <p>Angkatan: {{ $route.query.angkatan }}</p>
      <p>Nomer Handphone: {{ $route.query.no_hp }}</p>
      <p>Email: {{ $route.query.email }}</p>
    </div>
  </section>
</template>
<script>
export default {
  created() {
    if (this.$route.query.nama && this.$route.query.email) {
      console.log("Nama:", this.$route.query.nama);
      console.log("Prodi:", this.$route.query.prodi);
      console.log("Nim:", this.$route.query.nim);
      console.log("Angkatan:", this.$route.query.angkatan);
      console.log("Nomer Handphone:", this.$route.query.no_hp);
      console.log("Email:", this.$route.query.email);
    }
  },
};
</script>
