import * as functions from "firebase-functions";
import * as OpenTok from "opentok";

let opentok = new OpenTok(
  "46647672",
  "f0bff32142f79382eff9a4d53aa9436afd9d1694"
);

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const getOpenTokSession = functions.https.onRequest(
  (request, response) => {
    response.set("Access-Control-Allow-Origin", "*");
    opentok.createSession({}, (err, session) => {
      if (err) {
        response.statusCode = 500;
        response.send(JSON.stringify(err));
      } else {
        if (session?.sessionId) {
          const token = opentok.generateToken(session.sessionId, {});
          if (token) {
            const resData = JSON.stringify({
              sessionId: session.sessionId,
              token: token,
            });

            response.send(resData);
          }
        }
      }
    });
  }
);
