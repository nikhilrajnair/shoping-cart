$(document).ready(function() {

    $.each($('div.original-price s'), function(index, item) {

        var new_price;
        var original_price = item.innerHTML;
        var price = original_price.split("$");
        console.log(price);
        if (parseFloat(price[1]) > 20) {
            if (parseFloat(price[1]) < 100) {
                item.setAttribute("class", "strike");
                new_price = parseFloat(price[1]) * 0.8;
                $(item.parentElement.parentElement).append('<div class="discount_price">$' + new_price.toFixed(2) + '</div>');
            }
            if (parseFloat(price[1]) >= 100) {
                console.log(price[1]);
                if (parseFloat(price[1]) < 500) {
                    new_price = parseFloat(price[1]) * 0.7;
                    $(item.parentElement.parentElement).append('<div class="discount_price">$' + new_price.toFixed(2) + '</div>');
                } else {
                    new_price = parseFloat(price[1]) * 0.6;
                    $(item.parentElement.parentElement).append('<div class="discount_price">$' + new_price.toFixed(2) + '</div>');
                }
            }
        } else {
            console.log("false");
        }
    });
});