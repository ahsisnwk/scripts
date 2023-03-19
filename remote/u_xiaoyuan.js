var url=$request.url;
var body=$response.body;


body=body.relpace(/"rs".*/g,'');


$done(body);
