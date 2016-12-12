sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/wth/medipal/model/models"
], function(UIComponent, Device, models) {
	"use strict";
	return UIComponent.extend("sap.wth.medipal.Component", {

		metadata: {
			manifest: "json",
			rootView: "sap.wth.medipal.view.App",
			routing: {
				config: {
					routerClass: "sap.m.routing.Router",
					viewPath: "sap.wth.medipal.view",
					controlId: "rootControl",
					controlAggregation: "pages",
					viewType: "XML"
				},
				routes: [
					{
						name: "page1",
						// empty hash - normally the start page
						pattern: "Shashank",
						target: "page1"
					},
					{
						name: "page2",
						pattern: "Page2",
						target: "page2"
					},
					{
						name: "page3",
						pattern: "Page3",
						target: "page3"
					},
					{
						name: "page4",
						pattern: "Page4",
						target: "page4"
					},
					{
						name: "page5",
						pattern: "Page5",
						target: "page5"
					}
				],
				targets: {
					page1: {
						viewName: "Main",
						viewLevel: 0
					},
					page2: {
						viewName: "Todo",
						viewLevel: 1
					},
					page3: {
						viewName: "Schedule",
						viewLevel: 2
					},
					page4: {
						viewName: "Explore",
						viewLevel: 3
					},
					page5: {
						viewName: "Vacancies",
						viewLevel: 4
					}
				}
			}
		},

		init : function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// Parse the current url and display the targets of the route that matches the hash
			this.getRouter().initialize();
			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
		}

	});
}, /* bExport= */ true);
