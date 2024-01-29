module.exports={
    foodList:{
        query:
        `SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3,t3.*,t4.*
        FROM food_info t1, image t2, category t3, recommendation t4
        WHERE t1.id=t2.food_id AND t1.category_id=t3.id AND t4.rcmd_id=t1.id`
    },

    mealList:{
        query:
        `SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3,t3.*,t4.*
        FROM food_info t1, image t2, category t3, recommendation t4
        WHERE t1.id=t2.food_id AND t1.category_id=t3.id AND t3.category1='식사' AND t4.rcmd_id=t1.id`
    }, 

    drinkList:{
        query:
        `SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3,t3.*,t4.*
        FROM food_info t1, image t2, category t3, recommendation t4
        WHERE t1.id=t2.food_id AND t1.category_id=t3.id AND t3.category1='음료' AND t4.rcmd_id=t1.id`
    }, 

    dessertList:{
        query:
        `SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3,t3.*,t4.*
        FROM food_info t1, image t2, category t3, recommendation t4
        WHERE t1.id=t2.food_id AND t1.category_id=t3.id AND t3.category1='디저트' AND t4.rcmd_id=t1.id`
    }, 

    nightmarketList:{
        query:
        `SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3,t3.*,t4.*
        FROM food_info t1, image t2, category t3, recommendation t4
        WHERE t1.id=t2.food_id AND t1.category_id=t3.id AND t3.category1='야시장' AND t4.rcmd_id=t1.id`
    }, 

    extraList:{
        query:
        `SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3,t3.*,t4.*
        FROM food_info t1, image t2, category t3, recommendation t4
        WHERE t1.id=t2.food_id AND t1.category_id=t3.id AND t3.category1='기타' AND t4.rcmd_id=t1.id`
    }, 

    foodDetail:{
        query:`SELECT t1.*,t2.path1,t2.path2,t2.path3
        FROM food_info t1, image t2
        WHERE t1.id= ? and t1.id = t2.food_id`
    },
};