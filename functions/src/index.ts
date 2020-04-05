import * as functions from "firebase-functions";
import * as OpenTok from "opentok";
const cors = require("cors")({ origin: true });

let opentok = new OpenTok(
  "46647672",
  "f0bff32142f79382eff9a4d53aa9436afd9d1694"
);

export const helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set("Access-Control-Allow-Origin", "*");
    response.send(JSON.stringify({ data: "Hello from Firebase!" }));
  });
});

export const getOpenTokSession = functions.https.onRequest(
  (request, response) => {
    cors(request, response, async () => {
      response.set("Access-Control-Allow-Origin", "*");
      opentok.createSession(
        {
          mediaMode: "relayed",
          archiveMode: "always",
          location: undefined,
        },
        (err, session) => {
          if (err) {
            response.statusCode = 500;
            response.send({ data: JSON.stringify(err) });
          } else {
            if (session?.sessionId) {
              const token = opentok.generateToken(session.sessionId, {
                role: "moderator",
                data: "",
                expireTime: 12300000,
              });

              if (token) {
                const resData = JSON.stringify({
                  sessionId: session.sessionId,
                  token: token,
                });

                response.send({ data: resData });
              }
            }
          }
        }
      );
    });
  }
);
