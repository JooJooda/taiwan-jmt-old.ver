<template>
  <div class="title-area text-center p-5"> 
   나의 대만여행 장바구니
  </div>

   <div class="container">
     <ul class="nav nav-tabs justify-content-center mt-5 mb-1" id="food-category">
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
     <li class="cart" :key="i" v-for="(food,i) in cartList">
        <div class="row p-3 border">
          <a @click="goToDetail(food.id)" style="cursor:pointer;">
            <div class="thumbnail col-4">
             <img :src="food.path1" width="100%">
            </div>
            <div class="info col-8">
              <div class="title">{{ food.title }}</div>
              <div class="menu">{{ food.menu }}</div>
              <div class="description">{{ food.description }}</div>
              <div class="place">{{ food.place }}</div>
              <div class="googleMap">{{ food.googleMap }}</div>
            </div>
          </a>
            <div class="cartBtns">
              <a @click="deleteFood(food.id)" class="deleteBtn"> 삭제</a>
            </div>
        </div>
     </li>
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
        }

    },

}
</script>

<style scoped>
  @import '../assets/styles/FoodCart.css';
  @import '../assets/styles/responsive.css';
</style>

