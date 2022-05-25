const getDataFromDB = async (data) => {
  userList = [];
  data.forEach((e) => {
    let user = {
      _id: e._id,
      email: e.email,
      password: e.password,
      subscribed: e.subscribed,
    };
    userList.push(user);
  });
  return userList;
};
module.exports = getDataFromDB;
