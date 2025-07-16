import Lottie from "lottie-react";
import Loading from "@/public/Loading.json";
const LoadingCart = () => {
  return (
    <div className="grid items-center justify-center py-8 ">
      <Lottie
        animationData={Loading}
        loop={true}
        size={100}
        className="w-full h-70"
      />
    </div>
  );
};

export default LoadingCart;
