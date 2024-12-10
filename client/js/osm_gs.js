/**
 * Created by YODA on 19/11/2024.
 */
/**
 * Created by YODA on 12/11/2024.
 */
//URL Geoserver
var url_geoserver =  "http://localhost:8080/geoserver/wms";
//noms des couches
//var name_layer_landuse = "formation_gs:gis_osm_landuse";
var name_layer_landuse = "formation_gs:gis_osm_landuse_a_free_1";
var name_layer_roads = "formation_gs:gis_osm_roads_free_1";
var name_layer_pois = "formation_gs:gis_osm_pois_free_1";
var name_layer_places = "formation_gs:gis_osm_places_a_free_1";



var name_layer_adm1 = "formation_gs:civ_admbnda_adm1_cntig_ocha_itos_20180706"
var name_layer_adm2 = "formation_gs:civ_admbnda_adm2_cntig_ocha_itos_20180706"
var name_layer_adm3 = "formation_gs:civ_admbnda_adm3_cntig_ocha_itos_20180706"
var name_layer_abidjan = "formation_gs:Abidjan_HR_ext"


//var name_layer_roads = "formation_gs:gis_osm_roads";
//var name_layer_pois = "formation_gs:gis_osm_pois";
//var name_layer_places = "formation_gs:gis_osm_places";
//déclaration des couches openlayers

var lyr_img = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_abidjan, "TILED": "true"}
    })),
    title: "img"
});

var lyr_districts = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm1, "TILED": "true"}
    })),
    title: "Districts"
});

var lyr_regions = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm2, "TILED": "true"}
    })),
    title: "Regions"
});

var lyr_departements = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm3, "TILED": "true"}
    })),
    title: "Departements"
});



var lyr_landuse = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_landuse, "TILED": "true"}
    })),
    title: "Occupation du sol"
});

var lyr_roads = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_roads, "TILED": "true"}
    })),
    title: "Routes"
});
var lyr_pois = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_pois, "TILED": "true"}
    })),
    title: "POIs"
});
var lyr_places = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_places, "TILED": "true"}
    })),
    title: "Lieux"
});
//visibilité par défaut des couches au chargement de la carte
lyr_landuse.setVisible(true);
lyr_roads.setVisible(true);
lyr_pois.setVisible(true);
lyr_places.setVisible(true);
lyr_img.setVisible(true);
lyr_departements.setVisible(true)
lyr_regions.setVisible(true)
lyr_districts.setVisible(true)


//déclaration de la liste des couches à afficher dans un ordre précis
var layersList = [lyr_landuse,lyr_pois,lyr_places,lyr_districts,lyr_regions,lyr_departements,lyr_img,lyr_roads];
var mapView = new ol.View({
    projection: 'EPSG:3857',
    center:[-5.690183, 7.786829],
    zoom: 7
});
var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: mapView
});
var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Légende'
});
map.addControl(layerSwitcher);

var MousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326'
});

map.on('pointermove', function(event) {
    var coord3857 = event.coordinate;
    var coord4326 = ol.proj.transform(coord3857, 'EPSG:3857', 'EPSG:4326');
    $('#mouse3857').text(ol.coordinate.toStringXY(coord3857, 2));
    $('#mouse4326').text(ol.coordinate.toStringXY(coord4326, 5));
});

map.on('singleclick', function(evt) {
    onSingleClick(evt);
});

var onSingleClick = function(evt) {
    var coord = evt.coordinate;
    console.log(coord);
}

//Definition des popups pour affichage des infos
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
closer.onclick = function() {
    container.style.display = 'none';
    closer.blur();
    return false;
};
var overlayPopup = new ol.Overlay({
    element: container
});















//URL Geoserver
var url_geoserver = "http://localhost:8080/geoserver/wms";
//noms des couches
var name_layer_landuse = "	formation_gs_y:gis_osm_landuse";
var name_layer_roads = "	formation_gs_y:gis_osm_roads_free_1";
var name_layer_pois = "formation_gs_y:gis_osm_pois_a_free_1";
var name_layer_places = "formation_gs_y:gis_osm_places_free_1";
var name_layer_adm1 = "	formation_gs_y:civ_adm1";
var name_layer_adm2 = "formation_gs_y:civ_adm2";
var name_layer_adm3 = "formation_gs_y:civ_adm3";
var name_layer_Abidjan_HR_ext = "formation_gs:Abidjan_HR_ext";
//déclaration des couches openlayers
var lyr_osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});
var lyr_landuse = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_landuse, "TILED": "true"}
    })),
    title: "Occupation du sol"
});
var lyr_roads = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_roads, "TILED": "true"}
    })),
    title: "Routes"
});
var lyr_pois = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_pois, "TILED": "true"}
    })),
    title: "POIs"
});
var lyr_places = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_places, "TILED": "true"}
    })),
    title: "Lieux"
});
var lyr_adm1 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm1, "TILED": "true"}
    })),
    title: "adm1"
});
var lyr_adm2 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm2, "TILED": "true"}
    })),
    title: "adm2"
});
var lyr_adm3 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm3, "TILED": "true"}
    })),
    title: "adm3"
});
var lyr_Abidjan_HR_ext = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_Abidjan_HR_ext, "TILED": "true"}
    })),
    title: "image"
});
//visibilité par défaut des couches au chargement de la carte

lyr_landuse.setVisible(true);
lyr_roads.setVisible(true);
lyr_pois.setVisible(true);
lyr_places.setVisible(true);
lyr_adm1.setVisible(true);
lyr_adm2.setVisible(true);
lyr_adm3.setVisible(true);
lyr_Abidjan_HR_ext.setVisible(true);
lyr_osm.setVisible(true);
//déclaration de la liste des couches à afficher dans un ordre précis
//Definition des popups pour affichage des infos
var mapView = new ol.View({
    projection: "EPSG:4326",
    center: [-5.690183, 7.786829],
    zoom: 6
});

var container = document.getElementById("popup");
var content = document.getElementById("popup-content");
var closer = document.getElementById("popup-closer");
closer.onclick = function () {
    container.style.display = "none";
    closer.blur();
    return false;
};

var overlayPopup = new ol.Overlay({
    element: container
});

var map = new ol.Map({
    target: "map",
    layers: layersList,
    view: mapView,
    overlays: [overlayPopup]
});

var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: "Légende"
});
map.addControl(layerSwitcher);
var layersList = [
    new ol.layer.Tile({
        title: "OSM",
        type: "base",
        visible: true,
        source: new ol.source.OSM()
    }),
    lyr_landuse,
    lyr_roads,
    lyr_pois,
    lyr_places,
    lyr_adm1,
    lyr_adm2,
    lyr_adm3,
    lyr_Abidjan_HR_ext,
];

map.setLayerGroup(new ol.layer.Group({ layers: layersList }));

var MousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: "EPSG:4326"
});

// Define Geometries
var style = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(255, 100, 50, 0.3)"
    }),
    stroke: new ol.style.Stroke({
        width: 2,
        color: "rgba(255, 100, 50, 0.8)"
    }),
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: "rgba(55, 200, 150, 0.5)"
        }),
        stroke: new ol.style.Stroke({
            width: 1,
            color: "rgba(55, 200, 150, 0.8)"
        }),
        radius: 7
    })
});

const center = map.getView().getCenter();
const pinnedLocation = ol.proj.transform(center, "EPSG:3857", "EPSG:4326");

const point = new ol.Feature(new ol.geom.Point(center));
const cercle = new ol.Feature(new ol.geom.Circle(center, 5));

const pinLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [point, cercle]
    }),
    style: style
});

map.addLayer(pinLayer);

var vectorSource = new ol.source.Vector({
    projection: "EPSG:4326"
});
// vector layer
var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: style
});
//add layer to the map
map.addLayer(vectorLayer);

var interaction;
$("li button").on("click", function (event) {
    var buttonId = $(this).attr("id");

    console.log(buttonId, "dshgaskdg");
    // Toggle buttons
    // Remove previous interaction
    map.removeInteraction(interaction);
    switch (event.target.id) {
        case "select":
            interaction = new ol.interaction.Select();
            map.addInteraction(interaction);
            break;
        case "point":
            interaction = new ol.interaction.Draw({
                type: "Point",
                source: vectorLayer.getSource()
            });
            map.addInteraction(interaction);
            break;
        case "line":
            interaction = new ol.interaction.Draw({
                type: "LineString",
                source: vectorLayer.getSource()
            });
            map.addInteraction(interaction);
            break;
        case "polygon":
            interaction = new ol.interaction.Draw({
                type: "Polygon",
                source: vectorLayer.getSource()
            });
            map.addInteraction(interaction);
            break;
        case "modify":
            interaction = new ol.interaction.Modify({
                features: new ol.Collection(vectorLayer.getSource().getFeatures())
            });
            map.addInteraction(interaction);
            break;
        case "position":
            map.getView().setCenter(geolocation.getPosition());
            map.getView().setZoom(15);
            marker.setPosition(geolocation.getPosition());

            break;
        case "global":
            mapView.setZoom(3);
            break;
        default:
            break;
    }
});

map.on("pointermove", function (event) {
    var coord3857 = event.coordinate;
    var coord4326 = ol.proj.transform(coord3857, "EPSG:3857", "EPSG:4326");
    $("#mouse3857").text(ol.coordinate.toStringXY(coord3857, 2));
    $("#mouse4326").text(ol.coordinate.toStringXY(coord4326, 5));
});
var clicked_coord;

var onSingleClick = function (evt) {
    var coord = evt.coordinate;
    console.log(coord);

    var source1 = name_layer_adm1;
    var source2 = name_layer_adm2;
    var source3 = name_layer_adm3;

    var layers_list = source3 + "," + source2 + "," + source1;

    var wmslyr_adm1 = new ol.source.TileWMS({
        url: url_geoserver,
        params: { LAYERS: name_layer_adm1, TILED: true },
        serverType: "geoserver",
        crossOrigin: "anonymous"
    });

    var view = map.getView();
    var viewResolution = view.getResolution();

    var url = wmslyr_adm1.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        view.getProjection(),
        {
            INFO_FORMAT: "text/javascript",
            FEATURE_COUNT: 20,
            LAYERS: layers_list,
            QUERY_LAYERS: layers_list
        }
    );

    console.log(url);

    if (url) {
        clicked_coord = coord;
        $.ajax(url, { dataType: "jsonp" }).done(function (data) {});
    }
};

// Event listener for single click
map.on("singleclick", function (evt) {
    onSingleClick(evt);
});

function parseResponse(data) {
    var vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(data)
    });
    console.log(new ol.format.GeoJSON().readFeatures(data));
    var features = vectorSource.getFeatures();
    var str = "";
    var district = "";
    var region = "";
    var departement = "";
    for (x in features) {
        var id = features[x].getId();
        console.log(id);
        var props = features[x].getProperties();
        if (id.indexOf("adm1") > -1) district = props["ADM1_FR"];
        if (id.indexOf("adm2") > -1) region = props["ADM2_FR"];
        if (id.indexOf("adm3") > -1) departement = props["ADM3_FR"];
    }
    str = str + "District: " + district + "<br/>";
    str = str + "Région: " + region + "<br/>";
    str = str + "Département: " + departement + "<br/>";
    if (str) {
        str = "<p>" + str + "</p>";
        overlayPopup.setPosition(clicked_coord);
        content.innerHTML = str;
        container.style.display = "block";
    } else {
        container.style.display = "none";
        closer.blur();
    }
}



//Geolocation
var geolocation = new ol.Geolocation({
    projection: map.getView().getProjection(),
    tracking: true
});
var marker = new ol.Overlay({
    element: document.getElementById('location'),
    positioning: 'center-center'
});
map.addOverlay(marker);

var scaleLineControl = new ol.control.ScaleLine();
map.addControl(scaleLineControl);



