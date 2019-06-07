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
    </main>
  </div>
</template>

<script>
import RbkMoneyLogo from '@/components/RbkMoneyLogo'
export default {
  components: { RbkMoneyLogo },
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
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -5px, 0);
  }
  50% {
    transform: translate3d(0, 15px, 0);
  }
}

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

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-rbk-blue;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.5);
  @apply rounded-full;
  @apply mx-2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-rbk-green;
}
</style>
