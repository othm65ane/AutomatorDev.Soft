import LetterPullup from "@/components/magicui/letter-pullup";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNavBar } from "./MobileNavBar";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-between md:p-0 py-5">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => window.location.assign("/")}
      >
     
        <LetterPullup
          className="jersey-10-regular"
          words={"AutomatorDev.soft"}
          delay={0.05}
        />
      </div>
      <div className="hidden md:flex items-center gap-8 text-md ">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? 'text-black transition-all duration-100 font-semibold' : 'text-muted-foreground transition-all duration-100')}
        >
          Home
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) => (isActive ? 'text-black transition-all duration-100 font-semibold' : 'text-muted-foreground transition-all duration-100')}
        >
          Team
        </NavLink>
        <NavLink
          to={"/showcase"}
          className={({ isActive }) => (isActive ? 'text-black transition-all duration-100 font-semibold' : 'text-muted-foreground transition-all duration-100')}
        >
          Showcase
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? 'text-black transition-all duration-100 font-semibold' : 'text-muted-foreground transition-all duration-100')}
        >
          About us
        </NavLink>
      </div>

      <Button
        size={"lg"}
        variant={"default"}
        className="rounded-full hidden md:block hover:bg-zinc-600"
        onClick={() => navigate("/conatctu")}
      >
        Contact Us
      </Button>

      <MobileNavBar />
    </div>
  );
};
