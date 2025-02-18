"use client";
import { AppShell, AppShellPageParams } from "@izumisy-tailor/fabrix-appshell";
import { useParams } from "next/navigation";
import { bearerAuthExchange } from "./auth";
import "@izumisy-tailor/fabrix-appshell/styles";

const Page = () => {
  const params = useParams<AppShellPageParams>();

  return (
    <AppShell
      url={process.env.NEXT_PUBLIC_GRAPHQL_URL}
      prependExchanges={[bearerAuthExchange]}
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
