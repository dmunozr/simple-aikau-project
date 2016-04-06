define(["dojo/_base/declare",
        "alfresco/core/Core",
        "dojo/_base/lang",
        "alfresco/core/CoreXhr",
        "service/constants/Default",
        "dojo/_base/array",
        "alfresco/dialogs/AlfDialog",
        "alfresco/services/LoggingService"],
        function(declare, Core, lang, CoreXhr, AlfConstants, array, AlfDialog) {

	return declare([Core, CoreXhr], {

    constructor: function dashboard_DashboardService__constructor(args) {
      lang.mixin(this, args);
      this.alfSubscribe("DASHBOARD_GET_ASSET_SPEC_WITHOUT_CHOSEN_ASSET", lang.hitch(this, this.getAssetSpecWithoutChosenAsset));
      this.alfLog("log", "Setting greeting message!");
    },

    onSuccess: function dashboard_DashboardService__onSuccess(response, originalRequestConfig) {
       	   //alert("onSuccess!");
    	   var pubSubScope = lang.getObject("data.pubSubScope", false, originalRequestConfig);
    	   if (pubSubScope == null)
    	   {
    	      pubSubScope = "";
    	   }
       	   //alert("onSuccess!" + pubSubScope);
    	  this.alfPublish(pubSubScope + "ALF_DOCLIST_RELOAD_DATA", {});
    },
    
    getAssetSpecWithoutChosenAsset: function getAssetSpecWithoutChosenAsset(payload) {
    	alert("Hello! I am an alert box!!");
    	var alfTopic = 
    	    (payload.alfResponseTopic != null) ? payload.alfResponseTopic : "";
    	
    	this.alfLog("log", "query for 'getAssetSpecWithoutChosenAsset'");
    	  this.serviceXhr({
//    	    url: AlfConstants.PROXY_URI + "api/rootgroups/" + payload.groupId,
//    		url: Alfresco.constants.PROXY_URI + "service/slingshot/datalists/lists/node/workspace/SpacesStore/4229d1e6-2891-4e88-942e-162ababdffcc",
    		url: Alfresco.constants.PROXY_URI + "slingshot/doclib2/doclist/all/node/alfresco/company/home?filter=path&size=25&pos=1&sortAsc=true&sortField=cm%3Aname&libraryRoot=alfresco%3A%2F%2Fuser%2Fhome&view=browse&noCache=1459850415214",
    	    method: "GET",
    	    alfTopic: alfTopic
//    	    ,
//    	    data: {
//        	      pubSubScope: alfTopic
//        	    },
//    	    successCallback: this.onSuccess,
//    	    callbackScope: this
    	  });
    }
    	
  });
});