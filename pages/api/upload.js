import multer from 'multer';
import path from 'path';
import fs from 'fs';

const upload = multer({
  storage: multer.diskStorage({
    destination: 'D:/pro',
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const extname = path.extname(file.originalname);
      cb(null, `${file.originalname}-${uniqueSuffix}${extname}`);
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadHandler = async (req, res) => {
  try {
    await upload.array('files')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Upload error:', err);
        return res.status(400).json({ error: 'Upload failed.' });
      } else if (err) {
        console.error('Upload error:', err);
        return res.status(500).json({ error: 'Server error.' });
      }

      return res.status(200).json({ message: 'Upload successful.' });
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Server error.' });
  }
};

export default uploadHandler;
