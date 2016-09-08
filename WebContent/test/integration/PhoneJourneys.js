jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"Categories/test/integration/NavigationJourneyPhone",
		"Categories/test/integration/NotFoundJourneyPhone",
		"Categories/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

