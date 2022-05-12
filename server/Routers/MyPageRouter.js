import express from "express";
import User from "../models/User.js"
import Product from "../models/Product.js";
import ProductImg from "../models/ProductImg.js";
import Favorite from "../models/Favorite.js";
import Comment from "../models/Comment.js";
import Order from "../models/Order.js";
import upload from "../service/multer.js"

const MyPageRouter = express.Router();

MyPageRouter.get("/product/:userId", async (req, res) => {
    const {userId} = req.params;
  const page = (req.query.page - 1) * 4;
  const data = await Product.findAll({
      include:[{
          model:User,
          required:false,
          where : {idx : userId}
        }, {
          model: ProductImg,
          attributes: ["imgUrl"],
          required: true
        }
      ],
      limit:4,
      offset:page,
    where : {seller : userId}
  });
  res.json(data);
});

MyPageRouter.get("/favorite/:userId", async (req, res) => {
    const {userId} = req.params;
    const page = (req.query.page - 1) * 4;
    const data = await Favorite.findAll({
        include:[{
            model:User,
            required:true,
            where : {idx : userId}
        }, {
            model: Product,
            attributes: ["idx", "title", "price"],
            required: true
        },{
            model:ProductImg,
            attributes: ["imgUrl"],
            required:true
        }
        ],
        limit:4,
        offset:page
    });
    res.json(data);
});

MyPageRouter.get("/order/:userId", async (req, res) => {
    const {userId} = req.params;
    const page = (req.query.page - 1) * 4;

    const data = await Product.findAll({
        include:[{
            model:User,
            required:false,
            where : {idx : userId}
        }, {
            model: ProductImg,
            attributes: ["imgUrl"],
            required: true
        },{
            model : Order,
            required : true,
            where : {buyer : userId}
        }
        ],
        limit:4,
        offset:page
    });
    res.json(data);
})

MyPageRouter.post("/img/:userId", upload.single("profileImg"), async (req, res) => {
    const {userId} = req.params;
    const image = req.file.filename;
    await User.update(
        {img:image},
        {where:{idx:userId}}
    );
    res.json({image : image});
});

MyPageRouter.get("/profile/:userId", async (req, res) => {
    const {userId} = req.params;
    const data = await User.findOne({
        attributes:["img", "nickName", "rate"],
        where:{idx : userId}
    });
    res.send(data);
});

MyPageRouter.get("/num/:userId",
    async (req, res, next) => {
        const {userId} = req.params;
        const pNum = await Product.findAndCountAll({
            include: [{
                model: User,
                required: false,
                where: {idx: userId}
            }],
            where : {seller : userId}
        });
        req.data = pNum.count;
        next();
    },
    async (req, res, next) => {
        const tmp = req.data;
        const {userId} = req.params;
        const fNum = await Favorite.findAndCountAll({
            include: [{
                model: User,
                required: true,
                where:{idx:userId}
            }]
        });

        console.log("++++++++FFFF"+JSON.stringify(fNum.rows));
        req.data = [tmp, fNum.count];
        next();
    },
    async (req, res, next) => {
        const tmp = req.data;
        const {userId} = req.params;
        const cNum = await Comment.findAndCountAll({
            where : {receiver: userId}
        });
        req.data = [tmp[0], tmp[1], cNum.count];
        next();
    },
    async (req, res, next) => {
        const tmp = req.data;
        const {userId} = req.params;
        const oNum = await Order.findAndCountAll({
            where : {buyer: userId}
        });
        res.json([tmp[0], tmp[1], tmp[2], oNum.count]);
    }
);

MyPageRouter.get("/comments/:userId", async (req, res) => {
   const {userId} = req.params;
   const data = await Comment.findAll({
       include : [{
           model : Product,
           required : true,
       }],
    where : {receiver : userId}
   });
   res.json(data);
});

MyPageRouter.delete("/withdraw/:userId", async (req, res) => {
    const {userId} = req.params;
    const data = await User.destroy({
        where : {idx : userId}
    });
    req.logout();
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.clearCookie("authCookie");
    });
    //res.redirect(process.env.CLIENT_URL_PORT);
});

export default MyPageRouter;