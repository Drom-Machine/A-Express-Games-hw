const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

//-----------------------------------------------------------------------------------------------------------------

let games = [
    {
    id: "adowb1b3bb",
    game: "League of Legends",
    description:
        "League of Legends is a team-based game with over 140 champions to make epic plays with.",
    },
    {
    id: "kd7b9ks2nda",
    game: "PlayerUnknown's Battlegrounds",
    description:
        "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback.",
    },
];

//-----------------------------------------------------------------------------------------------------------------//get-all-games

router.get("/get-all-games", function (req, res) {
    res.json({games})
});

router.get("get-game-by-id/:id", function (req, res) {
    games.forEach(item => {
        if (item.id === req.params.id) {
            response = item
        }})
        res.json({ message: "The game with the id does not exist, please check id" });
});

//-----------------------------------------------------------------------------------------------------------------//create-new-game

router.post("/create-new-game", function (req, res) {
    let lameGame = {
        id: uuidv4(),
        game: req.body.lameGame,
        description: req.body.description,
    };
    let games = games.findList((games) => games.game === lameGame.game);
    if(reg.body.lameGame === undefined || req.body.description === undefined) {
        res.json({message: "Cannot leave text area blank"});
    } else if (gameIndex === -1) {
        res.json({message: "Game already exists, cannot add game"});
        
    }
});

//-----------------------------------------------------------------------------------------------------------------//update-game
router.put("/update-game/:id", function (req, res) {
    let gameList = games.findList((games) => games.id === req.params.id);
    if (gameList === -1) {
        res.json({ message: "game not found, cannot update" });
    } else {
    if (req.body.description !== undefined) {
        games[gameList].description = req.body.description;
    }
    if (req.body.game !== undefined) {
        games[gameList].game = req.body.game;
    }
        res.json({ message: "Game Updated!" });
    }
});


//-----------------------------------------------------------------------------------------------------------------//delete-game
router.delete("/delete-game/:id", function (req, res) {
    let gameFound = games.findList((games) => games.id === req.params.id);
    if (gameFound === -1) {
        res.json({ message: "game not found, cannot delete" });
    } else {
        games.splice(gameFound, 1);
        res.json({games});
    }
});



module.exports = router;