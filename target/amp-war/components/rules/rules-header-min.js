(function(){var i=YAHOO.util.Dom,a=YAHOO.util.Selector,n=YAHOO.util.Event;var g=Alfresco.util.encodeHTML,h=Alfresco.util.siteURL;Alfresco.RulesHeader=function f(p){Alfresco.RulesHeader.superclass.constructor.call(this,"Alfresco.RulesHeader",p,["button"]);YAHOO.Bubbling.on("folderDetailsAvailable",this.onFolderDetailsAvailable,this);YAHOO.Bubbling.on("folderRulesetDetailsAvailable",this.onFolderRulesetDetailsAvailable,this);YAHOO.Bubbling.on("inheritChange",this.onInheritChange,this,this.options.inheritRules);return this};YAHOO.extend(Alfresco.RulesHeader,Alfresco.component.Base,{options:{nodeRef:null,siteId:"",inheritRules:true},isReady:false,folderDetails:null,ruleset:null,isRunning:false,onReady:function j(){this.widgets.actionsEl=i.get(this.id+"-actions");this.widgets.titleEl=i.get(this.id+"-title");this.widgets.newRuleButton=Alfresco.util.createYUIButton(this,"newRule-button",this.onNewRuleButtonClick);this.widgets.copyRuleFromButton=Alfresco.util.createYUIButton(this,"copyRuleFrom-button",this.onCopyRuleFromButtonClick);this.widgets.runRulesMenu=Alfresco.util.createYUIButton(this,"runRules-menu",this.onRunRulesMenuSelect,{type:"menu",menu:"runRules-options"});this.widgets.inheritRulesToggleButton=Alfresco.util.createYUIButton(this,"inheritButton",this.onInheritToggleClick);this.isReady=true;this._displayDetails()},onFolderDetailsAvailable:function e(q,p){this.folderDetails=p[1].folderDetails;this._displayDetails()},onFolderRulesetDetailsAvailable:function m(q,p){this.ruleset=p[1].folderRulesetDetails;this._displayDetails()},onNewRuleButtonClick:function l(q,p){window.location.href=h("rule-edit?nodeRef={nodeRef}",{nodeRef:Alfresco.util.NodeRef(this.options.nodeRef).toString()})},onCopyRuleFromButtonClick:function d(q,p){if(!this.modules.rulesPicker){this.modules.rulesPicker=new Alfresco.module.RulesPicker(this.id+"-rulesPicker")}this.modules.rulesPicker.setOptions({mode:Alfresco.module.RulesPicker.MODE_COPY_FROM,siteId:this.options.siteId,files:{displayName:this.folderDetails,nodeRef:Alfresco.util.NodeRef(this.options.nodeRef).toString()}}).showDialog()},onRunRulesMenuSelect:function b(s,r,q){this.widgets.runRulesMenu.set("disabled",true);YAHOO.lang.later(2000,this,function(){if(this.isRunning){if(!this.widgets.feedbackMessage){this.widgets.feedbackMessage=Alfresco.util.PopupManager.displayMessage({text:this.msg("message.runningRules"),spanClass:"wait",displayTime:0})}else{if(!this.widgets.feedbackMessage.cfg.getProperty("visible")){this.widgets.feedbackMessage.show()}}}},[]);var p=r[1].value;if(!this.isRunning){this.isRunning=true;Alfresco.util.Ajax.jsonPost({url:Alfresco.constants.PROXY_URI_RELATIVE+"api/actionQueue",dataObj:{actionedUponNode:Alfresco.util.NodeRef(this.options.nodeRef).toString(),actionDefinitionName:"execute-all-rules",parameterValues:{"execute-inherited-rules":this.options.inheritRules,"run-all-rules-on-children":(p=="run-recursive")}},successCallback:{fn:function(t){this._enableRunRulesButton();var u=t.json;if(u){Alfresco.util.PopupManager.displayMessage({text:this.msg("message.runRules-success")})}},scope:this},failureCallback:{fn:function(t){this._enableRunRulesButton();Alfresco.util.PopupManager.displayPrompt({title:this.msg("message.failure"),text:this.msg("message.runRules-failure")})},scope:this}})}n.preventDefault(r[0])},onInheritToggleClick:function k(){var p=this;Alfresco.util.Ajax.jsonPost({url:Alfresco.constants.PROXY_URI_RELATIVE+"/api/node/"+Alfresco.util.NodeRef(this.options.nodeRef).uri+"/ruleset/inheritrules/toggle",successCallback:{fn:function(r){var s=r.json.data;if(s){p.options.inheritRules=!!((s.inheritRules==="true"));var q=(p.options.inheritRules)?"on":"off";var t=Alfresco.util.PopupManager.displayMessage({text:this.msg("message.inheritToggle-success-"+q)});t.subscribe("destroy",function(){YAHOO.Bubbling.fire("inheritChange")})}},scope:this},failureCallback:{fn:function(q){Alfresco.util.PopupManager.displayPrompt({title:this.msg("message.failure"),text:this.msg("message.inheritToggle-failure")})},scope:this}})},onInheritChange:function(){var q=this.id+"-inheritButtonContainer",t="inherit-on",s="inherit-off",p="button.inherit",r=i.get(this.id+"-inheritButton-button");if(this.options.inheritRules){i.removeClass(q,s);i.addClass(q,t);r.innerHTML=this.msg(p+".on")}else{i.removeClass(q,t);i.addClass(q,s);r.innerHTML=this.msg(p+".off")}},_displayDetails:function c(){if(this.isReady&&this.ruleset&&this.folderDetails){if(this.ruleset.rules||this.ruleset.linkedToRuleSet){i.removeClass(this.widgets.actionsEl,"hidden")}i.removeClass(i.get(this.id+"-actions-more"),"hidden");this.widgets.titleEl.innerHTML=g(this.folderDetails.fileName)}},_enableRunRulesButton:function o(){if(this.widgets.feedbackMessage&&this.widgets.feedbackMessage.cfg.getProperty("visible")){this.widgets.feedbackMessage.hide()}this.widgets.runRulesMenu.set("disabled",false);this.isRunning=false}})})();