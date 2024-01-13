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

        <swiper-slide>
          <li class="box p-1 mb-4">
            <div class="thumbnail mb-2">
              <a href="">
                <img src="../assets/images/food/가리비만두.jpg" width="100%">
              </a>
             </div>
            <div class="comment">
              <a href="">
                <ul class="comment-ele">
                 <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>               
                </ul>
              </a>
            </div>
          </li>     
        </swiper-slide>
        <swiper-slide>
          <li class="box p-1 mb-4">
            <div class="thumbnail mb-2">
              <a href="">
                <img src="../assets/images/food/버터옥수수감자스틱.jpg" width="100%">
              </a>
             </div>
            <div class="comment">
              <a href="">
                <ul class="comment-ele">
                 <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>             
                </ul>
              </a>
            </div>
          </li>     
        </swiper-slide>
        <swiper-slide>
          <li class="box p-1 mb-4">
            <div class="thumbnail mb-2">
              <a href="">
                <img src="../assets/images/food/버터옥수수감자스틱.jpg" width="100%">
              </a>
             </div>
            <div class="comment">
              <a href="">
                <ul class="comment-ele">
                 <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>               
                </ul>
              </a>
            </div>
          </li>     
        </swiper-slide>
        <swiper-slide>
          <li class="box p-1 mb-4">
            <div class="thumbnail mb-2">
              <a href="">
                <img src="../assets/images/food/가리비만두.jpg" width="100%">
              </a>
             </div>
            <div class="comment">
              <a href="">
                <ul class="comment-ele">
                 <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>             
                </ul>
              </a>
            </div>
          </li>     
        </swiper-slide>
        <swiper-slide>
          <li class="box p-1 mb-4">
            <div class="thumbnail mb-2">
              <a href="">
                <img src="../assets/images/food/버터옥수수감자스틱.jpg" width="100%">
              </a>
             </div>
            <div class="comment">
              <a href="">
                <ul class="comment-ele">
                 <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>             
                </ul>
              </a>
            </div>
          </li>     
        </swiper-slide>
        <swiper-slide>
          <li class="box p-1 mb-4">
            <div class="thumbnail mb-2">
              <a href="">
                <img src="../assets/images/food/버터옥수수감자스틱.jpg" width="100%">
              </a>
             </div>
            <div class="comment">
              <a href="">
                <ul class="comment-ele">
                 <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>            
                </ul>
              </a>
            </div>
          </li>     
        </swiper-slide>
      </swiper>
    </div>

    <div class="text-center mt-5" id="list-title">
      L i s t
    </div>

    <ul class="item-list row row-cols-2 row-cols-md-4 pt-5">
      <li class="box p-1 mb-4">
        <div class="thumbnail mb-2">
          <a href="">
            <img src="../assets/images/food/패션후르츠 요거트 빙수.jpg" width="100%">
          </a>
         </div>
        <div class="comment">
          <a href="">
            <ul class="comment-ele">
             <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>         
            </ul>
          </a>
        </div>
      </li>     

      <li class="box p-1 mb-4">
        <div class="thumbnail mb-2">
          <a href="">
            <img src="../assets/images/food/패션후르츠 요거트 빙수.jpg" width="100%">
          </a>
         </div>
        <div class="comment">
          <a href="">
            <ul class="comment-ele">
             <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>            
            </ul>
          </a>
        </div>
      </li>     

      <li class="box p-1 mb-4">
        <div class="thumbnail mb-2">
          <a href="">
            <img src="../assets/images/food/패션후르츠 요거트 빙수.jpg" width="100%">
          </a>
         </div>
        <div class="comment">
          <a href="">
            <ul class="comment-ele">
             <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>             
            </ul>
          </a>
        </div>
      </li>   

      <li class="box p-1 mb-4">
        <div class="thumbnail mb-2">
          <a href="">
            <img src="../assets/images/food/패션후르츠 요거트 빙수.jpg" width="100%">
          </a>
         </div>
        <div class="comment">
          <a href="">
            <ul class="comment-ele">
             <li class="name mb-1">가리비가 통으로 들어간 <span class="highlight">가리비만두</span></li>              
            </ul>
          </a>
        </div>
      </li>   
    </ul>
  </div>

</template>

<script>
import SearchBar from "../components/layout/SearchBar.vue";


//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export default{
  components:{
    SearchBar,
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
  @import '../assets/styles/FoodList.css';
  @import '../assets/styles/responsive.css';
</style>

