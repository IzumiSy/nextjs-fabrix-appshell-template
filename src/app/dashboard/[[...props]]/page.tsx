"use client";
import { AppShell, AppShellPageParams } from "@izumisy-tailor/fabrix-appshell";
import { useParams } from "next/navigation";
import { custom } from "./custom";
import { query } from "./query";
import "@izumisy-tailor/fabrix-appshell/styles";

const Page = () => {
  const params = useParams<AppShellPageParams>();

  return (
    <AppShell
      url={"https://graphql.org/graphql/"}
      // Uncomment the following line to enable machine user authentication
      //
      // prependExchanges={[
      //   machineUserAuthExchange({
      //     apiURL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      //     clientID: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
      //     clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET ?? "",
      //   })
      // ]}
      pageParams={params}
      configurations={{
        resources: {
          // An example of a CRUD page
          query,

          // An example of a custom page
          custom,
        },
      }}
    />
  );
};

export default Page;
