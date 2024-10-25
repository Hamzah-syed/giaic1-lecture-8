import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 bg-gray-400 text-white  max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div>
        <h2 className="font-bold text-3xl text-pink-600">H.</h2>
      </div>
      {/* Nav buttons */}
      <ul className="hidden md:block">
        <li className="space-x-5 py-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-5 py-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
