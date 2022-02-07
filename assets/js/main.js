;
(function ($) {
    "use strict";
    jQuery(document).ready(function () {

        
        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        // == Search Bar== //
        if ($('.search-icon').length) {
            $('.search-icon').on('click', function () {
                $('.search-form').toggleClass('show');
            });
        }

        // == Hero Slider== //
        if ($('.hero-slider').length) {
            var swiper = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.slide-content h1, .slide-content p, .slide-content a').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".hero-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Testimonial Slider== //
        if ($('.test-slider').length) {
            var swiper = new Swiper('.test-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 1200,
                loop: true,
                pagination: {
                    el: '.test-pagination',
                    clickable: true
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.testimonials .test-img, .testimonials h5, .testimonials span, .testimonials p').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".test-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Clients Slider== //
        if ($('.clients-slider').length) {
            var swiper = new Swiper('.clients-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                slidesPerView: 5,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    576: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 1
                    }
                }
            });

            $(".clients-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Light Gallery== //
        if ($('#lightgallery').length) {
            $("#lightgallery").lightGallery();
        }
    });

    $(document).ready(function () {

        function rand_string(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result;
          }
        
        var preview = $('.preview-image');
        var scaleX = 0.5;
        var scaleY = 0.5;
        var output_size = 1024; // px
        var output_name = rand_string(5)+'SaD-avatar.png';
        
            var text = { 'frames' : [
                {'name':'Khung sinh nhật CLB SaD', 'src' :'images/sinhnhat.png'},
            {'name':'Khung chào đón k63 CLB SaD', 'src' :'images/1235.png'}, 
            ]};
    
    
        var select = $('.frame-change select');
        select.html('');
        $.each( text.frames, function ( idx, item ) {
            if(idx == 0) {
                $('.frame-image').css('background-image', 'url(' + item.src + ')');
            }
            select.append('<option value="' + item.src + '">' + item.name + '</option>');
        });
    
    //     $.post( "ajax.php", function( data ) {
    //         if( ! data ) {
    //             alert('Lấy dữ liệu thất bại. Vui lòng tải lại trang.');
    //             return;
    //         }
    //         var select = $('.frame-change select');
    //         select.html('');
    //         $.each( data, function ( idx, item ) {
    //             if(idx == 0) {
    //                 $('.frame-image').css('background-image', 'url(' + item.src + ')');
    //             }
    //             select.append('<option value="' + item.src + '">' + item.name + '</option>');
    //         });
    //     });
    
        preview.cropper({
            aspectRatio: 1 / 1,
            dragMode: 'move',
            guides: false,
            center: false,
            modal: false,
            cropBoxMovable: false,
            cropBoxResizable: false,
            autoCrop: false,
            minCropBoxWidth: $('.dyn-box').outerWidth(),
            toggleDragModeOnDblclick: false,
        });
    
        $('.button-upload').click(function () {
            $('#upload-file').click();
        });
    
        $('#upload-file').change(function (e) {
            var file = e.target.files[0];
            if (!file) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                var image_url = e.target.result;
                preview.cropper('replace', image_url);
                $('.button').removeClass('hidden');
            };
            reader.readAsDataURL(file);
        });
    
        $('.button-rotate-left').click(function () {
            preview.cropper('rotate', -90);
        });
    
        $('.button-rotate-right').click(function () {
            preview.cropper('rotate', 90);
        });
    
        $('.button-zoom-in').click(function () {
            preview.cropper('zoom', 0.1);
        });
    
        $('.button-zoom-out').click(function () {
            preview.cropper('zoom', -0.1);
        });
    
        $('.button-flip-horizon').click(function () {
            scaleX = -scaleX;
            preview.cropper('scaleX', scaleX);
        });
    
        $('.button-flip-vertical').click(function () {
            scaleY = -scaleY;
            preview.cropper('scaleY', scaleY);
        });
    
        $('.button-reset').click(function () {
            preview.cropper('reset');
            scaleX = 1;
            scaleY = 1;
        });
    
        $('.button-download').click(function () {
            preview.cropper('crop');
            var cropped_image = preview.cropper('getCroppedCanvas');
    
            var canvas = document.createElement('canvas');
            canvas.width = output_size;
            canvas.height = output_size;
            var ctx = canvas.getContext('2d');
    
            var _img = new Image();
            var _frame = new Image();
    
            _img.src = cropped_image.toDataURL();
            _img.onload = function () {
                ctx.drawImage(_img, 0, 0, _img.width, _img.height, 0, 0, output_size, output_size);
                _frame.src = $('.frame-change select').val();
                _frame.onload = function () {
                    ctx.drawImage(_frame, 0, 0, _frame.width, _frame.height, 0, 0, output_size, output_size);
                    $('<a download="' + output_name + '" href="' + canvas.toDataURL() + '">Download Image</a>')[0].click();
                };
            };
        });
    
        $('.frame-change select').change(function () {
            $('.frame-image').css('background-image', 'url(' + $(this).val() + ')');
        });
    });
    
    
    jQuery(window).on('load', function () {
        // == Animate loader off screen == //
        $(".css-loader").fadeOut("slow");
        AOS.init({
            disable: 'mobile'
        });

    });
})(jQuery)