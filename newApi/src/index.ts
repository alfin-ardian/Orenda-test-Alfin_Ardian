import { Sequelize } from "sequelize";
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import server from "./server";
import { Product } from "./models/Product";

// **** Database **** //

const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("Database connection has been established successfully.");
    return sequelize.sync(); // sync the models with the database
  })
  .then(() => {
    logger.info("Models synced with the database.");
  })
  .catch((error) => {
    logger.error("Unable to connect to the database:", error);
  });

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
