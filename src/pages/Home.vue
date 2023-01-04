<template>
  <div class="flex flex-col gap-8 lg:gap-8">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-5/6 bg-slate-100 rounded-xl border-0 lg:p-8 p-4 flex flex-col justify-between gap-2 lg:h-[30rem] h-96">
        <div class="text-container">
        <p class="lg:text-4xl text-2xl text-gray-700 font-bold mb-5 text-left">
          Hello, It’s Jee here! I am an aspiring Jr. product designer.
        </p>
        <p class="lg:text-xl text-gray-500 text-md text-left">
          Crafting a digital product have been the biggest part of my life. The feeling of knowing that things I create can make a positive impact in someone’s life is a dream come true. I am a learner, a tinkerer, and always looks forward to new challenges.
        </p>
        </div>
        <div class="flex flex-row gap-1 lg:gap-2 flex-wrap content-start">
          <a type="button" href="mailto:justindermawanikhsan@gmail.com" class="transition ease-in-out duration-300 hover:scale-105 rounded-full flex flex-row gap-2 bg-blue-600 text-white py-2 px-4 lg:text-lg">
            Contact Me
          </a>
          <a type="button" href="https://www.linkedin.com/in/justindermawanikhsan/" class="transition ease-in-out duration-300 hover:scale-105 rounded-full border-2 border-blue-600 text-blue-600 p-2">
            <LinkedinIcon/>
          </a>
          <a type="button" href="https://twitter.com/jeejojas" class="transition ease-in-out duration-300 hover:scale-105 rounded-full border-2 border-blue-600 text-blue-600 p-2">
            <TwitterIcon/>
          </a>
          <a type="button" href="https://medium.com/@jeejojas" class="transition ease-in-out duration-300 hover:scale-105 rounded-full border-2 border-blue-600 text-blue-600 p-2">
            <PencilIcon/>
          </a>
        </div>
      </div>
      <div class="lg:w-1/6 bg-gradient-to-bl from-sky-500 to-indigo-500 rounded-xl border-0 lg:p-8 p-4 flex flex-col justify-between gap-2 lg:h-[30rem] h-96 lg:block hidden">
        <div class="text-container">
        <p class="text-2xl text-white font-semibold mb-5 text-left">
          That's me!
        </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-8">
      <PortfolioCard
      v-for="p in portfolios"
      :key="p.id"
      :title="p.title"
      :description="p.description"
      :chip="p.chip"
      :target="p.target"
      :image="p.image"
      :gradient="p.gradient"
      />
    </div>
  </div>
</template>

<script>
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';
import PortfolioCard from '../components/PortfolioCard.vue';

export default {
  components: {
    LinkedinIcon,
    TwitterIcon,
    PencilIcon,
    PortfolioCard
  },
  data() {
    return {
      portfolios: [
        { id: 1, 
          title: 'Growee',
          description: 'Gardening guide and recommendation mobile application',
          chip: '🏆 1st Winner of UX Today 2021',
          target: '/portfolio',
          image: 'growee/thumbnail.png',
          gradient: 'to bottom left, #38ef7d, #31796D'
        },
        { id: 2, 
          title: 'Datalogue',
          description: 'Public information and data viz platform for Keluarga Mahasiswa ITB',
          target: '/portfolio',
          image: 'datalogue/thumbnail.png',
          gradient: 'to top, rgb(59 130 246), #3761AD'
        },
        { id: 3, 
          title: 'Ablee',
          description: 'Sign language learning mobile application.',
          chip: '🏆 2nd Winner of Inspace UX Competition 2021',
          target: '/portfolio',
          image: 'ablee/thumbnail.png',
          gradient: 'to left, #FFD087, #A370AF'
        }
      ]
    }
  }
}
</script>

<style>
</style>
