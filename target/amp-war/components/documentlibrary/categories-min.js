(function(){var a=Alfresco.util.encodeHTML,b=Alfresco.util.combinePaths;Alfresco.DocListCategories=function d(e){Alfresco.DocListCategories.superclass.constructor.call(this,e);this.name="Alfresco.DocListCategories";Alfresco.util.ComponentManager.reregister(this);this.filterId="category";Alfresco.util.FilterManager.register(this.name,this.filterId);return this};YAHOO.extend(Alfresco.DocListCategories,Alfresco.DocListTree,{_buildTreeNodeUrl:function c(f){var e=new Alfresco.util.NodeRef(this.options.nodeRef),g="slingshot/doclib/categorynode/node/"+b(encodeURI(e.uri),Alfresco.util.encodeURIPath(f));return Alfresco.constants.PROXY_URI+g+"?perms=false&children="+this.options.evaluateChildFolders}})})();