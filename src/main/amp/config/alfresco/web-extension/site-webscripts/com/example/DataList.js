define(["dojo/_base/declare",
        "alfresco/lists/AlfList",
        "dojo/_base/lang"],
        function(declare, AlfList, lang) {

   return declare([AlfList], {

      /**
       * Extend this Dojo widget lifecycle function to create a new subscription for handling Data List
       * selections.
       *
       * @instance
       */
      postMixInProperties: function tutorials_DataList__postMixInProperties() {
         this.inherited(arguments);
         this.alfSubscribe("TUTORIALS_LOAD_DATA_LIST", lang.hitch(this, this.loadDataList))
      },

      /**
       * This is the variable that will be used to determine what the next Data List to load will be.
       *
       * @instance
       * @type {object}
       * @default null
       */
      dataListToLoad: null,

      /**
       * Set the appropriate view, set the Data List to load and load the data for it.
       *
       * @instance
       * @param {object} payload The payload containing the details of the Data List to load
       */
      loadDataList: function tutorials_DataList__loadDataList(payload) {
         this.dataListToLoad = payload;
         this.onViewSelected({
            value: payload.itemType
         });
         this.loadData();
      },

      /**
       * Only load data when there is a Data List to load.
       *
       * @instance
       */
      loadData: function alfresco_lists_AlfList__loadData() {
         if (this.dataListToLoad != null)
         {
            this.inherited(arguments);
         }
      },

      /**
       * Update the payload used to load data to set the specific Data List URL
       *
       * @instance
       * @param {object} payload The payload containing the details of the Data List to load
       */
      updateLoadDataPayload: function tutorials_DataList__updateLoadDataPayload(payload) {
         if (this.dataListToLoad != null)
         {
            payload.url = "slingshot/datalists/data/node/" + this.dataListToLoad.nodeRef.replace("://", "/");
         }
      }
   });
});