/* eslint-disable */
import messages from "ra-language-english";

const api_error_messages = {

	/* Error codes returned by GET requests on Organizations API */
    "400_GET_ORG_000": "Something went wrong, please contact your administrator.",
    "400_GET_ORG_001": "Something went wrong, please contact your administrator.",
	"400_GET_ORG_010": "Something went wrong, please contact your administrator.",
    "404_GET_ORG_051": "Something went wrong, please contact your administrator.",
    "422_GET_ORG_060": "Something went wrong, please contact your administrator.",
    "500_GET_ORG_100": "Something went wrong, please contact your administrator.",
    "500_GET_ORG_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Organizations API */
    "400_POST_ORG_000": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_001": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_010": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_011": "Please enter a company name.",
    "400_POST_ORG_012": "Please enter a valid phone number.",
    "400_POST_ORG_013": "Please enter a valid email.",
    "400_POST_ORG_014": "Please enter a company profile.",
    "400_POST_ORG_015": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_016": "Please enter a company address street 1.",
    "400_POST_ORG_017": "Please enter a company address city.",
    "400_POST_ORG_018": "Please enter a company address country",
    "400_POST_ORG_019": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_020": "Please enter a company address",
    "400_POST_ORG_021": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_022": "Something went wrong, please contact your administrator.",
    "400_POST_ORG_023": "Please enter a valid country.",
    "400_POST_ORG_024": "Please enter a valid zip code.",
    "400_POST_ORG_025": "Please enter a valid city.",
    "400_POST_ORG_026": "Please enter a valid address 1.",
    "400_POST_ORG_027": "Please enter a valid address 2.",
    "400_POST_ORG_028": "Please enter a valid address 3.",
    "400_POST_ORG_029": "Please enter a valid region.",
    "400_POST_ORG_030": "Please enter a valid name.",
    "400_POST_ORG_031": "Please enter a valid phone number.",
    "400_POST_ORG_032": "Please enter a valid email.",
    "400_POST_ORG_033": "Please enter a valid zip code.",
    "422_POST_ORG_060": "Something went wrong, please contact your administrator.",
    "500_POST_ORG_100": "Something went wrong, please contact your administrator.",
    "500_POST_ORG_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by PATCH requests on Organizations API */
    "400_PATCH_ORG_000": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_001": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_010": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_011": "Please enter a company name.",
    "400_PATCH_ORG_012": "Please enter a valid phone number.",
    "400_PATCH_ORG_013": "Please enter a valid email.",
    "400_PATCH_ORG_014": "Please enter a company profile.",
    "400_PATCH_ORG_015": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_016": "Please enter a company address street 1.",
    "400_PATCH_ORG_017": "Please enter a company address city.",
    "400_PATCH_ORG_018": "Please enter a company address country",
    "400_PATCH_ORG_019": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_020": "Please enter a company address",
    "400_PATCH_ORG_021": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_022": "Something went wrong, please contact your administrator.",
    "400_PATCH_ORG_023": "Please enter a valid country.",
    "400_PATCH_ORG_024": "Please enter a valid zip code.",
    "400_PATCH_ORG_025": "Please enter a valid city.",
    "400_PATCH_ORG_026": "Please enter a valid address 1.",
    "400_PATCH_ORG_027": "Please enter a valid address 2.",
    "400_PATCH_ORG_028": "Please enter a valid address 3.",
    "400_PATCH_ORG_029": "Please enter a valid region.",
    "400_PATCH_ORG_030": "Please enter a valid name.",
    "400_PATCH_ORG_031": "Please enter a valid phone number.",
    "400_PATCH_ORG_032": "Please enter a valid email.",
    "400_PATCH_ORG_033": "Please enter a valid zip code.",
    "404_PATCH_ORG_050": "Something went wrong, please contact your administrator.",
    "422_PATCH_ORG_060": "Something went wrong, please contact your administrator.",
    "500_PATCH_ORG_100": "Something went wrong, please contact your administrator.",
    "500_PATCH_ORG_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Contacts API */
    "400_GET_CONTACT_000": "Something went wrong, please contact your administrator.",
    "400_GET_CONTACT_001": "Something went wrong, please contact your administrator.",
    "400_GET_CONTACT_010": "Something went wrong, please contact your administrator.",
    "400_GET_CONTACT_011": "Something went wrong, please contact your administrator.",
    "400_GET_CONTACT_013": "Something went wrong, please contact your administrator.",
    "404_GET_CONTACT_050": "Something went wrong, please contact your administrator.",
    "404_GET_CONTACT_051": "Something went wrong, please contact your administrator.",
    "404_GET_CONTACT_052": "Something went wrong, please contact your administrator.",
    "404_GET_CONTACT_053": "Something went wrong, please contact your administrator.",
    "404_GET_CONTACT_054": "Something went wrong, please contact your administrator.",
    "422_GET_CONTACT_060": "Something went wrong, please contact your administrator.",
    "422_GET_CONTACT_061": "Something went wrong, please contact your administrator.",
    "422_GET_CONTACT_062": "Something went wrong, please contact your administrator.",
    "422_GET_CONTACT_063": "Something went wrong, please contact your administrator.",
    "500_GET_CONTACT_100": "Something went wrong, please contact your administrator.",
    "500_GET_CONTACT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Contacts API */
    "400_POST_CONTACT_000": "Something went wrong, please contact your administrator.",
    "400_POST_CONTACT_001": "Something went wrong, please contact your administrator.",
    "400_POST_CONTACT_010": "Something went wrong, please contact your administrator.",
    "400_POST_CONTACT_011": "Please enter a company.",
    "400_POST_CONTACT_012": "Please enter a last name.",
    "400_POST_CONTACT_013": "Please enter a valid phone number.",
    "400_POST_CONTACT_014": "Please enter a role.",
    "400_POST_CONTACT_015": "Something went wrong, please contact your administrator.",
    "400_POST_CONTACT_016": "Please enter an email.",
    "400_POST_CONTACT_017": "Please enter a valid email.",
    "400_POST_CONTACT_018": "Something went wrong, please contact your administrator.",
    "400_POST_CONTACT_019": "Please enter a username.",
    "400_POST_CONTACT_020": "Please enter a valid last name.",
    "400_POST_CONTACT_021": "Please enter a valid first name.",
    "400_POST_CONTACT_022": "Please enter a valid phone number.",
    "400_POST_CONTACT_023": "Please enter a valid email.",
    "400_POST_CONTACT_024": "Something went wrong, please contact your administrator.",
    "400_POST_CONTACT_025": "Please enter a username.",
	"400_POST_CONTACT_026": "Please enter a valid username.",
	"400_POST_CONTACT_027": "Please enter a valid timezone.",
	"400_POST_CONTACT_028": "Please enter a timezone.",
	"400_POST_CONTACT_029": "Please enter a language.",
	"400_POST_CONTACT_030": "Please enter a valid language.",
    "500_POST_CONTACT_070": "Something went wrong, please contact your administrator.",
    "500_POST_CONTACT_071": "Something went wrong trying to create contact, please contact your administrator.",
    "500_POST_CONTACT_072": "Something went wrong, please contact your administrator.",
    "500_POST_CONTACT_073": "Please enter a valid email.",
    "500_POST_CONTACT_100": "Something went wrong, please contact your administrator.",
    "500_POST_CONTACT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by PATCH requests on Contacts API */
    "400_PATCH_CONTACT_000": "Something went wrong, please contact your administrator.",
    "400_PATCH_CONTACT_001": "Something went wrong, please contact your administrator.",
    "400_PATCH_CONTACT_010": "Something went wrong, please contact your administrator.",
    "400_PATCH_CONTACT_011": "Please enter a company.",
    "400_PATCH_CONTACT_012": "Please enter a last name.",
    "400_PATCH_CONTACT_013": "Please enter a valid phone number.",
    "400_PATCH_CONTACT_014": "Please enter a role.",
    "400_PATCH_CONTACT_015": "Something went wrong, please contact your administrator.",
    "400_PATCH_CONTACT_016": "Please enter an email.",
    "400_PATCH_CONTACT_017": "Please enter a valid email.",
    "400_PATCH_CONTACT_018": "Something went wrong, please contact your administrator.",
    "400_PATCH_CONTACT_019": "Please enter a username.",
    "400_PATCH_CONTACT_020": "Something went wrong, please contact your administrator.",
    "400_PATCH_CONTACT_021": "Please enter a valid last name.",
    "400_PATCH_CONTACT_022": "Please enter a valid first name.",
    "400_PATCH_CONTACT_023": "Please enter a valid phone number.",
    "400_PATCH_CONTACT_024": "Please enter a valid email.",
    "400_PATCH_CONTACT_026": "Please enter a valid username.",
    "400_PATCH_CONTACT_027": "Please enter a valide timezone.",
    "400_PATCH_CONTACT_028": "Please enter a timezone.",
    "400_PATCH_CONTACT_029": "Please enter a valid language.",
    "400_PATCH_CONTACT_030": "Please enter a language.",
    "400_PATCH_CONTACT_031": "User not authorized to change his/her own role.",
    "404_PATCH_CONTACT_050": "Something went wrong, please contact your administrator.",
    "500_PATCH_CONTACT_070": "Something went wrong, please contact your administrator.",
    "500_PATCH_CONTACT_100": "Something went wrong, please contact your administrator.",
    "500_PATCH_CONTACT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by DELETE requests on Contacts API */
    "400_DELETE_CONTACT_000": "Something went wrong, please contact your administrator.",
    "400_DELETE_CONTACT_001": "Something went wrong, please contact your administrator.",
    "500_DELETE_CONTACT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Services API */
    "400_GET_SERVICE_000": "Something went wrong, please contact your administrator.",
    "400_GET_SERVICE_001": "Something went wrong, please contact your administrator.",
    "400_GET_SERVICE_010": "Something went wrong, please contact your administrator.",
    "400_GET_SERVICE_011": "Something went wrong, please contact your administrator.",
    "400_GET_SERVICE_012": "Something went wrong, please contact your administrator.",
    "400_GET_SERVICE_013": "Something went wrong, please contact your administrator.",
    "404_GET_SERVICE_050": "Something went wrong, please contact your administrator.",
    "404_GET_SERVICE_051": "Something went wrong, please contact your administrator.",
    "404_GET_SERVICE_052": "Something went wrong, please contact your administrator.",
    "422_GET_SERVICE_060": "Something went wrong, please contact your administrator.",
    "422_GET_SERVICE_061": "Something went wrong, please contact your administrator.",
    "422_GET_SERVICE_062": "Something went wrong, please contact your administrator.",
    "422_GET_SERVICE_063": "Something went wrong, please contact your administrator.",
    "422_GET_SERVICE_064": "Something went wrong, please contact your administrator.",
    "422_GET_SERVICE_065": "Something went wrong, please contact your administrator.",
    "500_GET_SERVICE_100": "Something went wrong, please contact your administrator.",
    "500_GET_SERVICE_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Equipments API */
    "400_GET_EQUIPMENT_000": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_001": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_002": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_010": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_011": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_012": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_013": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_014": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_015": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_016": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_017": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_018": "Something went wrong, please contact your administrator.",
    "400_GET_EQUIPMENT_019": "Something went wrong, please contact your administrator.",
    "404_GET_EQUIPMENT_050": "Something went wrong, please contact your administrator.",
    "404_GET_EQUIPMENT_051": "Something went wrong, please contact your administrator.",
    "404_GET_EQUIPMENT_052": "Something went wrong, please contact your administrator.",
    "404_GET_EQUIPMENT_053": "Something went wrong, please contact your administrator.",
    "422_GET_EQUIPMENT_060": "Something went wrong, please contact your administrator.",
    "422_GET_EQUIPMENT_062": "Something went wrong, please contact your administrator.",
    "422_GET_EQUIPMENT_063": "Something went wrong, please contact your administrator.",
    "422_GET_EQUIPMENT_064": "Something went wrong, please contact your administrator.",
    "422_GET_EQUIPMENT_065": "Something went wrong, please contact your administrator.",
    "500_GET_EQUIPMENT_100": "Something went wrong, please contact your administrator.",
    "500_GET_EQUIPMENT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Mobiles API */
    "400_GET_MOBILE_000": "Something went wrong, please contact your administrator.",
    "400_GET_MOBILE_001": "Something went wrong, please contact your administrator.",
    "400_GET_MOBILE_010": "Something went wrong, please contact your administrator.",
    "400_GET_MOBILE_011": "Something went wrong, please contact your administrator.",
    "400_GET_MOBILE_013": "Something went wrong, please contact your administrator.",
    "400_GET_MOBILE_014": "Something went wrong, please contact your administrator.",
    "400_GET_MOBILE_015": "Something went wrong, please contact your administrator.",
    "404_GET_MOBILE_050": "Something went wrong, please contact your administrator.",
    "404_GET_MOBILE_051": "Something went wrong, please contact your administrator.",
    "404_GET_MOBILE_052": "Something went wrong, please contact your administrator.",
    "422_GET_MOBILE_060": "Something went wrong, please contact your administrator.",
    "422_GET_MOBILE_061": "Something went wrong, please contact your administrator.",
    "422_GET_MOBILE_062": "Something went wrong, please contact your administrator.",
    "422_GET_MOBILE_063": "Something went wrong, please contact your administrator.",
    "500_GET_MOBILE_100": "Something went wrong, please contact your administrator.",
    "500_GET_MOBILE_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Mobiles API */
    "400_POST_MOBILE_000": "Something went wrong, please contact your administrator.",
    "400_POST_MOBILE_001": "Something went wrong, please contact your administrator.",
    "400_POST_MOBILE_010": "Something went wrong, please contact your administrator.",
    "400_POST_MOBILE_011": "Please enter a name.",
    "400_POST_MOBILE_012": "Please enter a company.",
    "400_POST_MOBILE_013": "Please enter a valid name.",
    "400_POST_MOBILE_014": "Please enter a valid flag.",
    "400_POST_MOBILE_015": "Please enter a valid internal registry.",
    "400_POST_MOBILE_016": "Please enter a valid external registry.",
    "400_POST_MOBILE_017": "Please enter a valid callsign.",
    "400_POST_MOBILE_018": "Something went wrong, please contact your administrator.",
    "400_POST_MOBILE_019": "Something went wrong, please contact your administrator.",
    "404_POST_MOBILE_050": "Something went wrong, please contact your administrator.",
    "404_POST_MOBILE_051": "Something went wrong, please contact your administrator.",
    "422_POST_MOBILE_060": "Something went wrong, please contact your administrator.",
    "500_POST_MOBILE_100": "Something went wrong, please contact your administrator.",
    "500_POST_MOBILE_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by PATCH requests on Mobiles API */
    "400_PATCH_MOBILE_000": "Something went wrong, please contact your administrator.",
    "400_PATCH_MOBILE_001": "Something went wrong, please contact your administrator.",
    "400_PATCH_MOBILE_010": "Something went wrong, please contact your administrator.",
    "400_PATCH_MOBILE_011": "Please enter a name.",
    "400_PATCH_MOBILE_012": "Please enter a company.",
    "400_PATCH_MOBILE_013": "Please enter a valid name.",
    "400_PATCH_MOBILE_014": "Please enter a valid flag.",
    "400_PATCH_MOBILE_015": "Please enter a valid internal registry.",
    "400_PATCH_MOBILE_016": "Please enter a valid external registry.",
    "400_PATCH_MOBILE_017": "Please enter a valid callsign.",
    "400_PATCH_MOBILE_018": "Something went wrong, please contact your administrator.",
    "400_PATCH_MOBILE_019": "Something went wrong, please contact your administrator.",
    "404_PATCH_MOBILE_050": "Something went wrong, please contact your administrator.",
    "404_PATCH_MOBILE_051": "Something went wrong, please contact your administrator.",
    "422_PATCH_MOBILE_060": "Something went wrong, please contact your administrator.",
    "500_PATCH_MOBILE_100": "Something went wrong, please contact your administrator.",
    "500_PATCH_MOBILE_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by DELETE requests on Mobiles API */
    "400_DELETE_MOBILE_000": "Something went wrong trying to delete the vessel, please contact your administrator.",
    "400_DELETE_MOBILE_001": "Something went wrong trying to delete the vessel, please contact your administrator.",
    "500_DELETE_MOBILE_102": "Something went wrong trying to delete the vessel, please contact your administrator.",

	/* Error codes returned by GET requests on Contracts API */
    "400_GET_CONTRACT_000": "Something went wrong, please contact your administrator.",
    "400_GET_CONTRACT_001": "Something went wrong, please contact your administrator.",
    "400_GET_CONTRACT_010": "Something went wrong, please contact your administrator.",
    "404_GET_CONTRACT_050": "Something went wrong, please contact your administrator.",
    "500_GET_CONTRACT_100": "Something went wrong, please contact your administrator.",
    "500_GET_CONTRACT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Contracts API */
	"400_POST_CONTRACT_000": "Something went wrong, please contact your administrator.",
	"400_POST_CONTRACT_001": "Something went wrong, please contact your administrator.",
	"400_POST_CONTRACT_010": "Something went wrong, please contact your administrator.",
	"400_POST_CONTRACT_011": "Something went wrong, please contact your administrator.",
	"400_POST_CONTRACT_016": "Please select at least one device or one service.",
	"400_POST_CONTRACT_017": "Please select a vendor.",
	"400_POST_CONTRACT_018": "Please select a buyer.",
	"400_POST_CONTRACT_019": "Please enter a start date.",
	"400_POST_CONTRACT_020": "Please enter a valid start date.",
	"400_POST_CONTRACT_100": "Something went wrong, please contact your administrator.",
	"400_POST_CONTRACT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Allocations API */
    "400_GET_ALLOC_000": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_001": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_002": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_003": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_004": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_005": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_006": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_007": "Something went wrong, please contact your administrator.",
    "400_GET_ALLOC_008": "Something went wrong, please contact your administrator.",
    "404_GET_ALLOC_050": "Something went wrong, please contact your administrator.",
    "500_GET_ALLOC_100": "Something went wrong, please contact your administrator.",
    "500_GET_ALLOC_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Allocations API */
    "400_POST_ALLOC_000": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_001": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_010": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_011": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_012": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_013": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_014": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_015": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_016": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_017": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_018": "Something went wrong, please contact your administrator.",
    "400_POST_ALLOC_019": "Something went wrong, please contact your administrator.",
    "500_POST_ALLOC_100": "Something went wrong, please contact your administrator.",
    "500_POST_ALLOC_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by PATCH requests on Allocations API */
    "400_PATCH_ALLOC_000": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_001": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_010": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_011": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_012": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_013": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_014": "Something went wrong, please contact your administrator.",
    "400_PATCH_ALLOC_015": "Something went wrong, please contact your administrator.",
    "500_PATCH_ALLOC_100": "Something went wrong, please contact your administrator.",
    "500_PATCH_ALLOC_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Operations API */
    "400_GET_OP_000": "Something went wrong, please contact your administrator.",
    "400_GET_OP_001": "Something went wrong, please contact your administrator.",
    "404_GET_OP_050": "Something went wrong, please contact your administrator.",
    "500_GET_OP_100": "Something went wrong, please contact your administrator.",
    "500_GET_OP_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Operations API */
    "400_POST_OP_000": "Something went wrong, please contact your administrator.",
    "400_POST_OP_001": "Something went wrong, please contact your administrator.",
    "400_POST_OP_010": "Something went wrong, please contact your administrator.",
    "400_POST_OP_011": "Something went wrong, please contact your administrator.",
    "400_POST_OP_012": "Something went wrong, please contact your administrator.",
    "400_POST_OP_013": "Something went wrong, please contact your administrator.",
    "400_POST_OP_014": "This installation can not be created because the device or the vessel is missing.",
    "400_POST_OP_015": "This start-up can not be created because the service is missing.",
    "400_POST_OP_016": "Something went wrong, please contact your administrator.",
    "400_POST_OP_017": "Something went wrong, please contact your administrator.",
    "400_POST_OP_018": "Something went wrong, please contact your administrator.",
    "400_POST_OP_019": "Something went wrong, please contact your administrator.",
    "400_POST_OP_020": "Please provide a device and a vessel to declare an installation operation.",
    "400_POST_OP_021": "Something went wrong, please contact your administrator.",
    "400_POST_OP_022": "Something went wrong, please contact your administrator.",
    "400_POST_OP_023": "Some acknowledgment of receipt operations could not be created, please check the selected devices.",
    "400_POST_OP_024": "Please select at least one device.",
    "400_POST_OP_025": "Please enter a valid comment (no more than 1000 characters).",
    "400_POST_OP_026": "This closure can not be created because the service and the device are missing.",
    "400_POST_OP_027": "Please enter a valid closure date.",
    "400_POST_OP_104": "Some acknowledgment of receipt operations could not be created, please check the selected devices.",
    "422_POST_OP_104": "Some acknowledgment of receipt operations could not be created, please check the selected devices.",
    "500_POST_OP_100": "Something went wrong, please contact your administrator.",
    "500_POST_OP_102": "Something went wrong, please contact your administrator.",
    "500_POST_OP_103": "Something went wrong, please contact your administrator.",
    "500_POST_OP_104": "Some acknowledgment of receipt operations could not be created, please check the selected devices.",
    "500_POST_OP_105": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Recipients API */
    "400_GET_RECIPIENT_000": "Something went wrong, please contact your administrator.",
    "400_GET_RECIPIENT_011": "Something went wrong, please contact your administrator.",
    "404_GET_RECIPIENT_050": "Something went wrong, please contact your administrator.",
    "500_GET_RECIPIENT_100": "Something went wrong, please contact your administrator.",
    "500_GET_RECIPIENT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Recipients API */
	"400_POST_RECIPIENT_000": "Something went wrong, please contact your administrator.",
	"400_POST_RECIPIENT_010": "Something went wrong, please contact your administrator.",
	"400_POST_RECIPIENT_011": "Something went wrong, please contact your administrator.",
	"400_POST_RECIPIENT_012": "Please enter a last name.",
	"400_POST_RECIPIENT_016": "Please enter an email.",
	"400_POST_RECIPIENT_017": "Please enter a valid email.",
	"400_POST_RECIPIENT_018": "Something went wrong, please contact your administrator.",
	"400_POST_RECIPIENT_020": "Please enter a valid last name.",
	"400_POST_RECIPIENT_021": "Please enter a valid first name.",
	"400_POST_RECIPIENT_023": "Please enter a valid email.",
	"500_POST_RECIPIENT_100": "Something went wrong, please contact your administrator.",
    "500_POST_RECIPIENT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by PATCH requests on Recipients API */
    "400_PATCH_RECIPIENT_000": "Something went wrong, please contact your administrator.",
    "400_PATCH_RECIPIENT_010": "Something went wrong, please contact your administrator.",
    "400_PATCH_RECIPIENT_011": "Something went wrong, please contact your administrator.",
    "400_PATCH_RECIPIENT_012": "Please enter a last name.",
    "400_PATCH_RECIPIENT_016": "Please enter an email.",
    "400_PATCH_RECIPIENT_017": "Something went wrong, please contact your administrator.",
    "400_PATCH_RECIPIENT_020": "Something went wrong, please contact your administrator.",
    "400_PATCH_RECIPIENT_021": "Something went wrong, please contact your administrator.",
    "400_PATCH_RECIPIENT_023": "Please enter a valid email.",
    "404_PATCH_RECIPIENT_050": "Something went wrong, please contact your administrator.",
    "500_PATCH_RECIPIENT_100": "Something went wrong, please contact your administrator.",
    "500_PATCH_RECIPIENT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by DELETE requests on Recipients API */
    "400_DELETE_RECIPIENT_000": "Something went wrong, please contact your administrator.",
    "400_DELETE_RECIPIENT_011": "Something went wrong, please contact your administrator.",
    "400_DELETE_RECIPIENT_012": "Something went wrong, please contact your administrator.",
    "400_DELETE_RECIPIENT_013": "Something went wrong, please contact your administrator.",
    "500_DELETE_RECIPIENT_100": "Something went wrong, please contact your administrator.",
    "500_DELETE_RECIPIENT_101": "Something went wrong, please contact your administrator.",
    "500_DELETE_RECIPIENT_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Groups API */
    "400_GET_GROUP_000": "Something went wrong, please contact your administrator.",
    "400_GET_GROUP_001": "Something went wrong, please contact your administrator.",
    "400_GET_GROUP_010": "Something went wrong, please contact your administrator.",
    "404_GET_GROUP_050": "Something went wrong, please contact your administrator.",
    "404_GET_GROUP_051": "Something went wrong, please contact your administrator.",
    "500_GET_GROUP_100": "Something went wrong, please contact your administrator.",
    "500_GET_GROUP_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Groups API */
    "400_POST_GROUP_000": "Something went wrong, please contact your administrator.",
    "400_POST_GROUP_001": "Something went wrong, please contact your administrator.",
    "400_POST_GROUP_010": "Something went wrong, please contact your administrator.",
    "400_POST_GROUP_011": "Something went wrong, please contact your administrator.",
    "400_POST_GROUP_012": "Please enter a shared by company.",
    "400_POST_GROUP_013": "Please enter a shared with company.",
    "400_POST_GROUP_014": "Something went wrong, please contact your administrator.",
    "500_POST_GROUP_100": "Something went wrong, please contact your administrator.",
    "500_POST_GROUP_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by PATCH requests on Groups API */
    "400_PATCH_GROUP_010": "Something went wrong, please contact your administrator.",
    "400_PATCH_GROUP_012": "Something went wrong, please contact your administrator.",
    "400_PATCH_GROUP_013": "Something went wrong, please contact your administrator.",
    "400_PATCH_GROUP_014": "Some elements could not be added to the group, please check your selection.",
    "400_PATCH_GROUP_015": "Some elements could not be removed from the group, please check your selection.",
    "404_PATCH_GROUP_050": "Something went wrong, please contact your administrator.",
    "422_PATCH_GROUP_014": "Some elements could not be added to the group, please check your selection.",
    "422_PATCH_GROUP_015": "Some elements could not be removed from the group, please check your selection.",
    "500_PATCH_GROUP_014": "Some elements could not be added to the group, please check your selection.",
    "500_PATCH_GROUP_015": "Some elements could not be removed from the group, please check your selection.",
    "500_PATCH_GROUP_100": "Something went wrong, please contact your administrator.",
    "500_PATCH_GROUP_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by DELETE requests on Groups API */
    "400_DELETE_GROUP_000": "Something went wrong, please contact your administrator.",
    "400_DELETE_GROUP_001": "Something went wrong, please contact your administrator.",
    "500_DELETE_GROUP_102": "Something went wrong, please contact your administrator.",

	/* Error codes returned by POST requests on Support API */
    "400_POST_SUPPORT_000": "Something went wrong, please contact your administrator.",
    "400_POST_SUPPORT_001": "Something went wrong, please contact your administrator.",
    "400_POST_SUPPORT_002": "Something went wrong, please contact your administrator.",
    "400_POST_SUPPORT_003": "Please enter an estimated order date.",
    "400_POST_SUPPORT_004": "Please enter an estimated start date.",
    "400_POST_SUPPORT_005": "Please enter a valid type of service or device.",
    "400_POST_SUPPORT_006": "Please enter a type of service or device.",
    "400_POST_SUPPORT_007": "Please enter a quantity.",
    "400_POST_SUPPORT_008": "Please enter a valid quantity.",
    "400_POST_SUPPORT_009": "Something went wrong, please contact your administrator.",
    "400_POST_SUPPORT_010": "Something went wrong, please contact your administrator.",
    "400_POST_SUPPORT_011": "Please enter at least one device or service.",
    "400_POST_SUPPORT_012": "Please enter a valid description (no more than 1000 characters).",
    "400_POST_SUPPORT_013": "Please enter at least one device or service.",
    "400_POST_SUPPORT_014": "Something went wrong, please contact your administrator.",
    "422_POST_SUPPORT_060": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_100": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_101": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_102": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_103": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_104": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_105": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_106": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_107": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_108": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_109": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_110": "Something went wrong, please contact your administrator.",
    "500_POST_SUPPORT_111": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Countries API */
    "400_GET_I18N_COUNTRIES_000": "Something went wrong, please contact your administrator.",
    "400_GET_I18N_COUNTRIES_010": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Languages API */
    "400_GET_I18N_LANGUAGES_000": "Something went wrong, please contact your administrator.",
    "400_GET_I18N_LANGUAGES_010": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on Timezones API */
    "400_GET_I18N_TIMEZONES_000": "Something went wrong, please contact your administrator.",
    "400_GET_I18N_TIMEZONES_010": "Something went wrong, please contact your administrator.",

	/* Error codes returned by GET requests on all Entities API */
    "400_GET_ENTITY_000": "Something went wrong, please contact your administrator.",
    "400_GET_ENTITY_010": "Something went wrong, please contact your administrator.",
    "400_GET_ENTITY_011": "Something went wrong, please contact your administrator.",
    "400_GET_ENTITY_012": "Something went wrong, please contact your administrator.",
    "400_GET_ENTITY_013": "Something went wrong, please contact your administrator.",
    "500_GET_ENTITY_100": "Something went wrong, please contact your administrator.",

	/* Error codes returned in case of bad request */
	"400_BAD_REQUEST_0100": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0101": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0102": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0103": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0104": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0105": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0106": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0107": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0108": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0109": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0110": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0111": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0112": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0113": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0114": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0115": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0116": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0117": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0118": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0119": "Please enter an email.",
	"400_BAD_REQUEST_0120": "Please enter a username.",
	"400_BAD_REQUEST_0121": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0122": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0123": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0124": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0125": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0126": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0127": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0128": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0129": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0130": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0131": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0132": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0133": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0134": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0135": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0137": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0139": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0141": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0142": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0143": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0144": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0145": "The due date of your service is unknown, please enter a closure date.",
	"400_BAD_REQUEST_0146": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0147": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0148": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0149": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0150": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0151": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0152": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0160": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0161": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0162": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0163": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0164": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0165": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0166": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0167": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0168": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0169": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0170": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0171": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0172": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0173": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0174": "Something went wrong, please contact your administrator.",
	"400_BAD_REQUEST_0175": "Something went wrong, please contact your administrator.",

	/* Error codes returned with 500 HTTP code. */
	"500_ERROR_0001": "Something went wrong, please contact your administrator.",
	"500_ERROR_0002": "Something went wrong, please contact your administrator.",
	"500_ERROR_0003": "Something went wrong, please contact your administrator.",
	"500_ERROR_0004": "Something went wrong, please contact your administrator.",
	"500_ERROR_0005": "Something went wrong, please contact your administrator.",
	"500_ERROR_0006": "Something went wrong, please contact your administrator.",
	"500_ERROR_0100": "Something went wrong, please contact your administrator.",
	"500_ERROR_0101": "Something went wrong, please contact your administrator.",
	"500_ERROR_0102": "Something went wrong trying to create company, please contact your administrator.",
	"500_ERROR_0103": "Something went wrong trying to get company, please contact your administrator.",
	"500_ERROR_0104": "Something went wrong trying to get company, please contact your administrator.",
	"500_ERROR_0105": "Something went wrong trying to get company, please contact your administrator.",
	"500_ERROR_0106": "Something went wrong trying to get companies, please contact your administrator.",
	"500_ERROR_0107": "Something went wrong trying to update company, please contact your administrator.",
	"500_ERROR_0108": "Something went wrong, please contact your administrator.",
	"500_ERROR_0109": "Something went wrong, please contact your administrator.",
	"500_ERROR_0110": "Something went wrong, please contact your administrator.",
	"500_ERROR_0111": "Something went wrong trying to create vessel, please contact your administrator.",
	"500_ERROR_0112": "Something went wrong trying to get vessel, please contact your administrator.",
	"500_ERROR_0113": "Something went wrong, please contact your administrator.",
	"500_ERROR_0114": "Something went wrong trying to update vessel, please contact your administrator.",
	"500_ERROR_0115": "Something went wrong, please contact your administrator.",
	"500_ERROR_0116": "Something went wrong, please contact your administrator.",
	"500_ERROR_0117": "Something went wrong, please contact your administrator.",
	"500_ERROR_0118": "Something went wrong, please contact your administrator.",
	"500_ERROR_0119": "Something went wrong trying to create device, please contact your administrator.",
	"500_ERROR_0120": "Something went wrong, please contact your administrator.",
	"500_ERROR_0121": "Something went wrong trying to update device, please contact your administrator.",
	"500_ERROR_0123": "Something went wrong, please contact your administrator.",
	"500_ERROR_0124": "Something went wrong, please contact your administrator.",
	"500_ERROR_0125": "Something went wrong, please contact your administrator.",
	"500_ERROR_0126": "Something went wrong, please contact your administrator.",
	"500_ERROR_0127": "Something went wrong, please contact your administrator.",
	"500_ERROR_0128": "Something went wrong, please contact your administrator.",
	"500_ERROR_0129": "A contact with this email already exists, please enter another email.",
	"500_ERROR_0130": "A contact with this username already exists, please enter another username.",
	"500_ERROR_0131": "Something went wrong trying to create contact, please contact your administrator.",
	"500_ERROR_0132": "Something went wrong trying to update contact, please contact your administrator.",
	"500_ERROR_0133": "Something went wrong trying to get contacts, please contact your administrator.",
	"500_ERROR_0134": "Something went wrong, please contact your administrator.",
	"500_ERROR_0135": "Something went wrong, please contact your administrator.",
	"500_ERROR_0136": "Something went wrong, please contact your administrator.",
	"500_ERROR_0137": "Something went wrong trying to delete contact, please contact your administrator.",
	"500_ERROR_0138": "Something went wrong, please contact your administrator.",
	"500_ERROR_0139": "Something went wrong, please contact your administrator.",
	"500_ERROR_0140": "Something went wrong, please contact your administrator.",
	"500_ERROR_0141": "Something went wrong, please contact your administrator.",
	"500_ERROR_0142": "Something went wrong, please contact your administrator.",
	"500_ERROR_0143": "Something went wrong, please contact your administrator.",
	"500_ERROR_0144": "Something went wrong, please contact your administrator.",
	"500_ERROR_0145": "Something went wrong, please contact your administrator.",
	"500_ERROR_0146": "Something went wrong, please contact your administrator.",
	"500_ERROR_0147": "Something went wrong, please contact your administrator.",
	"500_ERROR_0148": "Something went wrong, please contact your administrator.",
	"500_ERROR_0149": "Something went wrong trying to create contract, please contact your administrator.",
	"500_ERROR_0150": "Something went wrong trying to update contract, please contact your administrator.",
	"500_ERROR_0151": "Something went wrong trying to update contract, please contact your administrator.",
	"500_ERROR_0152": "Something went wrong, please contact your administrator.",
	"500_ERROR_0153": "Something went wrong, please contact your administrator.",
	"500_ERROR_0154": "Something went wrong, please contact your administrator.",
	"500_ERROR_0155": "Something went wrong, please contact your administrator.",
	"500_ERROR_0156": "Something went wrong, please contact your administrator.",
	"500_ERROR_0157": "Something went wrong, please contact your administrator.",
	"500_ERROR_0158": "Something went wrong, please contact your administrator.",
	"500_ERROR_0160": "Something went wrong trying to create service, please contact your administrator.",
	"500_ERROR_0161": "Something went wrong, please contact your administrator.",
	"500_ERROR_0162": "Something went wrong trying to update service, please contact your administrator.",
	"500_ERROR_0163": "Something went wrong, please contact your administrator.",
	"500_ERROR_0164": "Something went wrong, please contact your administrator.",
	"500_ERROR_0165": "Something went wrong, please contact your administrator.",
	"500_ERROR_0166": "Something went wrong, please contact your administrator.",
	"500_ERROR_0167": "Something went wrong, please contact your administrator.",
	"500_ERROR_0168": "Something went wrong, please contact your administrator.",
	"500_ERROR_0169": "Something went wrong, please contact your administrator.",
	"500_ERROR_0170": "Something went wrong, please contact your administrator.",
	"500_ERROR_0174": "Something went wrong, please contact your administrator.",
	"500_ERROR_0175": "Something went wrong, please contact your administrator.",
	"500_ERROR_0176": "Something went wrong, please contact your administrator.",
	"500_ERROR_0177": "Something went wrong, please contact your administrator.",
	"500_ERROR_0178": "Something went wrong, please contact your administrator.",
	"500_ERROR_0179": "Something went wrong, please contact your administrator.",
	"500_ERROR_0180": "Something went wrong, please contact your administrator.",
	"500_ERROR_0181": "Something went wrong, please contact your administrator.",
	"500_ERROR_0182": "Something went wrong, please contact your administrator.",
	"500_ERROR_0183": "Something went wrong, please contact your administrator.",
	"500_ERROR_0184": "Something went wrong, please contact your administrator.",
	"500_ERROR_0185": "Something went wrong, please contact your administrator.",
	"500_ERROR_0186": "Something went wrong, please contact your administrator.",
	"500_ERROR_0187": "Something went wrong, please contact your administrator.",
	"500_ERROR_0188": "Something went wrong, please contact your administrator.",
	"500_ERROR_0189": "Something went wrong, please contact your administrator.",
	"500_ERROR_0190": "Something went wrong, please contact your administrator.",
	"500_ERROR_0191": "Something went wrong, please contact your administrator.",
	"500_ERROR_0192": "Something went wrong, please contact your administrator.",
	"500_ERROR_0193": "Something went wrong, please contact your administrator.",
	"500_ERROR_0194": "This operation can not be created because the selected service is not allocated.",
	"500_ERROR_0195": "Something went wrong, please contact your administrator.",
	"500_ERROR_0196": "Something went wrong, please contact your administrator.",
	"500_ERROR_0197": "Something went wrong, please contact your administrator.",
	"500_ERROR_0198": "Something went wrong, please contact your administrator.",
	"500_ERROR_0199": "Something went wrong, please contact your administrator.",
	"500_ERROR_0200": "Something went wrong, please contact your administrator.",
	"500_ERROR_0201": "Something went wrong, please contact your administrator.",
	"500_ERROR_0202": "Something went wrong, please contact your administrator.",
	"500_ERROR_0203": "Something went wrong, please contact your administrator.",
	"500_ERROR_0204": "Something went wrong, please contact your administrator.",
	"500_ERROR_0205": "Something went wrong, please contact your administrator.",
	"500_ERROR_0206": "Something went wrong, please contact your administrator.",
	"500_ERROR_0207": "Something went wrong, please contact your administrator.",
	"500_ERROR_0208": "Something went wrong, please contact your administrator.",
	"500_ERROR_0209": "Something went wrong, please contact your administrator.",
	"500_ERROR_0210": "Something went wrong, please contact your administrator.",
	"500_ERROR_0211": "Something went wrong, please contact your administrator.",
	"500_ERROR_0212": "Something went wrong, please contact your administrator.",
	"500_ERROR_0213": "Something went wrong, please contact your administrator.",
	"500_ERROR_0214": "Something went wrong, please contact your administrator.",
	"500_ERROR_0215": "Something went wrong, please contact your administrator.",
	"500_ERROR_0216": "Something went wrong, please contact your administrator.",
	"500_ERROR_0217": "Something went wrong, please contact your administrator.",
	"500_ERROR_0218": "Something went wrong, please contact your administrator.",
	"500_ERROR_0219": "Something went wrong, please contact your administrator.",
	"500_ERROR_0220": "Something went wrong, please contact your administrator.",
	"500_ERROR_0221": "Something went wrong, please contact your administrator.",
	"500_ERROR_0222": "Something went wrong, please contact your administrator.",
	"500_ERROR_0223": "Something went wrong, please contact your administrator.",
	"500_ERROR_0224": "Something went wrong, please contact your administrator.",
	"500_ERROR_0225": "Something went wrong, please contact your administrator.",
	"500_ERROR_0226": "Something went wrong, please contact your administrator.",
	"500_ERROR_0227": "Something went wrong, please contact your administrator.",
	"500_ERROR_0228": "Something went wrong, please contact your administrator.",
	"500_ERROR_0229": "Something went wrong, please contact your administrator.",
	"500_ERROR_0230": "Something went wrong, please contact your administrator.",
	"500_ERROR_0231": "Something went wrong, please contact your administrator.",
	"500_ERROR_0232": "Something went wrong, please contact your administrator.",
	"500_ERROR_0233": "Something went wrong, please contact your administrator.",
	"500_ERROR_0234": "Something went wrong, please contact your administrator.",
	"500_ERROR_0235": "Something went wrong, please contact your administrator.",
	"500_ERROR_0236": "Something went wrong, please contact your administrator.",
	"500_ERROR_0237": "Something went wrong, please contact your administrator.",
	"500_ERROR_0238": "Something went wrong, please contact your administrator.",
	"500_ERROR_0239": "Something went wrong, please contact your administrator.",
	"500_ERROR_0300": "The operation has not been created because you don't have access rights on this equipment.",
	"500_ERROR_0301": "The operation has not been created because you don't have access rights on this service.",
	"500_ERROR_0302": "The operation has not been created because you don't have access rights on this vessel.",

	/* Error codes returned with 422 HTTP code. */
    "422_DOMAIN_0600": "Link can't be established on this service.",
    "422_DOMAIN_0601": "Link can't be established on this transmitter.",
    "422_DOMAIN_0602": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0603": "Service status doesn't allow this unlink.",
    "422_DOMAIN_0604": "The transmitter is installed on the vessel, you can't unlink them.",
    "422_DOMAIN_0605": "This contact is holder, you can't apply him/her this role.",
    "422_DOMAIN_0606": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0607": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0608": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0609": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0610": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0611": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0612": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0614": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0615": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0616": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0617": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0619": "This device can not be added to the group because its owner company is not the sharing company of the group.",
    "422_DOMAIN_0620": "This vessel can not be added to the group because its owner company is not the sharing company of the group.",
    "422_DOMAIN_0621": "This service can not be added to the group because its owner company is not the sharing company of the group.",
    "422_DOMAIN_0622": "This holder can not be added to the group because his/her company is not the sharing company of the group.",
    "422_DOMAIN_0623": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0624": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0625": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0626": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0627": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0628": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0629": "This operation cannot be done because at least one device is not paired or not to an eligible status.",
    "422_DOMAIN_0630": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0631": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0632": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0633": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0634": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0638": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0639": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0640": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0641": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0642": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0643": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0644": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0645": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0646": "Something went wrong, please contact your administrator.",
    "422_DOMAIN_0647": "This contact is holder of some services, you can not delete him/her from ESOP.",
    "422_DOMAIN_0648": "This contact is creator of some contracts, you can not delete him/her from ESOP.",
    "422_DOMAIN_0649": "This device is already included in this group.",
    "422_DOMAIN_0650": "This vessel is already included in this group.",
    "422_DOMAIN_0651": "This service is already included in this group.",
    "422_DOMAIN_0652": "This holder is already included in this group.",
    "422_DOMAIN_0653": "This vessel cannot be deleted because it is linked with an active or inactive service.",
    "422_DOMAIN_0654": "This vessel cannot be deleted because a transmitter is installed on it.",
    "422_DOMAIN_0655": "This vessel cannot be deleted because it is included in one or several groups.",
    "422_DOMAIN_0656": "This contact is creator of some groups, you can not delete him/her from ESOP.",

	/* Error codes returned with 403 or 405 HTTP code. */
    "405_FEAT_ACCESS_0000": "Something went wrong, please contact your administrator.",
    "403_FEAT_ACCESS_0001": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0100": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0101": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0110": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0111": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0112": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0120": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0130": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0140": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0150": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0160": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0161": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0162": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0170": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0171": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0180": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0181": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0182": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0183": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0190": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0200": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0201": "Something went wrong, you will be disconnected, please reconnect.",
    "403_DATA_ACCESS_0202": "Something went wrong, you will be disconnected, please reconnect.",

};

export default {
    ...messages,
    ...api_error_messages,
    ra: {
        ...messages.ra,
        action: {
            ...messages.ra.action,
            select: "Select",
            unselect: "Unselect",
            open_menu: "Open menu",
            close_menu: "Close menu"
        },
        auth: {
            ...messages.ra.auth,
            sign_in_error: "Bad username or password."
        },
		notification: {
			deleted: "Deletion completed successfully.",
			item_doesnt_exist: "Not found."
		}
    },
    resources: {
		login: {
			profile:"My Profile",
			logout:"Logout"
		},
        services: {
            name: "Services",
            nameOne: "Service",
            created: "The service %{id} has been successfully created.",
            updated: "The service %{id} has been successfully updated.",
            linked: "Service linked.",
            unlinked: "Service unlinked.",
            selected: " 1 service selected |||| %{smart_count} services selected",
            fields: {
                id: "ERP identifier",
                type: "Type",
                status: "Status",
                ownerId: "Owner",
                clsContractId: "Contract ERP Identifier",
                contract: "CLS Contract",
                purchaseDate: "Purchase date",
                equipmentId: "Device",
                mobileId: "Vessel",
                holderId: "Holder",
                startDate: "Start date",
                dueDate: "Due date",
                query: "Search",
                firstname: "First name",
                lastname: "Last name",
                email: "Email",
                edit: "EDIT",
                links: "Linked with",
                purchaseDate_gte: "Purchase date from",
                purchaseDate_lte: "Purchase date to",
                startDate_gte: "Start date from",
                startDate_lte: "Start date to",
                dueDate_gte: "Due date from",
                dueDate_lte: "Due date to",
                "reseller.id": "Reseller",
                itemCode: "Item code"
            },
            types: {
                "NEMO": "Nemo service"
            }
        },
        equipments: {
            name: "Devices",
            nameOne: "Device",
            created: "The device %{id} has been successfully created.",
            updated: "The device %{id} has been successfully updated.",
            linked: "Device linked.",
            unlinked: "Device unlinked.",
            selected: " 1 device selected |||| %{smart_count} devices selected",
            fields: {
                id: "ERP identifier",
                type: "Type",
                contractualStatus: "Status",
                ownerId: "Owner",
                clsContractId: "Contract ERP Idenfifier",
                contract: "CLS Contract",
                purchaseDate: "Purchase date",
                shippingNumber: "Shipping number",
                warrantyEndDate: "Warranty end date",
                purchaseDate_gte: "Purchase date from",
                purchaseDate_lte: "Purchase date to",
                warrantyEndDate_gte: "Warranty end date from",
                warrantyEndDate_lte: "Warranty end date to",
                startDate_gte: "Start date from",
                startDate_lte: "Start date to",
                serviceId: "Service",
                mobileId: "Vessel",
                holderId: "Holder",
                linkedEquipmentId: "Paired device",
                startDate: "Start Date",
                query: "Search",
                links: "Linked with",
                "reseller.id": "Reseller",
                itemCode: "Item code",
                old: "Old ",
                new: "New ",
								oldTransmitter: "Old Transmitter ",
                newTransmitter: "New Transmitter ",
                oldBase: "Old Base ",
                newBase: "New Base ",
                serialNumber: "Serial number",
            },
            types: {
                "NEMO-TRANSMITTER-STD": "Nemo transmitter",
                "NEMO-BASE-STD": "Nemo base",
            }
        },
        mobiles: {
            name: "Vessels",
            nameOne: "Vessel",
            created: "The vessel %{name} has been successfully created.",
            confirmationMessage: "The vessel %{name} will be created. Its owner cannot be changed. Do you want to continue ?",
            updated: "The vessel %{name} has been successfully updated.",
            deletedContact:"The vessel %{name} will be deleted. This action cannot be undone. Do you want to continue ?",
            linked: "Vessel linked.",
            unlinked: "Vessel unlinked.",
            selected: " 1 vessel selected |||| %{smart_count} vessels selected",
            fields: {
                query: "Search",
                id: "ESOP identifier",
                type: "Type",
                name: "Name",
                rc: "Radio Callsign (RC)",
                ir: "Registry number (IR)",
                xr: "External Registration (XR)",
                links: "Linked with",
                holderId: "Holder",
                serviceId: "Service",
                equipmentId: "Device",
                ownerId: "Owner",
                creatorId: "Created by (Company)",
                flag: "Flag"
            },
            types: {
                Vessel: "Vessel"
            }
        },
        holders: {
            name: "Holders",
            nameOne: "Holder",
            linked: "Holder linked.",
            unlinked: "Holder unlinked.",
            selected: " 1 holder selected |||| %{smart_count} holders selected",
            fields: {
                query: "Search",
                id: "Holder identifier",
                firstname: "First name",
                lastname: "Last name",
                links: "Linked with",
                phone: "Phone",
                country: "Country",
                mobileId: "Vessel",
                serviceId: "Service",
                equipmentId: "Device",
                organizationId: "Company",
                email: "Email",
                identifier: "ESOP identifier"
            }
        },
        groups: {
            name: "Groups",
            nameOne: "Group ",
            created: "The group has been successfully created.",
			createdContract: "This group will be create. It cannot be changed. Do you want to continue ?",
            added: {
                services: "Service added to the group. |||| %{smart_count} services added to the group.",
                equipments: "Device added to the group. |||| %{smart_count} devices added to the group.",
                mobiles: "Vessel added to the group. |||| %{smart_count} vessels added to the group.",
                holders: "Holder added to the group. |||| %{smart_count} holders added to the group."
            },
            fields: {
                id: "ESOP identifier",
                creationDate: "Creation date",
                sharedBy: "Shared by",
                sharedWith: "Shared with",
                createdByContact: "Created by contact",
                createdByOrganization: "Created by company",
                query: "Search",
                services: "Select services",
                equipments: "Select devices",
                holders: "Set holders",
                mobiles: "Set vessels",
                servicesIds: "Services",
                equipmentsIds: "Devices",
                holdersIds: "Holders",
                mobilesIds: "Vessels",
            },
            removed: {
                services:"Services removed from group.",
                equipments:"Devices removed from group.",
                mobiles:"Vessels removed from group.",
                holders:"Holders removed from group.",
            }
        },
        allocations: {
            name: "Nemo links",
            nameOne: "Nemo link",
            field: "Linked with",
            no: "No ",
            createMultiple: "Allocation created. |||| %{smart_count} allocations created.",
            bulkEmpty: "No allocation can be created with those entities.",
            selected: "%{nbResults} allocation(s) can be created with the %{nbResource} %{typeResource} and the %{nbReference} %{typeReference} selected.",
            fields: {
                equipmentId: "Device",
                holderId: "Holder",
                mobileId: "Vessel",
                serviceId: "Service",
                query: "Search"
            },
            actions: {
                equipmentIdLink: "Link to device",
                holderIdLink: "Link to holder",
                mobileIdLink: "Link to vessel",
                serviceIdLink: "Link to service",
                equipmentIdTitle: "Choose a device",
                holderIdTitle: "Choose a holder",
                mobileIdTitle: "Choose a vessel",
                serviceIdTitle: "Choose a service",
            }
        },
        operations: {
            name: "Operations",
            nameOne: "Operation",
            empty: "No operation",
            created: "The %{type} operation has been successfully created.",
            createdStartup: "The start-up operation about the %{serviceType} %{serviceIdentifier} has been successfully created.",
            bulkAOR:"The AOR operations have been successfully created, your devices are now pending validation.",
            confirmationMessage:"The %{type} operation will be created. It cannot be changed or deleted. Do you want to continue ?",
            fields: {
                id: "Operation identifier",
                type: "Type",
                status: "Status",
                doerId: "Created by (Company)",
                doerContactId: "Created by (Contact)",
                creationDate: "Creation date",
                query: "Search",
                comments: "Comment",
                mobiles: "Vessel",
                equipments: "Device",
                holders: "Holder",
                services: "Service",
                links: "Operated on",
                creationDate_gte: "Creation date from",
                creationDate_lte: "Creation date to",
                closureDate: {
                    label: "Closure type",
                    type: "Closure Type",
                    "AT_TERM": "Close at term",
                    "AT_SPECIFIED_DATE": "Close at specific date",
                    "AT-TERM": "Close at term",
                    "AT-SPECIFIC-DATE": "Close at specific date",
                },
                specific: {
                    closureDate: "Closure date"
                },
                common: {
                    creationDate: "Creation date"
                }
            },
            types: {
                installation: "Installation",
                startUp: "Start-up",
                aor: "Acknowledgment Of Receipt",
                closure: "Closure",
                simple: "Simple replacement",
                pair: "Pair replacement",
                "NEMO-INSTALLATION": "Installation",
                "NEMO-START-UP": "Start-up",
                "AOR": 'Acknowledgment Of Receipt',
                "NEMO-CLOSURE":"Closure",
                "NEMO-SIMPLE-REPLACEMENT": "Simple replacement",
                "NEMO-PAIR-REPLACEMENT": "Pair replacement",
                button: {
                    installation: "Installation",
                    startUp: "Start-up",
                    aor: "Ack. Of Receipt",
                    closure: "Closure",
                    simple: "Simple replacement",
                    pair: "Pair replacement"
                }

            }
        },
        externalcontracts: {
            name: "External",
            fields: {
                id: "ESOP identifier",
                status: "Status",
                buyerId: "Buyer",
                vendorId: "Vendor",
                startDate: "Start date",
                startDate_gte: "Start date from",
                startDate_lte: "Start date to",
                dueDate: "Due date",
                query: "Search",
                erpIdentifier: "ERP identifier",
                type: "Type",
                services: "Services",
                equipments: "Devices",
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        incomingcontracts: {
            name: "Incoming",
            fields: {
                id: "ESOP identifier",
                status: "Status",
                buyerId: "Buyer",
                vendorId: "Vendor",
                creatorId: "Creator",
                startDate: "Start date",
                startDate_gte: "Start date from",
                startDate_lte: "Start date to",
                dueDate: "Due date",
                query: "Search",
                erpIdentifier: "ERP identifier",
                type: "Type",
                services: "Services",
                equipments: "Devices",
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        outcomingcontracts: {
            name: "Outcoming",
            fields: {
                id: "ESOP identifier",
                status: "Status",
                buyerId: "Buyer",
                vendorId: "Vendor",
                startDate: "Start date",
                startDate_gte: "Start date from",
                startDate_lte: "Start date to",
                dueDate: "Due date",
                query: "Search",
                erpIdentifier: "ERP identifier",
                type: "Type",
                services: "Services",
                equipments: "Devices",
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        contracts: {
            name: "Contracts",
            nameOne: "Contract",
            createdContract: "This contract will be created. It cannot be changed or deleted. Do you want to continue ?",
            created: "The contract has been successfully created.",
            fields: {
                id: "ESOP identifier",
                status: "Status",
                buyerId: "Buyer",
                vendorId: "Vendor",
                startDate: "Start date",
                startDate_gte: "Start date from",
                startDate_lte: "Start date to",
                dueDate: "Due date",
                query: "Search",
                erpIdentifier: "ERP identifier",
                type: "Type",
                services: "Services",
                equipments: "Devices",
                projectCode: "Project Code",
                businessUnit: "Business Unit",
                salesperson: "Salesperson"
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        persons: {
            name: "Companies",
            nameOne: "Company",
            created: "The %{profile} company %{name} has been successfully created.",
            confirmationMessage: "The company %{name} will be created as %{profile}, its profile cannot be changed. Do you want to continue ?",
            updated: "The company %{name} has been successfully updated.",
            fields: {
                erpIdentifier: "ERP identifier",
                name: "Name",
                profile: "Profile",
                query: "Search",
                id: "ESOP identifier",
                email: "Email",
                addressStreet1: "Address street 1",
                addressStreet2: "Address street 2",
                addressStreet3: "Address street 3",
                addressZipCode: "Zip code",
                addressCity: "City",
                addressRegion: "Region",
                addressCountry: "Country",
                phone: "Phone"
            },
            types: {
                Headquarters: "Headquarters",
                Reseller: "Reseller",
                Installer: "Installer",
                Client: "Client",
            }
        },
        contacts: {
            name: "Contacts",
            nameOne: "Contact",
            created: "The contact %{firstname} %{lastname} has been successfully created.",
            createdLastname: "The contact %{lastname} has been successfully created.",
            updated: "The contact %{firstname} %{lastname} has been successfully updated.",
            createdContact: "The contact %{firstname} %{lastname} will be created. His/her company and username cannot be changed. Do you want to continue ?",
            deletedContact: "The contact %{firstname} %{lastname} will be deleted. This action cannot be cancelled. Do you want to continue ?",
            fields: {
                id: "ESOP identifier",
                firstname: "First name",
                lastname: "Last name",
                personId: "Company",
                country: "Country",
                role: "Role",
                username: "Username",
                email: "Email",
                phone: "Phone",
                rc: "Radio Callsign",
                query: "Search",
                organizationId: "Company",
                locale: "Language",
                timezone: "Timezone",
                role: "Role",
            },
            types: {
                Admin: "Admin",
                Manager: "Manager",
                Operator: "Operator",
                Regular: "Regular",
                Basic: "Basic",
            }
        },
        issues: {
            name: "Issues",
            nameOne: "Issue",
            empty: "No issue",
            created: "The issue has been successfully created.",
            updated: "The issue has been successfully updated.",
            aorError: " %{nbSuccess} %{entityType} have been successfully treated, %{nbErrors} %{entityType} cannot be traited, please check your selection. [Errors on: %{entityIds}]",
            multipleActionsError: " %{nbErrors} %{entityType} cannot be traited, please check your selection. [Errors on: %{entityIds}]",
            types: {
                Equipment: "device(s)",
                Mobile: "vessel(s)",
                Service: "service(s)",
                Holder: "holder(s)",
                equipments: "device(s)",
                mobiles: "vessel(s)",
                services: "service(s)",
                holders: "holder(s)"
            }
        },
        supports: {
            name: "Support Request",
            types: {
                "INFORMATION_REQUEST": "Information Request",
                "DATA_CHANGE_REQUEST": "Data Change Request",
                "HELP_REQUEST": "Help Request"
            },
            fields: {
                services: "Pick up a service",
                equipments: "Pick up a device"
            },
            created: "The support request has been successfully sent."
        },
        recipients: {
            fields: {
                id: "Id",
                lastname:" Lastname",
                firstname: "Firstname",
            },
            created: "The beneficiary %{firstname} %{lastname} has been successfully created.",
            updated: "The beneficiary %{firstname} %{lastname} has been successfully updated.",
            nameOne: "Beneficiary",
            createdContact:"The beneficiary %{firstname} %{lastname} will be created. Do you want to continue ?",
        },
        purchaseforecasts: {
            name: "Purchase forecast",
            orderDate: "Order date",
            startDate: "Start date",
            equipmentType: "Device type",
            equipmentNumber: "Number of device",
            serviceType: "Service type",
            serviceNumber: "Number of service",
            incorrectEntry: "Incorrect entry",
            created: "The purchase forecast has been successfully sent.",
            createdContract:"This Purchase Forecast will be sent. This action cannot be canceled. Do you want to continue ?"
        },
        supportrequests:{
            created:"The Support Request has been successfully sent.",
            createdContract:"This Support Request will be sent. This action cannot be canceled. Do you want to continue ?"
        },
        dialogConfirmation: {
            title: "Confirmation",
            content: "This %{resource} cannot be changed or deleted. Do you want to continue ?",
            confirm: "CONFIRM",
            cancel: "CANCEL",
            saveButton: "SAVE",
            created: "The %{resource} has been successfully created.",
            createdMobile: "This vessel will be created with owner that cannot be changed. Do you want to continue ?"
        },
        deleteConfirmation: {
            title: "Confirmation",
            contentGroup: "This group will be deleted. This action cannot be undone. Do you want to continue ?",
            content: "This will remove selected %{type} from the group. Do you want to continue ?",
            confirm: "Remove this service from group",
            contentRecipients: "The beneficiary %{firstname} %{lastname} will be deleted. This action cannot be canceled. Do you want to continue ?"
        }
    },
    esop: {
        title: "ESOP",
        empty:"No results found",
        allocations: {
            beforeUnlink: "This will unlink %{ent1} from %{ent2}. Do you want to continue ?",
            list: {
                title: "Nemo Links"
            }
        },
        bulk: {
            massLink: "Link %{resource} to %{reference}"
        },
        dashboard: {
            title: "CLS Nemo - ESOP back office",
            name: "Dashboard",
            content:"Welcome to ESOP, manage all your devices and services."
        },
        groups: {
            adding: "Add %{resource} to a group",
            empty: "No groups.",
            ungroupTitle: "Remove entity from group",
            ungroupContent: "Are you sure you want to remove that entity from the group ?",
            ungrouped: "The entity has been removed from the group.",
            bulk: {
                removeFromGroup: "Remove from group"
            },
            list: {
                title: "List of Groups"
            },
            create: {
                title: "Create a Group"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            actions: {
                backToList: "Back to list"
            },
            tabs: {
                summary: "Global View",
                services: "Services",
                equipments: "Devices",
                holders: "Holders",
                mobiles: "Vessels",
            }
        },
        contacts: {
            list: {
                title: "List of contacts"
            },
            create: {
                title: "Create a contact"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            actions: {
                backToList: "Back to list"
            }
        },
        equipments: {
            list: {
                title: "List of devices"
            },
            bulk: {
                addToGroup: "Add to a group",
                confirm: "Confirm delivery",
                linkToHolders: "Link to holders",
                linkToMobiles: "Link to vessels",
                linkToServices: "Link to services",
                AOR: "Acknowledge receipt",
                addOperations: "Add operations",
                addIssue: "Report an issue"
            },
            create: {
                title: "Create a device"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with",
                title_groups: "Groups",
            },
            actions: {
                backToList: "Back to list",
                addToGroup: "Add to a group"
            }
        },
        externalcontracts: {
            list: {
                title: "List of external contracts"
            },
            create: {
                title: "Create an external contract"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            tabs: {
                summary: "Global view",
                services: "Services",
                equipments: "Devices"
            },
            actions: {
                backToList: "Back to list"
            }
        },
        holders: {
            list: {
                title: "List of holders"
            },
            create: {
                title: "Create a holder"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with",
                title_groups: "Groups",
                links_more: " more..."
            },
            actions: {
                backToList: "Back to list",
                addToGroup: "Add to a group",
                edit: "Edit contact"
            },
            bulk: {
                addToGroup: "Add to a group",
                linkToEquipments: "Link to devices",
                linkToMobiles: "Link to vessels",
                linkToServices: "Link to services",
                addOperations: "Add operations",
                addIssue: "Report an issue"
            }
        },
        incomingcontracts: {
            list: {
                title: "List of incoming contracts",
                popin: "Incoming contracts",
            },
            create: {
                title: "Create an incoming contract"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            tabs: {
                summary: "Global view",
                services: "Services",
                equipments: "Devices"
            },
            actions: {
                backToList: "Back to list"
            }
        },
        mobiles: {
            list: {
                title: "List of vessels"
            },
            create: {
                title: "Create a vessel"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with",
                title_groups: "Groups",
            },
            actions: {
                backToList: "Back to list",
                addToGroup: "Add to a group"
            },
            bulk: {
                addToGroup: "Add to a group",
                linkToEquipments: "Link to devices",
                linkToHolders: "Link to holders",
                linkToServices: "Link to services",
                addOperations: "Add operations",
                addIssue: "Report an issue"
            }
        },
        operations: {
            list: {
                title: "List of operations"
            },
            create: {
                title: "Create an operation",
                title_features: "Features"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            status: {
                creation: "Creation",
                done: "Done"
            },
            actions: {
                backToList: "Back to list",
                remove: {
                    mobiles: "Remove this vessel from operation",
                    holders: "Remove this holder from operation",
                    equipments: "Remove this device from operation",
                    services: "Remove this service from operation"
                },
                select: {
                    baseIdOld: {
                        link: "Select old base",
                        title: "Base",
                        popinTitle: "Select the old base"
                    },
                    baseIdNew: {
                        link: "Select new base",
                        title: "New base",
                        popinTitle: "Select the new base"
                    },
                    transmitterIdNew: {
                        link: "Select new transmitter",
                        title: "New transmitter",
                        popinTitle: "Select the new transmitter"
                    },
                    equipmentId: {
                        link: "Select device",
                        title: "Device",
                        popinTitle: "Select a device"
                    },
                    equipmentIdOld: {
                        link: "Select old device",
                        title: "Device replaced",
                        popinTitle: "Select the old device"
                    },
                    equipmentIdNew: {
                        link: "Select new device",
                        title: "New device",
                        popinTitle: "Select the new device"
                    },
                    pairedIdOld: {
                        title: "Paired device replaced",
                    },
                    serviceId: {
                        link: "Select service",
                        title: "Service",
                        popinTitle: "Select a service"
                    },
                    holderId: {
                        link: "Select holder",
                        title: "Holder",
                        popinTitle: "Select a holder"
                    },
                    mobileId: {
                        link: "Select vessel",
                        title: "Vessel",
                        popinTitle: "Select a vessel"
                    },
                },
                create: "Add operation",
                details: "See details"
            }
        },
        persons: {
            list: {
                title: "List of Companies"
            },
            tabs: {
                summary: "Global View",
                contacts: "Contacts"
            },
            create: {
                title: "Create a Company"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with",
                purchaseForecast: "Create purchase forecast"
            },
            actions: {
                backToList: "Back to list"
            }
        },
        outcomingcontracts: {
            list: {
                title: "List of outcoming contracts"
            },
            create: {
                title: "Create an outcoming contract"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            tabs: {
                summary: "Global view",
                services: "Services",
                equipments: "Devices"
            },
            actions: {
                backToList: "Back to list"
            }
        },
        contracts: {
            create: {
                title: "Create a contract"
            },
            delete:"Delete",
            show: {
                title_features: "Features",
                title_links: "Linked with"
            },
            tabs: {
                summary: "Global view",
                services: "Services",
                equipments: "Devices"
            },
            actions: {
                backToList: "Back to list"
            },
            title: "Choose %{reference}"
        },
        services: {
            list: {
                title: "List of services"
            },
            bulk: {
                addToGroup: "Add to a group",
                linkToEquipments: "Link to devices",
                linkToHolders: "Link to holders",
                linkToMobiles: "Link to vessels",
                addOperations: "Add operations",
                closeServices: "Close services",
                addIssue: "Report an issue"
            },
            tabs: {
                summary: "Global view",
                recipients: "Beneficiaries"
            },
            actions: {
                closeService: "Close service",
                backToList: "Back to list",
                addToGroup: "Add to a group"
            },
            create: {
                title: "Create a service"
            },
            show: {
                title_features: "Features",
                title_links: "Linked with",
                title_groups: "Groups",
            }
        },
        menu: {
            categories: {
                assets: "Assets",
                customers: "Customers",
                contracts: "Contracts"
            }
        },
        status: {
            allocated: "Allocated",
            available: "In stock",
            active: "Active",
            inactive: "Inactive",
            closed: "Closed",
            deleted: "Deleted",
            shipping: "Shipping",
            processing: "Processing",
            new: "New",
            since: "since",
            pending: "Pending",
            unavailable: "Unavailable"
        },
        dialog: {
            cancel: "Cancel",
            select: "Select",
            ok: "ok"
        },
        error: {
            token: {
                title: "Token error",
                content: "Your token has changed or your account have been modified. Logout then login required."
            }
        },
        supportrequest: {
            create: {
                title: "Support request",
                create: "Request support"
            },
            tabs: {
                services:"Services",
                equipments: "Devices",
                summary: "Global view"
            }
        },
        recipients: {
            actions: {
                backToList: "Back to List",
                create: "Add new beneficiary"
            },
            create: {
                title: "Create a beneficiary"
            }
        },
        supportpurchase: {
            title: "Purchase forecast",
            buttonEquipment: "Add devices to purchase",
            buttonService: "Add services to purchase"
        }
    }
}
