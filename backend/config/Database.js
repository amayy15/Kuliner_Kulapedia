import { Sequelize } from "sequelize";

const db = new Sequelize ('kulapedia_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;