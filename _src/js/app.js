/*
*   done by A.Korovkin
*/
// function isMobileDevice() {
//     //return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
//     return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 980);
// };
//
// let $b = $('body'),
//     $h = $('html'),
//     $w = $(window);
// $(document).click(function(event) {
//     if ($b.hasClass('show-filter')) {
//         //console.log(1);
//         if (!event.target.closest('.book__wrap')) {
//             //console.log(2);
//             $b.removeClass('show-filter');
//         }
//     }
// });
//
// $w.resize(function() {
//     //console.log($('.filter-toggle'));
//     //console.log($('.filter-toggle:visible'));
//     if ($b.hasClass('show-filter') && $('.filter-toggle:visible').length === 0) {
//         $b.removeClass('show-filter');
//     }
// });
//
// $('.section-filter').ontouchend = (e) => {
//     e.preventDefault();
// };

// let SimpleBar= require('simplebar');
//import SimpleBar from 'simplebar';
import './lib/hero';
//import './lib/select';
//import './lib/modals';
import './lib/slider';
import './lib/tabs';
//import './lib/tgl';
//import './lib/mainMenu';
import './mtf/backtotop';
//import './lib/cookies'
//import './lib/range';
//import './lib/datetime';
import './lib/tgl';
//import './mtf/init-featured';
//import './mtf/init-rivercruises';
import './mtf/init-rivercruise-details';
//import './mtf/ships-online';
//import './mtf/embed';
//import './mtf/tablo';
//import './mtf/contact-form';

// if (isMobileDevice()) {
//     $('[data-simplebarmanual]').each(function() {
//         new SimpleBar(this);
//     });
//     $('[data-simplebarmenu]').css('overflow', 'auto');
// }
 //Array.from(document.querySelectorAll('[data-simplebarmanual]')).forEach(el => new SimpleBar);


