export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5433),
			database: env('DATABASE_NAME', 'bumilangit-api'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'postgres'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
