import dotenv from "dotenv";
dotenv.config();
import { Strategy, ExtractJwt } from "passport-jwt";

export default function setupJWTStrategy(passport) {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY,
      },
      function (payload, done) {
        try {
          return done(null, {
            id: payload.id,
            username: payload.username,
            email: payload.email,
            displayName: payload.displayName,
            role: payload.role,
          });
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
}
