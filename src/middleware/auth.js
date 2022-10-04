export default function auth ({ next, store }){
    if(!store.isAuthenticated){
        return next('/login')
    }
   
    return next()
   }