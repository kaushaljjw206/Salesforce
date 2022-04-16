({
	doInit : function(component, event, helper) {
		component.set("v.CampingColumn",[
                      {label: 'Camping Item Id', fieldName: 'Id', type: 'text'},
                      {label: 'Camping Item Name', fieldName: 'Name', type: 'text'},
                      {label: 'Packed', fieldName: 'Packed__c', type: 'text'},
                      {label: 'Price', fieldName: 'Price__c', type: 'number'},
                      {label: 'Quantity', fieldName: 'Quantity__c', type: 'number'},
                     ]);
            component.set("v.items",[{
            Id: "Id",
            Name : "Name",
            Packed__c : "Packed__c",
            Price__c : "Price__c",
            Quantity__c : "Quantity"
            }]);
        let action = component.get('c.getItems'); //create action
            action.setCallback(this,function(response){ //callback  function
            	let state = response.getState();
            	let CampingValue = response.getReturnValue();
            if(state === 'SUCCESS'){
            	component.set("v.items", CampingValue);
            }
            });
            $A.enqueueAction(action); //queue action
	},
            
    callcontroller : function(component, event, helper) {
    	let newCamping = component.get('v.CampingCreate');
        helper.createItem(component, newCamping);  //calling helper method
    }
})
