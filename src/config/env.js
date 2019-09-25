const env = {
  database: 'promo',
  username: 'root',
  password: '',
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 90000,
	  idle: 10000
  }
};

module.exports = env;