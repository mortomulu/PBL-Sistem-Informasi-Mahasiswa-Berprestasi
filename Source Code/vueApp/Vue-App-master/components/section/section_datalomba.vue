<template>
    <section class="main__container flex flex-col items-center justify-center w-90vw p-6">
        <div
          class="forms rounded-tl-10 rounded-br-10 p-0 overflow-hidden"
          style="border-radius: 10px 10px 10px 10px; padding: 0; overflow: hidden"
        >
          <div class="container__input__data grid grid-cols-2 w-full">
            <div class="navigator__form__section flex flex-row justify-center w-full p-6">
              <div class=" border border-black border-solid" style="border-width: 1px; border-color: black">
                <div class=" p-2 md:p-4 bg-yellow-300 border-b border-black border-solid text-center "
                  style="
                    padding: 10px 40px;
                    background-color: #ffc857;
                    border-bottom-color: black;
                    border-bottom-width: 1px;
                    text-align: center;
                  "
                >
                  <h3>Testing Name</h3>
                </div>
                <div class=" p-5" style="padding: 20px">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdPUrvq_PqcJ6xThm45NFBRnGYPElU28gAw&usqp=CAU"
                    alt="profile"
                  />
                </div>
              </div>
              <div class=" flex flex-col items-center border border-black border-solid ml-10px w-35"
                id="#nav__container"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  border-width: 1px;
                  border-color: black;
                  margin-left: 10px;
                  width: 35%;
                "
              >
              <NuxtLink to="data_datadiri" style="
                    padding: 10px 20px;
                    border-bottom-color: black;
                    border-bottom-width: 1px;
                    width: 100%;
                    text-align: center;
                  ">
                  Data Diri
                </NuxtLink>
                <NuxtLink to="data_datalomba" style="
                    padding: 10px 20px;
                    border-bottom-color: black;
                    border-bottom-width: 1px;
                    width: 100%;
                    text-align: center;
                  ">
                  Data Lomba
                </NuxtLink>
                <NuxtLink to="data_dokumentasi" style="
                    padding: 10px 20px;
                    border-bottom-color: black;
                    border-bottom-width: 1px;
                    width: 100%;
                    text-align: center;
                  ">
                  Dokumentasi
                </NuxtLink>
              </div>
            </div>
            <div class="form__section">
              <h1>Data Lomba</h1>
              <form action="">
                <div class="input-custom flex flex-col ">
                  <label for="">Jenis Prestasi</label>
                  <input class=" mt-2 rounded-sm bg-blue-300 p-2 outline-none"
                    type="text"
                    placeholder="test"
                    style="background-color: white"
                  />
                </div>
                <div class="input-custom flex flex-col">
                  <label for="">Tingkat Perlombaan</label>
                  <input class=" mt-2 rounded-sm bg-blue-300 p-2 "
                    type="text"
                    placeholder="test"
                    style="background-color: white"
                  />
                </div>
                <div class="input-custom flex flex-col">
                  <label for="">Nama Perlombaan</label>
                  <input class=" mt-2 rounded-sm bg-blue-300 p-2 "
                    type="text"
                    placeholder="test"
                    style="background-color: white"
                  />
                </div>
                <div class="input-custom flex flex-col">
                  <label for="">Jenis Lomba</label>
                  <input class=" mt-2 rounded-sm bg-blue-300 p-2 "
                    type="text"
                    placeholder="test"
                    style="background-color: white"
                  />
                </div>
                <div class="input-custom col-span-2 flex flex-col">
                  <label for="">Catatan Lomba</label>
                  <textarea
                    style="background-color: white"
                  ></textarea>
                </div>
              </form>
              <hr />
              <div class=" w-full flex flex-row justify-end mt-10"
                style="
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  justify-content: end;
                  margin-top: 10px;
                "
              >
                <a class=" px-5 py-2 bg-white rounded-md font-poppins font-semibold cursor-pointer"
                  style="
                    padding: 5px 20px;
                    background-color: white;
                    border-radius: 5px;
                    font-family: 'Poppins';
                    font-weight: 500;
                    cursor: pointer;
                  "
                  >Save</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

/*
! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.nav__container{
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 1rem;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.flex__row{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav__item{
  padding-left: 1rem;
  padding-right: 1rem;
}

.hero__section{
  display: flex;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
}

.news_section{
  display: flex;
  flex-direction: row;
}

.news__left{
  display: flex;
  width: 45vw;
  flex-direction: column;
}

.news__right{
  width: 35vw;
}

.news__title{
  margin-top: 0.25rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.news__puplished{
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 300;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1000;
  min-width: 120px;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown button{
  height: 100%;
  border-left-width: 1px;
  --tw-border-opacity: 1;
  border-left-color: rgb(0 0 0 / var(--tw-border-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.dropdown__item{
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.dropdown__item:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.news__bottom{
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(6, minmax(0, 1fr));
  gap: 1.5rem;
}

footer{
  display: flex;
  align-items: center;
  justify-content: center;
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
  padding: 2.5rem;
}

footer div{
  width: 80vw;
  font-weight: 600;
}

.img-right{
  height: 60px;
  width: 100px;
  border-radius: 0.375rem;
}

@media (min-width: 768px){
  .img-right{
    height: 90px;
    width: 130px;
  }
}

@media (min-width: 1280px){
  .img-right{
    height: 150px;
    width: 200px;
  }
}

.main__container{
  margin: auto auto;
  display: flex;
  width: 90vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile h2{
  margin-top: 0.75rem;
  font-family: Poppins;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.profile button{
  margin-top: 0.75rem;
  cursor: pointer;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-family: Poppins;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.forms{
  margin-top: 3rem;
  width: 100%;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 0.75rem;
}

.forms nav{
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-bottom-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.forms nav a{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: 500;
}

.forms nav a:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.forms button{
  margin-top: 1rem;
  width: 100%;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
  padding: 0.5rem;
  font-weight: 500;
}

.forms form{
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.forms form .input-custom{
  display: flex;
  flex-direction: column;
}

.forms form .input-custom input, textarea{
  margin-top: 0.5rem;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
  padding: 0.5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.forms form .input-custom label{
  font-family: Poppins;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.forms table{
  margin-top: 1.5rem;
  width: 100%;
  table-layout: fixed;
}

.form table tr .id{
  width: 16.666667%;
}

.form table tr .half{
  width: 33.333333%;
}

.borders{
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.form .head{
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
}

.table-content-center{
  text-align: center;
}

.container__input__data{
  border-radius: 55px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.container__input__data .form__section{
  display: flex;
  width: 100%;
  flex-direction: column;
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
  padding: 0.75rem;
  font-family: Poppins;
}

.container__input__data .form__section h1{
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
}

.container__input__data .form__section hr > :not([hidden]) ~ :not([hidden]){
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
  --tw-divide-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-divide-opacity));
}

.container__input__data .navigator__form__section{
  background-color: white;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 1.5rem;
}

#nav__container a:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
}

.container__input__data .form__section__grid{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  --tw-bg-opacity: 1;
  background-color: rgb(255 200 87 / var(--tw-bg-opacity));
  font-family: Poppins;
}

.item__input__document{
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 1.25rem;
}

.container__save__document{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>