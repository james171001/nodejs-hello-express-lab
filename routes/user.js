import { Router } from "express";

const router = Router();

router.get('/', (req, res)=> {
    return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req,res)=> {
    return res.send(req.context.models.users[req.params.userId]);
});

router.post('/users', (req, res) => {
    res.send('Recieved a POST HTTP method on user resource');
});

router.put('/users', (req, res) => {
    res.send('Recieved a PUT HTTP method on user resource');
});

router.delete('/users/:userId', (req, res) => {
    res.send(`Recieved a DELETE HTTP method/${req.params.userId} resource`);
});

export default router;