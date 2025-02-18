import { authExchange } from "@urql/exchange-auth";

export const bearerAuthExchange = authExchange(async (utils) => {
  return {
    addAuthToOperation: (operation) => {
      return utils.appendHeaders(operation, {
        Authorization: `Bearer: ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      });
    },
    didAuthError: () => false,
    refreshAuth: () => Promise.resolve(),
  };
});
