import React, { useState } from "react";
import Header from "../components/header/Header";
import SendTransactionButton from "../components/TxnButton";

function Test() {
  const [txn, setTxn] = useState("");
  const [msg, setMsg] = useState("");
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
            <label className="form-label">Message to sign:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <SendTransactionButton
            key="txn"
            text="Send Transaction"
            encodedTransaction={txn}
            callback={callback}
          />{" "}
          <SendTransactionButton
            key="msg"
            text="Sign Message"
            message={msg}
            callback={callback}
          />
        </div>
      </div>
      <div className="text-center text-danger">{mssg}</div>
    </>
  );
}

export default Test;
