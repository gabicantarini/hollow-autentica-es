import React from "react";

import { ContainerPage, TitlePage } from "../../Styles/main";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ContainerPage>
      <TitlePage>Home</TitlePage>
      <Link to="/login">Fazer Login</Link>
    </ContainerPage>
  );
};

export default Home;
