import { ethers } from "ethers";
import { NextPage } from "next";
import React from "react";
import { Sell as SellComponent } from "../../components/Sell";
import { Player } from "../../global/player";

interface Props {
  account: string;
  futNFT: ethers.Contract;
  futNFTMatch: ethers.Contract;
  setLoader: (loader: boolean) => void;
  futNFTTransfer: ethers.Contract;
  setPlayerInfo: (player: Player) => void;
  setPlayerInfoActivated: (activated: boolean) => void;
}

const Sell: NextPage<Props> = ({
  account,
  futNFT,
  futNFTMatch,
  setLoader,
  futNFTTransfer,
  setPlayerInfo,
  setPlayerInfoActivated,
}) => {
  return (
    <SellComponent
      account={account}
      setPlayerInfo={setPlayerInfo}
      setPlayerInfoActivated={setPlayerInfoActivated}
      futNFTMatch={futNFTMatch}
      futNFT={futNFT}
      setLoader={setLoader}
      futNFTTransfer={futNFTTransfer}
    />
  );
};

export default Sell;
