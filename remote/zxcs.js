var url=location.href;

switch(true)
{
case url.includes("zxcs.me/post"):

body=body.replace(/<\/body>/g,'<script>$(".yinyong,#vote,.clear,.log_a,#footer,#lujing,.postinfo,.ajax_comment").remove();</script></body>');
break;



case url.includes("zxcs.me/download"):

body=body.replace(/<\/body>/g,'<script>$(".diybanner,.banner,.panel:last").remove(); </script></body>');
break;
}