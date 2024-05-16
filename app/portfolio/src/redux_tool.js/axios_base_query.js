import api from "../utils/Helper"
const axiosBaseQuery = ({baseUrl}={baseUrl:""})=>
async({url, method,data,params, headers})=>{
    try{
        const fullUrl= baseUrl+ url
        const result = await api({
            method,
            url:fullUrl,
            data,
            params,
            headers
        })
        return {data:result.data}

    }catch(axiosError){
        const error= axiosError
        return {
            error:{
                status: error?.response?.status||"API error failed",
                data:axiosError?.response?.data.message|| error.message
            }
           
        }
    }
}
export default axiosBaseQuery