import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";

function Footer() {
  return (
    <div className=" pt-[30px] pb-3">
      <footer className="flex items-center justify-between bg-white h-[120px] rounded-lg shadow-md sm:flex-col sm:items-start sm:pl-3">
        <div className="text-sm text-gray-600 pl-2 ">
          © 2023 Your Company. All rights reserved.
        </div>
        <div className="flex  pr-2 sm:pr-5 sm:pb-7 gap-3">
          <AiFillFacebook className="text-blue-600" size={20} />
          <AiFillTwitterSquare className="text-blue-400" size={20} />
          <AiFillInstagram className="text-pink-600" size={20} />
          <AiFillLinkedin className="text-blue-800" size={20} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
