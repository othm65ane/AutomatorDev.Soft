import { Separator } from "@/components/ui/separator";
import LetterPullup from "@/components/magicui/letter-pullup";
import { FaGithub, FaFacebookSquare, FaInstagram , FaYoutube  } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div>
      <Separator className="my-4" />
      <div className="flex  gap-5 lg:flex-row lg:justify-between lg:gap-10 flex-col">
        <div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => window.location.assign("/")}
          >
            <LetterPullup
              className="jersey-10-regular"
              words={"AutomatorDev"}
              delay={0.05}
            />
          </div>

          <p>Crafted with ❤️ by <span className="font-semibold "><a href="https://och-woad.vercel.app/">Othmane Charfaoui</a></span></p>

          <div className="flex items-center gap-2 mt-10">
            <a href="https://github.com/automatorDev-soft"><FaGithub
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            /></a>
              <a href="https://www.instagram.com/automatordev/"><FaInstagram
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black cursor-pointer"
            /></a>
            <a href="https://web.facebook.com/profile.php?id=100035393063355"><FaFacebookSquare
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            /></a>
            <a href="https://www.youtube.com/channel/UCO3pPBcO6XX1CtxKgbC188g"><FaYoutube 
            size={26} 
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
          /></a>
          <a href="mailto:automatordev.soft@gmail.com"><SiGmail 
            size={26}
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
          /></a>
          </div>
        </div>
        <div className="flex md:w-[30%]  mt-10 xl:gp-20">
          <div className="flex flex-col gap-3 w-[50%]">
            <div className=" text-lg font-bold">Resources</div>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Home
            </Link>
            <Link
              to={"/blog"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Blog
            </Link>
            <Link
              to={"/showcase"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Showcase
            </Link>
            <Link
              to={"/about"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              About us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" text-lg font-bold">Product</div>
            <Link
              to={"/showcase"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Products
            </Link>
            <Link
              to={"/contact-us"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-6" />

      <div className="flex md:items-center justify-between mb-5 md:flex-row flex-col-reverse gap-4">
        <p className="text-sm">
          © 2024{" "}
          <span
            className=" cursor-pointer hover:underline"
            onClick={() => window.location.assign("/")}
          >
            AutomatorDev
          </span>{" "}
          Ltd. All rights reserved.
        </p>
        <div className="flex items-center text-sm gap-5">
          <Link to={"/terms"} className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to={"/privacy"} className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
