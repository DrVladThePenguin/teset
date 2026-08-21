"use server";

import { resolve4, resolveMx } from "node:dns/promises";

export async function domainAcceptsMail(domain: string): Promise<boolean> {
  const host = domain.trim().toLowerCase();
  if (!host || host.includes("..")) return false;

  try {
    const mx = await resolveMx(host);
    return mx.length > 0;
  } catch {
    try {
      const records = await resolve4(host);
      return records.length > 0;
    } catch {
      return false;
    }
  }
}
