import React from 'react'
import BreadCrumbs from '../components/BreadCrums';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Shivam Kumar",
  description: "Blogs by Shivam Kumar",
};

function page() {
  return (
    <div className="container py-6">
      <BreadCrumbs path="blogs" />
    </div>
  );
}

export default page