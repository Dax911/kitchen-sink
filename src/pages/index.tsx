import Head from 'next/head';
import useState from 'react'
import { useWen } from "wen-connect";
import { walletWen } from '../components/welletWen'

export default function Home() {
  const { connect, disconnect, wallet } = useWen();
  const alertState = false

  const handleConnect = () => {
    // Optional argument to specify which chain to get the user connected on.
    connect({ chainId: "0xa86a" });
}

  const handleDisconnect = () => {
    disconnect();
  };


  return (
    <div>
      <Head>
        <title>Kitchen Sink</title>
      </Head>

      <div className="h-screen w-screen flex flex-col justify-between items-center relative">

      <div className="navbar bg-neutral rounded">
      Hello World
      </div>
      <div className="items-center flex h-screen w-screen relative justify-between ">
      <div className="p-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
      <button className="btn-primary rounded center-item p-6 text-xl" onClick={handleConnect} > Alert Connect </button>
      <div className="alert shadown-lg rounded alert-success md:flex-row animate-fade-in">{alertState ? true : `${wallet.address}`}</div>
                <div className="p-8 italic text-xl">{"or"}</div>
      <button className="btn-primary rounded center-item p-6 text-xl" onClick={handleDisconnect}> Alert Disconnect </button>
      </div>
      </div>
    </div>
    </div>
  );
}
