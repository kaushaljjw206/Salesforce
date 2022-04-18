({
	clickCreateItem : function(component, event, helper) {
		let newCamping = component.get('v.newItem');
        helper.createItem(component, newCamping);  //calling helper method
	}
})
