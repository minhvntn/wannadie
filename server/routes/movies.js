var movies = [
    {id:0 , title:"Minions", director:"Kyle Balda, Pierre Coffin", time:"1:45", room:"Ballroom A", description: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.", url: 'img/minions.jpg', trailer: 'https://www.youtube.com/embed/SvKmSNxFHyQ?rel=0'},
    {id:1 , title:"The Gallows", director:"Travis Cluff, Chris Lofing", time:"90", room:"Ballroom B", description: "20 years after a horrific accident during a small town school play, students at the school resurrect the failed show in a misguided attempt to honor the anniversary of the tragedy - but soon discover that some things are better left alone.", url: 'img/Gallows.jpg', trailer: 'https://www.youtube.com/embed/hD3Wk2qkeX0?rel=0'},
    {id:2 , title:"Do I Sound Gay", director:"David Thorpe", time:"90", room:"Ballroom A", description: "An upcoming documentary about the stereotype of the 'gay voice'.", url: 'img/Gay.jpg', trailer: 'https://www.youtube.com/embed/R21Fd8-Apf0?rel=0'},
    {id:3 , title:"Tangerine", director:"Sean Baker", time:"95", room:"Ballroom B", description: "A working girl tears through Tinseltown on Christmas Eve searching for the pimp who broke her heart.", url: 'img/Tangerine.jpg', trailer: 'https://www.youtube.com/embed/ALSwWTb88ZU?rel=0'},
    {id:4 , title:"Nowitzki: The Perfect Shot", director:"Sebastian Dehnhardt", time:"97", room:"Ballroom A", description: "A documentary that follows the early career of basketball star Dirk Nowitzki, his relationship with coach and mentor Holger Geschwindner, and their path to NBA glory.", url: 'img/Nowitzki.jpg', trailer: 'https://www.youtube.com/embed/2FEtorlja9Y?rel=0'}
];

exports.findAll = function (req, res, next) {
    res.send(movies);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(movies[id]);
};