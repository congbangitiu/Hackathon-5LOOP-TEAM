import { signAndSendTransaction } from "@shyft-to/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Buffer } from "buffer";
import React from "react";
window.Buffer = window.Buffer || Buffer;

const SendTransactionButton = ({ encodedTransaction, callback, text }) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const signTxn = async () => {
    try {
      const signature = await signAndSendTransaction(
        connection,
        encodedTransaction,
        wallet
      );
      console.log(signature);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary rounded-pill"
        onClick={signTxn}
        // disabled={!publicKey}
      >
        {text}
      </button>
      <Divider />
      {ret ? (
        <a
          href={`https://solscan.io/tx/${ret}?cluster=testnet`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on explorer
        </a>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default SendTransactionButton;
