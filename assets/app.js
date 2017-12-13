
    $(document).ready(function () {
 /*     $("#basemapslider").slider({
            animate: true,
            value: 1,
            orientation: "vertical",
            min: 0,
            max: 1,
            step: 0.1,
            slide: function (event, ui) {
                __KV_TMS__.setOpacity(ui.value);
            }
       });

        $('#basemapslider').mousedown(function(){
          map.dragging.disable();
        })

        $('#basemapslider').mouseup(function(){
          map.dragging.enable();
        })
*/ 

      var map = L.map('map', {
        center: new L.LatLng(45.0057130421, 133.722030849), 
        zoom: 10
      });

      var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        zIndex: -1,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var ArcGISWorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 17,
        zIndex: -1,
        attribution:'Tiles &copy;<a href="http://www.esri.com/" target="_blank"> Esri</a> — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });
      
      /* Добавляем слой LV_TMS */
      var __LV_TMS__ = L.tileLayer('file:layers/LV_TMS/{z}/{x}/{y}.png', {
        maxZoom: 15,
        tms: true,
        zIndex: 4,
        attribution: 'WWF Amur branch'
      }).addTo(map);

/* Добавляем слой ULV_TMS */
      var __ULV_TMS__ = L.tileLayer('file:layers/ULV_TMS/{z}/{x}/{y}.png', {
        maxZoom: 15,
        tms: true,
         zIndex: 3,
        attribution: 'WWF Amur branch'
      }).addTo(map);

/* Добавляем слой SQNR_TMS */
      var __SQNR_TMS__ = L.tileLayer('file:layers/SQNR_TMS/{z}/{x}/{y}.png', {
        maxZoom: 15,
        tms: true,
        zIndex: 1,
        attribution: 'WWF Amur branch'
      }).addTo(map);

/* Добавляем слой KV_TMS */
      var __KV_TMS__ = L.tileLayer('file:layers/KV_TMS/{z}/{x}/{y}.png', {
        maxZoom: 15,
        tms: true,
        zIndex: 2,
        attribution: 'WWF Amur branch'
      }).addTo(map);



  

/* Меню выбора отображения слоев */

      var baseLayers = {
        "OpenStreetMap": osm,
        "ArcGIS World Imagery": ArcGISWorldImagery,  
      };

      var overlayLayers = {
        'Лесничества':__LV_TMS__,
        'Участковые лесничества':__ULV_TMS__,
        'Квартальная сетка':__KV_TMS__,
        'Выдела':__SQNR_TMS__  
      };
    var layerControl = L.control.layers(baseLayers, overlayLayers, {
                collapsed: true
            }).addTo(map);
    })
