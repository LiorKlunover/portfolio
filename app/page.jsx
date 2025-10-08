import { Button } from "@/components/ui/Button";
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const CV_FILE = "/Lior_Klunover_CV.pdf";

const Page = () => {
 
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left oreder-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /><span className="text-accent">Lior Klunover</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I'm a recent Computer Science graduate passionate about software development and AI, with experience in full-stack applications, client-server systems, and system programming. I've been actively exploring agent-based AI using tools like LangChain and LangGraph, focusing on automation and intelligent decision-making. Eager to contribute to innovative projects in a dynamic, forward-thinking team.
            </p>
            {/* Button and social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href={CV_FILE} download="Lior_Klunover_CV.pdf">
                <Button 
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}

export default Page;
