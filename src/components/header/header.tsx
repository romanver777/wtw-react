import React from "react";

interface PageType {
  page: string;
}

const Header: React.FC<PageType> = (props) => {
  return (
    <header className={`page-header ${props.page}__head`}>
      {props.children}
    </header>
  );
};

export default Header;
