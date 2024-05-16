import React from 'react'
import { useGetAllProductsQuery } from './redux_tool.js/service/me/meService'
 
function AppTest() {
    const {data,isLoading, isError,error} = useGetAllProductsQuery()
    const data1 = useGetAllProductsQuery()
    console.log(error.data)

    if(isLoading){
    return <div>...Loading...</div>
}
if(isError){
    return <div>error is {error.data}</div>
}

  return (
    <div>
        app
      {data?.map((item,index)=>(
        <p key={index}>{item.email}</p>
        
      ))}
    </div>
  )
}

export default AppTest
