sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/wth/medipal/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Main", {
		formatter: formatter,
		onInit: function() {
			this.getView().setModel(sap.ui.getCore().getModel("data"));
		},

		onAfterRendering: function() {
			this.getView().getModel().refresh();
		},

		//Routing functions
		onToPage2: function() {
			this.getOwnerComponent().getRouter().navTo("page2");
		},

		onToPage3: function() {
			this.getOwnerComponent().getRouter().navTo("page3");
		},

		onToPage4: function() {
			this.getOwnerComponent().getRouter().navTo("page4");
		},

		onToPage5: function() {
			this.getOwnerComponent().getRouter().navTo("page5");
		}
	});

}, /* bExport= */ true);