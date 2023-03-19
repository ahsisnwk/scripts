var body=$response.body;

body=body.replace(/<div class="col-12[\s\S]*?<\/center>/g,'');

$done(body);
