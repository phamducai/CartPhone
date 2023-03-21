const { PrismaClient } = require("@prisma/client");
const { errorCode, failCode, successCode } = require("../config/response");
const model = new PrismaClient();

// function to get all phones
const getAllPhones = async (req, res) => {
  try {
    const getAllPhone = await model.phone.findMany();
    return successCode(res, getAllPhone, "Get all phones successfully");
  } catch (error) {
    console.log(error);
    return errorCode(res, "Backend error");
  }
};

// function to get an phone by ID
const getPhoneByID = async (req, res) => {
  const { id } = req.params;

  try {
    const phone = await model.phone.findUnique({
      where: {
        id: +id,
      },
    });

    return successCode(res, phone, "getPhoneByID successfully");
  } catch (error) {
    return error(res, "backend error");
  }
};

// function to delete an phone by ID
const deletePhoneByID = async (req, res) => {
  try {
    const { id } = req.params;
    const [result1, result2, result3] = await Promise.all([
      model.comment.deleteMany({ where: { phone_id: +id } }), // delete comments associated with the phone
      model.phone_save.delete({ where: { phone_id: +id } }), // delete saved instances of the phone
      model.phone.delete({ where: { id: +id } }), // delete the phone itself
    ]);
    successCode(res, result3, "delete phone successfully");
  } catch (error) {
    console.log(error);
    const { code } = error;
    if (code === "P2025") {
      errorCode(res, "phone to delete does not exist");
    }
  }
};

module.exports = {
  getAllPhones,
  getPhoneByID,
  deletePhoneByID,
};
