import React from "react";
import { Input } from "@chakra-ui/react";

function Header() {
  return (
    <div className="header-wrapper">
      <Input className="input" placeholder="Enter gif" width="50%" size="lg" />
    </div>
  );
}

export default Header;
