import About from "@/app/(pages)/about/page";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"about"}>about</Link>
      <Link href={"contact"}>contact</Link>
    </>
  );
}
