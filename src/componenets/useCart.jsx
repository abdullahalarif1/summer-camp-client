import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCart = () => {
  const { user } = useAuth();

  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://summer-camp-server-gamma-bay.vercel.app/carts?email=${user.email}`
      );
      return res.data;
    },
  });
  return [cart, isLoading, refetch];
};

export default useCart;
