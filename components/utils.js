const log = (data) => {
  const pixel = new Image()
  pixel.src=`https://logs-01.loggly.com/inputs/8a465978-add2-4b58-9d57-02f8869b2f17.gif?source=pixel&data=${data}`;
};

module.exports = {
  log
};
