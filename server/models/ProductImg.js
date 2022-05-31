import { DataTypes } from "sequelize";
import sequelize from "./sq.js";
import Product from "./Product.js";

const ProductImg = sequelize.define(
  "ProductImg",
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imgUrl: {
      type: DataTypes.STRING(10000),
    },
    favoriteId: {
      type: DataTypes.INTEGER,
    },
  },

  //Model 옵션 정의
  {
    charset: "utf8",
    collate: "utf8_general_ci",
    tableName: "ProductImg",
    timestamps: false,
    paranoid: true,
  }
);

ProductImg.associate = () => {
  ProductImg.belongsTo(Product, { foreignKey: "productId", sourceKey: "idx" });
};

export default ProductImg;
