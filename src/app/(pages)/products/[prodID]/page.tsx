import { Metadata } from "next";
import React from "react";

type Props = {};
export const generateMetadata = ({ params }) => {
  return {
    title: params.prodID,
  };
};
function ProdID({ params }: Props) {
  return <div>details of {params.prodID}</div>;
}

export default ProdID;
