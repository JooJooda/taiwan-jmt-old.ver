module.exports={
    foodList:{
        query:`SELECT t1.id,t1.title,t2.path1,t2.path2,t2.path3  
        FROM food_info t1, image t2
        WHERE t1.id=t2.food_id`
    },
    foodDetail:{
        query:`SELECT t1.*,t2.path1,t2.path2,t2.path3
        FROM food_info t1, image t2
        WHERE t1.id= ? and t1.id = t2.food_id`
    },
    recommendation:{
        query:`
        SELECT t1.id, t1.title, t2.*, t3.path1, t3.path2, t3.path3
        FROM food_info t1, recommendation t2, image t3
        WHERE t2.is_rcmd = 1 AND t1.id=t2.rcmd_id AND t1.id=t3.food_id`
    }
};