function applicationPreferences() {}

applicationPreferences.prototype.get = function(key,success,fail) 
{
    var args = {};
    args.key = key;
    cordova.exec(success,fail,"applicationPreferences","getSetting",[args]);
};

applicationPreferences.prototype.set = function(key,value,success,fail) 
{
    var args = {};
    args.key = key;
    args.value = value;
    cordova.exec(success,fail,"applicationPreferences","setSetting",[args]);
};

applicationPreferences.prototype.setString = applicationPreferences.prototype.set;
applicationPreferences.prototype.setLong = applicationPreferences.prototype.set;
applicationPreferences.prototype.setInt = applicationPreferences.prototype.set;
applicationPreferences.prototype.setBoolean = applicationPreferences.prototype.set;
applicationPreferences.prototype.setFloat = applicationPreferences.prototype.set;

	module.exports = new applicationPreferences();

