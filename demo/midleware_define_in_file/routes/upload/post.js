export default (req, res) => {
  const file = req.files
  res.send(file[0])
}


