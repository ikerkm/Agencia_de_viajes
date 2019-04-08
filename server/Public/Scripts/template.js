let x = $(document);
x.ready(start);



function start() {
    let is_menu_drop = false;

    //$('.dropmenu').click(show_menu);


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Hey im on phone!");
    }
    /*let page_gg = $(window).resize(function (e) {

        return e = $(document).width();
    }).then();
    console.log(page_gg);
    if (page_gg <= 1000) {
        $('.nav_links').fadeOut();
        //    $('.icons').fadeOut();
        $('#responsive_menu').fadeIn();

        transform_destiny();

        function transform_destiny() {

            for (let i = 1; i <= $('.Destiny').length; i++) {
                $($('.Destiny')[i]).css('display', 'none');


            }
        }



        console.log('wtf is this shit');
        $('.previous').click(previous_destiny);
        $('.next').click(next_destiny);

        function previous_destiny() {
            console.log("entering");
            // console.log($($('.Destiny')[0]).css('display'));
            for (let z = 0; z < $('.Destiny').length; z++) {

                if ($($('.Destiny')[z]).css('display') === 'block') {
                    var destiny_to_change = $($('.Destiny')[z]).attr('id');
                    $($('.Destiny')[z]).css('display', 'none');
                    //    console.log(destiny_to_change)



                    let wich_destiny = destiny_to_change.charAt(destiny_to_change.length - 1);
                    //    console.log('Id separada' + wich_destiny);
                    let new_destiny = 0;
                    if (parseInt(wich_destiny) === 1) {
                        new_destiny = 6;
                    } else {
                        new_destiny = --wich_destiny;
                    }
                    //  console.log('Destiny_' + new_destiny);
                    $('#Destiny_' + new_destiny).css('display', 'block');






                }


            }
            
        }

        function next_destiny() {



        }











    } else {




        $('.nav_links').fadeIn();
        //    $('.icons').fadeIn();
        $('#responsive_menu').fadeOut();


        normalize_destiny();

        function normalize_destiny() {
            $('.Destiny').css('display', 'block');
        }
    }



    console.log(page_gg);





    //  $('#log_but').click(login);
    // $('#register_link').click(show_register_form)









    function show_menu() {
        $('#myDropdown').fadeIn();
        is_menu_drop = true;
        $('.dropmenu').focusout(hide_menu);

        function hide_menu() {
            $('#myDropdown').fadeOut();
        }

    }
    */
}