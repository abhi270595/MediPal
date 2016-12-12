sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Home", {

		onInit : function () {
			var mainLogin = this.getView().byId("mainLoginForm");
			mainLogin.setVisible(false);
		},
		
		onPressDoctor : function () {
			var loginForm = this.getView().byId("LoginForm");
			var mainLogin = this.getView().byId("mainLoginForm");
			var mainCarousel = this.getView().byId("mainCarousel");
			mainCarousel.setVisible(false);
			mainLogin.setVisible(true);
			loginForm.setTitle("Doctor");
			
		},
		
		onPressPatient : function () {
			var loginForm = this.getView().byId("LoginForm");
			var mainLogin = this.getView().byId("mainLoginForm");
			var mainCarousel = this.getView().byId("mainCarousel");
			mainCarousel.setVisible(false);
			mainLogin.setVisible(true);
			loginForm.setTitle("Patient");
		},
		
		onPressInstitution : function () {
			var loginForm = this.getView().byId("LoginForm");
			var mainLogin = this.getView().byId("mainLoginForm");
			var mainCarousel = this.getView().byId("mainCarousel");
			mainCarousel.setVisible(false);
			mainLogin.setVisible(true);
			loginForm.setTitle("Institution");
		},
		
		onLoginPress : function () {
			var loginForm = this.getView().byId("LoginForm");
			var switchString = loginForm.getTitle();
			
			switch (switchString) {
				case "Doctor" : this.validateDoctor();
					break;
					case "Patient" : this.validatePatient();
						break;
							case "Institution" : this.validateInstitution();
								break;
			}
		},
		
		validateDoctor : function () {
			var userName = this.getView().byId("userName");
			var userValue = userName.getValue();
			var pass = this.getView().byId("pass");
			var passValue = pass.getValue();
			if (userValue!== "" && passValue!== "") {
				if (userValue==="abinash" && passValue==="pass1234") {
					//alert("Doctor");
					this.getOwnerComponent().getRouter().navTo("page1");
					//this.getOwnerComponent().getRouter().navTo("page1");
				} else {
					//alert("Invalid login....Please try again");
				}
			} else {
				//alert("fill in both th fields to login");
			}
		},
		
		validatePatient : function () {
			var userName = this.getView().byId("userName");
			var userValue = userName.getValue();
			var pass = this.getView().byId("pass");
			var passValue = pass.getValue();
			if (userValue!== "" && passValue!== "") {
				if (userValue==="meet" && passValue==="pass2341") {
					//alert("Patient");
					//this.getOwnerComponent().getRouter().navTo("page1");
				} else {
					//alert("Invalid login....Please try again");
				}
			}else {
				//alert("fill in both th fields to login");
			}
		},
		
		validateInstitution : function () {
			var userName = this.getView().byId("userName");
			var userValue = userName.getValue();
			var pass = this.getView().byId("pass");
			var passValue = pass.getValue();
			if (userValue!== "" && passValue!== "") {
				if (userValue==="prasita" && passValue==="pass3412") {
					//alert("Institution");
					//this.getOwnerComponent().getRouter().navTo("page1");
				} else {
					//alert("Invalid login....Please try again");
				}
			}else {
				//alert("fill in both th fields to login");
			}
		}
		
	});
});