sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.wth.medipal.controller.Home", {
		onInit: function() {
			var data = {
				newTodo: "",
				todos: [{
					title: "ABC Clinic visit",
					completed: false,
					date: new Date("2016", "11", "15", "9", "0")
				}, {
					title: "Medicine Representive visit",
					completed: false,
					date: new Date("2016", "11", "15", "13", "0")
				}, {
					title: "Have to go to medicine store",
					completed: false,
					date: new Date("2016", "11", "15", "16", "0")
				}],
				someCompleted: false,
				completedCount: 0,
				startDate: new Date("2016", "11", "14", "8", "0"),
				people: [{
					pic: "sap-icon://doctor",
					name: "Dr. Shashank",
					role: "Dermatologist",
					appointments: [{
						start: new Date("2016", "11", "14", "9", "0"),
						end: new Date("2016", "11", "14", "1", "00"),
						title: "Appointment- Prasita",
						info: "Clinic",
						type: "Type01",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2016", "11", "14", "10", "30"),
						end: new Date("2016", "11", "14", "11", "30"),
						title: "Appointment- Abhisek",
						type: "Type02",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2016", "11", "14", "11", "30"),
						end: new Date("2016", "11", "14", "13", "00"),
						title: "Appointment- Abhay",
						type: "Type03",
						pic: "",
						tentative: true
					}, {
						start: new Date("2016", "11", "14", "14", "0"),
						end: new Date("2016", "11", "14", "16", "00"),
						title: "Appointment- Pratika",
						type: "Type04",
						pic: "",
						tentative: false
					}, {
						start: new Date("2016", "2", "9", "9", "0"),
						end: new Date("2016", "2", "9", "16", "0"),
						title: "Busy",
						type: "Type08",
						tentative: false
					}],
					headers: [{
						start: new Date("2016", "11", "15", "9", "0"),
						end: new Date("2016", "11", "15", "17", "0"),
						title: "Clinic Visit",
						pic: "sap-icon://accidental-leave",
						type: "Type05",
						tentative: false
					}]
				}]
			};
			var oModel = new sap.ui.model.json.JSONModel(data);
			sap.ui.getCore().setModel(oModel, "data");

			var mainLogin = this.getView().byId("mainLoginForm");
			mainLogin.setVisible(false);
		},
		
		onPressDoctor : function () {
			var loginForm = this.getView().byId("LoginForm");
			var mainLogin = this.getView().byId("mainLoginForm");
			var mainCarousel = this.getView().byId("carouselVBox");
			mainCarousel.setVisible(false);
			mainLogin.setVisible(true);
			loginForm.setTitle("Doctor");
			
		},
		
		onPressPatient : function () {
			var loginForm = this.getView().byId("LoginForm");
			var mainLogin = this.getView().byId("mainLoginForm");
			var mainCarousel = this.getView().byId("carouselVBox");
			mainCarousel.setVisible(false);
			mainLogin.setVisible(true);
			loginForm.setTitle("Patient");
		},
		
		onPressInstitution : function () {
			var loginForm = this.getView().byId("LoginForm");
			var mainLogin = this.getView().byId("mainLoginForm");
			var mainCarousel = this.getView().byId("carouselVBox");
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
					alert("Doctor");
					this.getOwnerComponent().getRouter().navTo("page1");
					//this.getOwnerComponent().getRouter().navTo("page1");
				} else {
					alert("Invalid login....Please try again");
				}
			} else {
				alert("fill in both th fields to login");
			}
		},
		
		validatePatient : function () {
			var userName = this.getView().byId("userName");
			var userValue = userName.getValue();
			var pass = this.getView().byId("pass");
			var passValue = pass.getValue();
			if (userValue!== "" && passValue!== "") {
				if (userValue==="meet" && passValue==="pass2341") {
					alert("Patient");
					//this.getOwnerComponent().getRouter().navTo("page1");
				} else {
					alert("Invalid login....Please try again");
				}
			}else {
				alert("fill in both th fields to login");
			}
		},
		
		validateInstitution : function () {
			var userName = this.getView().byId("userName");
			var userValue = userName.getValue();
			var pass = this.getView().byId("pass");
			var passValue = pass.getValue();
			if (userValue!== "" && passValue!== "") {
				if (userValue==="prasita" && passValue==="pass3412") {
					alert("Institution");
					//this.getOwnerComponent().getRouter().navTo("page1");
				} else {
					alert("Invalid login....Please try again");
				}
			}else {
				alert("fill in both th fields to login");
			}
		}
		
				
	});
});
