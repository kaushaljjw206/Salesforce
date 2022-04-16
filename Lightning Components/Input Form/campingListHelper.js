({
	createItem: function(component, newCamping) {
		let action = component.get('c.saveItem');
            action.setParams({
            "ci" : newCamping
            });
        action.setCallback(this,function(response){
            	let state = response.getState();
            	let CampingValue = response.getReturnValue();
            if(state === 'SUCCESS'){
            	alert("Camping Item created successfully");
                let tablevalue = component.get('v.items'); //getting existing object data
                tablevalue.push({
                   Id: CampingValue.Id,
            	   Name : CampingValue.Name,
                   Packed__c : CampingValue.Packed__c,
                   Price__c : CampingValue.Price__c ,
                   Quantity__c : CampingValue.Quantity__c
                    
                } // pushing new record to existing data
                );
                component.set("v.items", tablevalue);
            }
            });
            $A.enqueueAction(action);
	}
})
