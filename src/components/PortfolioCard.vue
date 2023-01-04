<script>
import ArrowTopRightIcon from 'vue-material-design-icons/ArrowTopRight.vue';
export default {
  components: {
    ArrowTopRightIcon
  },
  props: {
    title: String,
    description: String,
    chip: String,
    target: String,
    image: String,
    gradient: String
  }
}
</script>
<template>
  <div :style="{'background-image': 'linear-gradient('+ gradient + ')'}" class="lg:w-1/3 w-full group porto-card overflow-hidden rounded-xl border-0 lg:pt-8 lg:px-8 pt-4 px-4 flex flex-col justify-between gap-2 lg:h-[30rem] h-96">
        <div class="flex flex-row justify-between">
          <div class="text-container">
            <p class="text-2xl text-white font-semibold text-left">
              {{title}}
            </p>
            <p class="text-white text-md text-left">
              {{description}}
            </p>
            <p v-if="chip" class="w-fit text-slate-500 bg-white py-1 px-2 rounded-full text-xs text-left">
              {{chip}}
            </p>
          </div>
          <div class="min-w-12">
            <a type="button" :href="target" class="transition ease-in-out duration-300 hover:rotate-45 flex justify-center items-center rounded-full  bg-white text-blue-600 w-12 h-12">
              <ArrowTopRightIcon/>
            </a>
          </div>
        </div>
        <img class="transition ease-in-out duration-300 group-hover:scale-110 group-hover:rotate-2" :src="require(`../../public/portfolio/${image}`)">
      </div>
</template>