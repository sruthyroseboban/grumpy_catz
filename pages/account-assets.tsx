import React from "react";
import Nav from "components/Nav";
import { MainStyle } from "views/mint/MainStyle";
import { NextPage } from "next";
import { AccountAssets } from "views/mint/AccountAssets";

const AccountAsset: NextPage = () => {
  return (
    <MainStyle>
      <Nav />
      <AccountAssets />
    </MainStyle>
  );
};
export default AccountAsset;
