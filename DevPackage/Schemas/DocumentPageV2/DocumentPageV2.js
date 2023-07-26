define("DocumentPageV2", [], function() {
	return {
		entitySchemaName: "Document",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "INTEGER4849bc29-2d4a-4089-b773-8fbbd312585d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrIntegrationID",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_DIFF*/
	};
});
