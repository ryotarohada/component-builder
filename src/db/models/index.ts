'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}
