
model.jsonModel = {
	services: [
		"alfresco/services/CrudService",
		"alfresco/services/DialogService",
		"dashboard/DashboardService",
		"alfresco/services/OptionsService",
		"alfresco/services/DocumentService",
		{
		      name: "alfresco/services/LoggingService",
		      config: {
		        loggingPreferences: {
		          enabled: true,
		          all: true
		          //filter: "tutorial/UserAndGroupService(.*)"
		        }
		      }
		}
    ],
	widgets: [

//{
//	name: "alfresco/documentlibrary/AlfSelectDocumentListItems"
//		,
//	config: {
//		pubSubScope: "DASHBOARD_"
//	}
//},
//{
//  name: "alfresco/documentlibrary/AlfDocumentList",
//  config: {
//	pubSubScope: "DASHBOARD_",
//    rootNode: "alfresco://user/home",
//    rawData: true,
//    widgets: [
//      {
//        name: "alfresco/documentlibrary/views/AlfDetailedView"
//      }
//    ]
//  }
//},	          
	          /*          
      {	
		  name: "alfresco/lists/AlfList",
		  config: {
		    loadDataPublishTopic: "ALF_CRUD_GET_ALL",
		    loadDataPublishPayload: {
		      url: "slingshot/datalists/lists/site/test/dataLists"
		    },
		    itemsProperty: "datalists",
		    widgets:
		    	[
		    	  {
		    	    name: "alfresco/documentlibrary/views/AlfDocumentListView",
		    	      config: {
		    	      widgets: [
		    	        {
		    	          id: "VIEW_ROW",
		    	          name: "alfresco/documentlibrary/views/layouts/Row",
		    	          config: {
		    	            widgets: [
								{
									name: "alfresco/lists/views/layouts/Cell",
									config: {
										additionalCssClasses: "mediumpad",
										widgets: [{
											name: "alfresco/renderers/Selector",
//											config: {
//												renderFilterMethod: "ALL",
//												renderFilter: [
//												   {
//												      property: "shortName",
//												      values: ["ALFRESCO_ADMINISTRATORS"],
//												      negate: true
//												   }
//												]
//											}
										}]
									}
								},
		    	              {
		    	                name: "alfresco/documentlibrary/views/layouts/Cell",
		    	                config: {
		    	                widgets: [
		    	                  {
		    	                    name: "alfresco/renderers/Property",
		    	                    config: {
		    	                      propertyToRender: "title"
		    	                    }
		    	                  }
		    	                ]
		    	              }
		    	            }
		    	          ]
		    	        }
		    	      }
		    	    ]
		    	  }
		    	}]
		  }
		},
		
		*/
		
	          {
				name: "alfresco/layout/ClassicWindow",
				config: {
					title: "Possible title",
					widgets: [
					          {
					        	  name: "alfresco/layout/TitleDescriptionAndContent",
					        	  config: {
					        		  title: "Project Name (Status)",
					        		  description: "Create, edit and delete user groups. ",
					        		  widgets: [													
												{
												    name: "lib/blog/JQueryAccordion",
												    config: {
													       widgets: [
																	{
																		name: "alfresco/layout/VerticalWidgets",
																		title: "Asset Spec without Chosen Asset",
																		config: {
																				widgets: [
																				          {
																							name: "alfresco/layout/HorizontalWidgets",
																							config: {
																									widgets: [
																										{
																											name: "alfresco/documentlibrary/AlfSelectDocumentListItems",
																											config: {
																												pubSubScope: "DASHBOARD_ASWCA_"
																											}
																										}
																										]
																							}
																				          },
																				          {
																								name: "alfresco/layout/HorizontalWidgets",
																								config: {
																										widgets: [																								{
																											  name: "alfresco/documentlibrary/AlfDocumentList",
																											  config: {
																												pubSubScope: "DASHBOARD_ASWCA_",
																												loadDataPublishTopic: "DASHBOARD_GET_ASSET_SPEC_WITHOUT_CHOSEN_ASSET",
																												loadDataPublishPayload:{
																													pubSubScope: "DASHBOARD_ASWCA_"
																												},
																												itemsProperty: "items",
																											    //rootNode: "alfresco://user/home",
																											    rawData: true,
																											    widgets: [
																											      {
																											        name: "alfresco/documentlibrary/views/AlfDetailedView"
																											      }
																											    ]
																											  }
																											}
																										]
																								}
																			          		}
																				          ]
																			}
																	},
																	{
																		name: "alfresco/layout/VerticalWidgets",
																		title: "Chosen asset not final",
																		config: {
																				widgets: [
																				          {
																							name: "alfresco/layout/HorizontalWidgets",
																							config: {
																									widgets: [
																										{
																											name: "alfresco/documentlibrary/AlfSelectDocumentListItems",
																											config: {
																												pubSubScope: "DASHBOARD_CANF_"
																											}
																										}
																										]
																							}
																				          },
																				          {
																								name: "alfresco/layout/HorizontalWidgets",
																								config: {
																										widgets: [																								{
																											  name: "alfresco/documentlibrary/AlfDocumentList",
																											  config: {
																												pubSubScope: "DASHBOARD_CANF_",
																										//		loadDataPublishTopic: "DASHBOARD_ASSET_SPEC_WITHOUT_CHOSEN_ASSET",
																										//		loadDataPublishPayload:{
																										//			pubSubScope: "DASHBOARD_"
																										//		},
																											    rootNode: "alfresco://user/home",
																											    rawData: true,
																											    widgets: [
																											      {
																											        name: "alfresco/documentlibrary/views/AlfDetailedView"
																											      }
																											    ]
																											  }
																											}
																										]
																								}
																			          		}
																				          ]
																			}
																	}
//																	,
//																	{
//																		name: "alfresco/layout/VerticalWidgets",
//																		title: "Chosen Asset not Final",
//																		config: {
//																				widgets: []
//																			}
//																	}
//																	,
//																	{
//																	    name: "dashboard/DashboardAccordionItem",
//																		title: "Chosen Asset not Final",
//																		config: {
//																		       type: "chosenAssetNotFinal",															    
//																	    	   bulkEditMetadata: true
//																		}
//																	}
																]
												    }
												} 
												,
												{
													name: "alfresco/layout/HorizontalWidgets",
													config: {
															widgets: []
														}
												} 
					        		            ]
					        	  }
					          }
					         ]
				}
	          }
	]
};