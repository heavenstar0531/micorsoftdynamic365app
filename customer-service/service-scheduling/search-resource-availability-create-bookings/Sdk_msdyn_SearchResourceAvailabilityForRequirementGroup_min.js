"use strict";(function(){this.msdyn_SearchResourceAvailabilityForRequirementGroupRequest=function(n,t,i,r){function h(n){if(typeof n=="string")f=n;else throw new Error("Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest Version property is required and must be a String.");}function c(n){if(n instanceof Sdk.EntityReference)e=n;else throw new Error("Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest RequirementGroup property is required and must be a Sdk.EntityReference.");}function l(n){if(n==null||n instanceof Sdk.Entity)o=n;else throw new Error("Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest RequirementSpecification property must be a Sdk.Entity or null.");}function a(n){if(n==null||n instanceof Sdk.Entity)s=n;else throw new Error("Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest Settings property must be a Sdk.Entity or null.");}function u(){return["<d:request>","<a:Parameters>","<a:KeyValuePairOfstringanyType>","<b:key>Version<\/b:key>",f==null?'<b:value i:nil="true" />':['<b:value i:type="c:string">',f,"<\/b:value>"].join(""),"<\/a:KeyValuePairOfstringanyType>","<a:KeyValuePairOfstringanyType>","<b:key>RequirementGroup<\/b:key>",e==null?'<b:value i:nil="true" />':['<b:value i:type="a:EntityReference">',e.toValueXml(),"<\/b:value>"].join(""),"<\/a:KeyValuePairOfstringanyType>","<a:KeyValuePairOfstringanyType>","<b:key>RequirementSpecification<\/b:key>",o==null?'<b:value i:nil="true" />':['<b:value i:type="a:Entity">',o.toValueXml(),"<\/b:value>"].join(""),"<\/a:KeyValuePairOfstringanyType>","<a:KeyValuePairOfstringanyType>","<b:key>Settings<\/b:key>",s==null?'<b:value i:nil="true" />':['<b:value i:type="a:Entity">',s.toValueXml(),"<\/b:value>"].join(""),"<\/a:KeyValuePairOfstringanyType>","<\/a:Parameters>",'<a:RequestId i:nil="true" />',"<a:RequestName>msdyn_SearchResourceAvailabilityForRequirementGroup<\/a:RequestName>","<\/d:request>"].join("")}if(!(this instanceof Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest))return new Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest(n,t,i,r);Sdk.OrganizationRequest.call(this);var f=null,e=null,o=null,s=null;typeof n!="undefined"&&h(n);typeof t!="undefined"&&c(t);typeof i!="undefined"&&l(i);typeof r!="undefined"&&a(r);this.setResponseType(Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupResponse);this.setRequestXml(u());this.setVersion=function(n){h(n);this.setRequestXml(u())};this.setRequirementGroup=function(n){c(n);this.setRequestXml(u())};this.setRequirementSpecification=function(n){l(n);this.setRequestXml(u())};this.setSettings=function(n){a(n);this.setRequestXml(u())}};this.msdyn_SearchResourceAvailabilityForRequirementGroupRequest.__class=!0;this.msdyn_SearchResourceAvailabilityForRequirementGroupResponse=function(n){function f(n){var i=Sdk.Xml.selectSingleNode(n,"//a:KeyValuePairOfstringanyType[b:key='TimeSlots']/b:value");Sdk.Xml.isNodeNull(i)||(t=Sdk.Util.createEntityCollectionFromNode(i))}function e(n){var t=Sdk.Xml.selectSingleNode(n,"//a:KeyValuePairOfstringanyType[b:key='Requirements']/b:value");Sdk.Xml.isNodeNull(t)||(i=Sdk.Util.createEntityCollectionFromNode(t))}function o(n){var t=Sdk.Xml.selectSingleNode(n,"//a:KeyValuePairOfstringanyType[b:key='ProposalResourceAssignmentSets']/b:value");Sdk.Xml.isNodeNull(t)||(r=Sdk.Util.createEntityCollectionFromNode(t))}function s(n){var t=Sdk.Xml.selectSingleNode(n,"//a:KeyValuePairOfstringanyType[b:key='PagingInfos']/b:value");Sdk.Xml.isNodeNull(t)||(u=Sdk.Util.createEntityFromNode(t))}if(!(this instanceof Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupResponse))return new Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupResponse(n);Sdk.OrganizationResponse.call(this);var t=null,i=null,r=null,u=null;this.getTimeSlots=function(){return t};this.getRequirements=function(){return i};this.getProposalResourceAssignmentSets=function(){return r};this.getPagingInfos=function(){return u};f(n);e(n);o(n);s(n)};this.msdyn_SearchResourceAvailabilityForRequirementGroupResponse.__class=!0}).call(Sdk);Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupRequest.prototype=new Sdk.OrganizationRequest;Sdk.msdyn_SearchResourceAvailabilityForRequirementGroupResponse.prototype=new Sdk.OrganizationResponse
