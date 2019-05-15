import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders'

export const addSkill = (name,category) =>{
    return {
        type: actionTypes.ADD_SKILL,// this is the type of action that will be passed to the reduce
        skillName:name,// this is the argument to that function, whihc can accessed by the action object in reducer
        category:category
    };
}

export const removeSkill = (name,category) =>{
    return {
        type: actionTypes.REMOVE_SKILL,
        skillName:name,
        category:category
    };
}

export const setSkills = (ingredients1)=>{
return {
    type:actionTypes.SET_INGREDIENTS,
    ingredients:ingredients1
}
}

export const fetchSkillsFailed = ()=>{
return {
    type:actionTypes.FETCH_INGREDIENTS_FAILE
}
}

export const initSkills = () =>{
    return dispatch=>{
        axios.get('https://react-my-burger-6796e.firebaseio.com/ingredients.json')
        .then(response=>{
          dispatch(setIngredients(response.data));
        })
        .catch(error=>{
        dispatch(fetchIngredientsFailed());
        })
    }
}