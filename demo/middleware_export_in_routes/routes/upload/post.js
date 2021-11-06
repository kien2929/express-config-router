import upload from '@middleware/upload'

export default (req, res) => {
  const file = req.files
  res.send(file[0])
}

export const middleware = [upload]
