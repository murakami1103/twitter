$(function(){

    var text_max = 140; // 最大入力値
    $(".count").text(text_max - $("#memo_text").val().length);

    $("#memo_text").on("keydown keyup keypress change",function(){
        var text_length = $(this).val().length;
        var countdown = text_max - text_length;
        $(".count").text(countdown);
        // CSSは任意で
        if(countdown < 0){
            $('.count').css({
                color:'#ff0000',
                fontWeight:'bold'
            });
        } else {
            $('.count').css({
                color:'#000000',
                fontWeight:'normal'
            });
        }
    });
});