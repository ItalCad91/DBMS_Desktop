export function displayHomePage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App', page:'home'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};


export function displayAboutPage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App - About', page:'about'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayContactPage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App - Contact Us', page:'contactus'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayDownloadPage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App - Download', page:'download'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};