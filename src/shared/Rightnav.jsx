import { FcGoogle } from "react-icons/fc";
import { FaGithub,FaFacebook} from "react-icons/fa";
import image1 from '../assets/qZone1.png'
import image2 from '../assets/qZone2.png'
import image3 from '../assets/qZone3.png'
const Rightnav = () => {
    return (
        <div>
            <div className="mb-12">

                <h1 className='font-extrabold'>Login</h1>
                <div>
                    <button className="btn btn-outline w-full mb-2">
                        <FcGoogle></FcGoogle>
                        GOOGLE
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline w-full">
                        <FaGithub></FaGithub>
                        Github
                    </button>
                </div>
            </div>
            <div className="">
                <h1>Find Us On</h1>
                <a className="border rounded-t-lg flex items-center p-4" href="">
                     <FaFacebook className="mr-2"></FaFacebook>
                     <span className="font-bold">Facebook</span>
                </a>       
                <a className="border-x  flex items-center p-4" href="">
                     <FaFacebook className="mr-2"></FaFacebook>
                     <span className="font-bold">Facebook</span>
                </a>       
                <a className="border rounded-b-lg flex items-center p-4" href="">
                     <FaFacebook className="mr-2"></FaFacebook>
                     <span className="font-bold">Facebook</span>
                </a>       
            </div>
            <div>
                <h1>Q zone</h1>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    );
};

export default Rightnav;