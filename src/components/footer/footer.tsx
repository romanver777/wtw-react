import React from "react";

import { PAGE } from "../../helpers/const";
import Logo from "../logo/logo";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <Logo clName={PAGE.LOGO_LIGHT} />
      <div className="copyright">
        <p>© 2021 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
