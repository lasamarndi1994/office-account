function middlewarePipeline (context, middleware, index) {
  
    //console.log(context)
    const nextMiddleware = middleware[index]
  
    if(!nextMiddleware){
        
        return context.next 
    }
    const nextPipeline = middlewarePipeline(
            
        context, middleware, index + 1
    )

  
    return () => {
        const nextPipeline = middlewarePipeline(
            
            context, middleware, index + 1
        )
       
        nextMiddleware({ ...context, next: nextPipeline })

    }
}

export default middlewarePipeline