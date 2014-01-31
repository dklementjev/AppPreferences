	var exec = require("cordova/exec");
	var AppPreferences = function () {};
	
	var AppPreferencesError = function(code, message) {
	    this.code = code || null;
	    this.message = message || '';
	};
	
	AppPreferencesError.NO_PROPERTY = 0;
	AppPreferencesError.NO_PREFERENCE_ACTIVITY = 1;
	
	AppPreferences.prototype.get = function(key,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","get",[key]);
	};

    AppPreferences.prototype._setRaw = function(type, key, value, success, fail) {
        cordova.exec(success,fail,"applicationPreferences","set",[key, value, type]);
    };

    AppPreferences.prototype.set = AppPreferences.prototype._setRaw.bind(null, "string");

    AppPreferences.prototype.setString = AppPreferences.prototype._setRaw.bind(null, "string");

    AppPreferences.prototype.setLong = AppPreferences.prototype._setRaw.bind(null, "long");

    AppPreferences.prototype.setInt = AppPreferences.prototype._setRaw.bind(null, "int");

    AppPreferences.prototype.setBoolean = AppPreferences.prototype._setRaw.bind(null, "boolean");
	
	AppPreferences.prototype.load = function(success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","load",[]);    
	};
	
	AppPreferences.prototype.show = function(activity,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","show",[activity]);    
	};
	
	AppPreferences.prototype.clear = function(success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","clear", []);    
	};
	
	AppPreferences.prototype.remove = function(keyToRemove, success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","remove", [keyToRemove]);    
	};

	var appPreferences = new AppPreferences();
	module.exports = appPreferences;
