import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, Connection, clusterApiUrl } from "@solana/web3.js";
import { Buffer } from "buffer";
import React, { useCallback } from "react";
window.Buffer = window.Buffer || Buffer;

const AirdropButton = () => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const { publicKey } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    try {
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 3 * LAMPORTS_PER_SOL),
      ]);

      const sigResult = await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "confirmed"
      );

      if (sigResult)
        alert(`Airdrop Completed! Funds will be added a short moment`);
    } catch (error) {
      console.error("An error occurred:", error);
      alert("You have been rate limited! Please try again");
    }
  }, [publicKey, connection]);

  return (
    <button
      className="btn btn-warning rounded-pill btn-sm w-100 my-3"
      onClick={onClick}
      disabled={!publicKey}
    >
      Airdrop $SOL
    </button>
  );
};

export default AirdropButton;
