import "./Loader.css";
import SvgLoader from "../../assets/svg/loader.svg";

const Loader = () => {
  return(
   <div className="loader">
     <img src={SvgLoader} className='loader-svg' alt="loading" />
   </div>
  );
};

export default Loader;
