import DS from 'ember-data';

export default DS.Model.extend({
	grantId: DS.attr('string'),
	date: DS.attr('date'),
	cost: DS.attr('string')
});