"use server";

import {
  type AuthenticatedUser,
  getAuthenticatedUser as readSession,
  requireAuthenticatedUser as requireSessionUser,
  withAuthenticatedUser,
} from "../lib/server-auth";

export { UnauthorizedError } from "../lib/server-auth";
export type { AuthenticatedUser };

export async function getCurrentUser() {
  return readSession();
}

export async function ensureAuthenticated() {
  await requireSessionUser();
}

export function withServerActionAuth<TArgs extends unknown[], TResult>(
  action: (user: AuthenticatedUser, ...args: TArgs) => Promise<TResult> | TResult,
) {
  return withAuthenticatedUser(action);
}
