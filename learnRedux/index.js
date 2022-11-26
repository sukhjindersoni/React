const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

//INITIAL STATE
const cakeInitialState = {
    numOfCakes : 10
}
const iceCreamInitialState = {
    numOfIceCream : 10
}

//ACTION , ACTION CREATOR
const BUY_CAKE ="BUY_CAKE"
const BUY_ICE_CREAM ="BUY_ICE_CREAM"

function buyCake(){
    return {
        type :BUY_CAKE,
        info :'Just a demo'
    }
}

function buyIceCream(){
    return {
        type :BUY_ICE_CREAM,
        info :'Just a demo'
    }
}

//REDUCER
const cakeReducer =(state=cakeInitialState , action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes :state.numOfCakes- 1
        }
        default:return state
    }
}

const iceCreamReducer =(state=iceCreamInitialState , action)=>{
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state,
            numOfIceCream :state.numOfIceCream - 1
        }
        default:return state
    }
}

const combineReducers = redux.combineReducers
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const createStore = redux.createStore
const store = createStore(rootReducer, applyMiddleware(logger))
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()