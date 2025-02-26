"use client";
import {
  AppShell,
  AppShellPageParams,
  machineUserAuthExchange,
} from "@izumisy-tailor/fabrix-appshell";
import { useParams } from "next/navigation";
import "@izumisy-tailor/fabrix-appshell/styles";

const Page = () => {
  const params = useParams<AppShellPageParams>();

  return (
    <AppShell
      url={`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/query`}
      prependExchanges={[
        machineUserAuthExchange({
          apiURL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
          clientID: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
          clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET ?? "",
        }),
      ]}
      pageParams={params}
      configurations={{
        resources: {
          /* add your resource definition here */
        },
      }}
    />
  );
};

export default Page;
