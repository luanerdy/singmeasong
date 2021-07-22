import pg, { PoolConfig } from 'pg';
import './dotenv';

const { Pool } = pg;

const config: PoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
};

const connection = new Pool(config);

export { connection };
