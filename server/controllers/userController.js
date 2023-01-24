const router = require('express').Router();
const { isGuest, isAuth } = require('../middlewares/authMiddlewares');
const userService = require('../services/userService');

router.post('/register',isGuest, async (req,res) => {

    const {email,password} = req.body;

    try {
        
        const user = await userService.register(email, password);
        const token = await userService.createToken(user);

        return res.json({
            'AccessToken':token,
            
            _id:user._id,
            email:user.email,
            // wallet:user.wallet
        })

    } catch (error) {

        res.status(404).json({error});

    }

});

router.post('/login',isGuest, async (req,res) => {

    const {email, password} = req.body;

    try {
        
        const user = await userService.login(email, password);
        const token = await userService.createToken(user);

        return res.json({
            'AccessToken':token,
            _id:user._id,
            email:user.email,
            // wallet:user.wallet
        })

    } catch (error) {

        res.status(404).json({error});

    }

});

module.exports = router;