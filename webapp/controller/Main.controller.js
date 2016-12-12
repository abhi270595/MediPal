sap.ui.define( ["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Main", {
		onInit : function () {
		},

		onToPage2 : function () {
			this.getOwnerComponent().getRouter().navTo("page2");
		},
		
		onToPage3 : function () {
			this.getOwnerComponent().getRouter().navTo("page3");
		},
		
		onToPage4 : function () {
			this.getOwnerComponent().getRouter().navTo("page4");
		},
		
		onToPage5 : function () {
			this.getOwnerComponent().getRouter().navTo("page5");
		}
	});

}, /* bExport= */ true);