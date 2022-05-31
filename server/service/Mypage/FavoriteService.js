import Product from "../../models/Product.js";
import ProductImg from "../../models/ProductImg.js";
import Favorite from "../../models/Favorite.js";

const FavoriteService = async (req, res) => {
  const { userId } = req.params;
  const page = (req.query.page - 1) * 4;
  const data = await Favorite.findAll({
    include: [
      {
        model: Product,
        attributes: ["idx", "title", "price"],
        required: true,
        include: [
          {
            model: ProductImg,
            attributes: ["productId", "imgUrl"],
            required: true,
          },
        ],
      },
    ],
    where: { userId: userId },
    limit: 4,
    offset: page,
  });
  console.log(">>>>>>" + JSON.stringify(data));
  res.json(data);
};

export default FavoriteService;
// [
//   {
//     idx: 2,
//     productId: 10,
//     userId: 3,
//     Product: {
//       idx: 10,
//       title: "독일군",
//       price: 40000,
//       ProductImgs: [
//         { productId: 10, imgUrl: "1652335399121-리오파 독일군.jpeg" },
//       ],
//     },
//   },
//   {
//     idx: 5,
//     productId: 26,
//     userId: 3,
//     Product: {
//       idx: 26,
//       title: "남자 슬랙스 팝니다",
//       price: 40000,
//       ProductImgs: [{ productId: 26, imgUrl: "1652622249409-슬랙스.jpeg" }],
//     },
//   },
//   {
//     idx: 6,
//     productId: 28,
//     userId: 3,
//     Product: {
//       idx: 28,
//       title: "애플워치 팔아요~!@",
//       price: 200000,
//       ProductImgs: [{ productId: 28, imgUrl: "1652623895788-애플워치.jpeg" }],
//     },
//   },
// ];
