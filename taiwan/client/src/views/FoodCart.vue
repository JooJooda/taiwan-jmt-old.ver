//쿠키 추가해야함

<template>
  <div class="title-area text-center p-5"> 
   대만여행 장바구니
  </div>

   <div class="container">
     <ul class="nav nav-underline justify-content-center mt-1 mb-3" id="food-category">
       <li class="nav-item">
         <a class="nav-link" aria-current="page">전체</a>
       </li>
       <li class="nav-item">
         <a class="nav-link">식사</a>
       </li>
       <li class="nav-item">
         <a class="nav-link">음료</a>
       </li>
       <li class="nav-item">
         <a class="nav-link">디저트</a>
       </li>
       <li class="nav-item">
         <a class="nav-link">야시장</a>
       </li>
       <li class="nav-item">
         <a class="nav-link">기타</a>
       </li>
     </ul>
     <div class="cartListBox row mx-md-3 mx-lg-5">
       <div class="cartListBoxTitle bg-body-secondary border col-12"> 나의 대만 존맛탱굴 리스트</div>
       <div v-if="cartList.length>0">
         <li class="cart col-12" :key="i" v-for="(food,i) in cartList">
           <div class="row p-1 border">
             <div class="thumbnail col-3">
               <a @click="goToDetail(food.id)" style="cursor:pointer;">
                 <img :src="food.path1" width="60%">
               </a>  
             </div>
             <div class="info col-9 d-flex flex-column justify-content-around">
               <a @click="goToDetail(food.id)" style="cursor:pointer;">
                <div class="cartTitle">{{ food.title }}</div>
                <div class="cartDescription">{{ food.description }}</div>
               </a>
               <div class="cartBtns">
                  <button type="button" class="googleMapBtn btn btn-outline-secondary m-1 p-1">
                    <a :href="food.googleMap">구글맵에 저장하기</a>
                  </button>
                  <button type="button" class="deleteBtn btn btn-outline-secondary m-1 p-1">
                    <a @click="deleteFood(food.id)">삭제</a>
                  </button>
               </div>
             </div>
           </div> 
         </li>
        <button type="button" class="deleteAllBtn btn btn-outline-secondary m-2 p-2">
          <a @click="clearCart()"> 전체삭제</a>
        </button>
       </div>
       <div class="emptyCart" v-else> 
          <font-awesome-icon :icon="['far', 'face-flushed']" /> 장바구니가 비었습니다 
       </div>
     </div>
    </div>   
</template>

<script>

export default{
    
    data(){
        return{
            cartList:[], //foodDetail 모든 정보
        };
    },

    computed:{
      foodId() {
        return this.$store.state.foodCart;
      }
    },

    created(){
        this.showInCart();
    },
    
    methods:{
       async showInCart(){
        this.cartList = [];
         for(let id of this.foodId){
          let bucket = await this.$api("/api/foodDetail",{param:[id]});
          if(bucket.length > 0){
             this.cartList.push(bucket[0]);
          }
         }
         console.log(this.cartList)
        },

        goToDetail(food_id){
          this.$router.push({path:'/fooddetail', query:{food_id:food_id}});
        },

        //장바구니 삭제 기능
        deleteFood(food_id){
          console.log(food_id);
          this.$store.commit('deleteFood', food_id); 
          this.showInCart();
        },

        clearCart(){
          this.$store.commit('clearCart');
          this.cartList = [];
          this.showInCart();
        }


    },

}
</script>

<style scoped>
  @import '../assets/styles/FoodCart.css';
  @import '../assets/styles/responsive.css';
</style>

