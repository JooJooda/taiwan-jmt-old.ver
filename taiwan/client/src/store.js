import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            foodCart:[], //food.id 데이터 배열
            isInCart:false
        }
    },

    mutations:{

        //장바구니 담기 기능
        addToCart(state, foodId){
            state.isInCart=false;
            if(!state.foodCart.includes(foodId)){
                state.foodCart.push(foodId);
                console.log(state.foodCart);
            }
            else{
                state.isInCart=true;
                console.log("이미 존재")
            }
        },

        //장바구니 삭제 기능
        deleteFood(state, foodId){
            const index = state.foodCart.findIndex(item => item === foodId);
            console.log(index)           
            if(index !== -1){
              state.foodCart.splice(index, 1);
            }
            console.log(state.foodCart);
        },

        clearCart(state){
            state.foodCart = [];
        }
        
    }

})

export default store;