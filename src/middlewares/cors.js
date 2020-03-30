exports.removeCORS = (req, res, next) =>{
    var allowedOrigins = [
        'http://localhost:5500',
        'http://localhost:5501',
        'http://localhost:3000',
        'https://fight-corona.rajchandra.me',
        'https://corona-go.info',
        'https://www.corona-go.info'
    ];
    var origin = req.headers.origin;
    if(origin == "https://www.rajchandra.me" || origin == `http://localhost:${process.env.PORT}`){
        res.header('Content-Type','text/html');
        next();
    }else{
        if(allowedOrigins.indexOf(origin) > -1){
            res.header('Access-Control-Allow-Origin', origin);
        }
        res.header('Connection','keep-alive');
        res.header('Keep-Alive','timeout=200');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === 'OPTIONS') {
            var headers = {
                "Access-Control-Allow-Methods" : "GET, POST, OPTIONS",
                "Access-Control-Allow-Credentials" : true
            };
            res.writeHead(200, headers);
            res.end();
        } else {
            next();
        }
    }
}