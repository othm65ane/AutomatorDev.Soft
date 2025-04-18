import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SiDevexpress } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

export const MobileNavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size={"icon"}>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between ">
        <SheetHeader>
          <SheetTitle>
            <SiDevexpress size={22} />
          </SheetTitle>
          <div className="pt-8">
            <ul className="text-lg font-semibold flex flex-col items-start gap-2">
              <Link to={"/"} className="cursor-pointer">
                <li>Home</li>
              </Link>
              <Link to={"/blog"}>
                <li>Team</li>
              </Link>
              <Link to={"/showcase"}>
                <li>Showcase</li>
              </Link>
              <Link to={"/about"}>
                <li>About us</li>
              </Link>
            </ul>
          </div>
        </SheetHeader>

        <SheetFooter>
          <div className="flex flex-col w-full gap-3">
            <Button
              variant={"default"}
              size={"lg"}
              className="rounded-xl cursor-pointer py-6"
              onClick={() => navigate("/contact-us")}
            >
              Contact us
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
