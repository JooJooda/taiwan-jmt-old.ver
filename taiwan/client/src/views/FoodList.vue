<!-- 해결필요한 이슈들 -->
<!-- 장바구니 버튼 생성 -->

<template>
  <div class="title-area text-center p-5"> 
    대만 존맛탱굴 리스트
  </div>

  <div class="container">
  
    <SearchBar></SearchBar>
    
    <ul class="nav nav-tabs justify-content-center mt-5" id="food-category">
     <li class="nav-item">
       <a class="nav-link" aria-current="page" href="#">전체</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">식사</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">음료</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">디저트</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">야시장</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">기타</a>
     </li>
    </ul>

    <div class="text-center mt-5" id="recmd-title">
      B e s t
    </div>

    <div class="Recommend mb-3 pb-4 border-bottom">
      <div class="container d-none d-md-flex justify-content-end">
          <button class="custom-swiper-button-prev d-none d-md-inline-block" style="margin-right: 3px;"> {{"<"}} </button>
          <button class="custom-swiper-button-next d-none d-md-inline-block" style="margin-left: 3px;"> {{">"}} </button>  
      </div> 

      <swiper
      :slidesPerView="2.5"
      :spaceBetween="10"
      :scrollbar="{
        draggable:false,
        dragSize:100, 
      }"
      :navigation="{
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      }"
      :breakpoints="{
      '576': {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }"
      :modules="modules" 
      class="RecommendBanner">
        <swiper-slide class="box p-1 mb-4" :key="i" v-for="(food,i) in rcmdList">
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
            </swiper>
            <div class="comment">
              <div class="name mb-1">{{ food.title }}</div>               
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div class="text-center mt-5" id="list-title">
      L i s t
    </div>

    <ul class="item-list row row-cols-2 row-cols-md-4 pt-5">
      <li class="box p-1 mb-4" :key="i" v-for="(food,i) in foodList">
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
          </swiper> 
          <div class="comment">
            <div class="name mb-1">{{ food.title }}</div>         
          </div>
        </a>
      </li>    
    </ul>
  </div>

</template>

<script>
import SearchBar from "../components/layout/SearchBar.vue";


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
      rcmdList: [],
      foodList: []
    };
  },
  created(){
    this.getRecommendation();
    this.getFoodList();
  },
  methods:{
    async getRecommendation(){
      this.rcmdList = await this.$api("/api/recommendation",{});
    },

    async getFoodList(){
     this.foodList = await this.$api("/api/foodList",{});
    },

    goToDetail(food_id){
      this.$router.push({path:'/fooddetail', query:{food_id:food_id}});
    }
  },

  components:{
    SearchBar,
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
  @import '../assets/styles/FoodList.css';
  @import '../assets/styles/responsive.css';
</style>

