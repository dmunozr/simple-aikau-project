define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/JQueryAccordion.html",
        "alfresco/core/Core",
        "alfresco/core/CoreWidgetProcessing",
        "jquery",
        "jqueryui"],
       function(declare, _WidgetBase, _TemplatedMixin, template, AlfCore, CoreWidgetProcessing, $) {
	
        return declare([_Widget, Core, _Templated], {
//            templateString: template,
//            i18nRequirements: [ {i18nFile: "./i18n/TemplateWidget.properties"} ],
//            cssRequirements: [{cssFile:"./css/TemplateWidget.css"}],
//            
//            buildRendering: function example_widgets_TemplateWidget__buildRendering() {
//                this.greeting = this.message('hello-label');
//
//                this.inherited(arguments);
//
//            },
            // inicio cambios accordion
            templateString: template,

            postCreate: function blog_JQueryAccordion__postCreate() {
              this.processWidgets(this.widgets, this.domNode);
              $(this.domNode).accordion();
            },
            
            createWidgetDomNode: function(widget, rootNode, rootClassName) {
            	  $(rootNode).append($("<h3>" + widget.title + "</h3>"));
            	  return $("<div>").appendTo($("<div>").appendTo(rootNode))[0];
            }
            // fin
        });
});