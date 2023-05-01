import {Sequelize} from "sequelize";
import { db } from "../db/conection.js";

const Series = db.define('Series',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo:{
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    descricao:{
        type: Sequelize.STRING(400),
        allowNull: false,
    },
    url:{
        type: Sequelize.STRING(1000),
        allowNull: false,
    },
});
Series.sync()
export default Series;