import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useWallet } from "@solana/wallet-adapter-react";
import $ from "jquery";
import SendTransactionButton from "./TxnButton";

window.jQuery = window.$ = $;
require("jquery-nice-select");

const UpgradeNFT = () => {
  const { publicKey } = useWallet();

  const [inputTitle, setInputTitle] = useState("");
  const [file, setFile] = useState(null);
  const [fileValid, setFileValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);
  const [hash, setHash] = useState("");
  const [isTransactionReady, setIsTransactionReady] = useState(false);
  const [messageSigned, setMessageSigned] = useState(false);
  const [signature, setSignature] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");

  const computeSHA256 = (file) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      console.log("SHA256 Hash:", hashHex);
      setHash(hashHex);
      updateTransactionReady();
    };
    reader.readAsArrayBuffer(file);
  };

  const handleCreate = async () => {
    if (!isTransactionReady) {
      alert("Transaction is not ready.");
      return;
    }
    sendRequest();
  };

  const sendRequest = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("nft_token", inputTitle);
    form.append("nft_platform", "Solana-Devnet");
    form.append("nft_standard", "Metaplex");
    form.append("darkblock_signature", signature);
    form.append("creator_address", publicKey.toString());

    const apiKey = process.env.REACT_APP_DB_API_KEY;
    const url = `https://api.darkblock.io/v1/darkblock/upgrade?apikey=${apiKey}`;

    // console.log("Sending request with data:", {
    //   nft_token: inputTitle,
    //   nft_platform: "Solana-Devnet",
    //   nft_standard: "Metaplex",
    //   darkblock_signature: signature,
    //   creator_address: publicKey.toString(),
    //   file_details: {
    //     name: file.name,
    //     type: file.type,
    //     size: file.size
    //   }
    // });

    try {
      const response = await axios.post(url, form);

      const { data, status } = response;

      if (status === 200 && data.tx_id) {
        console.log('Upgrade successful:', JSON.stringify(data));
        setTokenAddress(inputTitle);
        return data;
      } else {
        console.log('Upgrade failed:', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Upgrade failed:', error.response ? error.response.data : error.message);
    }
  };

  const handleSignMessage = (hexSign) => {
    setSignature(hexSign);
    setMessageSigned(true);
    setIsTransactionReady(true);
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
      setFileValid(true);
      computeSHA256(file);
    } else {
      setFile(null);
      setFileValid(false);
      setHash("");
      updateTransactionReady();
    }
  };

  useEffect(() => {
    updateTransactionReady();
  }, [inputTitle, hash]);

  const updateTransactionReady = () => {
    setIsTransactionReady(inputTitle.trim() !== "" && hash !== "");
  };

  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!file || inputTitle.trim() === "") {
      setFileValid(!file);
      setTitleValid(inputTitle.trim() !== "");
      return;
    }

    if (!isTransactionReady) return;
    console.log("Proceeding with transaction...");
  };

  return (
    <div className="create-new-wrapper">
      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Create New Form */}
            <div className="create-new-form border shadow-sm p-4 p-sm-5">
              <h2 className="mb-4">Upgrade Current NFT Pass</h2>

              <Form onSubmit={handleUpload}>
                <div className="row align-items-center">
                  {/* Upload Files */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Upload Files*
                      </Form.Label>
                      <Form.Control
                        className="bg-transparent"
                        id="formFileMultiple"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        isInvalid={!fileValid}
                      />
                      {!fileValid && (
                        <Form.Control.Feedback type="invalid">
                          Please select a file to upload.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Token Address */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Token Address*
                      </Form.Label>
                      <Form.Control
                        id="title"
                        type="text"
                        placeholder="Enter a token address"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        isInvalid={!titleValid}
                      />
                      {!titleValid && (
                        <Form.Control.Feedback type="invalid">
                          Please enter title.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 col-md-4">
                    {!messageSigned ? (
                      <SendTransactionButton
                        callback={handleSignMessage}
                        text="Sign Upgrade"
                        message={`Solana-Devnet${inputTitle}${hash}`}
                        log={false}
                      />
                    ) : (
                      <button
                        className="btn btn-primary rounded-pill w-100"
                        onClick={handleCreate}
                        type="button"
                        disabled={!isTransactionReady}
                      >
                        Upgrade
                      </button>
                    )}
                  </div>
                </div>
                {tokenAddress && (
                  <div className="col-12 mt-3">
                    <a href={`https://app.darkblock.io/platform/sol-devnet/embed/viewer/${tokenAddress}`} className="btn btn-success rounded-pill w-100" target="_blank">
                      View Upgraded NFT
                    </a>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeNFT;
