jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Categories in the list
// * All 3 Categories have at least one Products

sap.ui.require([
	"sap/ui/test/Opa5",
	"Categories/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Categories/test/integration/pages/App",
	"Categories/test/integration/pages/Browser",
	"Categories/test/integration/pages/Master",
	"Categories/test/integration/pages/Detail",
	"Categories/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Categories.view."
	});

	sap.ui.require([
		"Categories/test/integration/MasterJourney",
		"Categories/test/integration/NavigationJourney",
		"Categories/test/integration/NotFoundJourney",
		"Categories/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});