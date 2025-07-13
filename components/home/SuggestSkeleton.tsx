import Lottie from "lottie-react";
import Loading from "@/public/Loading.json";

const SuggestSkeleton = () => {
  return (
    <div className="w-full flex h-40 justify-center">
      <Lottie
        animationData={Loading}
        loop={true}
        size={100}
        className="w-200"
      />
    </div>
  );
};

export default SuggestSkeleton;
