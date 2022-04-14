import React from "react";
import Header from "../header/header";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import UserPageTitle from "../user-page-title/user-page-title";
import { PAGE, LOGO_POSITION, USER_PAGE_TITLE } from "../../helpers/const";

type ErrorPageType = {
  text?: string;
};

const ErrorPage = (props: ErrorPageType): JSX.Element => {
  return (
    <div className="user-page">
      <Header page={PAGE.USER_PAGE}>
        <Logo clName={LOGO_POSITION.HEADER} />
        <UserPageTitle title={USER_PAGE_TITLE.ERROR} />
      </Header>

      <div
        className="sign-in user-page__content"
        style={{ textAlign: "center" }}
      >
        {props.text && <span>{props.text}</span>}
        {!props.text && <span>Страница не найдена.</span>}
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
