{
    //

    // promise

    type Something = {
        something: string
    }

    type Todo= {
        id: number,
        title: string,
    }

    const getPosts = async () => {
        const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        const data = await response.json()
        console.log(data)
    }
    getPosts()



     const createPromise = (): Promise<Something> => {
         return new Promise<Something>((resolve, reject) => {
             const data: Something = {something: 'something'}
             if(data){
                resolve(data)
             }else{
                 reject('No data found')
             }
         })
     }


    //   calling create promise function

    const showData = async (): Promise<Something> => {
        const data : Something= await  createPromise()
        return data
        console.log(data)
    }

    showData()

    //

}