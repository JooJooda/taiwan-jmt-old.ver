//쿠키 추가해야함

<template>
  <div class="title-area text-center p-4"> 
   대만여행 장바구니
  </div>

   <div class="container">
    <div class="container2">
      <div class="cart-notice p-2">
      * 장바구니는 1년간 유지됩니다
      </div>

     <ul class="nav nav-underline justify-content-center mt-1 mb-3" id="food-category">
       <li class="nav-item">
         <a @click="getFoodListInCart()" >전체</a>
       </li>
       <li class="nav-item">
         <a @click="getMealListInCart()">식사</a>
       </li>
       <li class="nav-item">
         <a @click="getDrinkListInCart()">음료</a>
       </li>
       <li class="nav-item">
         <a @click="getDessertListInCart()">디저트</a>
       </li>
       <li class="nav-item">
         <a @click="getNightmarketListInCart()">야시장</a>
       </li>
       <li class="nav-item">
         <a @click="getExtraListInCart()">기타</a>
       </li>
     </ul>
     <div class="cartListBox row mx-md-3 mx-lg-5">
       <div class="cartListBoxTitle bg-body-secondary border col-12"> 나의 대만 존맛탱굴 리스트</div>
       <div v-if="cartList.length>0">
         <li class="cart col-12" :key="i" v-for="(food,i) in cartList">
           <div v-if="keyNumber==0 || food.category_id==keyNumber">
              <div class="row p-1 border">
                <div class="thumbnail col-3">
                  <a @click="goToDetail(food.id)" style="cursor:pointer;">
                    <img :src="food.path1" width="60%">
                  </a>  
                </div>
                <div class="info col-9 d-flex flex-column justify-content-around">
                  <a @click="goToDetail(food.id)" style="cursor:pointer;">  
                  <div v-html="boldLastWord(food.title)" class="cartTitle"></div>
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
   </div>   
</template>

<script>

export default{
    
    data(){
        return{
            cartList:[], //foodDetail 모든 정보
            keyNumber:0,
        };
    },

    computed:{
      foodId() {
        return this.$store.state.foodCart;
      }
    },

    created(){
        this.$store.state.foodCart = this.$cookies.get('foodCart');
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
          this.$cookies.set('foodCart', this.$store.state.foodCart);
          this.showInCart();
        },

        clearCart(){
          this.$store.commit('clearCart');
          this.$cookies.set('foodCart', this.$store.state.foodCart);
          this.showInCart();
        },

        //장바구니 내 카테고리 기능
        getFoodListInCart(){
         this.keyNumber=0; 
         this.showInCart();
        },
        getMealListInCart(){
         this.keyNumber=1;
         this.showInCart();
        },
        getDrinkListInCart(){
         this.keyNumber=4;
         this.showInCart();
        },
        getDessertListInCart(){
         this.keyNumber=2;
         this.showInCart();
        },
        getNightmarketListInCart(){
         this.keyNumber=5;
         this.showInCart();
        },
        getExtraListInCart(){
         this.keyNumber=3;
         this.showInCart();
        },

        //마지막 핵심단어 굵게
        boldLastWord(foodTitle){
          const words = foodTitle.split((" "));
          const lastWord = words.pop();
          return words.join(" ") + " <strong>" + lastWord + "</strong>";
        },
        
    },

}
</script>

<style scoped>
  @import '../assets/styles/FoodCart.css';
  @import '../assets/styles/responsive.css';
</style>

