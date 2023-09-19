$(document).ready(function () {
    // Function to filter products by discount percentage
    function filterProductsByDiscount(discount) {
        const productList = $("#contain_product");

        // Hide all products
        productList.find(".r1_product").find(".scroll").find(".product").hide();

        // Show products with the selected discount percentage
        productList.find(".r1_product").find(".scroll").find(`.product[data-discount="${discount}"]`).show();
        // productList.find(`li[data-discount="${discount}"]`).show();
    }
    function showallproduct(){
        const productList = $("#contain_product");
        productList.find(".r1_product").find(".scroll").find(".product").show()
    }
    $(".menu_dis:eq(0)").addClass("actionButton")
    // Add click event listeners to the discount buttons
    $("#discount10").on("click", function () {
        $(".menu_dis").removeClass("actionButton")
        $(this).addClass("actionButton")
        filterProductsByDiscount(10);
    });

    $("#discount20").on("click", function () {
        $(".menu_dis").removeClass("actionButton")
        $(this).addClass("actionButton")
        filterProductsByDiscount(20);
    });

    $("#discount30").on("click", function () {
        $(".menu_dis").removeClass("actionButton")
        $(this).addClass("actionButton")
        filterProductsByDiscount(30);
    });
    $("#discount40").on("click", function () {
        $(".menu_dis").removeClass("actionButton")
        $(this).addClass("actionButton")
        filterProductsByDiscount(40);
    });
    $("#discount50").on("click", function () {
        $(".menu_dis").removeClass("actionButton")
        $(this).addClass("actionButton")
        filterProductsByDiscount(50);
    });
    $("#allproduct").on("click", function () {
        $(".menu_dis").removeClass("actionButton")
        $(this).addClass("actionButton")
        showallproduct();
    });
});