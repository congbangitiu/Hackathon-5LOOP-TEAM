import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";
import React, { useCallback, useState } from "react";
window.Buffer = window.Buffer || Buffer;

const SendTransactionButton = ({
  className,
  encodedTransaction,
  message,
  callback,
  text,
}) => {
  const [ret, setRet] = useState("");
  const [signature, setSignature] = useState("");
  const { connection } = useConnection();
  const { publicKey, signTransaction, signMessage } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    if (encodedTransaction) {
      const recoveredTransaction = Transaction.from(
        Buffer.from(encodedTransaction, "base64")
      );
      const signedTx = await signTransaction(recoveredTransaction);
      const ret = await connection.sendRawTransaction(signedTx.serialize());
      setRet(ret);
      connection.onSignature(ret, callback, "finalized");
    } else if (message) {
      const data = new TextEncoder().encode(message);
      console.log(data);
      const signedMsg = await signMessage(data);
      setSignature(signedMsg);
    } else {
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
      ]);
      const sigResult = await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "confirmed"
      );
      if (sigResult) {
        alert("Airdrop Completed");
      } else {
        alert("Please try again");
      }
    }

    // const signTxn = async () => {
    //   try {
    //     const signature = await signAndSendTransaction(
    //       connection,
    //       encodedTransaction,
    //       wallet
    //     );
    //     console.log(signature);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  }, [
    publicKey,
    signTransaction,
    connection,
    encodedTransaction,
    callback,
    message,
    signMessage,
  ]);

  return (
    <div className="container">
      <div class="row py-1">
        <div class="col">
          <button className={className} onClick={onClick} disabled={!publicKey}>
            {text}
          </button>
        </div>{" "}
        <div class="col-6">
          {ret ? (
            <a
              href={`https://solscan.io/tx/${ret}?cluster=testnet`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on explorer
            </a>
          ) : (
            <p className="text-break">{signature}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SendTransactionButton;
