import { useEffect, useState } from "react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const SCOPE = "data:read,data:delete";
const STATE = process.env.REACT_APP_SECRET_STATE;

export function useAuth() {
  const link = `https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&state=${STATE}`;

  const [code, setCode] = useState<null | string>(null);
  const [token, setToken] = useState<null | string>(null);

  useEffect(() => {
    const location = window.location;
    const params = new URLSearchParams(location.search);
    const codeParam = params.get("code");
    const stateParam = params.get("state");

    if (stateParam === STATE && codeParam !== null) {
      setCode(codeParam);
    }
  }, []);

  useEffect(() => {
    const getAccess = async () => {
      const link = `https://todoist.com/oauth/access_token`;
      const response = await fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
        }),
      });

      const json = await response.json();
      setToken(json.access_token);
    };

    if (code !== null && token === null) {
      getAccess();
    }
  }, [code, token]);

  return { token, login: () => window.open(link) };
}
