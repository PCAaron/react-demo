import {
    GET_NEWS
} from "./actionsType";

const initalState = {
    articles:[],
    source:null,
    fetching:true
}

export default (state = initalState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_NEWS:{
            return state
        }
        default: return state
    }
}
