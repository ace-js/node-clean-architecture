import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './di/inversify.config';
import { Application, json } from 'express';

const app: Application = new InversifyExpressServer(container).build()

app.use(json())

app.listen(3000, () => console.log('app listening on 3000'))