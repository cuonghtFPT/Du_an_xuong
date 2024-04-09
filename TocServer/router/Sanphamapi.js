var express = require("express");
var router = express.Router();

const sanphams = require("../model/sanphams");

router.get("/", (rq, rs) => {
  rs.send("Vao API Sanpham");
});

// Lấy danh sách các sản phẩm giày
router.get("/get-list-sanphams", async (rq, rs) => {
  try {
    const data = await sanphams.find();
    rs.send(data);
  } catch (error) {
    console.log(error);
    rs.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
});

// Thêm mới một sản phẩm giày
router.post("/post-sanphams", async (rq, rs) => {
  try {
    const data = rq.body;
    const newsanphams = new sanphams({
      size:data.size,
      material:data.material,
      price:data.price,
      img:data.img
    });
    const result = await newsanphams.save();

    rs.status(201).json({
      status: 201,
      messenger: "Create sanphams successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    rs.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
});

// Xóa một sản phẩm giày dựa trên ID
router.delete("/delete-sanphams-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const result = await sanphams.findByIdAndDelete(id);

    if (result) {
      rs.json({
        status: 200,
        messenger: "Delete sanphams successfully",
        data: result,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "sanphams not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    rs.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
});

// Cập nhật thông tin một sản phẩm giày dựa trên ID
router.put("/update-sanphams-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const data = rq.body;

    const updatesanphams = await sanphams.findByIdAndUpdate(id, data, { new: true });

    if (updatesanphams) {
      rs.json({
        status: 200,
        messenger: "Update sanphams successfully",
        data: updatesanphams,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Album not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    rs.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
});

module.exports = router;
