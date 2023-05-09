module.exports = {
  development: {
    username: "postgres",
    password: "admin",
    database: "database_orenda",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "your-username",
    password: "your-password",
    database: "your-database-name",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
