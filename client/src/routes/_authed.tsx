import { getUserId } from "@/lib/auth-server-fun";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed")({
  beforeLoad: async () => {
    const userId = await getUserId();
    console.log("beforeLoad: userId", userId);
    return { userId };
  },
  loader: async ({ context }) => {
    console.log("loader: userId", context.userId);
    if (!context.userId) {
      throw redirect({ to: "/" });
    }
    return { userId: context.userId };
  },
});
