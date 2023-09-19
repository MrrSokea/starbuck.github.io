$(function () {
    $(".flex-bt-buy").click(function () {
        $(".price-pop").text(($(this).siblings(".price").text()).substring(1))
        funPrice(($(this).siblings(".price").text()).substring(1))
        var myImage = $("#myImage");
        var newImage = $(this).parent().siblings().children("img").attr("src")
        myImage.attr("src", newImage)

    })
    var getPrice;
    const funPrice=(price)=>{
        getPrice=price;
    }

    $(".number-coupon:eq(0)").addClass("back-color");
    $(".number-coupon").each(function () {
        $(this).click(function () {
            $(".price-pop").text(getPrice * parseInt($(this).text()))
            $(".number-coupon").removeClass("back-color")
            $(this).addClass("back-color")
        })


    })
})