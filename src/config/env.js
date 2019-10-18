const env = {
  database: 'dbpromo',

  username: 'root',
  password: '',
  host: '127.0.0.1',
  /*
  username: 'sato',
  password: 'dbpromo123',
  host: 'dbpromo.ctvttuahzevy.sa-east-1.rds.amazonaws.com',
  */
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 90000,
	  idle: 10000
  }
};

module.exports = env;