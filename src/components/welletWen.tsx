import { getSession, useWen } from "wen-connect";

function walletWen(props) {
  // Passing the session will avoid empty initial renders, saving your users loading time.
  const { wallet } = useWen(props.session);

  return <div>{wallet.address}</div>;
}

export default walletWen;

export const getServerSideProps = async (context:any) => {
  return {
    props: {
      // session.wallet is the same info as const { wallet } = useWen(props session);
      session: getSession(context),
    },
  };
};
