import React, { useCallback } from "react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const SendTransactionButton = ({ encodedTransaction, callback, text }) => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    const recoveredTransaction = Transaction.from(
      Buffer.from(encodedTransaction, "base64")
    );
    console.log(encodedTransaction);
    const signedTx = await signTransaction(recoveredTransaction);
    console.log(signedTx);
    const ret = await connection.sendRawTransaction(signedTx.serialize());
    connection.onSignature(ret, callback, "finalized");
  }, [publicKey, signTransaction, connection, encodedTransaction, callback]);

  return (
    <button
      className="btn btn-primary rounded-pill"
      onClick={onClick}
      disabled={!publicKey}
    >
      {text}
    </button>
  );
};

export default SendTransactionButton;
