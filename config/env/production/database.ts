export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', '34.143.196.128'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'article'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'ppm_pw_2024'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
