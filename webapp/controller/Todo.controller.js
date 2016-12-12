sap.ui.define( ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], function (Controller, History) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Todo", {
	
		onInit: function() {
			this.getView().setModel(sap.ui.getCore().getModel("data"));
			this.oModel = this.getView().getModel();
		},

		addTodo: function() {
			var aTodos = this.oModel.getProperty('/todos');
			aTodos.unshift({
				title: this.oModel.getProperty('/newTodo'),
				completed: false,
				date: new Date()
			});
			this.oModel.setProperty('/newTodo', '');
			this.oModel.refresh();
		},

		toggleCompleted: function(oEvent) {
			var iCompletedCount = 0;
			var aTodos = this.oModel.getProperty('/todos');
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					iCompletedCount++;
				}
			}
			this.setCompletedCount(iCompletedCount);
			this.oModel.refresh();
		},

		clearCompleted: function(oEvent) {
			var aTodos = this.oModel.getProperty('/todos');
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}
			this.setCompletedCount(0);
			sap.ui.getCore().byId('__xmlview1--id_todos').setValue(aTodos.length);
			this.oModel.refresh();
		},

		setCompletedCount: function(iCount) {
			this.oModel.setProperty('/completedCount', iCount);
			this.oModel.setProperty('/someCompleted', iCount > 0);
			this.oModel.refresh();
		},
		
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