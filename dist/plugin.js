
/**
 * This is main plugin loading function
 * Feel free to write your own compiler
 */
W.loadPlugin(

/* Mounting options */
{
  "name": "windy-plugin-resources",
  "version": "1.0.5",
  "author": "Darryl Vink",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/antimeat/windy-plugin-resources.git"
  },
  "description": "Windy plugin to overlay some locations",
  "displayName": "resource locations",
  "className": "plugin-rhpane plugin-mobile-fullscreen",
  "classNameMobile": "plugin-mobile-bottom-slide",
  "hook": "menu",
  "exclusive": "rhpane"
},

/* HTML */
'<div class="plugin-content"> <h3>Forecast tools:</h3> <p> <ul> <li><a href="http://wa-cws-op.bom.gov.au/ofcast.wa/cgi-bin/ctl_frame.pl" target="ofcast">Ofcast</a></li> <li><a href="http://wa-cws-op.bom.gov.au/web/forecastChecker/" target="checker">Forecast checker</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/nwp/viewers1.7/combo/" target="combo">Combo Viewer</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/nwp/viewers1.7/comparison/" target="comparison">Model Comparison</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/ofcastData/index_dev.php" target="puffin">Puffin (autoswell)</a></li> <li><a href="http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave_select.php?state=wa" target="auswave_tables">Auswave tables</a></li> <li><a href="http://web.bom.gov.au/nmoc/sros/wavewatch3/auswave_western_region_buoys_locations_wavespectra_global_map.html" target="auswave_spectra">Auswave spectra</a></li> <li><a href="http://cws-a.bom.gov.au/cws/cgi-bin/ofcast/ecshipping.pl" target="towtool">Tow tool</a></li> <li><a href="https://bom365.sharepoint.com/:x:/r/sites/ERG/_layouts/15/Doc.aspx?sourcedoc=%7B9da167c5-b6de-4d8f-8d0f-6d9d34acbc7e%7D&action=edit&wdPreviousSession=e6591e81-1d33-4e3e-aa21-cb83d2db4524&cid=92f1ea71-ea35-4656-b01f-daff0b0d4698%20&web=1" target="towtoolsheet">Tow tool spread-sheet</a></li> <li><a href="http://wa-vw-er.bom.gov.au/webapps/jim/machineLearning/scripts/merms/index.cgi" target="ml_temps">Mermaid-ML-Temps</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/davink/ofcastSwells/index.php" target="swell_smusher">Swell Smusher</a></li> <li><a href="http://webcl.bom.gov.au/cgi-bin/nmoc/ocf.pl?type=bog&field=maxt&extn=bcl&state=WA&comp=no&sort=no&wx=pubic&stn=005017" target="ocf_temps">Onslow OCF temps</a></li> </ul> </p> <h3>Obs:</h3> <p> <ul> <li><a href="https://wa-aifs-local.bom.gov.au/panther/#layersHashed=1&Channels-IR=1&Overlays-Lightning=1&Borders-Coast=1&Warnings-Sev%20TS=1&Warnings-Sev%20Wx=1&Alerts-Gusts=1&Alerts-Precip=1&Alerts-Lightning%20%26%20TAFs=1&Alerts-EnR%20squalls=1&Points-EnR=1&Points-EnR%20Custom=1&Points-EnR%20Squalls=1&Points-Ashburton%20Ob%20Sites=1&Borders-Districts=1&Borders-Marine%20Zones=1" target="panther">Panther</a></li> <li><a href="http://metinsight.bom.gov.au/" target="metinsight">Metinsight (eandr_forecaster/password2017)</a></li> <li><a href="http://metis.fugro.com/" target="fugro">Fugro Barrow Island (username: Gorgon_MetBuoy@fugro.com, password: MetBuoy_Gorgon)</a></li> <li><a href="http://weather.aims.gov.au/#/station/1092" target="darwin_harbour">Darwin Harbour</a></li> <li><a href="http://hydrotel.pilbaraports.com.au/hydrotel/cgi-bin/hydrowebserver.cgi/details?district=1" target="ashburton">Ashburton obs</a></li> <li><a href="http://aifs-wa.bom.gov.au/local/php_apps/obs/map2.5.10/" target="obsmap">Obs map</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/davink/swell//html/dashboard.php" target="swell_obs">WA buoys wave/tide</a></li> <li><a href="http://wa-aifs-local.bom.gov.au/davink/swell_archive//html/dashboard.php" target="swell_archive">WA buoys wave/tide (archive)</a></li> <li><a href="https://weather.aims.gov.au/#/overview" target="aims">AIMS data centre</a></li> <li><a href="http://www.qld.gov.au/environment/coasts-waterways/beach/monitoring/waves-sites" target="qld_buoys">QLD buoys wave/tide</a></li> <li><a href="https://vdvportal.alsglobal.com/vdv/vdv.php/rtd/4" target="oktedi">Oktedi obs (otml/als)</a></li> <li><a href="http://tropic.ssec.wisc.edu/real-time/windmain.php?&basin=austwest&sat=wgms&prod=wvir&zoom=&time" target="simms">Cimms winds</a></li> </ul> </p> <h3>Rainfall:</h3> <p> <ul> <li><a href="http://www.data.jma.go.jp/omaad/rsmc_nowcast/en/hrp/" target="hrp">Heavy rain potential (HRP)</a></li> <li><a href="https://sigma.cptec.inpe.br/scope" target="scope">Scope-Nowcasting</a></li> <li><a href="https://sharaku.eorc.jaxa.jp/GSMaP_NOW/solomon.htm" target="jaxa">JAXA real-time rainfall</a></li> </ul> </p> <h3>Clients:</h3> <p> <ul> <li><a href="https://ssuweb.bom.gov.au/ssu_internal/ssuindex.pl?p=0&login=cws&pwd=cws" target="repository">Customer/forecast repository</a></li> </ul> </p> <h3>Admin:</h3> <p> <ul> <li><a href="https://bom365.sharepoint.com/sites/ERG/SitePages/E&R-National-Operations.aspx" target="sharepoint">E&R sharepoint</a></li> <li><a href="https://bom365.sharepoint.com/sites/NationalProductionServicesProgram/_layouts/15/Doc.aspx?sourcedoc=%7Bd91ab166-eca9-4680-a1ac-bb925564230c%7D&action=edit&wd=target%28Energy%20-%20Resources.one%7C6AC96175-F919-48C0-AA1A-F3264B8588C3%2F21%5C%2F08%5C%2F2021%7Cee31f641-9db8-4ef2-87e3-57e7c4c2be4a%2F%29" target="hoto">HOTO</a></li> <li><a href="https://ccf-cucm-pub.bom.gov.au/ucmuser/main#callforwarding" target="telephone">Call forwarding (WAOperations/Weather123)</a></li> <li><a href="https://wa-aifs-local.bom.gov.au/roster/live/scripts/roster.cgi?ForecastingCentre=WA+Public+Weather" target="roster">Roster tool (rocklobster)</a></li> <li><a href="https://rfc-wa.bom.gov.au/WorkingTime" target="workingtime">Overtime codes</a></li> </ul> </p> </div>',

/* CSS */
'.onwindy-plugin-resources .right-border{right:250px}.onwindy-plugin-resources #search{display:display-inside}#windy-plugin-resources{width:250px;height:100%;z-index:10}#windy-plugin-resources .closing-x{left:initial;font-size:30px;z-index:10;top:0}#windy-plugin-resources .plugin-content{padding:15px 10px;color:white;font-size:12px;line-height:1.6;background-color:#343d4f}#windy-plugin-resources .plugin-content ul{margin:20px 20px}#windy-plugin-resources .plugin-content ul li{text-decoration:none}#windy-plugin-resources .plugin-content h2{font-style:italic;color:whitesmoke}#windy-plugin-resources .plugin-content h3{font-style:italic;color:whitesmoke}#windy-plugin-resources .plugin-content small{display:block}',

/* Constructor */
function() {

	const bcast = W.require('broadcast');
	const store = W.require('store');
	const _ = W.require('utils');
	const map = W.require('map');


		const locations = [
			['Van-Gogh',
				-21.4,114.1,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/S.aspx', target='wiki'>Knowledge Repo</a>",
				"Auswave: use Enfield",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.40__S%20114.10__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Van_Gogh&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='https://metinsight.bom.gov.au/locations/VINC/observations', target='obs'>obs</a>",

			],
			['Varanus-Is',
				-20.6,115.6,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Santos--Varanus-Is.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Varanus', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.60__S%20115.60__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Varanus_Island&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=VRIS', target='obs'>obs</a>",

			],
			['Darwin-Harbour',
				-12.52,130.87,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Santos-.aspx', target='wiki'>Knowledge Repo</a>",
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.52__S%20130.87__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YPDN', target='obs'>obs</a>",

			],
			['Petrel',
				-12.82,128.48,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/N.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Petrel', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo12.82__S%20128.48__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Petrel&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northern,Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",
			],
			['Northern-Endeavour',
				-10.62,125.987,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Upstream-Solutions.aspx', target='wiki'>Knowledge Repo</a>",
				"Auswave: Use Bayu Undan'",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo10.62__S%20125.98__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Northern-Endeavour&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northern,Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Wandoo',
				-20.14,116.42,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Vermillion.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Wandoo', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.13__S%20116.42__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Wandoo&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Enfield',
				-21.5,114,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside--Enfield.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Enfield', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.50__S%20114.00__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Enfield&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=NWShelf', target='tc-rating'>TC-rating</a>",
				"<a href='http://wa-cws-op.bom.gov.au/web/verification/live/plot_simple.php?source=WoodsideInflux&site=Enfield', target='obs'>obs</a>",

			],

			['Casino',
				-38.78,142.70,
				"<a href='https://bom365.sharepoint.com/sites/ERG/E&R-Knowledge-Repository.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Casino', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo38.78__S%20142.70__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Casino&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Eastern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],

			['Mermaid-Sound',
				-20.58,116.76,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside---Mermaid-Sound.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://wa-aifs-local/ofcastData/reflected/index.php', target='tc-rating'>Reflected swell</a>",
				"<a href='https://wa-aifs-local.bom.gov.au/waves/mermaid_sound/index.php', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.60__S%20116.80__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Mermaid_Sound&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='https://wa-aifs-local.bom.gov.au/jrichard/machineLearning/scripts/merms/index.cgi', target='temps'>Jim's ML temps</a>",
				"<a href='http://wa-cws-op.bom.gov.au/web/verification/live/plot_simple.php?source=WoodsideInflux&site=NAVAID_9', target='obs'>obs</a>",

			],
			['Noblige',
				-19.4,114.33,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside--Noblige.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Noblige', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo19.40__S%20114.33__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Jansz&client=fcst#', target='risk-matrix'>risk-matrix (from Jansz)</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=NWShelf', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['North-Rankin',
				-19.58,116.14,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside--North-Rankin.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Rankin', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo19.58__S%20116.13__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=North_Rankin&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=NWShelf', target='tc-rating'>TC-rating</a>",
				"<a href='http://wa-cws-op.bom.gov.au/web/verification/live/plot_simple.php?source=WoodsideInflux&site=North-Rankin', target='obs'>obs</a>",

			],
			['Pluto-(PLA)',
				-20,115.37,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside--Pluto.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=PLA', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.00__S%20115.37__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Pluto&client=fcst#', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=NWShelf', target='tc-rating'>TC-rating</a>",
				"<a href='http://wa-cws-op.bom.gov.au/web/verification/live/plot_simple.php?source=WoodsideInflux&site=Pluto', target='obs'>obs</a>",

			],
			['Rowley-Shoals',
				-16.9,120.1,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside--Rowley-Shoals.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Rowley', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo16.90__S%20120.10__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Rowley_Schoals&client=point', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=ROWL', target='obs'>obs</a>",

			],
			['Scarborough_Infield',
				-19.87,113.16,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/woodside--Scarborough.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Scarborough_Infield', target='auswave'>Auswave</a>",
				"",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Scarborough&client=woodside', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Calliance',
				-14.61,121.55,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Woodside--Calliance.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Calliance', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo14.62__S%20121.55__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Calliance&client=woodside', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Dorado',
				-18.72,118.72,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Santos--Dorado.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Dorado', target='auswave'>Auswave</a>",
				"",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Dorado-1&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Eagle-1',
				-21.55,114.58,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/SapuraOMV.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='https://wa-aifs-local.bom.gov.au/waves/eagle1/index.php', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.6__S%20114.6__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Eagle-1&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Stag',
				-20.3,116.3,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/J.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Stag', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.30__S%20116.30__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Stag&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['AngloGold',
				-29.24,124.54,
				"<a href=https://bom365.sharepoint.com/sites/ERG/SitePages/Aglogold.aspx, target=_blank>Knowledge Repo</a>",
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo29.23__S%20124.53__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YTRA', target='obs'>obs</a>",

			],
			['Barrow-Island',
				-20.8,115.48,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Che.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Barrow_Island', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.80__S%20115.48__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Barrow_Island&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YBWX', target='obs'>obs</a>",

			],
			['Gorgon',
				-20.46,114.84,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Chevron-.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Gorgon', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.47__S%20114.83__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Gorgon&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Jansz',
				-19.81,114.61,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/C.aspxWiki', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Jansz', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo19.85__S%20114.50__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Jansz&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Kumul-Platform',
				-8.07,144.57,
				"<a href='http://cws-01.bom.gov.au/twiki/bin/view/SSUQLD/KumulHowTo', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=nt&site=Kumul_Platform', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo8.07__S%20144.57__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Pilbara-Port-Authority (Dampier)',
			-20.62,116.76,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Pilbara-Port-Authority.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Dampier_Nearshore_Port', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.60__S%20116.80__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Karratha&client=point', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YPKA', target='obs'>obs</a>",

			],
			['Pilbara-Port-Authority (Port Hedland)',
			-20.32,118.58,
				"No Wiki!",
				"",
				"",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=PortHedland&client=point', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='https://hydrotel.pilbaraports.com.au/hydrotel/', target='obs'>obs</a>",

			],
			['Pyrannees',
				-21.54,114.12,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/BHP.aspx',target=_blank>Knowledge Repo</a>",
				'Auswave: Use Enfield',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.53__S%20114.12__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Pyrannees&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='https://metinsight.bom.gov.au/locations/VINC/observations', target='obs'>obs</a>",

			],
			['Rio-Tinto-1',
				-22.54,119.03,
				'',
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo22.53__S%20119.03__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/'', target='obs'>obs</a>",

			],
			['Rio-Tinto-2',
				-21.67,115.88,
				'',
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.67__S%20115.88__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Bayu-Undan',
				-11.07,126.61,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Santos--Bayu-Undan.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Bayu_Undan', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo11.07__S%20126.61__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Bayu-Undan&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northern,Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YBYU', target='obs'>obs</a>",

			],
			['John-Brookes',
				-20.45,115.1,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Santos--John-Brookes.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=John_Brookes', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.45__S%20115.10__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=John_Brookes&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Reindeer',
				-20.02,116.31,
				"<a href='https://rfc-wa.bom.gov.au/CWS/QuadrantEnergyReindeer'Knowledge Repo/a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Reindeer', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.02__S%20116.32__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Reindeer&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Wheatstone-Plant',
				-21.69,115,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Chevron--Wheatstone-Plant.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='https://wa-aifs-local.bom.gov.au/waves/wheatstone_plant/index.php', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.67__S%20115.00__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=WheatstoneLNG&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='https://hydrotel.pilbaraports.com.au/hydrotel/cgi-bin/hydwebserver.cgi/sites/details?site=44&treecatchment=6', target='obs'>obs</a>",

			],
			['Cape-Preston',
				-20.67,116.17,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/CITIC.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Cape_preston', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.67__S%20116.17__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Cape_Preston_Area&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Mermaid-Stait',
				-20.62,116.40,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/CITIC.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Cape_preston', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo20.62__S%20116.40__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Mermaid_Strait&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],

			['Cape-Cuvier',
				-24.22,113.397,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Dampier-Salt.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='https://wa-aifs-local.bom.gov.au/waves/cape_cuvier/index.php', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo24.22__S%20113.40__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Cape_Cuvier&client=point', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://wa-cws-op.bom.gov.au/web/verification/live/plot_simple.php?source=DampierSalt&site=Cape%20Cuvier%20Offshore', target='obs'>obs</a>",

			],
			['Ichthys',
				-13.92,123.22,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/INPEX.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Ichthys', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo13.92__S%20123.22__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Ichthys&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='https://portal.axys-aps.com/platforms/P2202/', target='obs'>obs</a>",

			],
			['Montara',
				-12.67,124.55,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Jadestone--Montara.aspx', target='wiki'Knowledge Repo/a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=wa&site=Montara', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo12.67__S%20124.55__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Montara&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Kalgoorlie-Mixing',
				-30.6,121.57,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Kalgoorlie-Mixing.aspx', target='wiki'Knowledge Repo/a>",
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo30.6__S%20121.57__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YPKG', target='obs'>obs</a>",

			],
			['Kanowna-Belle',
				-30.61,121.58,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Kanowna-Belle-Gold-Mines.aspx', target='wiki'Knowledge Repo/a>",
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo30.60__S%20121.57__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YPKG', target='obs'>obs</a>",

			],
			['Abbot-Point ',
				-19.86,148.09,
				"<a href='http://cws-01.bom.gov.au/twiki/bin/view/SSUQLD/AbbotPointBulkcoalHowTo'><Wiki</a>",
				"<a href='http://aifs-qld.bom.gov.au/local/qld/rfc/pages/marine/waves/auswave.php?state=nt&site=Abbot_Point', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo19.87__S%20148.10__E.png', target='flamingo'>flamingo</a>",
				"<a href='https://www.qld.gov.au/environment/coasts-waterways/beach/monitoring/waves-sites/abbot-point', target='obs'>obs</a>",

			],
			['Ok-Tedi',
				-5.21,141.14,
				"<a href='http://cws-01.bom.gov.au/twiki/bin/view/SSUQLD/OkTediHowTo', target='wiki'Knowledge Repo/a>",
				'',
				"",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Onslow',
				-21.66,115.1,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Shark-Bay-Salt.aspx', target='wiki'Knowledge Repo/a>",
				'',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo21.67__S%20115.10__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Onslow&client=point', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YOLW', target='obs'>obs</a>",

			],
			['Wheatstone-Platform',
				-19.93,115.38,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Chevron--Wheatstone-Plant(1).aspx', target='wiki'Knowledge Repo/a>",
				'Auswave: Use Pluto',
				"<a href='http://wa-aifs-local/images/flamingo/flamingo19.93__S%20115.38__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Wheatstone_Platform&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/map/', target='obs'>obs</a>",

			],
			['Flying-Fish-Cove',
				-10.42,105.67,
				"<a href='https://bom365.sharepoint.com/sites/ERG/SitePages/Indian-Ocean-Stevedores.aspx', target='wiki'>Knowledge Repo</a>",
				"<a href='https://wa-aifs-local.bom.gov.au/waves/christmas_island/index.php', target='auswave'>Auswave</a>",
				"<a href='http://wa-aifs-local/images/flamingo/flamingo10.42__S%20105.67__E.png', target='flamingo'>flamingo</a>",
				"<a href='http://wa-cws-op/risk_matrix/?site_id=Flying_Fish_Cove&client=fcst', target='risk-matrix'>risk-matrix</a>",
				"<a href='http://wa-cws-op/webapps/tc_outlook/webAPI.cgi?get=outlookText&regions=Northwestern', target='tc-rating'>TC-rating</a>",
				"<a href='http://aifs-wa.bom.gov.au/local/php_apps/obs/meteograms2.3/?avid=YPCC', target='obs'>obs</a>",

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
				const [name, lat, lon, wiki, auswave, flamingo,risk,tc,obs] = locations[i];
			});
		};

        const createPopup = (name,lat,lon,wiki,auswave,flamingo,risk,tc,obs) => {
            const marker = L.marker([lat, lon],{
				icon: map.myMarkers.icon,
				zIndexOffset: -300,
            }).addTo(map);

			marker.bindTooltip(name);

			marker.bindPopup('<br>' + name + '<br>' + lat + ',' + lon + '<br>' + wiki + '<br>' + auswave + '<br>' + flamingo + '<br>' + risk + '<br>' + tc + '<br>' + obs);

			return marker;
        };

        bcast.on('rqstClose', () => {
		    if (!markers) {
                markers = locations.map(p => createPopup(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8]));

				bcast.on('redrawFinished', makeMarkers);
			}
		});

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