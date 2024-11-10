{
    //

    // promise

     const createPromise = (): Promise<string> => {
         return new Promise<string>((resolve, reject) => {
             const data: string = 'something'
             if(data){
                resolve(data)
             }else{
                 reject('No data found')
             }
         })
     }


    //   calling create promise function

    const showData = async () => {
        const data = await  createPromise()
        console.log(data)
    }

    showData()

    //

}