export function helloWorld(req, res, next){
    res.render('index.ejs');
};

export function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Good Bye World');
};