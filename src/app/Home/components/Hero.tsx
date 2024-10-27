import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";


export const Hero = () => {
  return (
    <BlurFade delay={0.25} inView>
      <section className="px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col gap-4 max-w-3xl lg:max-w-6xl text-center lg:text-center items-center pt-10 lg:pb-40 m-auto">
          <BlurFade delay={0.35} inView>
            <h1 className="text-5xl  lg:text-7xl font-semibold">
              The simple way for idea to start.
            </h1>
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#6D6A6A]">
              AutomatorDev: Building Your Digital Future with Expert Web Development
            </h2>
          </BlurFade>
          <BlurFade delay={0.55} inView>
            <div className="flex flex-col lg:flex-row items-center gap-5 justify-center lg:justify-start mt-5">
              <Button
                className="px-10 py-6 lg:py-8 lg:px-14 lg:text-lg rounded-full"
                aria-label="Get started"
                onClick={() => window.location.assign("/conatctu")}
              >
                Get started
              </Button>

  
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.35} inView>
          <video
            className="w-full aspect-video rounded-[24px] mt-10 border lg:max-w-5xl lg:m-auto mt-12"
            src="https://assets-global.website-files.com/6468a446b0e90f1f8bcea5b7/6480b33d62b782738f2e4bc1_webflow-nocode-transcode.mp4"
            autoPlay
            muted
          ></video>
        </BlurFade>
      </section>
    </BlurFade>
  );
};
