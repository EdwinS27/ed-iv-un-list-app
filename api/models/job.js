'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Job extends Model {}
  Job.init({
    jobname: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  },
  {
    sequelize,
    modelName: 'job',
    timestamps: false
  });
  return Job;
};