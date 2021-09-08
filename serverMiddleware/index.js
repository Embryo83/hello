export default {
  handler(req, res) {
    res.write("Hello World!");
    res.end();
  },
  path: "/"
};
