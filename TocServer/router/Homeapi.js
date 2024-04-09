var express = require("express");
var router = express.Router();

const Homes = require("../model/Homes");

router.get("/", (rq, rs) => {
  rs.send("Vao API Home");
});

// Lấy danh sách các sản phẩm giày
router.get("/get-list-Homes", async (rq, rs) => {
  try {
    const data = await Homes.find();
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
router.post("/post-Homes", async (rq, rs) => {
  try {
    const data = rq.body;
    const newHomes = new Homes({
      img: data.img,
      name: data.name,
    });
    const result = await newHomes.save();

    rs.status(201).json({
      status: 201,
      messenger: "Create Homes successfully",
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
router.delete("/delete-Homes-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const result = await Homes.findByIdAndDelete(id);

    if (result) {
      rs.json({
        status: 200,
        messenger: "Delete Homes successfully",
        data: result,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Homes not found",
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
router.put("/update-Homes-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const data = rq.body;

    const updateHomes = await Homes.findByIdAndUpdate(id, data, { new: true });

    if (updateHomes) {
      rs.json({
        status: 200,
        messenger: "Update Homes successfully",
        data: updateHomes,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Homes not found",
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
// Tìm kiếm sản phẩm giày theo tên
router.get("/search-Homes-by-name", async (rq, rs) => {
  try {
    const { name } = rq.query; // Lấy tên từ query parameters

    const data = await Homes.find({ name: { $regex: new RegExp(name, "i") } });

    if (data.length > 0) {
      rs.json({
        status: 200,
        messenger: "Search Homes by name successfully",
        data: data,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Homes not found with given name",
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
