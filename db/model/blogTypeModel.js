const Sequelize = require('../db')
const { DataTypes } = require('sequelize')

const BlogType = Sequelize.define('BlogType', 
  {
    // 这张表拥有哪些字段
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    articleCount : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    order : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
  }
);


module.exports = BlogType