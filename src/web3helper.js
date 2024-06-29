import React, { useCallback, useState } from "react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";
import Divider from "./components/Divider";
window.Buffer = window.Buffer || Buffer;

const SendTransactionButton = ({ encodedTransaction, callback, text }) => {
  const [ret, setRet] = useState("");
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    const recoveredTransaction = Transaction.from(
      Buffer.from(encodedTransaction, "base64")
    );
    const signedTx = await signTransaction(recoveredTransaction);
    const ret = await connection.sendRawTransaction(signedTx.serialize());
    setRet(ret);
    connection.onSignature(ret, callback, "finalized");
  }, [publicKey, signTransaction, connection, encodedTransaction, callback]);

  return (
    <>
      <button
        className="btn btn-primary rounded-pill"
        onClick={onClick}
        disabled={!publicKey}
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
