import Swiper from "swiper";
import moment from 'moment-timezone';
"use strict";
moment.locale("ru");
moment.tz.setDefault("Europe/Moscow");

let tourRoute = "",
  tourDates = "";

//const shipId = shipNum;
let shipId;
let tourId = "0";
const link = getConfig();

function getConfig(){
  $.getJSON("/assets/js/config.json").done(function (res) {
    shipId = res.ship;
    tourId = res.tour;
    initCruiseData(shipId, tourId);
    // const date = new Date();
    // const month =
    //     date.getMonth() > 9
    //         ? date.getMonth()
    //         : "0" + (date.getMonth() === 0 ? 1 : date.getMonth());
    // const fdate = date.getFullYear() + "-" + month + "-01";
    //
    // init("https://api.mosturflot.ru/v3/rivercruises/tours?fields[tours]=ship-id,route,start,finish,days&filter[ship-id]=" +
    //     res.id +
    //     "&filter[start][gte]=" +
    //     fdate +
    //     "T00:00:00Z&per-page=100000");
  })
}

// function init(url) {
//   $.getJSON(url).done(function (res) {
//     const now = moment();
//     const fin = [];
//     $.each(res.data, function (i, item) {
//       if (moment(item.attributes.finish).isAfter(now)) {
//         fin.push(item.attributes.finish);
//       }
//       if (i === res.data.length - 1) {
//         const findate = fin.sort()[0];
//         $.each(res.data, function (k, tour) {
//           if (tour.attributes.finish === findate) {
//             tourId = tour.id;
//             initCruiseData(shipId, tour.id);
//             return false;
//           }
//         });
//       }
//     });
//   });
// }

function initCruiseData(ship, tour) {
  const citiesURL =
    "https://api.mosturflot.ru/v3/rivercruises/tour-points?filter[tour-id]=" +
    tour +
    "&include=tour,tour.ship,excursions,title-image,tour-rates&fields[tours]=ship-id,days,start,finish,route,&fields[ships]=id,name&per-page=10000";
  const shipURL =
    "https://api.mosturflot.ru/v3/rivercruises/ships/" +
    ship +
    "?include=title-image,ship-class,services,cabin-categories,staff,deckplan,on-board-name";
  const shipImgURL =
    "https://api.mosturflot.ru/v3/rivercruises/ships/" + ship + "/images";

  if (ship > 0) {
    $.when(
      $.getJSON(shipURL),
      $.getJSON(shipImgURL),
    ).done(function(ships, images) {
      renderShipDescription(ships[0]);
      renderShipGallery(images[0]);
      if (tour > 0) {
        $.getJSON(citiesURL).done(function(points) {
          renderTourPoints(points);
        });
      }
    });
  }
}


function renderShipGallery(shipimages) {
  const imggallery = $("#shipImages");
  const imgs = {};
  $.each(shipimages.data, function(key, value) {
    let caption = value.attributes.title === null ? "" : value.attributes.title;
    let str = "";
    let capHolder = "";
    if (caption.length > 0) {
      capHolder =
        '<div class="ship-image__cabin">\n' +
        '<div class="ship-image__caption"><span>&nbsp;' +
        caption +
        "</span></div>\n" +
        "</div>";
    }
    str +=
      '<div class="swiper-slide"><span class="ships-item__img"><picture><img src="' +
      value.links["image-url"] +
      '" height="' +
      value.attributes.height +
      '" alt="Каюта" class="ship-gallery-img"></picture>' +
      capHolder +
      "</span></div>";
    imgs[value.attributes["sort-order"]] = str;
    let count = 0;
    if (key + 1 === shipimages.data.length) {
      $.each(imgs, function(k, v) {
        count++;
        imggallery.append(v);
        //window.dispatchEvent(new Event('resize'));
        if (count === shipimages.data.length) {
          //console.log('swiper');
          let swipe = new Swiper(".swiper-ship-gallery", {
            autoHeight: true, //enable auto height
            spaceBetween: 20,
            updateOnWindowResize: true,
            pagination: {
              el: ".ship-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1
            },
            navigation: {
              nextEl: ".ship-slider-next",
              prevEl: ".ship-slider-prev"
            }
          });
          swipe.on("init", function() {
            window.dispatchEvent(new Event("resize"));;
          });
        }
      });
    }
  });
}

function parseDateTime(dt) {
  let h = 3 + parseInt(dt.substr(11, 2));
  let m = dt.substr(14, 2);
  return h + ":" + m;
}

function renderTourPoints(points){
  const $tourPoints = $("#river_tour_points")
    .empty()
    .html(
      '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'
    );
  let excursions = {};
  let imgsrc = '';
  let images = {};
  $.each(points.included, function(index, inc){
    if(inc.type === 'tour-excursions'){
      excursions[inc.id] = {};
      excursions[inc.id]['name'] = 'Экскурсии на выбор';
      excursions[inc.id]['title'] = inc.attributes.name;
      excursions[inc.id]['description'] = inc.attributes.description;

      if(inc.attributes['is-additional'] === true){
        let prices = '';
        $.each(inc.attributes.prices, function(k, v){
          prices += '<strong>Цена (мин. ' + v['min-group'] + ' чел.) ' + v.price + 'руб./чел.</strong><br>';
        });
        excursions[inc.id]['name'] = '<br><strong>\n\nДополнительные экскурсии: ' + inc.attributes.name + '</strong><br>';
        excursions[inc.id]['description'] = inc.attributes.description + prices + '<hr>';
      }
    }
    if(inc.type === 'point-images'){
      images[inc.id] = inc.links['image-url'];
    }
    if(inc.type === 'tours'){
      tourRoute = inc.attributes.route;
      tourDates = moment(inc.attributes.start).format('DD MMMM H:mm') + ' - ' + moment(inc.attributes.finish).format('DD MMMM H:mm');
      let ts = parseDateTime(inc.attributes.start);
      let tf = parseDateTime(inc.attributes.finish);
      $('#tourroute').prepend(moment(inc.attributes.start).format('DD MMMM') + ' ' + ts + ' - ' + moment(inc.attributes.finish).format('DD MMMM') + ' ' + tf + ' (Дней: ' + inc.attributes.days + ')<br>' +  inc.attributes.route );
      $('#tourtitle').html('<span class="tours-item__date">' + moment(inc.attributes.start).format('DD MMMM') + ' ' + ts + ' - ' + moment(inc.attributes.finish).format('DD MMMM') + ' ' + tf + ' (Дней: ' + inc.attributes.days + ')</span><br>' +  inc.attributes.route  );
    }
    if(index + 1 === points.included.length){
      let tourpoints = {};
      $.each(points.data, function(i, point){
        let ex = '';
        let def = '';
        if(point.relationships.excursions.hasOwnProperty('data')){
          $.each(point.relationships.excursions.data, function(a,exq){
            let exDesc = excursions[exq.id].description === null ? '' : excursions[exq.id].description;
            if(excursions[exq.id].name === 'Экскурсии на выбор') {
              def += '<p><strong>' + excursions[exq.id].title + '\n\n</strong></p><p>' + exDesc + '</p>';
            }else {
              ex += '<p><strong>' + excursions[exq.id].name + '\n\n</strong></p><p>' + exDesc + '</p>';
            }
          });
        }
        if(point.relationships['title-image'].hasOwnProperty('data')){
          imgsrc = '<img src="' + images[point.relationships['title-image'].data.id] + '" alt="' + point.attributes.name + '"/>';
        }else{
          imgsrc = '<img src="/assets/img/mtf/ships/blank.jpg" alt="' + point.attributes.name + '"/>';
        }

        let arrive = moment(point.attributes.arrive).isValid() === true ? moment(point.attributes.arrive).format('DD MMMM H:mm'):'';
        let departure = moment(point.attributes.departure).isValid() === true ? moment(point.attributes.departure).format('DD MMMM H:mm'):'';
        let unix = moment(point.attributes.arrive).isValid() === true ? moment(point.attributes.arrive).format('X'):moment(point.attributes.date).format('X');

        let pointDate = arrive + (departure === ''? departure: ' - ' + departure);
        let formatDate = pointDate === '' ? moment(point.attributes.date).format('DD MMMM') : pointDate;
        let pointTitle = point.attributes.name === null ? ' ' : point.attributes.name;
        //console.log(point.attributes.name);
        //if(point.attributes.name !== null) {
        let note = '';
        if(point.attributes.note){
          note = point.attributes.note;
        }
        if(def.length > 0){
          //def = '<p><strong>Экскурсии на выбор</strong></p>' + def;
        }

        tourpoints[unix] = '<li class="tours__item"><div class="tours-item"><div class="tours-item__img">\n' +
            '<picture>' + imgsrc + '</picture></div>\n' +
            '<div class="tours-item__content">\n' +
            '<span class="tours-item__date">' + formatDate + '</span>\n' +
            '<span class="tours-item__title">' + pointTitle + '</span>\n' +
            '<div class="tours-item__text"><div class="excursions">' + note + def + ex + '</div></div></div></div></li>';
        //}
        if(i + 1 === points.data.length){
          $tourPoints.empty();
          let counter = 0;
          $.each(tourpoints, function(key, item){
            counter++;
            $tourPoints.append(item);
          })
        }
      });
    }
  });
}


function renderShipDescription(ship) {
  const $deckplan = $("#river_ship_cruise_deckplan");
  $deckplan.html(
    '<a href="/assets/img/mtf/ships/' +
      shipId +
      '/deckplan.webp" target="_blank"><picture><source srcset="/assets/img/mtf/ships/' +
      shipId +
      '/deckplan.webp" type="image/webp"  width="100%"><img src="/assets/img/mtf/ships/' +
      shipId +
      '/deckplan.png" alt="План палуб"  width="100%"></picture></a>'
  );
  const $riverCruiseShipDesc = $("#river_cruise_ship_desc");
  const $tourloading = $("#tourloading");
  $("#shipname").html(ship.data.attributes.name);
  $("#shiptitle").html(ship.data.attributes.name);
  $riverCruiseShipDesc.html(ship.data.attributes.description);
  let team = [];
  let servicesIncluded = [];
  let servicesPay = [];
  $.each(ship.included, function(index, included) {
    if (included.type === "staff") {
      team.push(included.attributes);
    }
    if (included.type === "ship-classes") {
      $riverCruiseShipDesc.prepend(
        "Класс теплохода: " + included.attributes.name + "<br>"
      );
    }
    if (included.type === "services") {
      if (
        included.attributes.status === "included" ||
        included.attributes.status === "some cabins"
      ) {
        let comment =
          included.attributes.status === "some cabins"
            ? "<br>(Некоторые каюты)"
            : "";
        servicesIncluded[included.attributes["sort-order"]] =
          '<li class="ships__item">\n' +
          '<span class="ships-item__img">\n' +
          '<div class="svg-' +
          included.id +
          " svg-" +
          included.id +
          '-dims" style="margin: 0 auto;"></div>\n' +
          "</span>\n" +
          '<span class="ships-item__desc">' +
          included.attributes.name +
          comment +
          "</span>\n" +
          "</li>";
      } else {
        servicesPay[included.attributes["sort-order"]] =
          '<li class="ships__item">\n' +
          '<span class="ships-item__img">\n' +
          '<div class="svg-' +
          included.id +
          " svg-" +
          included.id +
          '-dims" style="margin: 0 auto;"></div>\n' +
          "</span>\n" +
          '<span class="ships-item__desc">' +
          included.attributes.name +
          "</span>\n" +
          "</li>";
      }
    }
    if (index + 1 === ship.included.length) {
      team.sort(function(a, b) {
        let x = a["sort-order"],
          y = b["sort-order"];
        return x < y ? -1 : x > y ? 1 : 0;
      });
      getStaff(team);
      renderServices(servicesIncluded, servicesPay);
    }
  });
}

function renderServices(inc, pay) {
  const $servicesBlockIncluded = $("#river_ship_services_included").empty();
  const $servicesBlockPay = $("#river_ship_services_pay").empty();
  $.map(inc, function(service) {
    $servicesBlockIncluded.append(service);
    // ddefServices.content[2].ul.push($(service).text().replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, ""));
  });
  $.map(pay, function(money) {
    $servicesBlockPay.append(money);
    //ddefServices.content[4].ul.push($(money).text().replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, ""));
  });
}

function getStaff(staff) {
  //console.log(staff);
  const $personal_block = $("#river_ship_personal");
  $.map(staff, function(person, index) {
    $personal_block.append(
      $("<li />", { id: "staff_" + person.id, class: "ships__item" })
    );
    $.getJSON(
      "https://api.mosturflot.ru/v3/rivercruises/staff/" +
        person.id +
        "/images",
      function(imgs) {
        let item = "";
        if (imgs.data[0].links["image-url"]) {
          item =
            '<a href="#" class="ships-item">\n' +
            '<span class="ships-item__img">\n' +
            "<picture>\n" +
            '<img src="' +
            imgs.data[0].links["image-url"] +
            '" alt="' +
            person.position +
            '">\n' +
            "</picture>\n" +
            "</span>\n" +
            '<span class="tours-item__date">' +
            person.position +
            "</span>\n" +
            '<span class="ships-item__title">' +
            person.name +
            "</span>\n" +
            "</a>\n";
          $("#staff_" + person.id).append(item);
        }
      }
    );
  });
}
