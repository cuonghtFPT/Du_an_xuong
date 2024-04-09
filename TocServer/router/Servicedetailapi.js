var express = require("express");
var router = express.Router();

const servicedetails = require("../model/servicedetails");

router.get("/", (rq, rs) => {
  rs.send("Vao API ServiceDetail");
});

// Lấy danh sách các sản phẩm giày
router.get("/get-list-servicedatails", async (rq, rs) => {
  try {
    const data = await servicedetails.find();
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
router.post("/post-servicedatails", async (rq, rs) => {
  try {
    const data = rq.body;
    const newservicedetails = new servicedetails({
      name:data.name,
      phone:data.phone,
      message:data.message
    });
    const result = await newservicedetails.save();

    rs.status(201).json({
      status: 201,
      messenger: "Create servicedatails successfully",
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
router.delete("/delete-servicedatails-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const result = await servicedetails.findByIdAndDelete(id);

    if (result) {
      rs.json({
        status: 200,
        messenger: "Delete servicedatails successfully",
        data: result,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Servicedatails not found",
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
router.put("/update-servicedatails-by-id/:id", async (rq, rs) => {
  try {
    const { id } = rq.params;
    const data = rq.body;

    const updateservicedetails = await servicedetails.findByIdAndUpdate(id, data, { new: true });

    if (updateShoe) {
      rs.json({
        status: 200,
        messenger: "Update servicedatails successfully",
        data: updateservicedetails,
      });
    } else {
      rs.status(404).json({
        status: 404,
        messenger: "Servicedatails not found",
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
