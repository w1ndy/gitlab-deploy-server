import DeployConfig from '../config';
import { Router } from 'express';

class DeployServer {
    router = Router();

    constructor() {
        this.router.post('/register', this.register.bind(this));
        this.router.post('/hook', this.hook.bind(this));
        console.log('Deploy Server has launched.');
    }

    register(req, res) {

    }

    hook(req, res) {

    }
};

export default new DeployServer();
