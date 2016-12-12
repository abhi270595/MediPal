sap.ui.define( ["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/wth/medipal/utils/TableUtils",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	], function (Controller, History, TableExampleUtils, JSONModel, MessageToast, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Vacancies", {
		
		onInit : function () {
			var oView = this.getView();

			// set explored app's demo model on this sample
			var oJSONModel = TableExampleUtils.initSampleDataModel();
			oView.setModel(oJSONModel);

			oView.setModel(new JSONModel({
				globalFilter: "",
				availabilityFilterOn: false
			}), "ui");

			this._oGlobalFilter = null;
			this._oPriceFilter = null;
		},
		
		_filter : function () {
			var oFilter = null;

			if (this._oGlobalFilter && this._oPriceFilter) {
				oFilter = new sap.ui.model.Filter([this._oGlobalFilter, this._oPriceFilter], true);
			} else if (this._oGlobalFilter) {
				oFilter = this._oGlobalFilter;
			} else if (this._oPriceFilter) {
				oFilter = this._oPriceFilter;
			}

			this.getView().byId("table").getBinding("rows").filter(oFilter, "Application");
		},

		filterGlobally : function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			this._oGlobalFilter = null;

			if (sQuery) {
				this._oGlobalFilter = new Filter([
					new Filter("Name", FilterOperator.Contains, sQuery),
					new Filter("Category", FilterOperator.Contains, sQuery)
				], false);
			}

			this._filter();
		},

		filterPrice : function(oEvent) {
			var oColumn = oEvent.getParameter("column");
			if (oColumn != this.getView().byId("price")) {
				return;
			}

			oEvent.preventDefault();

			var sValue = oEvent.getParameter("value");

			function clear() {
				this._oPriceFilter = null;
				oColumn.setFiltered(false);
				this._filter();
			}

			if (!sValue) {
				clear.apply(this);
				return;
			}

			var fValue = null;
			try {
				fValue = parseFloat(sValue, 10);
			} catch(e){}

			if (!isNaN(fValue)) {
				this._oPriceFilter = new Filter("Price", FilterOperator.BT, fValue-20, fValue+20);
				oColumn.setFiltered(true);
				this._filter();
			} else {
				clear.apply(this);
			}
		},

		clearAllFilters : function(oEvent) {
			var oTable = this.getView().byId("table");

			var oUiModel = this.getView().getModel("ui");
			oUiModel.setProperty("/globalFilter", "");
			oUiModel.setProperty("/availabilityFilterOn", false);

			this._oGlobalFilter = null;
			this._oPriceFilter = null;
			this._filter();

			var aColumns = oTable.getColumns();
			for (var i=0; i<aColumns.length; i++) {
				oTable.filter(aColumns[i], null);
			}
		},

		
		//Routing
		onToPage1 : function () {
			this.getOwnerComponent().getRouter().navTo("page1");
		},

		onBack : function () {
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