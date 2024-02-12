<template>
    <div v-if="foodList.length!=0" class="title-area text-center p-4"> 
        ' {{ this.$route.query.searchTerm }} ' 검색 결과
    </div>
    <div v-else class="title-area text-center p-5 m-5">
        검색 결과가 없습니다!<br>아직 제가 발견하지 못한 존맛탱굴입니다
    </div>
    <div @click="backToFoodList()" style="cursor:pointer">이전 페이지 돌아가기</div>

    <div class="container">

        <ul class="item-list row row-cols-2 row-cols-md-4 pt-5">
          <li class="box p-1" :key="i" v-for="(food,i) in foodList">
            <a @click="goToDetail(food.id);" style="cursor:pointer;">
            <swiper
            :autoplay="{
               delay:2000,
            }" 
            :effect="'fade'"
            :speed=1000
            :modules="modules"
            :class="mb-2">
              <swiper-slide v-if="food.path1">
                <img :src="food.path1" width="100%">
              </swiper-slide>
              <swiper-slide v-if="food.path2">
                <img :src="food.path2" width="100%">
              </swiper-slide>
              <swiper-slide v-if="food.path3" >
                <img :src="food.path3" width="100%">
              </swiper-slide>
              <div class="comment">
                <div class="name m-1">{{ food.title }}</div>         
              </div>
            </swiper> 
            </a>
          </li>    
        </ul>

    </div> 
    
</template>

<script>

//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { Navigation, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export default{

  data(){
    return{
       foodList: [],
    };
  },

  created(){
    const foodList = JSON.parse(this.$route.query.foodList || '[]');
    this.foodList = foodList;
  },
  
  methods:{

    goToDetail(food_id){
      this.$router.push({path:'/fooddetail', query:{food_id:food_id}});
    },

    backToFoodList(){
        this.$router.push({path:'/foodlist'},{});
    }
  },

  components:{
    Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Navigation, Scrollbar, Autoplay, EffectFade],
      };
  },
}
</script>

<style scoped>
  @import '../assets/styles/SearchPage.css';
  @import '../assets/styles/responsive.css';
</style>

