import Ember from 'ember';

export default Ember.Controller.extend({
	csvData:[],
	grants:[{
		grantId:8838241,
		date:'4/30/2015',
		cost:47882
	},{
		grantId:8921843,
		date:'8/7/2015',
		cost:72485
	},{
		grantId:8976080,
		date:'8/4/2015',
		cost:72485
	},{
		grantId:8924325,
		date:'5/1/2015',
		cost:66566
	},{
		grantId:8983091,
		date:'8/17/2015',
		cost:64226
	},{
		grantId:8979449,
		date:'7/27/2015',
		cost:64226
	},{
		grantId:8833701,
		date:'2/1/2015',
		cost:63970
	}],
	actions: {
		addData:function(){
			var grantId = this.get('grantId');
			var date = this.get('date');
			var cost = this.get('cost');

			this.store.createRecord('grant',{
				grantId:grantId,
				date:date,
				cost:cost
			});

			this.setProperties({
				grantId:'',
				date:'',
				cost:''
			});
		}
	}
});
