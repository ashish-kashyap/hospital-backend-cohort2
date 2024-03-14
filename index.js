const express = require("express");
const app = express();

const users = [{
    Name : "John",
    Kidneys : [{
        healthy : false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const JohnKidneys = users[0].Kidneys;
    const numberOfKidneys = JohnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for(let i=0; i<JohnKidneys.length; i++)
    {
        if(JohnKidneys[i].healthy) 
        {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

app.post("/", function(req, res) {
    if(isThereAtLeastUnhealthyKidney) {
        const isHealthy = req.body.isHealthy;
        users[0].Kidneys.push({
            healthy : isHealthy
        })
        res.json({
            msg : "Done!"
        })
    }
    else {
        res.status(411).json ({
            msg : "You have no unhealthy kidney"
        });
    }
    
})

app.put("/", function(req, res) {
    for(let i=0; i<users[0].Kidneys.length; i++)
    {
        users[0].Kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {
    if(isThereAtLeastUnhealthyKidney()) {
        const newKidneys = [];
        for(let i=0; i<users[0].Kidneys.length; i++)
        {
            if(users[0].Kidneys[i].healthy) {
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].Kidneys = newKidneys;
        res.json({
            msg : "Done!"
        })
    }
    else {
        res.status(411).json ({
            msg : "You have no bad kidneys"
        });
    }    
})

function isThereAtLeastUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].Kidneys.length; i++)
    {
        if(!users[0].Kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);