import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'base_yuli',
})
