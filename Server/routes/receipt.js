import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({error: false, data: appreciation}); //JUST for testing purpose
})


export default router;