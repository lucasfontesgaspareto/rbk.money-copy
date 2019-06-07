<template>
  <div class="font-roboto antialiased">
    <div class="absolute w-full z-10">
      <header
        class="container w-full mx-auto flex justify-between items-center relative text-white text-md font-medium"
      >
        <div class="p-8 pr-0">
          <rbk-money-logo class="w-20" />
        </div>
        <nav class="p-8 pl-0">
          <ul class="flex">
            <li class="mx-4">
              <a href="#">About</a>
            </li>
            <li class="mx-4">
              <a href="#">Clients</a>
            </li>
            <li class="mx-4">
              <a href="#">Products</a>
            </li>
            <li class="mx-4">
              <a href="#">Documentation</a>
            </li>
            <li class="mx-4">
              <a href="#">Partners</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="p-8">SIGN IN</a>
        <a href="#" class="p-8">RU</a>
      </header>
    </div>
    <main class="overflow-hidden">
      <section class="Hero__section p-40 text-white">
        <div class="container h-full mx-auto flex">
          <div class="w-1/2 flex flex-col">
            <h1 class="text-5xl font-medium leading-none mr-auto">
              Global Platform for All Payment Types
            </h1>
            <p class="text-xl font-light mr-auto my-5">
              Add RBK.money to your business site in 48 hours
            </p>
            <div class="flex my-5">
              <a
                href="#"
                class="shadow-xl rounded-full mx-4 py-3 px-8 bg-rbk-green font-medium text-base align-bottom leading-normal"
                >Sign up</a
              >
              <a
                href="#"
                class="shadow-xl rounded-full mx-4 py-3 px-8 border-solid border-2 font-medium text-base align-bottom leading-normal"
                >How it works</a
              >
            </div>
          </div>
          <div class="w-1/2">
            <div>
              <img src="undraw_all_the_data_h4ki.svg" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
      <section class="p-40">
        <div class="container mx-auto">
          <h1 class="text-5xl font-medium text-rbk-marine my-20">
            Wider Opportunities with RBK.money
          </h1>
          <div class="flex flex-row justify-between">
            <div
              class="flex w-1/2 mr-4 flex-col"
              :style="`margin-top:${top}px`"
            >
              <div class="Card__section">
                <div class="Card__image">
                  <img
                    src="undraw_around_the_world_v9nu.svg"
                    alt="Around the world"
                  />
                </div>
                <h2 class="text-3xl font-medium text-rbk-marine my-4">
                  Payments in 60 countries
                </h2>
                <p class="font-light text-rbk-marine">
                  RBK.money has licenses of the Central Bank of Russia and the
                  FCA UK. Receive payments and work with customers in Russia and
                  other countries with out limits.
                </p>
              </div>
              <div class="Card__section">
                <div class="Card__image">
                  <img
                    src="undraw_around_the_world_v9nu.svg"
                    alt="Around the world"
                  />
                </div>
                <h2 class="text-3xl font-medium text-rbk-marine my-4">
                  Payments in 60 countries
                </h2>
                <p class="font-light text-rbk-marine">
                  RBK.money has licenses of the Central Bank of Russia and the
                  FCA UK. Receive payments and work with customers in Russia and
                  other countries with out limits.
                </p>
              </div>
              <div class="Card__section">
                <div class="Card__image">
                  <img
                    src="undraw_around_the_world_v9nu.svg"
                    alt="Around the world"
                  />
                </div>
                <h2 class="text-3xl font-medium text-rbk-marine my-4">
                  Payments in 60 countries
                </h2>
                <p class="font-light text-rbk-marine">
                  RBK.money has licenses of the Central Bank of Russia and the
                  FCA UK. Receive payments and work with customers in Russia and
                  other countries with out limits.
                </p>
              </div>
            </div>
            <div
              class="flex w-1/2 ml-4 flex-col"
              :style="`margin-bottom:${top}px`"
            >
              <div class="Card__section">
                <div class="Card__image">
                  <img
                    src="undraw_mobile_payments_edgf.svg"
                    alt="Around the world"
                    class="right-0"
                  />
                </div>
                <h2 class="text-3xl font-medium text-rbk-marine my-4">
                  One сontract for all MOPs
                </h2>
                <p class="font-light text-rbk-marine">
                  RBK.money has licenses of the Central Bank of Russia and the
                  FCA UK. Receive payments and work with customers in Russia and
                  other countries with out limits.
                </p>
              </div>
              <div class="Card__section">
                <div class="Card__image">
                  <img
                    src="undraw_mobile_payments_edgf.svg"
                    alt="Around the world"
                    class="right-0"
                  />
                </div>
                <h2 class="text-3xl font-medium text-rbk-marine my-4">
                  One сontract for all MOPs
                </h2>
                <p class="font-light text-rbk-marine">
                  RBK.money has licenses of the Central Bank of Russia and the
                  FCA UK. Receive payments and work with customers in Russia and
                  other countries with out limits.
                </p>
              </div>
              <div class="Card__section">
                <div class="Card__image">
                  <img
                    src="undraw_mobile_payments_edgf.svg"
                    alt="Around the world"
                    class="right-0"
                  />
                </div>
                <h2 class="text-3xl font-medium text-rbk-marine my-4">
                  One сontract for all MOPs
                </h2>
                <p class="font-light text-rbk-marine">
                  RBK.money has licenses of the Central Bank of Russia and the
                  FCA UK. Receive payments and work with customers in Russia and
                  other countries with out limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white Wave__section h-screen">
        <div class="relative w-full h-full">
          <wave class="absolute swell opacity-50 z-10"></wave>
          <wave class="absolute swell intercale opacity-75 z-20"></wave>
          <wave class="absolute swell intercale2 opacity-25 z-30"></wave>
          <wave class="absolute z-40"></wave>
          <div class="relative text-white z-50">
            <div class="flex h-full px-40 py-20">
              <div class="w-1/2 p-10">
                <h1 class="text-5xl font-medium my-4">Market Solutions</h1>
                <p class="font-light mb-10">
                  We offer safe and reliable technologies for accepting all
                  types of payments in different business areas. Our solutions
                  are designed to meet the characteristics and requirements of
                  each industry.
                </p>
                <a
                  href="#"
                  class="shadow-xl rounded-full mx-4 py-4 px-8 bg-rbk-green font-medium text-base align-bottom leading-normal"
                >
                  Fint out solutions
                </a>
              </div>
              <div class="w-1/2 p-10">
                <div class="bg-white p-10 my-10 rounded-lg shadow relative">
                  <h2 class="text-3xl font-medium text-rbk-marine my-4">
                    One сontract for all MOPs
                  </h2>
                  <p class="font-light text-rbk-marine">
                    RBK.money has licenses of the Central Bank of Russia and the
                    FCA UK. Receive payments and work with customers in Russia
                    other countries with out limits.
                  </p>
                  <button
                    class="absolute rounded-full w-10 h-10 bg-rbk-green text-4xl font-bold"
                    style="right: -2.5rem; top: 50%; transform: translate(-50%);"
                  >
                    ^
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import RbkMoneyLogo from '@/components/RbkMoneyLogo'
import Wave from '@/components/Wave'
export default {
  components: { RbkMoneyLogo, Wave },
  data() {
    return {
      top: 0
    }
  },
  methods: {
    handleScroll() {
      /*eslint-disable*/
      this.top = Math.floor(window.scrollY/100) * 5
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -10px, 0);
  }
  50% {
    transform: translate3d(0, 15px, 0);
  }
}

/* Hero Section */
.Hero__section,
.Hero__section::before,
.Hero__section::after {
  border-radius: 0% 0% 50% 50%;
  will-change: transform;
  @apply bg-rbk-blue;
  @apply w-full;
}

.Hero__section::before,
.Hero__section::after {
  content: '';
  top: 0px;
  z-index: -1;
  @apply absolute;
  @apply h-full;
}

.Hero__section::before {
  left: -50px;
  animation: swell 7s ease -1.25s infinite;
  opacity: 0.3;
}

.Hero__section::after {
  left: 50px;
  animation: swell 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  opacity: 0.1;
}

/* Card Section */
.Card__section {
  box-shadow: 0 10px 29px hsla(222, 100%, 68%, 0.22);
  @apply p-10;
  @apply my-10;
  @apply rounded-lg;
  @apply bg-white;
}

.Card__image {
  height: 100px;
  @apply relative;
}

.Card__image img {
  top: -100px;
  height: 200px;
  @apply absolute;
}

/* Wave Section */
.Wave__section .swell {
  animation: swell 7s ease -1.25s infinite;
}
.Wave__section .swell.intercale {
  animation: swell 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}
.Wave__section .swell.intercale-2 {
  animation: swell 7s ease-out infinite;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  @apply bg-rbk-blue;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.5);
  @apply rounded-full;
  @apply mx-2;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-rbk-green;
}
</style>
