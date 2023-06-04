const { Pool } = require("pg");
require("dotenv").config();

console.log("Database Pool");
console.log(process.env);

const dbconfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_NAME,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

const user = {
  userid: process.env.USER_ID,
  username: process.env.USER_USERNAME,
  password: process.env.USER_PASSWORD,
  firstname: process.env.USER_FIRSTNAME,
  lastname: process.env.USER_LASTNAME,
  email: process.env.USER_EMAIL,
};

console.log(dbconfig);

const pool = new Pool(dbconfig);

//Set Database scheme
const databaseCheck = async () => {
  // Stop the execution for 10s for DB to get ready, then start the DB Check
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const checkTableExists = async (tableName) => {
    try {
      const query = `
            SELECT EXISTS (
              SELECT 1
              FROM information_schema.tables
              WHERE table_name = $1
            );
          `;
      const { rows } = await pool.query(query, [tableName]);
      return rows[0].exists;
    } catch (error) {
      console.error("Error checking table existence:", error);
      throw error;
    }
  };

  const tableName = "certifications";

  return checkTableExists(tableName)
    .then((exists) => {
      if (exists) {
        console.log(
          `Table "${tableName}" exists. Skipping table creation process`
        );
      } else {
        console.log(`Table "${tableName}" does not exist.`);
        console.log("Creating tables...");
        return pool
          .query(
            `
                CREATE TABLE certifications (
                  id SERIAL PRIMARY KEY,
                  title TEXT, 
                  vendor TEXT, 
                  date DATE, 
                  year INTEGER, 
                  vendorpage VARCHAR, 
                  code VARCHAR, 
                  imgsrc VARCHAR, 
                  description VARCHAR
                );

                CREATE TABLE projects (
                  id SERIAL PRIMARY KEY,
                  title TEXT, 
                  description TEXT, 
                  year INTEGER,
                  imgsrc VARCHAR 
                );

                CREATE TABLE users (
                  id SERIAL PRIMARY KEY,
                  username VARCHAR, 
                  password VARCHAR, 
                  firstname VARCHAR, 
                  lastname VARCHAR, 
                  email VARCHAR
                );

                INSERT INTO users (
                  id, 
                  username, 
                  password, 
                  firstname, 
                  lastname, 
                  email
                  ) 
                  VALUES (
                    '${user.userid}',
                    '${user.username}',
                    '${user.password}',
                    '${user.firstname}',
                    '${user.lastname}',
                    '${user.email}'
                )
        `
          )
          .then(() => {
            console.log("Tables created");
          });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

module.exports = {pool, databaseCheck};

