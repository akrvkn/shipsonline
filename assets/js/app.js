(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(t,e,s){"use strict";var i=s(138),n=s.n(i),a={"(min-width: 1441px)":"desktop-wide","(max-width: 1440px)":"desktop","(max-width: 1195px)":"tablet","(max-width: 980px)":"phone-big","(max-width: 767px)":"phone"},r="",o={previous:"",current:""};function l(){for(var t in a)window.matchMedia(t).matches&&(r=a[t]);if(o.current!==r){o.previous=o.current,o.current=r;var e=new CustomEvent("bp-"+r);window.dispatchEvent(e),e=new CustomEvent("bpChanged"),window.dispatchEvent(e)}}window.addEventListener("resize",n()(l,100)),l(),e.a=o},139:function(t,e,s){s(140),t.exports=s(154)},140:function(t,e,s){"use strict";s.r(e);s(141),s(142),s(143),s(147),s(148),s(149)},141:function(t,e,s){"use strict";(function(t){var e=s(2),i=t(".js-hero");if(i.length>0){var n=i.find(".js-hero-bg"),a=i.find(".js-hero-content"),r=i.find(".js-hero-pagination"),o=new e.a(n,{slidesPerView:1,slidesPerGroup:1,spaceBetween:0,observeParents:!0,observer:!0,effect:"fade",autoplay:{delay:5e3},fadeEffect:{crossFade:!1}});o.on("observerUpdate",(function(){o.update()}));var l=new e.a(a,{slidesPerView:1,slidesPerGroup:1,spaceBetween:0,observeParents:!0,observer:!0,fade:!0,controller:{control:o,by:"slide"},autoplay:{delay:5e3},pagination:{el:r,clickable:!0}});l.on("observerUpdate",(function(){o.update()})),l.on("paginationUpdate",(function(){o.autoplay.stop()}))}}).call(this,s(3))},142:function(t,e,s){"use strict";(function(t){var e=s(2);t(".js-slider").each((function(){var s,i,n=t(this),a=n.data("per-view"),r={320:{slidesPerView:1,slidesPerGroup:1,autoHeight:!0,spaceBetween:20},480:{slidesPerView:1,slidesPerGroup:1,autoHeight:!0,spaceBetween:20},640:{slidesPerView:1,slidesPerGroup:1,autoHeight:!0,spaceBetween:20},767:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20,autoHeight:!0},960:{slidesPerView:a>2?2:a,slidesPerGroup:a>2?2:a,spaceBetween:30},1195:{slidesPerView:a>3?3:a,slidesPerGroup:a>3?3:a,spaceBetween:30}};(s=new e.a(n,{slidesPerView:a,slidesPerGroup:a,spaceBetween:30,speed:500,navigation:{nextEl:n.find(".js-slider-next"),prevEl:n.find(".js-slider-prev")},pagination:{el:n.find(".swiper-pagination"),type:"bullets",clickable:!0},breakpoints:r})).on("resize",(function(){clearTimeout(i),i=setTimeout((function(){s.update()}),200)}))}))}).call(this,s(3))},143:function(t,e,s){"use strict";(function(t){var e=s(137),i=s(2),n=(s(146),s(145)),a=t(".js-tabs");a.each((function(s,a){n(a);var r,o=t(a).find(".js-tabs-slider"),l=o.find(".swiper-slide"),u=!1;function c(){if(["phone","phone-big"].includes(e.a.current)){if(u)return void r.update();r=new i.a(o,{direction:"horizontal",vertical:!1,freeMode:!0,spaceBetween:20,slidesPerView:"auto",mousewheel:{forceToAxis:!0}}),u=!0}else u&&(r.destroy(!0,!0),u=!1)}function d(){l.each((function(){var e=t(this),s=e.find(".tab").outerWidth(!0);e.width(s)}))}o.css("z-index",7),t(window).on("bpChanged",c),t(window).on("resize",d),c(),d(),setTimeout(c,200)})),a.find(".btn_filter").click((function(){var e=t(this),s=t("#"+e.attr("aria-controls"));s.find(".filter-type").prop("disabled",!1),s.siblings().find(".filter-type").prop("disabled",!0)}))}).call(this,s(3))},146:function(t,e){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var s=Object(this),i=s.length>>>0;if(0===i)return!1;var n,a,r=0|e,o=Math.max(r>=0?r:i-Math.abs(r),0);for(;o<i;){if((n=s[o])===(a=t)||"number"==typeof n&&"number"==typeof a&&isNaN(n)&&isNaN(a))return!0;o++}return!1}})},147:function(t,e){function s(){}if(s.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},s.addClass=function(t,e){var i=e.split(" ");t.classList?t.classList.add(i[0]):s.hasClass(t,i[0])||(t.className+=" "+i[0]),i.length>1&&s.addClass(t,i.slice(1).join(" "))},s.removeClass=function(t,e){var i=e.split(" ");if(t.classList)t.classList.remove(i[0]);else if(s.hasClass(t,i[0])){var n=new RegExp("(\\s|^)"+i[0]+"(\\s|$)");t.className=t.className.replace(n," ")}i.length>1&&s.removeClass(t,i.slice(1).join(" "))},s.toggleClass=function(t,e,i){i?s.addClass(t,e):s.removeClass(t,e)},s.setAttributes=function(t,e){for(var s in e)t.setAttribute(s,e[s])},s.getChildrenByClassName=function(t,e){t.children;for(var i=[],n=0;n<t.children.length;n++)s.hasClass(t.children[n],e)&&i.push(t.children[n]);return i},s.setHeight=function(t,e,s,i,n){var a=e-t,r=null;s.setAttribute("style","height:"+t+"px;"),window.requestAnimationFrame((function e(o){r||(r=o);var l=o-r,u=parseInt(l/i*a+t);s.setAttribute("style","height:"+u+"px;"),l<i?window.requestAnimationFrame(e):n()}))},s.scrollTo=function(t,e,s){var i=window.scrollY||document.documentElement.scrollTop,n=null;window.requestAnimationFrame((function a(r){n||(n=r);var o=r-n;o>e&&(o=e);var l=Math.easeInOutQuad(o,i,t-i,e);window.scrollTo(0,l),o<e?window.requestAnimationFrame(a):s&&s()}))},s.moveFocus=function(t){t||(t=document.getElementsByTagName("body")[0]),t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus())},s.getIndexInArray=function(t,e){return Array.prototype.indexOf.call(t,e)},s.cssSupports=function(t,e){return"CSS"in window?CSS.supports(t,e):t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))in document.body.style},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),"function"!=typeof window.CustomEvent){var i=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),s};i.prototype=window.Event.prototype,window.CustomEvent=i}Math.easeInOutQuad=function(t,e,s,i){return(t/=i/2)<1?s/2*t*t+e:-s/2*(--t*(t-2)-1)+e},function(){var t=document.getElementsByClassName("js-cd-top")[0],e=!1;function i(){var i=window.scrollY||document.documentElement.scrollTop;i>600?s.addClass(t,"cd-top--is-visible"):s.removeClass(t,"cd-top--is-visible cd-top--fade-out"),i>1200&&s.addClass(t,"cd-top--fade-out"),e=!1}t&&(window.addEventListener("scroll",(function(t){e||(e=!0,window.requestAnimationFrame?window.requestAnimationFrame(i):setTimeout(i,250))})),t.addEventListener("click",(function(t){t.preventDefault(),window.requestAnimationFrame?s.scrollTo(0,700):window.scrollTo(0,0)})))}()},148:function(t,e,s){(function(t){t(document).on("click","[data-tgl]",(function(e){e.preventDefault();var s=t(this),i=t(s.data("tgl"));return!!i.length&&(i.toggleClass(s.data("tgl-class")),!1)}))}).call(this,s(3))},149:function(t,e,s){"use strict";(function(t){var e=s(2),i=s(1),n=s.n(i);n.a.locale("ru"),n.a.tz.setDefault("Europe/Moscow");var a,r="0";t.getJSON("/assets/js/config.json").done((function(s){var i,l,u,c,d;a=s.ship,r=s.tour,u="https://api.mosturflot.ru/v3/rivercruises/tour-points?filter[tour-id]="+(l=r)+"&include=tour,tour.ship,excursions,title-image,tour-rates&fields[tours]=ship-id,days,start,finish,route,&fields[ships]=id,name&per-page=10000",c="https://api.mosturflot.ru/v3/rivercruises/ships/"+(i=a)+"?include=title-image,ship-class,services,cabin-categories,staff,deckplan,on-board-name",d="https://api.mosturflot.ru/v3/rivercruises/ships/"+i+"/images",i>0&&t.when(t.getJSON(c),t.getJSON(d)).done((function(s,i){var r,c,d;!function(e){t("#river_ship_cruise_deckplan").html('<a href="/assets/img/mtf/ships/'+a+'/deckplan.webp" target="_blank"><picture><source srcset="/assets/img/mtf/ships/'+a+'/deckplan.webp" type="image/webp"  width="100%"><img src="/assets/img/mtf/ships/'+a+'/deckplan.png" alt="План палуб"  width="100%"></picture></a>');var s=t("#river_cruise_ship_desc");t("#tourloading"),t("#shipname").html(e.data.attributes.name),t("#shiptitle").html(e.data.attributes.name),s.html(e.data.attributes.description);var i=[],n=[],r=[];t.each(e.included,(function(a,o){if("staff"===o.type&&i.push(o.attributes),"ship-classes"===o.type&&s.prepend("Класс теплохода: "+o.attributes.name+"<br>"),"services"===o.type)if("included"===o.attributes.status||"some cabins"===o.attributes.status){var l="some cabins"===o.attributes.status?"<br>(Некоторые каюты)":"";n[o.attributes["sort-order"]]='<li class="ships__item">\n<span class="ships-item__img">\n<div class="svg-'+o.id+" svg-"+o.id+'-dims" style="margin: 0 auto;"></div>\n</span>\n<span class="ships-item__desc">'+o.attributes.name+l+"</span>\n</li>"}else r[o.attributes["sort-order"]]='<li class="ships__item">\n<span class="ships-item__img">\n<div class="svg-'+o.id+" svg-"+o.id+'-dims" style="margin: 0 auto;"></div>\n</span>\n<span class="ships-item__desc">'+o.attributes.name+"</span>\n</li>";var u,c,d,p,m,h;a+1===e.included.length&&(i.sort((function(t,e){var s=t["sort-order"],i=e["sort-order"];return s<i?-1:s>i?1:0})),m=i,h=t("#river_ship_personal"),t.map(m,(function(e,s){h.append(t("<li />",{id:"staff_"+e.id,class:"ships__item"})),t.getJSON("https://api.mosturflot.ru/v3/rivercruises/staff/"+e.id+"/images",(function(s){var i="";s.data[0].links["image-url"]&&(i='<a href="#" class="ships-item">\n<span class="ships-item__img">\n<picture>\n<img src="'+s.data[0].links["image-url"]+'" alt="'+e.position+'">\n</picture>\n</span>\n<span class="tours-item__date">'+e.position+'</span>\n<span class="ships-item__title">'+e.name+"</span>\n</a>\n",t("#staff_"+e.id).append(i))}))})),u=n,c=r,d=t("#river_ship_services_included").empty(),p=t("#river_ship_services_pay").empty(),t.map(u,(function(t){d.append(t)})),t.map(c,(function(t){p.append(t)})))}))}(s[0]),r=i[0],c=t("#shipImages"),d={},t.each(r.data,(function(s,i){var n=null===i.attributes.title?"":i.attributes.title,a="",o="";n.length>0&&(o='<div class="ship-image__cabin">\n<div class="ship-image__caption"><span>&nbsp;'+n+"</span></div>\n</div>"),a+='<div class="swiper-slide"><span class="ships-item__img"><picture><img src="'+i.links["image-url"]+'" height="'+i.attributes.height+'" alt="Каюта" class="ship-gallery-img"></picture>'+o+"</span></div>",d[i.attributes["sort-order"]]=a;var l=0;s+1===r.data.length&&t.each(d,(function(t,s){l++,c.append(s),l===r.data.length&&new e.a(".swiper-ship-gallery",{autoHeight:!0,spaceBetween:20,updateOnWindowResize:!0,pagination:{el:".ship-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},navigation:{nextEl:".ship-slider-next",prevEl:".ship-slider-prev"}}).on("init",(function(){window.dispatchEvent(new Event("resize"))}))}))})),l>0&&t.getJSON(u).done((function(e){!function(e){var s=t("#river_tour_points").empty().html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'),i={},a="",r={};t.each(e.included,(function(l,u){if("tour-excursions"===u.type&&(i[u.id]={},i[u.id].name="Экскурсии на выбор",i[u.id].title=u.attributes.name,i[u.id].description=u.attributes.description,!0===u.attributes["is-additional"])){var c="";t.each(u.attributes.prices,(function(t,e){c+="<strong>Цена (мин. "+e["min-group"]+" чел.) "+e.price+"руб./чел.</strong><br>"})),i[u.id].name="<br><strong>\n\nДополнительные экскурсии: "+u.attributes.name+"</strong><br>",i[u.id].description=u.attributes.description+c+"<hr>"}if("point-images"===u.type&&(r[u.id]=u.links["image-url"]),"tours"===u.type){u.attributes.route,n()(u.attributes.start).format("DD MMMM H:mm")+" - "+n()(u.attributes.finish).format("DD MMMM H:mm");var d=o(u.attributes.start),p=o(u.attributes.finish);t("#tourroute").prepend(n()(u.attributes.start).format("DD MMMM")+" "+d+" - "+n()(u.attributes.finish).format("DD MMMM")+" "+p+" (Дней: "+u.attributes.days+")<br>"+u.attributes.route),t("#tourtitle").html('<span class="tours-item__date">'+n()(u.attributes.start).format("DD MMMM")+" "+d+" - "+n()(u.attributes.finish).format("DD MMMM")+" "+p+" (Дней: "+u.attributes.days+")</span><br>"+u.attributes.route)}if(l+1===e.included.length){var m={};t.each(e.data,(function(o,l){var u="",c="";l.relationships.excursions.hasOwnProperty("data")&&t.each(l.relationships.excursions.data,(function(t,e){var s=null===i[e.id].description?"":i[e.id].description;"Экскурсии на выбор"===i[e.id].name?c+="<p><strong>"+i[e.id].title+"\n\n</strong></p><p>"+s+"</p>":u+="<p><strong>"+i[e.id].name+"\n\n</strong></p><p>"+s+"</p>"})),a=l.relationships["title-image"].hasOwnProperty("data")?'<img src="'+r[l.relationships["title-image"].data.id]+'" alt="'+l.attributes.name+'"/>':'<img src="/assets/img/mtf/ships/blank.jpg" alt="'+l.attributes.name+'"/>';var d=!0===n()(l.attributes.arrive).isValid()?n()(l.attributes.arrive).format("DD MMMM H:mm"):"",p=!0===n()(l.attributes.departure).isValid()?n()(l.attributes.departure).format("DD MMMM H:mm"):"",h=!0===n()(l.attributes.arrive).isValid()?n()(l.attributes.arrive).format("X"):n()(l.attributes.date).format("X"),f=d+(""===p?p:" - "+p),v=""===f?n()(l.attributes.date).format("DD MMMM"):f,j=null===l.attributes.name?" ":l.attributes.name,b="";l.attributes.note&&(b=l.attributes.note),c.length,m[h]='<li class="tours__item"><div class="tours-item"><div class="tours-item__img">\n<picture>'+a+'</picture></div>\n<div class="tours-item__content">\n<span class="tours-item__date">'+v+'</span>\n<span class="tours-item__title">'+j+'</span>\n<div class="tours-item__text"><div class="excursions">'+b+c+u+"</div></div></div></div></li>",o+1===e.data.length&&(s.empty(),t.each(m,(function(t,e){s.append(e)})))}))}}))}(e)}))}))}));function o(t){return 3+parseInt(t.substr(11,2))+":"+t.substr(14,2)}}).call(this,s(3))},152:function(t,e,s){var i={"./af":4,"./af.js":4,"./ar":5,"./ar-dz":6,"./ar-dz.js":6,"./ar-kw":7,"./ar-kw.js":7,"./ar-ly":8,"./ar-ly.js":8,"./ar-ma":9,"./ar-ma.js":9,"./ar-sa":10,"./ar-sa.js":10,"./ar-tn":11,"./ar-tn.js":11,"./ar.js":5,"./az":12,"./az.js":12,"./be":13,"./be.js":13,"./bg":14,"./bg.js":14,"./bm":15,"./bm.js":15,"./bn":16,"./bn.js":16,"./bo":17,"./bo.js":17,"./br":18,"./br.js":18,"./bs":19,"./bs.js":19,"./ca":20,"./ca.js":20,"./cs":21,"./cs.js":21,"./cv":22,"./cv.js":22,"./cy":23,"./cy.js":23,"./da":24,"./da.js":24,"./de":25,"./de-at":26,"./de-at.js":26,"./de-ch":27,"./de-ch.js":27,"./de.js":25,"./dv":28,"./dv.js":28,"./el":29,"./el.js":29,"./en-au":30,"./en-au.js":30,"./en-ca":31,"./en-ca.js":31,"./en-gb":32,"./en-gb.js":32,"./en-ie":33,"./en-ie.js":33,"./en-il":34,"./en-il.js":34,"./en-in":35,"./en-in.js":35,"./en-nz":36,"./en-nz.js":36,"./en-sg":37,"./en-sg.js":37,"./eo":38,"./eo.js":38,"./es":39,"./es-do":40,"./es-do.js":40,"./es-us":41,"./es-us.js":41,"./es.js":39,"./et":42,"./et.js":42,"./eu":43,"./eu.js":43,"./fa":44,"./fa.js":44,"./fi":45,"./fi.js":45,"./fil":46,"./fil.js":46,"./fo":47,"./fo.js":47,"./fr":48,"./fr-ca":49,"./fr-ca.js":49,"./fr-ch":50,"./fr-ch.js":50,"./fr.js":48,"./fy":51,"./fy.js":51,"./ga":52,"./ga.js":52,"./gd":53,"./gd.js":53,"./gl":54,"./gl.js":54,"./gom-deva":55,"./gom-deva.js":55,"./gom-latn":56,"./gom-latn.js":56,"./gu":57,"./gu.js":57,"./he":58,"./he.js":58,"./hi":59,"./hi.js":59,"./hr":60,"./hr.js":60,"./hu":61,"./hu.js":61,"./hy-am":62,"./hy-am.js":62,"./id":63,"./id.js":63,"./is":64,"./is.js":64,"./it":65,"./it-ch":66,"./it-ch.js":66,"./it.js":65,"./ja":67,"./ja.js":67,"./jv":68,"./jv.js":68,"./ka":69,"./ka.js":69,"./kk":70,"./kk.js":70,"./km":71,"./km.js":71,"./kn":72,"./kn.js":72,"./ko":73,"./ko.js":73,"./ku":74,"./ku.js":74,"./ky":75,"./ky.js":75,"./lb":76,"./lb.js":76,"./lo":77,"./lo.js":77,"./lt":78,"./lt.js":78,"./lv":79,"./lv.js":79,"./me":80,"./me.js":80,"./mi":81,"./mi.js":81,"./mk":82,"./mk.js":82,"./ml":83,"./ml.js":83,"./mn":84,"./mn.js":84,"./mr":85,"./mr.js":85,"./ms":86,"./ms-my":87,"./ms-my.js":87,"./ms.js":86,"./mt":88,"./mt.js":88,"./my":89,"./my.js":89,"./nb":90,"./nb.js":90,"./ne":91,"./ne.js":91,"./nl":92,"./nl-be":93,"./nl-be.js":93,"./nl.js":92,"./nn":94,"./nn.js":94,"./oc-lnc":95,"./oc-lnc.js":95,"./pa-in":96,"./pa-in.js":96,"./pl":97,"./pl.js":97,"./pt":98,"./pt-br":99,"./pt-br.js":99,"./pt.js":98,"./ro":100,"./ro.js":100,"./ru":101,"./ru.js":101,"./sd":102,"./sd.js":102,"./se":103,"./se.js":103,"./si":104,"./si.js":104,"./sk":105,"./sk.js":105,"./sl":106,"./sl.js":106,"./sq":107,"./sq.js":107,"./sr":108,"./sr-cyrl":109,"./sr-cyrl.js":109,"./sr.js":108,"./ss":110,"./ss.js":110,"./sv":111,"./sv.js":111,"./sw":112,"./sw.js":112,"./ta":113,"./ta.js":113,"./te":114,"./te.js":114,"./tet":115,"./tet.js":115,"./tg":116,"./tg.js":116,"./th":117,"./th.js":117,"./tk":118,"./tk.js":118,"./tl-ph":119,"./tl-ph.js":119,"./tlh":120,"./tlh.js":120,"./tr":121,"./tr.js":121,"./tzl":122,"./tzl.js":122,"./tzm":123,"./tzm-latn":124,"./tzm-latn.js":124,"./tzm.js":123,"./ug-cn":125,"./ug-cn.js":125,"./uk":126,"./uk.js":126,"./ur":127,"./ur.js":127,"./uz":128,"./uz-latn":129,"./uz-latn.js":129,"./uz.js":128,"./vi":130,"./vi.js":130,"./x-pseudo":131,"./x-pseudo.js":131,"./yo":132,"./yo.js":132,"./zh-cn":133,"./zh-cn.js":133,"./zh-hk":134,"./zh-hk.js":134,"./zh-mo":135,"./zh-mo.js":135,"./zh-tw":136,"./zh-tw.js":136};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=152},154:function(t,e){}},[[139,1,2]]]);