import logo from "../../assets/logo.png";
const LoadingAnimation = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            {/* <div className="spinner"></div> */}
            <img src={logo} className="w-20 spin-animation" alt="" />
        </div>
    );
};

export default LoadingAnimation;
