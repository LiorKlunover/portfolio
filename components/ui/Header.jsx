import Link from "next/link";
import { Button } from "./Button";
import Nav from "@/components/ui/Nav";
import MobileNav from "@/components/ui/MobileNav";


const Header = () => {
  return (
    <header className="py-8 xt:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Lior <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Add a button component here if needed */}
        {/* <Button>Click me!</Button> */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>
              Hire me
            </Button>
          </Link>
          
         
        </div>
        <div className="xl:hidden">
          
        </div>
          <MobileNav />
      </div>
    </header>
  );
};

export default Header;