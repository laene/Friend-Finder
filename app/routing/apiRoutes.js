// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsArray = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsArray);       
    });

    app.post("/api/friends", function(req, res){
            let newScores = req.body.scores;  
            //here

            //for each loop goes thrpugh friends array
                //compare each index for each to each other
                //Math.abs()
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
                console.log(x);
                console.log(minScore);
               
              
                if (x < minScore) {
                    minScore = x;
                    bestMatch = friendsArray[i].name;
                    photo = friendsArray[i].photo;
                }
                console.log(bestMatch);
            }
            friendsArray.push(req.body);
            res.json(bestMatch);         
    })  
}