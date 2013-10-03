$().ready(function() {

    // STYLE CHANGER

    var style = $('body').attr('class').split(' ');

    $('#change-pattern a').click(function() {
        style[0] = $(this).attr('href');
        $('body').removeClass().addClass(style[0]).addClass(style[1]).addClass(style[2]);
        return false;
    });

    $('#change-color a').click(function() {
        style[1] = $(this).attr('href');
        $('body').removeClass().addClass(style[1]).addClass(style[0]).addClass(style[2]);
        return false;
    });

    // FLEXSLIDER PORTFOLIO

    $('.flexslider').flexslider({
        slideshow: false,
        directionNav: false,
        controlNav: true,
        animationDuration: 500
    });

    $('.flexslider-detail').flexslider({
        animation: "fade",
        slideshowSpeed: 4000,
        directionNav: false,
        controlNav: true,
        animationDuration: 500
    });

    // FANCYBOX PORTFOLIO

    $("a.show-portfolio-text").fancybox({
        'titlePosition': 'inside'
    });

    $("a.show-portfolio-img").fancybox();

    // PORTFOLIO SELECT

    $('#choose').change(function() {
        var port = $("select option:selected").attr('value');
        $("#formCategory").attr("action", port + ".html#a-portfolio");
        $("#formCategory").submit();
    });

    // PORTFOLIO LI IMAGES

    $("ul.portfolio-slide li:nth-child(4n)").addClass("marginright-zero");

    // NAV

    $('.tabs a').click(function() {
        style[2] = $(this).attr('href').replace('#sec-', '');
        $('body').removeClass().addClass(style[0]).addClass(style[1]).addClass(style[2]);
        return false;
    });

    var $content = $("#main");

    // Run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 650,
        tabs: "> #header > #nav-global > ul > li.tabs",
        tabActiveClass: 'active',
    });

    $content.bind('easytabs:after', function() {
        var map = '<iframe id="mapIframe" width="400" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Zde%C5%88ka+%C5%A0t%C4%9Bp%C3%A1nka+2949%2F22,+Most,+Czech+Republic&amp;aq=0&amp;oq=Zde&amp;sll=35.101934,-95.712891&amp;sspn=43.019221,86.572266&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Zde%C5%88ka+%C5%A0t%C4%9Bp%C3%A1nka+2949%2F22,+434+01+Most,+Czech+Republic&amp;ll=50.493555,13.64193&amp;spn=0.01092,0.034332&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>';
        if (style[2] === 'contact') {
            $('#mapContainer').html(map);
        }else{
            $('#mapContainer').html("");
        }
    });

    // CONTACT VALIDATE

    $('#form-contact-me').validate({
        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        }
    });

});
