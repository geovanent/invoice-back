export default () => ({
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    environment: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    cors: [
        'http://localhost:5000',
        'http://localhost:3000',
    ],
    data: {
        db_type: process.env.DB_TYPE,
        db_host: process.env.DB_HOST,
        db_port: process.env.DB_PORT,
        db_user_name: process.env.DB_USERNAME,
        db_password: process.env.DB_PASSWORD,
        db_database: process.env.DB_DATABASE
    }
});

