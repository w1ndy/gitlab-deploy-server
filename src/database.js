import sqlite3 from 'sqlite3';

import DeployConfig from '../config';

class Database {
    conn = new sqlite3.Database(DeployConfig.db.uri)
    constructor() {

    }

    isDatabaseReady() {

    }
}
