import { createMiddleware } from "@tanstack/react-start";
import { authClient } from "./auth-client";
import { getHeaders } from "@tanstack/react-start/server";

export const authMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const { data: session } = await authClient.getSession({
      fetchOptions: {
        headers: getHeaders() as HeadersInit
      }
    });
    return await next({
      context: {
        user: {
          id: session?.user?.id,
          name: session?.user?.name,
          image: session?.user?.image,
        },
      },
    });
  }
);
