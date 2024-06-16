"use client";
import About from "@/app/(pages)/about/page";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [Prods, setProds] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/test/").then((res) => {
      setProds(res.data);
    });
  }, []);
  return (
    <>
      <Link href={"about"}>about</Link>
      <Link href={"contact"}>contact</Link>
      {Prods?.map((prod) => {
        return (
          <li key={prod.id}>
            <Link href={`/products/${prod.id}`}>{prod.name}</Link>
          </li>
        );
      })}
    </>
  );
}
