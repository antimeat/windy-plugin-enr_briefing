
/**
 * This is main plugin loading function
 * Feel free to write your own compiler
 */
W.loadPlugin(

/* Mounting options */
{
  "name": "windy-plugin-enr_briefing",
  "version": "1.0.4",
  "author": "Darryl Vink",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/antimeat/windy-plugin-enr_briefing.git"
  },
  "description": "Windy plugin to overlay some locations",
  "displayName": "E&R briefing ",
  "className": "plugin-rhpane plugin-mobile-fullscreen",
  "classNameMobile": "plugin-mobile-bottom-slide",
  "hook": "menu",
  "exclusive": "rhpane"
},

/* HTML */
'<div class="plugin-content"> <h3>Forecast tools:</h3> <p> <ul> <li><a href="http://wa-aifs-local.bom.gov.au/nwp/viewers1.7/combo/" target="combo">Combo Viewer</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/nwp/viewers1.7/comparison/" target="comparison">Model Comparison</a></li> <li><a href="http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave_select.php?state=wa" target="auswave_tables">Auswave tables</a></li> </ul> </p> <h3>Obs:</h3> <p> <ul> <li><a href="https://wa-aifs-local.bom.gov.au/panther/#layersHashed=1&Channels-IR=1&Overlays-Lightning=1&Borders-Coast=1&Warnings-Sev%20TS=1&Warnings-Sev%20Wx=1&Alerts-Gusts=1&Alerts-Precip=1&Alerts-Lightning%20%26%20TAFs=1&Alerts-EnR%20squalls=1&Points-EnR=1&Points-EnR%20Custom=1&Points-EnR%20Squalls=1&Points-Ashburton%20Ob%20Sites=1&Borders-Districts=1&Borders-Marine%20Zones=1" target="panther">Panther</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/davink/swell//html/dashboard.php" target="swell_obs">WA buoys wave/tide</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/davink/swell_archive//html/dashboard.php" target="swell_archive">WA buoys wave/tide (archive)</a></li> <li><a href="http://tropic.ssec.wisc.edu/real-time/windmain.php?&basin=austwest&sat=wgms&prod=wvir&zoom=&time" target="simms">Cimms winds</a></li> </ul> </p> <h3>Rainfall:</h3> <p> <ul> <li><a href="http://www.data.jma.go.jp/omaad/rsmc_nowcast/en/hrp/" target="hrp">Heavy rain potential (HRP)</a></li> <li><a href="https://sigma.cptec.inpe.br/scope" target="scope">Scope-Nowcasting</a></li> <li><a href="https://sharaku.eorc.jaxa.jp/GSMaP_NOW/solomon.htm" target="jaxa">JAXA real-time rainfall</a></li> </ul> </p> <h3>Clients:</h3> <p> <ul> <li><a href="http://ssuweb.bom.gov.au/ssu_internal/ssuindex.pl?p=0&login=cws&pwd=cws" target="repository">Customer/forecast repository</a></li> </ul> </p> </div>',

/* CSS */
'.onwindy-plugin-enr_briefing .right-border{right:250px}.onwindy-plugin-enr_briefing #search{display:display-inside}#windy-plugin-enr_briefing{width:250px;height:100%;z-index:10}#windy-plugin-enr_briefing .closing-x{left:initial;font-size:30px;z-index:10;top:0}#windy-plugin-enr_briefing .plugin-content{padding:15px 10px;color:white;font-size:12px;line-height:1.6;background-color:#343d4f}#windy-plugin-enr_briefing .plugin-content ul{margin:20px 20px}#windy-plugin-enr_briefing .plugin-content ul li{text-decoration:none}#windy-plugin-enr_briefing .plugin-content h2{font-style:italic;color:whitesmoke}#windy-plugin-enr_briefing .plugin-content h3{font-style:italic;color:whitesmoke}#windy-plugin-enr_briefing .plugin-content small{display:block}',

/* Constructor */
function() {

	const bcast = W.require('broadcast');
	const store = W.require('store');
	const _ = W.require('utils');
	const map = W.require('map');


		const locations = [

			['NW Cape',
				-21.5,114,
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Enfield', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.50__S%20114.00__E.png', target='flamingo'>flamingo</a>",
			],

			['Offshore Pilbara',
				-19.58,116.14,
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Rankin', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo19.58__S%20116.13__E.png', target='flamingo'>flamingo</a>",
			],
			['Timor sea',
				-11.07,126.61,
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Bayu_Undan', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo11.07__S%20126.61__E.png', target='flamingo'>flamingo</a>",
			],
			['Browse basin',
				-13.92,123.22,
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Ichthys', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo13.92__S%20123.22__E.png', target='flamingo'>flamingo</a>",
			],
		];

        console.log('I am being mounted');

		const icon = L.icon({
            className: 'resources-icon',
			iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',

			opacity: 0.5,
        });

        let markers = null;

		const makeMarkers = () => {
			markers.forEach((m, i) => {
				const [name, lat, lon, auswave, flamingo] = locations[i];
			});
		};

        const createPopup = (name,lat,lon,auswave,flamingo) => {
            const marker = L.marker([lat, lon],{
				icon: map.myMarkers.icon,
				zIndexOffset: -300,
            }).addTo(map);

			marker.bindTooltip(name);

			marker.bindPopup('<br>' + name + '<br>' + auswave + '<br>' + flamingo);

			return marker;
        };

        bcast.on('rqstClose', () => {
		    if (!markers) {
                markers = locations.map(p => createPopup(p[0],p[1],p[2],p[3],p[4]));

				bcast.on('redrawFinished', makeMarkers);
			}
		});

        this.onopen = () => {
            if (!markers) {
                markers = locations.map(p => createPopup(p[0],p[1],p[2],p[3],p[4]));

				bcast.on('redrawFinished', makeMarkers);
			}
		};

        this.onopen = () => {
            if (!markers) {
                markers = locations.map(p => createPopup(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8]));

				bcast.on('redrawFinished', makeMarkers);
			}
		};

        this.onclose = () => {
            if (markers) {
                markers.forEach(m => map.removeLayer(m));
				bcast.off('redrawFinished', makeMarkers);
                markers = null;
            }
        };

});