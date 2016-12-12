sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Schedule", {
		onInit: function() {
			this.getView().setModel(sap.ui.getCore().getModel("data"));
		},

		handleAppointmentSelect: function(oEvent) {
			var oAppointment = oEvent.getParameter("appointment");
			var oBinding = oAppointment.getBindingContext();
			var sPath = oBinding.getPath();
			var oProductDetailPanel = this.byId("appointmentDetailsPanel");

			oProductDetailPanel.bindElement({
				path: sPath
			});
			this.byId("appointmentDetailsPanel").setVisible(true);
		},

		handleIntervalSelect: function(oEvent) {
			var oPC = oEvent.getSource();
			var oStartDate = oEvent.getParameter("startDate");
			var oEndDate = oEvent.getParameter("endDate");
			var oRow = oEvent.getParameter("row");
			var oSubInterval = oEvent.getParameter("subInterval");
			var oModel = this.getView().getModel();
			var oData = oModel.getData();
			var iIndex = -1;
			var oAppointment = {
				start: oStartDate,
				end: oEndDate,
				title: "new appointment",
				type: "Type09"
			};

			if (oRow) {
				iIndex = oPC.indexOfRow(oRow);
				oData.people[iIndex].appointments.push(oAppointment);
				sap.ui.getCore().byId('__xmlview1--id_appointments').setValue(oData.people[iIndex].appointments.length);
			} else {
				var aSelectedRows = oPC.getSelectedRows();
				for (var i = 0; i < aSelectedRows.length; i++) {
					iIndex = oPC.indexOfRow(aSelectedRows[i]);
					oData.people[iIndex].appointments.push(oAppointment);
				}
			}

			oModel.setData(oData);

		},

		//Routing
		onToPage1: function() {
			this.getOwnerComponent().getRouter().navTo("page1");
		},

		onBack: function() {
			var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				// There is no history!
				// replace the current hash with page 1 (will not add an history entry)
				this.getOwnerComponent().getRouter().navTo("page1", null, true);
			}
		}
	});

}, /* bExport= */ true);