<!-- 해결필요한 이슈들 -->
<!-- 사진 가로세로 비율 달라지는거 -->
<!-- 화면넘어가지는거 -->
<!-- 화면 전환될때 스크롤바 제일 위로 오도록 -->
<!-- 구글맵주소 티나게 css  -->

<template>
   <div class="Box">
      <div class="Box2 d-md-flex">
        <swiper
        :scrollbar="{
          draggable:false,
          dragSize:150, 
        }"
        :navigation="{
          clickable:true
        }"
        :modules="modules" 
        class="item-photo col-md-6">
          <swiper-slide v-if="foodDetail.path1">
            <img :src="foodDetail.path1">
          </swiper-slide>
          <swiper-slide v-if="foodDetail.path2">
            <img :src="foodDetail.path2">
          </swiper-slide>
          <swiper-slide v-if="foodDetail.path3">
            <img :src="foodDetail.path3">
          </swiper-slide>
          <swiper-slide v-if="foodDetail.path4">
            <img :src="foodDetail.path4">
          </swiper-slide>
       </swiper> 
      
       <div class="item-info col-md-6 d-flex flex-column justify-content-start">
         <div class="title">{{ foodDetail.title }}</div>

         <div class="content">
           <div class="menu row">
             <div class="col-3 col-md-4">메뉴</div>
             <div class="col-9 col-md-8">{{foodDetail.menu }}</div>
           </div>
           <div class="description row">
             <div class="col-3 col-md-4">간략소개</div>
             <div class="col-9 col-md-8">{{ foodDetail.description }}</div>
           </div>
           <div class="place row">
             <div class="col-3 col-md-4">가게</div>
             <div class="col-9 col-md-8">{{ foodDetail.place }}</div>
           </div>
           <div class="recommendOrder row">
             <div class="col-3 col-md-4">추천 주문조합</div>
             <div class="col-9 col-md-8"></div>
           </div>
           <div class="buttons row justify-content-center">
             <button type="button" class="detailBtn col-3 col-md-4 btn btn-outline-secondary m-2 p-2"> 
               <a :href="foodDetail.googleMap">구글맵에 저장하기</a>
             </button>

             <button type="button" class="detailBtn col-3 col-md-4 btn btn-outline-secondary m-2 p-2" data-bs-toggle="modal" data-bs-target="#myModal" @click="addToCart(foodDetail.id)"> 
               여행 장바구니 담기
             </button>
             <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered">
                 <div class="modal-content">
                   <div class="modal-body">
                     <div v-if="isInCart">이미 여행 장바구니에 존재합니다</div>
                     <div v-else-if="foodDetail.id">여행 장바구니에 성공적으로 담겼습니다</div>
                     <div v-else>오류 발생으로 실패했습니다</div>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">확인</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div> 
      </div>  
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

  computed:{
    isInCart(){
      return this.$store.state.isInCart;
    }
  },

  methods:{
    async getFoodDetail(){
      let foodDetail = await this.$api("/api/foodDetail",{param:[this.foodId]});
      if(foodDetail.length>0){
        this.foodDetail = foodDetail[0];
      }
    },

    addToCart(foodDetail_Id){
      this.$store.commit('addToCart', foodDetail_Id);
      this.$cookies.set('foodCart', this.$store.state.foodCart);
      const test = this.$cookies.get('foodCart')
      console.log("담기 성공",test)
    },
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