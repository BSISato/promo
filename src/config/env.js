const env = {
  database: 'dbpromo',
  username: 'sato',
  password: 'dbpromo123',
  host: 'dbpromo.ch9cls2xwuvz.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 90000,
	  idle: 10000
  }
};

module.exports = env;