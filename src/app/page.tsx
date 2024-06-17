"use client";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [Prods, setProds] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/test/").then((res) => {
      setProds(res.data);
    });
  }, []);
  const pathname = usePathname();
  return (
    <>
      <Link href={"about"}>about</Link>
      <Link href={"contact"}>contact</Link>
      {Prods?.map((prod) => {
        const isActive = pathname.startsWith("/");
        return (
          <li
            key={prod.id}
            style={
              isActive
                ? { backgroundColor: "red" }
                : { backgroundColor: "yellow" }
            }
          >
            <Link href={`/products/${prod.id}`}>{prod.name}</Link>
          </li>
        );
      })}
    </>
  );
}
