"use client";

import axios from "axios";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";

type Props = {};

function About({}: Props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/test/").then((res) => {
      setdata(res.data);
    });
  }, []);
  return <div>About {JSON.stringify(data)}</div>;
}

export default About;
