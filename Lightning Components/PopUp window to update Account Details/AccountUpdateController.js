//Original File name SSP_AccountExecutiveSponsorUpdateController.js
({
    doInit : function(component, event, helper){
        component.set("v.confirmComponent", false);
        component.set("v.editComponent", true);
    },
    
    saveChanges : function(component, event, helper) {
		component.set("v.confirmComponent",true); //make confirm component visible
        component.set("v.editComponent",false); // make edit component invisible
        let contactid = component.find("fieldValue").get("v.value"); //get contact id mentioned in Executive Sponsor field
        component.set("v.contactRecordId", contactid);
	},
    
    saveRecord : function(component, event, helper){
        let accId = component.get("v.recordId"); //get record id which launch this component
        let conId = component.get("v.contactRecordId");
        let action = component.get("c.updateAccountDetails"); // call server controller
        action.setParams({
            "accountId" : accId,
            "contactId" : conId
        });
        
        action.setCallback(this,function(response){
            let state = response.getState();
            let value = response.getReturnValue();
            if(state === "SUCCESS"){
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    'type' : 'Success',
                    'title' : 'Success',
                    'message' : 'Executive Sponsor change successful'
                });
                toastEvent.fire();
                $A.get("e.force:closeQuickAction").fire(); //close quick action
                $A.get("e.force:refreshView").fire(); //refresh record page
            }
            else if(state === "ERROR"){
                let errors = response.getError();
                /*if(errors){
                    if (errors[0] && errors[0].message){
                       console.log(errors[0].message); 
                    }
                    console.log(errors[0]); 
                    alert(errors[0].pageErrors[0].message);
                }*/
                console.log(errors);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    'type' : 'Error',
                    'title' : 'Error',
                    'message' : errors[0].pageErrors[0].message
                });
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },
    
    cancelAction : function(component, event, helper){
        $A.get("e.force:closeQuickAction").fire();
    }
})
