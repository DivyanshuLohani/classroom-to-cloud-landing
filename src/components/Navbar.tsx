import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex  w-full items-center justify-between px-10 border-b shadow-sm bg-card md:px-6 sticky top-0 z-10 ">
      <Link href="#" className="flex items-center gap-2 " prefetch={false}>
        <Image
          className=""
          src={"/logo.svg"}
          width={80}
          height={100}
          alt="Logo"
        />
        <span className="text-xl font-bold">Class To Cloud</span>
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="#features"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 space-y-1">
            <Link
              href="#"
              className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Home
            </Link>
            <Collapsible className="space-y-1">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
                Features
                <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4">
                <Link
                  href="#"
                  className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  Developer Tools
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  Security & Compliance
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  Scalability
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Contact
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
