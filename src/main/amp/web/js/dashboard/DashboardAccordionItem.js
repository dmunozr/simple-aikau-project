//define(["dojo/_base/declare",
//        "dijit/_WidgetBase",
//        "dijit/_TemplatedMixin",
////        "dojo/text!./templates/JQueryAccordion.html",
//      "dojo/text!./html/dashboardAccordionItem.html",
//        "alfresco/core/Core",
//        "alfresco/core/CoreWidgetProcessing",
//        "jquery",
//        "jqueryui"],
//       function(declare, _WidgetBase, _TemplatedMixin, template, AlfCore, CoreWidgetProcessing, $) {
//	
	
	define(["dojo/_base/declare",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin",
        "dojo/text!./html/dashboardAccordionItem.html",
        "alfresco/core/Core"], 
        function(declare, _WidgetBase, _TemplatedMixin, template, Core) {

   return declare([_WidgetBase, _TemplatedMixin, Core], {
      
      cssRequirements: [{cssFile:"./css/dashboard.css"}],

      i18nRequirements: [{i18nFile: "./i18n/dashboard.properties"}],

      templateString: template,

      postCreate: function blog_JQueryAccordion__postCreate() {
        this.processWidgets(this.widgets, this.domNode);
        //$(this.domNode).accordion();
      }
   ,
      
      postMixInProperties: function dashboard_dashboardAccordionItem__postMixInProperties()
      {
    	  // dashboard logic
    	  if(this.bulkEditMetadata){
    		  // add 'Bulk Edit Metadata' button to the header
    		  
    	  }
    	  if(this.updateRightsClearanceStatus){
    		  // add 'Update Rights Clearance Status' button to the header
    	  }

    	 this.dashboardResponse = this.message("greeting.label");
    	 //this.dashboardResponse = this.type;
         this.alfLog("log", "Setting greeting message!");
         this.alfLog("error", "Something has gone terribly wrong!");
      }
   });
});