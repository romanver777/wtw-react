import React from "react";

import { LOGO_POSITION } from "../../helpers/const";
import Logo from "../logo/logo";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <Logo clName={LOGO_POSITION.FOOTER} />
      <div className="copyright">
        <p>© 2022 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
