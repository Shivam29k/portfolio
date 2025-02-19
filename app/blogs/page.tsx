import React from 'react'
import BreadCrumbs from '../components/BreadCrums';

function page() {
  return (
    <div className="container py-6">
      <BreadCrumbs path="blogs" />
    </div>
  );
}

export default page