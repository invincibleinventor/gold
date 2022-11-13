import { RequestContext, ResponseContext } from "@builder.io/qwik-city";
import {  Session } from "@supabase/supabase-js";
import cookie from "cookie";

import { supabase } from "~/services/firebase";

const cookieName = "RJ-auth";

export const updateAuthCookies = (
  session: Partial<Session>,
  response: ResponseContext
) => {
  const value = JSON.stringify({
    "access-token": session.access_token,
    "refresh-token": session.refresh_token,
  });

  response.headers.set(
    "Set-Cookie",
    cookie.serialize(cookieName, value, {
      maxAge: session.expires_in,
      path: "/",
      sameSite: "lax",
    })
  );
};

export const setAuthCookies = async (
  request: RequestContext,
  response: ResponseContext
) => {
  const json = await request.json();

  updateAuthCookies(json, response);
};

export const removeAuthCookies = (response: ResponseContext) => {
  response.headers.set(
    "Set-Cookie",
    cookie.serialize(cookieName, "value", {
      maxAge: -1,
      path: "/",
      sameSite: "lax",
    })
  );
};

export const getUserByCookie = async (request: RequestContext) => {
  const cookieHeader = request.headers.get("Cookie");

  if (!cookieHeader) {
    return null;
  }

  const cookies = cookie.parse(cookieHeader);
  const value = JSON.parse(cookies[cookieName] || "{}");
  const token = value["access-token"];

  if (!token) {
    return null;
  }

  const { data } = await supabase.auth.getUser(token);

  return data;
};
