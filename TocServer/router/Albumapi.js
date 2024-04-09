var express = require("express");
var router = express.Router();

const Albums = require("../model/Albums");

router.get("/", (rq, rs) => {
  rs.send("Vao API Album");
});

// Lấy danh sách các sản phẩm giày
router.get("/get-list-Albums", async (req, res) => {
  try {
    const data = await Albums.find();
    console.log(data)
    res.json(data); // Trả về dữ liệu dưới dạng JSON
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
});


// Thêm mới một sản phẩm giày
router.post("/post-Albums", async (rq, rs) => {
  try {
    const data = rq.body;
    const newAlbums = new Albums({
      img: data.img,
      title: data.title,
    });
    const result = await newAlbums.save();

    rs.status(201).json({
      status: 201,
      messenger: "Create Albums successfully",
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
router.delete("/delete-Albums-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const result = await Albums.findByIdAndDelete(id);

    if (result) {
      rs.json({
        status: 200,
        messenger: "Delete Albums successfully",
        data: result,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Albums not found",
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
router.put("/update-Albums-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const data = rq.body;

    const updateAlbums = await Albums.findByIdAndUpdate(id, data, { new: true });

    if (updateAlbums) {
      rs.json({
        status: 200,
        messenger: "Update Albums successfully",
        data: updateAlbums,
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
