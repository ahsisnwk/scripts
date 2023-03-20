var url=location.href;

switch(true)
{
case url.includes("zxcs.me/post"):

$(".yinyong,#vote,.clear,.log_a,#footer,#lujing,.postinfo,.ajax_comment").remove();



case url.includes("zxcs.me/download"):

$(".diybanner,.banner,.panel:last").remove();
}