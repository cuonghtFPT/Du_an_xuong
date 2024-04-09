var express = require("express");
var router = express.Router();

const Server = require("../model/services");

router.get("/", (rq, rs) => {
  rs.send("Vao API Server");
});

// Lấy danh sách các sản phẩm giày
router.get("/get-list-Server", async (rq, rs) => {
  try {
    const data = await Server.find();
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
router.post("/post-Server", async (rq, rs) => {
  try {
    const data = rq.body;
    const newServer  = new Server({
      img: data.img,
      maso:data.maso,
      giaban:data.giaban,
      giathue:data.giathue
    });
    const result = await newServer.save();

    rs.status(201).json({
      status: 201,
      messenger: "Create Server  successfully",
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
    const result = await Server.findByIdAndDelete(id);

    if (result) {
      rs.json({
        status: 200,
        messenger: "Delete Server  successfully",
        data: result,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Server  not found",
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
router.put("/update-Server-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const data = rq.body;

    const updateServer  = await Server.findByIdAndUpdate(id, data, { new: true });

    if (updateServer) {
      rs.json({
        status: 200,
        messenger: "Update Server  successfully",
        data: updateServer,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Server not found",
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
