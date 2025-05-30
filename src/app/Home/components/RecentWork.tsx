import { Button } from "@/components/ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";
import screen0 from "../components/screen0.png"
import screen1 from "../components/screen1.png"
import screen2 from "../components/screen2.png"
import b2b from "../components/sutes/b2b.jpg"
import photorditor from "../components/sutes/photoeditor.png";
import lahcen from "../components/sutes/lahcen.jpg";
import lahcen2 from "../components/sutes/lahcen2.jpg";





type SiteData = {
  title: string;
  likes: number;
  link: string;
  img: string;
};

const sitesData: SiteData[] = [
  {
    title: "AutomatorDev",
    likes: 231,
    link: "https://automatordev-soft.github.io/automatorDev/#contact",
    img: screen0,
  },
  {
    title: "Portfolio1",
    likes: 129,
   
    link: "https://portfolio-amine-abaidi.vercel.app/",
    img: screen1,
  },

  {
    title: "Portfolio2",
    likes: 189,
    link: "https://github.com/othm65ane/react-P",
    img: screen2,
  },

  {
    title: "b2b Maroc",
    likes: 90,
    link: "",
    img: b2b,
  },
  {
    title: "PhotoEditor",
    likes: 240,
    link: "https://github.com/othm65ane/PhotoEditor",
    img: photorditor,
  },

  {
    title: "Dinner with Lahcen",
    likes: 119,
    link: "https://skincotemplate.webflow.io/",
    img: lahcen,
  },
  {
    title: "Private Chef",
    likes: 189,
    link: "https://skincotemplate.webflow.io/",
    img: lahcen2,
  },
];

export const RecentWork = () => {
  
  return (
    <div className="w-full p-5">
      <div className="w-full bg-gray-100 rounded-[24px] ">
        <div className="container py-20">
          <BlurFade delay={0.25} inView>
            <div className="flex flex-col items-center ">
              <h2 className="text-5xl lg:text-7xl max-w-xl font-semibold text-center">
                Recent work
              </h2>
              <h3 className="my-5 text-muted-foreground">
                Get to know our work.
              </h3>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sitesData.map((item, index) => (
              <BlurFade delay={index * 0.04} inView>
                <div
                  className="p-4 bg-white rounded-xl flex flex-col gap-6"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt="website project img"
                    className="rounded-xl"
                    loading="lazy"
                  />

                  <div className="flex items-center justify-between ">
                    <div className="text-lg font-semibold">{item.title}</div>
                    <div className="flex items-center gap-1 text-sm text-red-500">
                      <FaHeart />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={item.link} className="flex-1 " target="_blank">
                      <Button
                        variant={"outline"}
                        size={"lg"}
                        className="w-full py-6 text-md"
                        aria-label="Visit live site"
                      >
                        Visit live site
                      </Button>
                    </a>
                    <Button
                      variant={"outline"}
                      className="px-4 py-6"
                      aria-label="Like project"
                    >
                      <FaRegHeart size={22} />
                    </Button>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
