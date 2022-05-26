import express, { json } from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import multer from  'multer';

const app = express();
const upload = multer({ dest: 'uploads/' })

app.set('case sensitive routing', false);
app.set('strict routing', false);
app.use(helmet());
app.use(json());
app.use(compression());
app.use(cors());

const RAM = [];

app.post('/photos/upload', upload.array('photos'), function (req, res) {
    if (req.files) {
        RAM.push(...req.files)
    }
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
});
export default app;