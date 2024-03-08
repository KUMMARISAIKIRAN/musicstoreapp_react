import { legacy_createStore as createStore } from 'redux';

const cartReducer = (state, action) => {
   
    action.type = action.type.toLowerCase();

    // alert(action.type);
    let updatedState = {};
   
    switch (action.type) { 
        case "create":
            updatedState.itemCount =  0;  
            break;

        case 'addtocart':
            updatedState.itemCount = state.itemCount+1;
            
            break;
        case 'removefromcart':
            updatedState.itemCount=state.itemCount>0?state.itemCount - 1:0;
            break;
        default:
            updatedState = state;
            break;
    }
    return updatedState;
}


// Step2:  Create Store
const cartStore = createStore(cartReducer);
export default cartStore;