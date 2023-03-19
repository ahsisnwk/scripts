let url=$request.url;
let body=$response.body;

switch(true)
{
case url.includes("zxcs.me/post"):
body=body.replace(/<img[\s\S]*?>/g,'');
body=body.replace(/<p>[\s\S]*?<br>[\s\S]*?<\/p>/g,'');
body=body.replace(/<div class="log_a"[\s\S]*?<\/body>/g,'</body>');
body=body.replace(/<div id="vote"[\s\S]*?<\/div>/g,'');
body=body.replace(/<p class="yinyong"[\s\S]*?<\/p>/g,'');

break;

case url.includes("zxcs.me/download"):
     body=body.replace(/<div class="(diybanner|banner)[\s\S]*?<\/div>/g,'');
     break;
}
$done(body);
