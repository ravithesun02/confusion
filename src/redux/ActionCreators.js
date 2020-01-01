import * as ActionTypes from './ActionTypes';
import {baseURL} from '../shared/baseUrl';


export const addComment=(comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
});

export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{
    const newComment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date=new Date().toISOString();

    return fetch(baseURL+'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response=>{
        if(response.ok)
        return response;
        else
        {
            var error=new Error('Error'+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
        var errormess=new Error(error.message);
        throw errormess;
    })
    .then(response=>response.json())
    .then(response=>dispatch(addComment(response)))
    .catch(error=>{console.log('post comments ,',error.message);
     alert('Your comment could not be posted\n Error:'+error.message);   })

}

//fetchDishes is a thunk as it is returning a function and it has access to dispatch as well to getState()

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

   return fetch(baseURL+'dishes')
        .then(response=>{
            if(response.ok)
            return response;
            else
            {
                var error=new Error('Error'+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errormess=new Error(error.message);
            throw errormess;
        })
        .then(response=>response.json())
        .then(dishes=>dispatch(addDishes(dishes)))
        .catch(error=>dispatch(dishesFailed(error.message)));
    
}

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});

export const fetchComments=()=>(dispatch)=>{
   return fetch(baseURL+'comments')
        .then(response=>{
            if(response.ok)
            return response;
            else
            {
                var error=new Error('Error'+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errormess=new Error(error.message);
            throw errormess;
        })
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error=>dispatch(commentsFailed(error.message)));
}

export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const commentsFailed=(errmess)=>({
    type:ActionTypes.COMMENT_FAILED,
    payload:errmess
});

export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading(true));

   return fetch(baseURL+'promotions')
        .then(response=>{
            if(response.ok)
            return response;
            else
            {
                var error=new Error('Error'+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errormess=new Error(error.message);
            throw errormess;
        })
    .then(response=>response.json())
    .then(promotions=>dispatch(addPromos(promotions)))
    .catch(error=>dispatch(promosFailed(error.message)));
}

export const promosLoading=()=>({
    type:ActionTypes.PROMOS_LOADING
});

export const addPromos=(promotions)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
});

export const promosFailed=(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading(true));

   return fetch(baseURL+'leaders')
            .then(response=>{
                if(response.ok)
                return response;
                else
                {
                    var error=new Error('Error'+response.status+':'+response.statusText);
                    error.response=response;
                    throw error;
                }
            },
            error=>{
                var errormess=new Error(error.message);
                throw errormess;
            })
        .then(response=>response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
        .catch(error=>dispatch(leadersFailed(error.message)));
}

export const leadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
});

export const leadersFailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});

export const addFeedback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
});

export const postFeedback=(firstname,lastname,telnum,email,agree,contacttype,message)=>(dispatch)=>{
    const newFeedback={
        firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contacttype:contacttype,
        message:message
    }
    newFeedback.date=new Date().toISOString();
    return fetch(baseURL+'feedback',{
        method:'POST',
        body:JSON.stringify(newFeedback),
        headers:{
            'content-type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response=>{
        if(response.ok)
        return response;
        else{
            var error=new Error('Error :'+response.status+': '+response.statusText);
            error.response=response;
            throw error;
        }
    },error=>{
        var errormess=new Error(error.message);
        throw errormess;
    })
    .then(response=>response.json())
    .then(response=>dispatch(addFeedback(response)))
    .then(response=>{alert('Thanks for your Feedback\n '+JSON.stringify(response.payload))})
    .catch(error=>{
        console.log(error.message);
        alert('Feedback could not be sent\nErrors: '+error.message);
    })
}
