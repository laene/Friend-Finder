var friendsArray = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsArray);       
    });

    app.post("/api/friends", function(req, res){
            let newScores = req.body.scores;  
            let minScore = 1000;
            let bestMatch="";
            let photo = "";
            for (let i = 0; i < friendsArray.length; i++) {
                
                let scores = friendsArray[i].scores;
                let x = 0;
                for (let n = 0; n < scores.length; n++) {
                    let scoreNumber = parseInt(scores[n]);
                    let newScoreNumber = parseInt(newScores[n]);
                    x = x +  Math.abs(scoreNumber - newScoreNumber); 
                }
                if (x < minScore) {
                    minScore = x;
                    bestMatch = friendsArray[i].name;
                    photo = friendsArray[i].photo;
                }
            }
            friendsArray.push(req.body);
            res.json(bestMatch);         
    })  
}