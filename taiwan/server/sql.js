module.exports={
    foodList:{
        query:`SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3  
        FROM food_info t1, image t2
        WHERE t1.id=t2.food_id`
    },
    foodDetail:{
        query:`SELECT t1.*,t2.path1,t2.path2,t2.path3
        FROM food_info t1, image t2
        WHERE t1.id=t2.food_id`
    }
};