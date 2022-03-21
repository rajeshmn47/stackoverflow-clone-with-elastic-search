module.exports = (theFunc) => (req, res, next) => {
    console.log('oooooooooooooooooooooooooooooooooooooooorfffffffffffffff')
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
  