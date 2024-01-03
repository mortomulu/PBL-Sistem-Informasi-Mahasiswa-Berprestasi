import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import __nuxt_component_1 from './Icon-93df2dd7.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './index-8093c020.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _imports_0$1 = "" + buildAssetsURL("Hero Section 2.6545946b.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "pt-20 pb-32"
  }, _attrs))}><div class="container"><div class="flex flex-wrap"><div class="w-full self-center pl-8 lg:w-1/2 xl:w-1/2" data-aos="fade-up-right" data-aos-duration="3000"><h1 class="font-medium text-md text-white font-poppins mb-8 text-[#FFC436]"> Sistem Informasi Mahasiswa Berprestasi ( SIMAPRES) </h1><p class="text-5xl font-bold font-poppins text-white"> &quot; Inspirasi, Inovasi, dan Prestasi: Membangun Masa Depan Unggul &quot; </p><p class="text-base font-light text-yellow-200 py-12 font-poppins line-clamp-3"> Selamat datang di Sistem Informasi Mahasiswa Berprestasi! Temukan informasi terkini dan peluang-peluang menarik untuk meningkatkan prestasi akademis Anda. </p><div class=""><a href="#" class="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-white hover:text-yellow-300 transition duration-300 ease-in-out">Learn More</a></div></div><div class="w-full self-end px-4 lg:w-1/2 xl:w-1/2"><div class="relative mt-10 xl:mt-9 xl:right-0 w-[550px]"><img${ssrRenderAttr("src", _imports_0$1)} alt="Adhicakra" class="w-full mx-auto"></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("logo-vokasi-simapres.4671f8d1.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Tentang",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Beasiswa ID Camp",
        description: "Beasiswa Dari Indosat yang berkerja sama dengan Dicoding "
      },
      {
        title: "Beasiswa Astra",
        description: "Menjelaskan Tentang Angkatan baru atau Generasi baru yang menciptakan Inovasi luar biasa kepada organisasi dan mahasiswa"
      },
      {
        title: "Sambati UB",
        description: "Acara Sambut Mahasiswa Baru Untuk Mengenal lingkungan Kampus"
      },
      {
        title: "Technotion",
        description: "Event Besar yang ada di tahun ini dan memiliki berbagai macam event lagi dan Sambati menjadi Salah satunya"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "tentang",
        class: "pt-10 md:pt-20"
      }, _attrs))}><div class="container space-y-12"><div class="text-center"><h1 class="text-white font-poppins text-xl mb-4 md:text-2xl font-bold"> Infografis SIMAPRES </h1><p class="max-w-2xl mx-auto text-lg font-light font-poppins text-[#FFC436]"> Informasi Terkait Beasiswa Dan Lomba Terkini </p></div><div class="flex gap-8 md:gap-10 md:flex-row flex-col-reverse"><div class="w-full md:w-2/3 space-y-4"><!--[-->`);
      ssrRenderList(items, (item, index2) => {
        _push(`<div class="p-4 rounded space-y-2 border border-white hover:bg-[#FFC436] hover:border-none transition ease-in duration-300"><h2 class="text-lg md:text-xl text-white font-bold">${ssrInterpolate(item.title)}</h2><p>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div><div class="w-full md:w-1/2"><img${ssrRenderAttr("src", _imports_0)} alt="Preview" class="rounded-full shadow-lg w-[300px] mx-auto mt-24"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Tentang.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Fitur",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        icon: "heroicons:document-check",
        title: "Peningkatan Prestasi Mahasiswa dari tahun ke tahun",
        description: "Analisis Menunjukkan bahwa pada tahun ini meningkat sebanyak 13% "
      },
      {
        icon: "heroicons:chart-bar",
        title: "Peningkatan Mahasiswa Berprestasi Tahun 2023",
        description: "Berdasarkan analisis Mahasiswa Menyumbang prestasi pada tahun ini sebanyak 200+ Mahasiswa"
      },
      {
        icon: "heroicons:academic-cap",
        title: "Dominasi Prestasi",
        description: "Berdasarkan Analisis Prestasi Mahasiswa Vokasi lebih banyak ke Prestasi Akademik pada jenis Olahraga"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "fitur",
        class: "pt-10 pb-10 md:pt-20"
      }, _attrs))}><div class="container space-y-12"><div class="text-center"><h1 class="text-white text-xl md:text-2xl font-bold">Analytics</h1><p class="max-w-2xl mx-auto text-[#FFC436]"> Analisis Terkini Terkait Data yang diterima di SIMAPRES </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(items, (item, index2) => {
        _push(`<div class="p-4 rounded space-y-2 border border-slate-800 hover:bg-[#FFC436] hover:border-none hover:text-black transition text-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.icon,
          size: "3em",
          class: "text-white"
        }, null, _parent));
        _push(`<h2 class="text-lg md:text-xl text-white hover:text-black font-bold">${ssrInterpolate(item.title)}</h2><p>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Fitur.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionHero = __nuxt_component_0;
  const _component_SectionTentang = _sfc_main$2;
  const _component_SectionFitur = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionTentang, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionFitur, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-53a0e30c.mjs.map
