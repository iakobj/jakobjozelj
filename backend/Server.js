const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const {pool, databaseCheck} = require("./Database");

const bootstrap = async () => {
    // CHeck if the database is configured with tables
    await databaseCheck();

  // session store and session config
  const store = new (require("connect-pg-simple")(session))({
    pool,
    createTableIfMissing: true,
  });

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: "GET,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
    session({
      name: "jakobjozelj.com",
      secret: "secret-key",
      resave: false,
      saveUninitialized: false,
      store: store,
      cookie: {
        maxAge: 3600000,
        sameSite: "none",
      },
    })
  );

  // Express routers
  const certificationsRouter = require("./Certifications.js");
  const projectsRouter = require("./Projects.js");
  const loginRouter = require("./Login.js");
  const logoutRouter = require("./Logout.js");
  const ItemsInput = require("./ItemsInput.js");
  const TestBe = require("./TestBe.js");

  app.use("/Certifications", certificationsRouter);
  app.use("/Projects", projectsRouter);
  app.use("/Login", loginRouter);
  app.use("/Logout", logoutRouter);
  app.use("/ItemsInput", ItemsInput);
  app.use("/TestBe", TestBe);

  // now listen on port 4000...
  app.listen(4000, () =>
    console.log(
      "NodeJS - Express middleware server running on http://localhost:4000"
    )
  );
};

bootstrap();