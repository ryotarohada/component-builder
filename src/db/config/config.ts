import { genParsedEnv } from '@/lib/env'
import { Sequelize, DataTypes } from 'sequelize'

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = genParsedEnv()

export const sequelize = new Sequelize(
  DB_NAME as string,
  DB_USERNAME as string,
  DB_PASSWORD as string,
  {
    host: DB_HOST as string,
    dialect: 'mysql',
  },
)
