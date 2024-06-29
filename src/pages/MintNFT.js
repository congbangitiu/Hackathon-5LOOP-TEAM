import React, { useState } from "react";
import SendTransactionButton from "../web3helper";
import Header from "../components/header/Header";

function MintNFT() {
  const [txn, setTxn] = useState("");
  const [mssg, setMssg] = useState("");

  const callback = (signature, result) => {
    console.log("result ", result);

    try {
      if (signature.err === null) {
        setMssg(`Txn Success`);
      } else {
        setMssg("Txn Failed");
      }
    } catch (error) {
      setMssg("Signature Failed, but check your wallet");
    }
  };

  return (
    <>
      <Header />
      <div className="container border border-1 border-primary mt-3 py-5">
        <div className="w-75 mx-auto">
          <h2 className="display-5 text-center mb-5">
            Enter the transaction from Shyft API
          </h2>
          <div className="mb-3 mt-3">
            <label className="form-label">Encoded Transaction:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Encoded Transaction from Shyft"
              onChange={(e) => setTxn(e.target.value)}
            />
          </div>
          <SendTransactionButton
            key={txn}
            text="Send Transaction"
            encodedTransaction={txn}
            callback={callback}
          />
        </div>
      </div>
      <div className="text-center text-danger">{mssg}</div>
    </>
  );
}

export default MintNFT;
