<template>
   <div class="Box d-md-flex justify-content-center">
      <div class="swiper item-photo col-md-6">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/images/food/가리비만두.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/food/가리비만두2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/food/가리비만두.jpg">
          </div>
        </div>
                                                                                                                                                                                                    
        <div class="swiper-button-prev d-none d-md-block"></div>
        <div class="swiper-button-next d-none d-md-block"></div>
        <div class="swiper-scrollbar"></div>
        
      </div>
      
      <div class="item-info col-md-6 d-flex flex-column justify-content-start">
        <div class="title">
          가리비가 통으로 들어간 가리비 만두
        </div>

        <div class="info">
          <div class="menu row">
            <div class="col-3 col-md-4">메뉴</div>
            <div class="col-9 col-md-8">가리비만두 (干貝水餃）</div>
          </div>
          <div class="description row">
            <div class="col-3 col-md-4">간략소개</div>
            <div class="col-9 col-md-8">중독성 있어 계속 찾게되는 가리비만두!
              가리비 하나가 통으로 들어가 있어 맛이 풍부하고 속도 촉촉해요.
              가격도 한 알에 40원 밖에 안한답니다!</div>
          </div>
          <div class="place row">
            <div class="col-3 col-md-4">가게</div>
            <div class="col-9 col-md-8">巧之味手工水餃</div>
          </div>
          <div class="googleMap row">
            <div class="col-3 col-md-4">구글맵</div>
            <div class="col-9 col-md-8">~~~~~~~~~~~</div>
          </div>
        </div>

        <div class="container d-none d-md-flex justify-content-center">
          <button class="cart"> 여행 장바구니 담기</button>
        </div>


      </div>
    </div>
  
      <div class="info-detail row text-center py-5">
        <div id="detail" class="col-4">상세설명</div>
        <div id="order" class="col-4">추천 주문조합</div>
        <div id="review" class="col-4">후기</div>
      </div>


      <div class="navbar-bottom fixed-bottom row d-md-none text-center">
        <div class="col-12 bg-warning-subtle p-3">여행 장바구니 담기</div>
      </div>
</template>
  
<script>


</script>

<style scoped>
  @import '../assets/styles/FoodDetail.css';
  @import '../assets/styles/responsive.css';
  
</style>