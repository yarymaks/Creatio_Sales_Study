namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("868a54f0-ee79-4556-8a5c-b53c4e9f9d7e");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3d57876f-af6e-466f-975f-9a50f9b2e11b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,23,232,63,16,198,14,54,16,8,237,117,221,10,44,89,54,4,40,182,161,113,118,25,118,80,100,198,213,32,75,134,40,167,203,134,254,251,40,203,65,92,167,3,202,139,44,234,241,241,61,154,86,54,72,173,84,8,37,122,47,201,237,130,88,56,187,211,117,231,101,208,206,94,94,252,189,188,0,142,142,180,173,97,125,160,128,205,205,56,53,46,108,26,103,255,251,232,81,44,109,208,65,35,189,6,35,150,123,180,225,8,253,209,167,15,125,238,78,179,8,139,62,95,171,7,108,228,23,246,0,239,33,219,144,191,71,105,194,33,43,126,166,162,182,219,26,173,64,25,73,4,233,237,5,26,120,11,115,73,248,194,75,98,25,6,48,34,116,123,150,172,43,132,189,211,21,124,181,43,75,232,3,123,201,221,246,23,170,0,132,182,66,63,131,196,57,199,29,27,235,153,63,248,154,0,139,19,227,136,60,198,150,133,136,49,225,145,9,139,155,231,200,68,13,190,119,197,246,243,148,40,82,193,4,92,161,210,141,52,208,122,173,226,172,82,149,248,140,161,60,180,88,45,156,233,26,251,93,154,14,223,13,208,219,60,206,243,91,196,111,214,31,179,105,119,189,131,60,145,221,194,245,213,49,138,231,160,137,183,24,40,86,180,144,86,161,193,138,117,4,223,33,51,159,227,40,248,184,26,188,156,36,107,44,177,105,141,12,81,185,197,71,184,115,74,26,253,71,110,13,174,123,92,62,248,217,240,212,120,123,45,255,2,94,93,113,143,228,58,175,24,228,60,179,204,206,219,196,56,237,77,90,184,108,6,217,89,7,18,253,116,86,84,58,55,215,117,186,101,133,40,221,160,160,120,133,13,150,159,18,226,147,243,141,12,249,196,30,55,190,22,87,243,55,103,211,142,17,30,188,123,236,237,47,127,43,108,163,193,99,253,20,254,116,186,14,159,124,60,253,3,249,207,3,6,235,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("abb8c7ab-2c03-0a2d-3cde-8840e63b9477"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("3d57876f-af6e-466f-975f-9a50f9b2e11b"),
				CreatedInSchemaUId = new Guid("868a54f0-ee79-4556-8a5c-b53c4e9f9d7e"),
				ModifiedInSchemaUId = new Guid("868a54f0-ee79-4556-8a5c-b53c4e9f9d7e")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("868a54f0-ee79-4556-8a5c-b53c4e9f9d7e"));
		}

		#endregion

	}

	#endregion

}

