import {cities_data, itinerary, mapTree} from "./tourpoints";

/******* Map functions *******/

const res111 = itinerary(mapTree, 'Н.Новгород', 'Кижи');
//console.log(res111);

function isEmpty( el ){
    return !$.trim(el.html())
}

function renderMapPoints(route){
    //console.log(route.included[0].attributes.name);
    //prices[0].data.attributes['route']

    let points = route.data.attributes['route'].split(' - ');
    let tourPoints = [];
    let cities = [];
    let coords = [];
    let dir = '';
    $.map(points, function (point, index) {
        //console.log(point, index);
        if(point) {
            $.map(cities_data, function (pt) {
                if (point.indexOf(pt.name) > -1 && cities.indexOf(pt.name) === -1) {
                    tourPoints.push(pt);
                    cities.push(pt.name);
                }
                /*if(route.included[0].attributes.name.indexOf(pt.name) > -1){
                    dir = route.included[0].attributes.name;
                }*/
            });
        }
        if(points.length === index + 1) {
            if( location.hash === '#hidemap') {
                renderRouteMap(tourPoints, coords);
            }

        }
    });
    $('#hidemap').on('click', function(e){
        if(!$.trim( $('#route-map').html() ).length) {
            renderRouteMap(tourPoints, coords);
        }else{
            location.hash = '#hidemap';
        }
    });

}


function renderRouteMap(locations, line) {
    //console.log(line);
    let poly = [];
    let map = new google.maps.Map(document.getElementById('route-map'), {
        zoom: 5,
        scrollwheel: false,
        center: new google.maps.LatLng(55.749646, 37.62368),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        panControl: false,
        fullscreenControl: true,
        navigationControl: false,
        streetViewControl: false,
        animation: google.maps.Animation.BOUNCE,
        gestureHandling: 'cooperative',
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }]
    });
    let boxText = document.createElement("div");
    boxText.className = 'map-box';
    let currentInfobox;
    let boxOptions = {
        content: boxText,
        disableAutoPan: true,
        alignBottom: true,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-145, -45),
        zIndex: null,
        boxStyle: {
            width: "260px"
        },
        closeBoxMargin: "0",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
    };
    let markerCluster, marker, i;
    let allMarkers = [];
    let clusterStyles = [{
        textColor: 'white',
        url: '',
        height: 50,
        width: 50
    }];

    let bounds  = new google.maps.LatLngBounds();

    for (let c = 0; c < line.length; c++){
        let coords = new google.maps.LatLng(line[c][0], line[c][1])
        poly.push(coords);
        bounds.extend(coords);
    }

    let Itinerary = new google.maps.Polyline({
        path: poly,
        geodesic: true,
        strokeColor: '#0962a8',
        strokeOpacity: 1.0,
        strokeWeight: 3
    });
    //Itinerary.setMap(map);

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i]['latitude'], locations[i]['longitude']),
            icon: '/assets/img/mtf/marker.png',
            id: i
        });
        allMarkers.push(marker);
        let loc = new google.maps.LatLng(locations[i]['latitude'], locations[i]['longitude']);
        bounds.extend(loc);
        //if(i === locations.length - 1){
        map.fitBounds(bounds);
        //}
        //let ib = new InfoBox();
        let infowindow = new google.maps.InfoWindow({
            content: locations[i]['name']
        });
        marker.addListener('click', function() {
            infowindow.open(map, this);
        });
        /**google.maps.event.addListener(ib, "domready", function () {
                cardRaining()
            });*/
        /*google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                ib.setOptions(boxOptions);
                boxText.innerHTML = locations[i]['name'];
                ib.close();
                ib.open(map, marker);
                currentInfobox = marker.id;
                let latLng = new google.maps.LatLng(locations[i]['latitude'], locations[i]['longitude']);
                map.panTo(latLng);
                map.panBy(0, -180);
                google.maps.event.addListener(ib, 'domready', function () {
                    $('.infoBox-close').click(function (e) {
                        e.preventDefault();
                        ib.close();
                    });
                });
            }
        })(marker, i));*/
    }
    let options = {
        imagePath: '/assets/img/mtf/',
        styles: clusterStyles,
        minClusterSize: 2
    };
    markerCluster = new MarkerClusterer(map, allMarkers, options);
    google.maps.event.addDomListener(window, "resize", function () {
        let center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
    $('.map-item').click(function (e) {
        e.preventDefault();
        map.setZoom(15);
        let index = currentInfobox;
        let marker_index = parseInt($(this).attr('href').split('#')[1], 10);
        google.maps.event.trigger(allMarkers[marker_index], "click");
        if ($(this).hasClass("scroll-top-map")) {
            $('html, body').animate({
                scrollTop: $(".map-container").offset().top + "-80px"
            }, 500)
        } else if ($(window).width() < 1064) {
            $('html, body').animate({
                scrollTop: $(".map-container").offset().top + "-80px"
            }, 500)
        }
    });
    // Scroll enabling button
    let scrollEnabling = $('.scrollContorl');

    $(scrollEnabling).click(function (e) {
        e.preventDefault();
        $(this).toggleClass("enabledsroll");

        if ($(this).is(".enabledsroll")) {
            map.setOptions({'scrollwheel': true});
        } else {
            map.setOptions({'scrollwheel': false});
        }
    });
    let zoomControlDiv = document.createElement('div');
    let zoomControl = new ZoomControl(zoomControlDiv, map);

    function ZoomControl(controlDiv, map) {
        zoomControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
        controlDiv.style.padding = '5px';
        let controlWrapper = document.createElement('div');
        controlDiv.appendChild(controlWrapper);
        let zoomInButton = document.createElement('div');
        zoomInButton.className = "mapzoom-in";
        controlWrapper.appendChild(zoomInButton);
        let zoomOutButton = document.createElement('div');
        zoomOutButton.className = "mapzoom-out";
        controlWrapper.appendChild(zoomOutButton);
        google.maps.event.addDomListener(zoomInButton, 'click', function () {
            map.setZoom(map.getZoom() + 1);
        });
        google.maps.event.addDomListener(zoomOutButton, 'click', function () {
            map.setZoom(map.getZoom() - 1);
        });
    }
}