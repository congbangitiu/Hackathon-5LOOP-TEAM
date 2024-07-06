import { signAndSendTransaction } from "@shyft-to/js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Buffer } from "buffer";
import React, { useCallback, useState } from "react";
window.Buffer = window.Buffer || Buffer;

const SendTransactionButton = ({
  encodedTransaction,
  message,
  callback,
  text,
  log,
}) => {
  const [hash, setHash] = useState("");
  const [signature, setSignature] = useState("");
  const { connection } = useConnection();
  const wallet = useWallet();

  const onClick = useCallback(async () => {
    if (!wallet.publicKey) throw new WalletNotConnectedError();
    if (encodedTransaction) {
      try {
        const signature = await signAndSendTransaction(
          connection,
          encodedTransaction,
          wallet
        );
        setHash(signature);
      } catch (error) {
        console.error(error);
      }
      connection.onSignature(hash, callback, "finalized");
    } else if (message) {
      const data = new TextEncoder().encode(message);
      console.log(data);
      const signedMsg = await wallet.signMessage(data, "utf8");
      const hexSign = btoa(String.fromCharCode.apply(null, signedMsg));
      setSignature(hexSign);

      return hexSign;
    }
  }, [connection, encodedTransaction, callback, message, hash, wallet]);

  console.log(signature);

  return (
    <div className="container">
      <div className="row py-1">
        <div className="col">
          <button
            className="btn btn-primary rounded-pill btn-sm  my-3"
            onClick={onClick}
            disabled={!wallet.publicKey}
          >
            {text}
          </button>
        </div>
        {log ? (
          <div className="col-6">
            {hash ? (
              <a
                href={`https://solscan.io/tx/${hash}?cluster=devnet`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on explorer
              </a>
            ) : (
              <p className="text-break">{signature}</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SendTransactionButton;