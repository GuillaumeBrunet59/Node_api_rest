const BaseService = require("../services/base.service");

class BaseController{

    constructor() {
        
        this.name = this.constructor.name.replace(`Controller`, ``);
        this.table = this.name.toLowerCase();
        
      }

    getAll = async () => {
        const sql = `SELECT * FROM ${this.table}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }

    getOne = (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE id=${id}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }

    createOne = () => {
        const sql = `CREATE TABLE ${this.table}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }

    updateOne = (id) => {
        const sql = `UPDATE ${this.table} SET WHERE id=${id}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }

    deleteOne = (id) => {
        const sql = `DELETE FROM ${this.table} WHERE id=${id}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }
}

module.exports = BaseController;