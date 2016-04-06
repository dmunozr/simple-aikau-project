/**
 * Copyright (C) 2005-2014 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * An example Aikau widget that wraps a JQuery widget.
 *
 * @module blog/JQueryAccordion
 * @extends dijit/_WidgetBase
 * @mixes dijit/_TemplatedMixin
 * @mixes module:alfresco/core/Core
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/JQueryAccordion.html",
        "alfresco/core/Core",
        "alfresco/core/CoreWidgetProcessing",
        "jquery",
        "jqueryui"], 
        function(declare, _WidgetBase, _TemplatedMixin, template, AlfCore, CoreWidgetProcessing, $) {
   
   return declare([_WidgetBase, _TemplatedMixin, AlfCore, CoreWidgetProcessing], {

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * Process all the child widgets and then instantiate the accordion.
       *
       * @instance
       */
      postCreate: function blog_JQueryAccordion__postCreate() {
         this.processWidgets(this.widgets, this.domNode);
         $(this.domNode).accordion();
      },

      /**
       * Override the function inherited from alfresco/core/CoreWidgetProcessing to set up the 
       * DOM structure required by the JQuery Accordion widget
       *
       * @instance
       * @param {object} widget The widget definition to create the DOM node for
       * @param {element} rootNode The DOM node to create the new DOM node as a child of
       * @param {string} rootClassName A string containing one or more space separated CSS classes to set on the DOM node
       */
      createWidgetDomNode: function blog_JQueryAccordion__createWidgetDomNode(widget, rootNode, rootClassName) {
    	  //<h3 style='display: inline-block'>" + "13" + "&nbsp;-&nbsp;</h3>
         $(rootNode).append($("<h3>" + "13 - " + widget.title + "</h3>"));
         return $("<div>").appendTo($("<div>").appendTo(rootNode))[0];
      }
   });
});