var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahDesaPurwasaba_1 = new ol.format.GeoJSON();
var features_WilayahDesaPurwasaba_1 = format_WilayahDesaPurwasaba_1.readFeatures(json_WilayahDesaPurwasaba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahDesaPurwasaba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahDesaPurwasaba_1.addFeatures(features_WilayahDesaPurwasaba_1);
var lyr_WilayahDesaPurwasaba_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahDesaPurwasaba_1, 
                style: style_WilayahDesaPurwasaba_1,
                popuplayertitle: 'WilayahDesaPurwasaba',
                interactive: true,
                title: '<img src="styles/legend/WilayahDesaPurwasaba_1.png" /> WilayahDesaPurwasaba'
            });
var format_Lapangan_2 = new ol.format.GeoJSON();
var features_Lapangan_2 = format_Lapangan_2.readFeatures(json_Lapangan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_2.addFeatures(features_Lapangan_2);
var lyr_Lapangan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_2, 
                style: style_Lapangan_2,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_2.png" /> Lapangan'
            });
var format_balaidesa_3 = new ol.format.GeoJSON();
var features_balaidesa_3 = format_balaidesa_3.readFeatures(json_balaidesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balaidesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balaidesa_3.addFeatures(features_balaidesa_3);
var lyr_balaidesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balaidesa_3, 
                style: style_balaidesa_3,
                popuplayertitle: 'balaidesa',
                interactive: true,
                title: '<img src="styles/legend/balaidesa_3.png" /> balaidesa'
            });
var format_masjid_4 = new ol.format.GeoJSON();
var features_masjid_4 = format_masjid_4.readFeatures(json_masjid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_4.addFeatures(features_masjid_4);
var lyr_masjid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_4, 
                style: style_masjid_4,
                popuplayertitle: 'masjid',
                interactive: true,
                title: '<img src="styles/legend/masjid_4.png" /> masjid'
            });
var format_Sekolahhh_5 = new ol.format.GeoJSON();
var features_Sekolahhh_5 = format_Sekolahhh_5.readFeatures(json_Sekolahhh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolahhh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahhh_5.addFeatures(features_Sekolahhh_5);
var lyr_Sekolahhh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahhh_5, 
                style: style_Sekolahhh_5,
                popuplayertitle: 'Sekolahhh',
                interactive: true,
                title: '<img src="styles/legend/Sekolahhh_5.png" /> Sekolahhh'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WilayahDesaPurwasaba_1.setVisible(true);lyr_Lapangan_2.setVisible(true);lyr_balaidesa_3.setVisible(true);lyr_masjid_4.setVisible(true);lyr_Sekolahhh_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WilayahDesaPurwasaba_1,lyr_Lapangan_2,lyr_balaidesa_3,lyr_masjid_4,lyr_Sekolahhh_5];
lyr_WilayahDesaPurwasaba_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_balaidesa_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_masjid_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sekolahhh_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_WilayahDesaPurwasaba_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_balaidesa_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_masjid_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sekolahhh_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_WilayahDesaPurwasaba_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_balaidesa_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_masjid_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Sekolahhh_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sekolahhh_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});