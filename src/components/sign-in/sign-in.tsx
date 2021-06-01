import React from "react";

import { PAGE, USER_PAGE_TITLE, LOGO_POSITION } from "../../helpers/const";
import Header from "../header/header";
import Logo from "../logo/logo";
import UserPageTitle from "../user-page-title/user-page-title";
import Form from "../form/form";
import Footer from "../footer/footer";

const SignIn: React.FC = () => {
  return (
    <div className="user-page">
      <Header page={PAGE.USER_PAGE}>
        <Logo clName={LOGO_POSITION.HEADER} />
        <UserPageTitle title={USER_PAGE_TITLE.SIGN_IN} />
      </Header>

      <div className="sign-in user-page__content">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
