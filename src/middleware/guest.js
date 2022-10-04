export default function guest ({ next, store }){
    if(store.isAuthenticated){
        
        return next('/dashboard')
    }
   
    return next()
   }