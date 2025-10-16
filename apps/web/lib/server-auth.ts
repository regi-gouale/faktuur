import "server-only";

import { cookies } from "next/headers";

type SessionPayload = {
  user: AuthenticatedUser | null;
};

export type AuthenticatedUser = {
  id: number;
  email: string;
  fullName?: string;
  [key: string]: unknown;
};

export class UnauthorizedError extends Error {
  constructor(message = "User is not authenticated") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

const DEFAULT_API_BASE_URL = "http://localhost:3333";

const apiBaseUrl =
  process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL;

const sessionEndpoint = `${apiBaseUrl.replace(/\/$/, "")}/auth/session`;

async function buildCookieHeader() {
  const cookieStore = await cookies();
  const cookieList = cookieStore.getAll();

  if (cookieList.length === 0) {
    return "";
  }

  return cookieList
    .map(({ name, value }: { name: string; value: string }) => `${name}=${value}`)
    .join("; ");
}

async function requestSession(): Promise<AuthenticatedUser> {
  const cookieHeader = await buildCookieHeader();

  if (!cookieHeader) {
    throw new UnauthorizedError("Missing authentication cookie");
  }

  const response = await fetch(sessionEndpoint, {
    method: "GET",
    headers: {
      Cookie: cookieHeader,
      Accept: "application/json",
      "X-Requested-With": "next-server-action",
    },
    cache: "no-store",
  });

  if (response.status === 401 || response.status === 403) {
    throw new UnauthorizedError();
  }

  if (!response.ok) {
    throw new Error(`Failed to validate session (${response.status})`);
  }

  const payload = (await response.json()) as SessionPayload;

  if (!payload.user) {
    throw new UnauthorizedError("Session payload missing user");
  }

  return payload.user;
}

export async function getAuthenticatedUser() {
  try {
    return await requestSession();
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return null;
    }

    throw error;
  }
}

export async function requireAuthenticatedUser() {
  return requestSession();
}

export function withAuthenticatedUser<TArgs extends unknown[], TResult>(
  action: (user: AuthenticatedUser, ...args: TArgs) => Promise<TResult> | TResult,
) {
  return async (...args: TArgs) => {
    const user = await requireAuthenticatedUser();

    return action(user, ...args);
  };
}
