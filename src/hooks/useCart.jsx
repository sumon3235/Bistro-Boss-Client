import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

     const axiosSecure = useAxiosSecure()

     const {data: cart=[], refetch} = useQuery({
        queryKey:['cart'],
        queryFn: async () => {
         const {data} = await axiosSecure.get('/carts')
            return data
        }
     })

    return [cart,refetch]
};

export default useCart;