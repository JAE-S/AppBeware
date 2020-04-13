module.exports = {
    // development: {
    //   username: 'root',
    //   password: process.env.SQLPASS,
    //   database: 'appbeware_dev',
    //   details: {
    //     host: '127.0.0.1',
    //     port: 3306,
    //     dialect: 'mysql'
    //   }
    // },
    // test: {
    //   username: process.env.TU,
    //   password: process.env.TP || null,
    //   database: 'appbeware_test',
    //   details: {
    //     host: 'localhost',
    //     port: 3306,
    //     dialect: 'mysql',
    //     logging: false
    //   }
    // },

    development: {
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      // 'use_env_variable': 'JAWSDB_URL',
      details: {
        host: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        dialect: 'mysql'
      }
    },

    test: {
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      // 'use_env_variable': 'JAWSDB_URL',
      details: {
        host: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        dialect: 'mysql'
      }
    },


    production: {
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      // 'use_env_variable': 'JAWSDB_URL',
      details: {
        host: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        dialect: 'mysql'
      }
    }
  };
