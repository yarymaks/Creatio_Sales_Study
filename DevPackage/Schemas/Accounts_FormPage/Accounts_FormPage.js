define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "Industry"
			},
			{
				"operation": "remove",
				"name": "addRecord_y9dz5pc"
			},
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"selectedRows": "$AddressList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "AddressList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactsList",
				"values": {
					"selectedRows": "$ContactsList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContactsList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "RecommendedProductList",
				"values": {
					"selectedRows": "$RecommendedProductList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "RecommendedProductList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadList",
				"values": {
					"selectedRows": "$LeadList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "LeadList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityList",
				"values": {
					"selectedRows": "$OpportunityList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OpportunityList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OrderList",
				"values": {
					"selectedRows": "$OrderList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OrderList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContractList",
				"values": {
					"selectedRows": "$ContractList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContractList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoiceList",
				"values": {
					"selectedRows": "$InvoiceList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "InvoiceList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "DocumentList",
				"values": {
					"selectedRows": "$DocumentList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DocumentList_SelectedRows"
					}
				}
			},
			{
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "UsrWebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_awvmvf0",
					"labelPosition": "auto",
					"control": "$StringAttribute_awvmvf0",
					"multiline": false,
					"placeholder": "#ResourceString(UsrWebsiteCode_placeholder)#",
					"tooltip": "#ResourceString(UsrWebsiteCode_tooltip)#"
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CardToggleTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"layoutConfig": {
						"maxWidth": 368,
						"minWidth": 368
					},
					"stretch": true,
					"classes": [
						"card-toggle-tab-panel",
						"container-background-color-primary",
						"container-border-area"
					],
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FeedTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"tools": [],
					"caption": "#ResourceString(FeedTabContainerCaption)#",
					"iconPosition": "left-icon",
					"icon": "feed-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Feed",
				"values": {
					"type": "crt.Feed",
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"dataSourceName": "PDS",
					"entitySchemaName": "Account"
				},
				"parentName": "FeedTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {}
				},
				"parentName": "FeedTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(FeedTabContainerCaption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FeedTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AttachmentsTabContainerCaption)#",
					"iconPosition": "left-icon",
					"icon": "attachments-icon",
					"tools": []
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AttachmentList",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "Account",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$AttachmentList",
					"primaryColumnName": "AttachmentListDS_Id",
					"columns": [
						{
							"id": "e030f997-b0cc-49b2-81a2-2cd8e04a11db",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					],
					"viewType": "gallery",
					"tileSize": "small",
					"visible": true
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(AttachmentsTabContainerCaption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AttachmentAddButtonCaption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "AttachmentList"
						}
					}
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AttachmentRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AttachmentRefreshButtonCaption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "AttachmentListDS"
						}
					}
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_awvmvf0": {
					"modelConfig": {
						"path": "PDS.UsrWebsiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});