<template>
  <footer class="py-4 mt-auto border-t border-slate-800 bottom-0">
    <div class="flex px-16 text-sm justify-between">
      <p>&copy; {{ new Date().getFullYear() }} Simapres.</p>
      <div class="flex gap-6">
        <!-- Social media -->
        <NuxtLink
          href="#"
          target="_blank"
          class="hover:text-yellow-400 transition">
          <Icon name="fa6-brands:x-twitter" size="1.3em" />
        </NuxtLink>
        <NuxtLink
          href="#"
          target="_blank"
          class="hover:text-yellow-400 transition">
          <Icon name="fa6-brands:facebook" size="1.3em" />
        </NuxtLink>
        <NuxtLink
          href="#"
          target="_blank"
          class="hover:text-yellow-400 transition">
          <Icon name="fa6-brands:instagram" size="1.3em" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
