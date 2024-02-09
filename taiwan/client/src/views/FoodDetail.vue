<!-- 해결필요한 이슈들 -->
<!-- 사진 가로세로 비율 달라지는거 -->
<!-- 화면넘어가지는거 -->
<!-- 화면 전환될때 스크롤바 제일 위로 오도록 -->
<!-- 구글맵주소 티나게 css  -->

<template>
   <div class="Box d-md-flex justify-content-center">
      <swiper
      :scrollbar="{
        draggable:false,
        dragSize:150, 
      }"
      :navigation="{
        clickable:true
      }"
      :modules="modules" 
      class="item-photo">
        <swiper-slide v-if="foodDetail.path1">
          <img :src="foodDetail.path1">
        </swiper-slide>
        <swiper-slide v-if="foodDetail.path2">
          <img :src="foodDetail.path2">
        </swiper-slide>
        <swiper-slide v-if="foodDetail.path3">
          <img :src="foodDetail.path3">
        </swiper-slide>
      </swiper> 
      
      <div class="item-info col-md-6 d-flex flex-column justify-content-start">
        <div class="title">{{ foodDetail.title }}</div>

        <div class="content">
          <div class="menu row">
            <div class="col-3">메뉴</div>
            <div class="col-9 col-md-8">{{foodDetail.menu }}</div>
          </div>
          <div class="description row">
            <div class="col-3">간략소개</div>
            <div class="col-9 col-md-8">{{ foodDetail.description }}</div>
          </div>
          <div class="place row">
            <div class="col-3">가게</div>
            <div class="col-9 col-md-8">{{ foodDetail.place }}</div>
          </div>
          <div class="googleMap row">
            <div class="col-3">구글맵</div>
            <div class="col-9 col-md-8" style="cursor:pointer;" >{{ foodDetail.googleMap }}</div>
          </div>
        </div>

        <div class="container d-none d-md-flex justify-content-center">
          <button class="cart-button col-9"> 여행 장바구니 담기</button>
        </div>
      </div>
    </div>
  
      <div class="detail-nav row text-center py-5">
        <div id="detail" class="col-6">상세설명</div>
        <div id="order" class="col-6">추천 주문조합</div>
      </div>


      <div class="navbar-bottom fixed-bottom row d-md-none text-center">
        <div class="col-12 bg-warning-subtle p-3">여행 장바구니 담기</div>
      </div>
</template>
  
<script>
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export default{

  data(){
    return{
      foodId:0,
      foodDetail:{}
    };
  },
  created(){
    this.foodId = this.$route.query.food_id
    this.getFoodDetail();
  },
  methods:{
    async getFoodDetail(){
      let foodDetail = await this.$api("/api/foodDetail",{param:[this.foodId]});
      if(foodDetail.length>0){
        this.foodDetail = foodDetail[0];
      }
    }
  },

  components:{
    Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Navigation, Scrollbar],
      };
  },
}
</script>

<style scoped>
  @import '../assets/styles/FoodDetail.css';
  @import '../assets/styles/responsive.css';
  
</style>