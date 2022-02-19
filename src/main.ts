// console.log('Hello, ts-node!👋')
import { genParsedEnv } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import { DataTypes } from 'sequelize'
import { sequelize } from './db/config/config'

const env = genParsedEnv()
fetcher(env.API_ENDPOINT).then((res) => console.log(res.data))

const createUserTable = async () => {
  const User = sequelize.define('User', {
    // Userテーブル
    name: {
      type: DataTypes.STRING, // 文字列型
      allowNull: false, // Not Null
    },
    age: {
      type: DataTypes.INTEGER, // 整数型
    },
  })

  await User.sync({ force: true })
}

createUserTable()
  .then(() => {})
  .catch((err) => console.log(err))
