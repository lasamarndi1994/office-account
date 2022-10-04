export default function isAccess ({ next, store }){
    if(!store.getters.auth.isSubscribed){
        return next({
           name: 'dashboard'
        })
    }
   
    return next()
   }