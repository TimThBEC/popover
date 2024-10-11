// Menu component
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Menu() {
  return (
    <div className="fixed right-0 top-0 z-[999] flex w-full items-center justify-end px-4 py-2 text-white lg:px-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="sm" variant="ghost">
            <FaBars className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-start">
          <SheetHeader>
            <SheetTitle className="text-center">Example Pages</SheetTitle>
            <SheetDescription className="flex flex-col w-max gap-2 ">
              <Button asChild size="lg" variant="default">
                <Link href="/">Shadcn Popover</Link>
              </Button>
              <Button asChild size="lg" variant="default">
                <Link href="/radix">Radix Popover</Link>
              </Button>
              <Button asChild size="lg" variant="default">
                <Link href="/nosmoother">No ScrollSmoother</Link>
              </Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
