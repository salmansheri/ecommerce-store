import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {year} Store, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
