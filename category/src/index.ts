import express, { Application} from 'express';
import cors from 'cors'
import indexRoutes from './routes/user.route';
const app: Application = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api", indexRoutes);

app.listen(3000);
console.log('category is running on port', 3000);