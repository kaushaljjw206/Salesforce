({
	createItem : function(component, newCamping) {
		let createEvent = component.getEvent("addItem");
        createEvent.setParams({
            "item" : newCamping
        });
        createEvent.fire();
        component.set("v.newItem",{
            'sObjectType' : 'Camping_Item__c',
            'Name': '',
            'Quantity__c': 0,
            'Price__c': 0,
            'Packed__c': false
        });
	}
})
