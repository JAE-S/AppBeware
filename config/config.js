module.exports = {
    development: {
      username: 'root',
      password: '1234',
      database: 'appbeware_dev',
      details: {
        host: process.env.SEQUELIZE_HOST,
        port: 3306,
        dialect: 'mysql'
      }
    },
    test: {
      username: process.env.TU,
      password: process.env.TP || null,
      database: 'appbeware_test',
      details: {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
      }
    },
    production: {
      'use_env_variable': 'JAWSDB_URL',
      details: {
        dialect: 'mysql'
      }
    }
  };
  