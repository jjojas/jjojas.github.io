<template>
 <div class="">
    <h1 class="text-4xl text-gray-700 font-bold mb-5 text-left">
      Product Design
    </h1>
    <div class="flex flex-col gap-8 lg:gap-8">
      <div class="flex flex-col lg:flex-row gap-8"
        v-for="portfolios in splitPortfolios"
        :key="portfolios"
        >
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
 </div>
</template>

<script>
import PortfolioCard from '../components/PortfolioCard.vue';

export default {
  components: {
    PortfolioCard
  },
  data() {
    return {
      all_portfolios: [
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
  },
  computed: {
    splitPortfolios() {
      return this.all_portfolios.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/3)

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
    }
  }
}
</script>

<style>
</style>
