import axios from "axios";

export const loadIngredients = action => dispatch => {
    axios.get('/ingredients.json')
        .then(res =>{
           console.log(res);
        })
        .catch(err => console.log(err))
}