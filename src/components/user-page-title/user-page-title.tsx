import React from "react";

interface TitleType {
  title: string;
}

const UserPageTitle: React.FC<TitleType> = ({ title }) => {
  return <h1 className="page-title user-page__title">{title}</h1>;
};

export default UserPageTitle;
