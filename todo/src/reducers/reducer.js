export const initialState = [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
        ]
    

export const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_ITEM':
        return [...state,
            {
               task: action.payload,
               id: Date.now(),
               completed: false,}]    
        
        
        case 'MARK_COMPLETED':
            let done = state.map(e=>{
                if (e.id === action.payload){
                    return{
                        ...e,
                        completed: !e.completed    
                    }
                }else{
                    return e;
                }
            })
            return done;
        case 'REMOVE_ITEM': 
        let cleared = state.filter(i =>{
                if (i.completed===true){
                    return !i.completed;
                } else{
                    return i;
                }
            }) 
        return cleared;

        default:
        return state; 
    }
    
}