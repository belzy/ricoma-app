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
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_NAME,
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
    host: "localhost",
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
