import React from 'react'

function Footer() {
  return (
    <footer className="bg-background text-foreground-secondary py-10 ">
      <div className="container mx-auto px-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Shivam. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer