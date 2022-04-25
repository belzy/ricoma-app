import "reflect-metadata"
import { DataSource } from "typeorm"
import {
    Color,
    Company,
    Machine,
    NeedleCount,
    Size,
    Type,
} from './entity';

const dbConfig = {
    HOST: process.env.DB_HOST,
    USERNAME: process.env.POSTGRES_USER,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DATABASE: process.env.POSTGRES_DB,
};

const entities = [
    Company,
    Machine,
    Color,
    Size,
    Type,
    NeedleCount,
];

export const AppDataSource = new DataSource({
    type: "postgres",
    host: dbConfig['HOST'],
    port: 5432,
    username: dbConfig['USERNAME'],
    password: dbConfig['PASSWORD'],
    database: dbConfig['DATABASE'],
    synchronize: true,
    logging: false,
    entities,
    migrations: [],
    subscribers: [],
})
