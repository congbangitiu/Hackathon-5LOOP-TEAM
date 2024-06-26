import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, Transaction } from "@solana/web3.js";
import { decode } from "bs58";
import { Buffer } from "buffer";

export async function partialConfirm(encodedTransaction, privateKey, wallet) {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  if (!publicKey) throw new WalletNotConnectedError();
  const feePayer = Keypair.fromSecretKey(decode(privateKey));
  const recoveredTransaction = Transaction.from(
    Buffer.from(encodedTransaction, "base64")
  );
  recoveredTransaction.partialSign(feePayer);
  const signedTx = await wallet.signTransaction(recoveredTransaction);
  const confirmTransaction = await connection.sendRawTransaction(
    signedTx.serialize()
  );
  return confirmTransaction;
}

export async function confirmTransaction(encodedTransaction, wallet) {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  if (!publicKey) throw new WalletNotConnectedError();
  const signedTx = await wallet.signTransaction(encodedTransaction);
  const confirmTransaction = await connection.sendRawTransaction(
    signedTx.serialize()
  );
  return confirmTransaction;
}
