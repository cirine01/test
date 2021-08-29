/* eslint-disable */
import messages from "ra-language-french";

const api_error_messages = {

	/* Error codes returned by GET requests on Organizations API */
    "400_GET_ORG_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ORG_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_GET_ORG_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_ORG_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_ORG_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_ORG_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_ORG_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Organizations API */
    "400_POST_ORG_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_011": "Veuillez renseigner le nom de la société.",
    "400_POST_ORG_012": "Veuillez renseigner un numéro de téléphone valide.",
    "400_POST_ORG_013": "Veuillez renseigner une adresse mail valide.",
    "400_POST_ORG_014": "Veuillez renseigner le profil de la société.",
    "400_POST_ORG_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_016": "Veuillez renseigner le premier champ d'adresse de la société.",
    "400_POST_ORG_017": "Veuillez renseigner la ville de la société.",
    "400_POST_ORG_018": "Veuillez renseigner le pays de la société.",
    "400_POST_ORG_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_020": "Veuillez renseigner l'adresse de la société",
    "400_POST_ORG_021": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_022": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ORG_023": "Veuillez renseigner un pays valide.",
    "400_POST_ORG_024": "Veuillez renseigner un code postal valide.",
    "400_POST_ORG_025": "Veuillez renseigner une ville valide.",
    "400_POST_ORG_026": "Veuillez renseigner le premier champ d'adresse valide.",
    "400_POST_ORG_027": "Veuillez renseigner le second champ d'adresse valide.",
    "400_POST_ORG_028": "Veuillez renseigner le troisième champ d'adresse valide.",
    "400_POST_ORG_029": "Veuillez renseigner une région valide.",
    "400_POST_ORG_030": "Veuillez renseigner un nom de société valide.",
    "400_POST_ORG_031": "Veuillez renseigner un numéro de téléphone valide.",
    "400_POST_ORG_032": "Veuillez renseigner une adresse mail valide.",
    "400_POST_ORG_033": "Veuillez renseigner un code postal valide.",
    "422_POST_ORG_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_ORG_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_ORG_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by PATCH requests on Organizations API */
    "400_PATCH_ORG_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_011": "Veuillez renseigner le nom d'une société.",
    "400_PATCH_ORG_012": "Veuillez renseigner un numéro de téléphone valide.",
    "400_PATCH_ORG_013": "Veuillez renseigner une adresse mail valide.",
    "400_PATCH_ORG_014": "Veuillez renseigner un profil pour la société.",
    "400_PATCH_ORG_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_016": "Veuillez renseigner le premier champ d'adresse de la société.",
    "400_PATCH_ORG_017": "Veuillez renseigner la ville de la société.",
    "400_PATCH_ORG_018": "Veuillez renseigner le pays de la société.",
    "400_PATCH_ORG_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_020": "Veuillez renseigner l'adresse de la société",
    "400_PATCH_ORG_021": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_022": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ORG_023": "Veuillez renseigner un pays valide.",
    "400_PATCH_ORG_024": "Veuillez renseigner un code postal valide.",
    "400_PATCH_ORG_025": "Veuillez renseigner une ville valide.",
    "400_PATCH_ORG_026": "Veuillez renseigner le premier champ d'adresse valide.",
    "400_PATCH_ORG_027": "Veuillez renseigner le second champ d'adresse valide.",
    "400_PATCH_ORG_028": "Veuillez renseigner le troisième champ d'adresse valide.",
    "400_PATCH_ORG_029": "Veuillez renseigner une région valide.",
    "400_PATCH_ORG_030": "Veuillez renseigner un nom de société valide.",
    "400_PATCH_ORG_031": "Veuillez renseigner un numéro de téléphone valide.",
    "400_PATCH_ORG_032": "Veuillez renseigner une adresse mail valide.",
    "400_PATCH_ORG_033": "Veuillez renseigner un code postal valide.",
    "404_PATCH_ORG_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_PATCH_ORG_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_ORG_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_ORG_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Contacts API */
    "400_GET_CONTACT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_CONTACT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_CONTACT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_CONTACT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_CONTACT_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_CONTACT_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_CONTACT_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_CONTACT_052": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_CONTACT_053": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_CONTACT_054": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_CONTACT_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_CONTACT_061": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_CONTACT_062": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_CONTACT_063": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_CONTACT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_CONTACT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Contacts API */
    "400_POST_CONTACT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_CONTACT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_CONTACT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_CONTACT_011": "Veuillez renseigner une société.",
    "400_POST_CONTACT_012": "Veuillez renseigner un nom de famille.",
    "400_POST_CONTACT_013": "Veuillez renseigner un numéro de téléphone valide.",
    "400_POST_CONTACT_014": "Veuillez renseigner un role.",
    "400_POST_CONTACT_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_CONTACT_016": "Veuillez renseigner une adresse mail.",
    "400_POST_CONTACT_017": "Veuillez renseigner une adresse mail valide.",
    "400_POST_CONTACT_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_CONTACT_019": "Veuillez renseigner un nom d'utilisateur.",
    "400_POST_CONTACT_020": "Veuillez renseigner un nom de famille valide.",
    "400_POST_CONTACT_021": "Veuillez renseigner un prénom valide.",
    "400_POST_CONTACT_022": "Veuillez renseigner un numéro de téléphone valide.",
    "400_POST_CONTACT_023": "Veuillez renseigner une adresse mail valide.",
    "400_POST_CONTACT_024": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_CONTACT_025": "Veuillez renseigner un nom d'utilisateur.",
	"400_POST_CONTACT_026": "Veuillez renseigner un nom d'utilisateur valide.",
	"400_POST_CONTACT_027": "Veuillez renseigner une timezone valide.",
	"400_POST_CONTACT_028": "Veuillez renseigner une timezone.",
	"400_POST_CONTACT_029": "Veuillez renseigner une langue.",
	"400_POST_CONTACT_030": "Veuillez renseigner une langue valide.",
    "500_POST_CONTACT_070": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_CONTACT_071": "Une erreur s'est produite lors de la création d'un contact, veuillez contacter votre administrateur.",
    "500_POST_CONTACT_072": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_CONTACT_073": "Veuillez renseigner une adresse mail valide.",
    "500_POST_CONTACT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_CONTACT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by PATCH requests on Contacts API */
    "400_PATCH_CONTACT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_CONTACT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_CONTACT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_CONTACT_011": "Veuillez renseigner une société.",
    "400_PATCH_CONTACT_012": "Veuillez renseigner un nom de famille.",
    "400_PATCH_CONTACT_013": "Veuillez renseigner un numéro de téléphone valide.",
    "400_PATCH_CONTACT_014": "Veuillez renseigner un role.",
    "400_PATCH_CONTACT_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_CONTACT_016": "Veuillez renseigner une adresse mail.",
    "400_PATCH_CONTACT_017": "Veuillez renseigner une adresse mail valide.",
    "400_PATCH_CONTACT_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_CONTACT_019": "Veuillez renseigner un nom d'utilisateur.",
    "400_PATCH_CONTACT_020": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_CONTACT_021": "Veuillez renseigner un nom de famille valide.",
    "400_PATCH_CONTACT_022": "Veuillez renseigner un prénom valide.",
    "400_PATCH_CONTACT_023": "Veuillez renseigner un numéro de téléphone valide.",
    "400_PATCH_CONTACT_024": "Veuillez renseigner une adresse mail valide.",
	"400_PATCH_CONTACT_026": "Veuillez renseigner un nom d'utilisateur valide.",
	"400_PATCH_CONTACT_027": "Veuillez renseigner une timezone valide.",
	"400_PATCH_CONTACT_028": "Veuillez renseigner une timezone.",
	"400_PATCH_CONTACT_029": "Veuillez renseigner une langue.",
    "400_PATCH_CONTACT_030": "Veuillez renseigner une langue valide.",
    "400_PATCH_CONTACT_031": "Un utilisateur n'est pas autorisé à modifier son propre rôle.",
    "404_PATCH_CONTACT_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_CONTACT_070": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_CONTACT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_CONTACT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by DELETE requests on Contacts API */
    "400_DELETE_CONTACT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_DELETE_CONTACT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_DELETE_CONTACT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Services API */
    "400_GET_SERVICE_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_SERVICE_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_SERVICE_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_SERVICE_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_SERVICE_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_SERVICE_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_SERVICE_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_SERVICE_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_SERVICE_052": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_SERVICE_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_SERVICE_061": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_SERVICE_062": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_SERVICE_063": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_SERVICE_064": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_SERVICE_065": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_SERVICE_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_SERVICE_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Equipments API */
    "400_GET_EQUIPMENT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_002": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_014": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_016": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_017": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_EQUIPMENT_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_EQUIPMENT_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_EQUIPMENT_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_EQUIPMENT_052": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_EQUIPMENT_053": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_EQUIPMENT_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_EQUIPMENT_062": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_EQUIPMENT_063": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_EQUIPMENT_064": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_EQUIPMENT_065": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_EQUIPMENT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_EQUIPMENT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Mobiles API */
    "400_GET_MOBILE_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_MOBILE_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_MOBILE_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_MOBILE_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_MOBILE_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_MOBILE_014": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_MOBILE_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_MOBILE_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_MOBILE_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_MOBILE_052": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_MOBILE_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_MOBILE_061": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_MOBILE_062": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_GET_MOBILE_063": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_MOBILE_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_MOBILE_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Mobiles API */
    "400_POST_MOBILE_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_MOBILE_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_MOBILE_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_MOBILE_011": "Veuillez renseigner un nom de navire.",
    "400_POST_MOBILE_012": "Veuillez renseigner une société.",
    "400_POST_MOBILE_013": "Veuillez renseigner un nom de navire valide.",
    "400_POST_MOBILE_014": "Veuillez renseigner un pavillon valide.",
    "400_POST_MOBILE_015": "Veuillez renseigner un registre national valide.",
    "400_POST_MOBILE_016": "Veuillez renseigner un registre international valide.",
    "400_POST_MOBILE_017": "Veuillez renseigner un indicatif radio valide.",
    "400_POST_MOBILE_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_MOBILE_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_POST_MOBILE_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_POST_MOBILE_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_POST_MOBILE_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_MOBILE_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_MOBILE_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by PATCH requests on Mobiles API */
    "400_PATCH_MOBILE_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_MOBILE_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_MOBILE_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_MOBILE_011": "Veuillez renseigner un nom de navire.",
    "400_PATCH_MOBILE_012": "Veuillez renseigner une société.",
    "400_PATCH_MOBILE_013": "Veuillez renseigner un nom de navire valide.",
    "400_PATCH_MOBILE_014": "Veuillez renseigner un pavillon valide.",
    "400_PATCH_MOBILE_015": "Veuillez renseigner un registre national valide.",
    "400_PATCH_MOBILE_016": "Veuillez renseigner un registre international valide.",
    "400_PATCH_MOBILE_017": "Veuillez renseigner un indicatif radio valide.",
    "400_PATCH_MOBILE_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_MOBILE_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_PATCH_MOBILE_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_PATCH_MOBILE_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_PATCH_MOBILE_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_MOBILE_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_MOBILE_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by DELETE requests on Mobiles API */
    "400_DELETE_MOBILE_000": "Something went wrong trying to delete the vessel, please contact your administrator.",
    "400_DELETE_MOBILE_001": "Something went wrong trying to delete the vessel, please contact your administrator.",
    "500_DELETE_MOBILE_102": "Something went wrong trying to delete the vessel, please contact your administrator.",

	/* Error codes returned by GET requests on Contracts API */
    "400_GET_CONTRACT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_CONTRACT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_CONTRACT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_CONTRACT_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_CONTRACT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_CONTRACT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Contracts API */
	"400_POST_CONTRACT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_CONTRACT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_CONTRACT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_CONTRACT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_CONTRACT_016": "Veuillez choisir au moins un équipement ou un service.",
	"400_POST_CONTRACT_017": "Veuillez choisir un vendeur.",
	"400_POST_CONTRACT_018": "Veuillez choisir un acheteur.",
	"400_POST_CONTRACT_019": "Veuillez renseigner une date de démarrage.",
	"400_POST_CONTRACT_020": "Veuillez renseigner une date de démarrage valide.",
	"400_POST_CONTRACT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_CONTRACT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Allocations API */
    "400_GET_ALLOC_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_002": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_003": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_004": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_005": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_006": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_007": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ALLOC_008": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_ALLOC_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_ALLOC_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_ALLOC_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Allocations API */
    "400_POST_ALLOC_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_014": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_016": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_017": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_ALLOC_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_ALLOC_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_ALLOC_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by PATCH requests on Allocations API */
    "400_PATCH_ALLOC_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_014": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_ALLOC_015": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_ALLOC_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_ALLOC_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Operations API */
    "400_GET_OP_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_OP_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_OP_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_OP_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_OP_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Operations API */
    "400_POST_OP_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_014": "L'opération d'installation n'a pas pu être effectuée car l'équipement ou le navire n'a pas été sélectionné.",
    "400_POST_OP_015": "L'opération de mise en route de service n'a pas pu être effectuée car le service n'a pas été sélectionné.",
    "400_POST_OP_016": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_017": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_019": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_020": "Veuillez fournir un équipement et un navire pour déclarer une opération d'installation.",
    "400_POST_OP_021": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_022": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_OP_023": "Certaines opérations d'accusé de réception n'ont pas pu être créées, veuillez vérifier votre sélection d'équipements.",
    "400_POST_OP_024": "Veuillez choisir au moins un équipement.",
    "400_POST_OP_025": "Veuillez renseigner un commentaire valide (moins de 1000 caractères).",
    "400_POST_OP_026": "L'opération de clôture de service n'a pas pu être effectuée car l'équipement et le service n'ont pas été sélectionnés.",
    "400_POST_OP_027": "Veuillez renseigner une date de clôture valide.",
    "400_POST_OP_104": "Certaines opérations d'accusé de réception n'ont pas pu être créées, veuillez vérifier votre sélection d'équipements.",
    "422_POST_OP_104": "Certaines opérations d'accusé de réception n'ont pas pu être créées, veuillez vérifier votre sélection d'équipements.",
    "500_POST_OP_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_OP_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_OP_103": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_OP_104": "Certaines opérations d'accusé de réception n'ont pas pu être créées, veuillez vérifier votre sélection d'équipements.",
    "500_POST_OP_105": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Recipients API */
    "400_GET_RECIPIENT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_RECIPIENT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_RECIPIENT_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_RECIPIENT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_RECIPIENT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Recipients API */
	"400_POST_RECIPIENT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_RECIPIENT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_RECIPIENT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_RECIPIENT_012": "Veuillez renseigner un nom de famille.",
	"400_POST_RECIPIENT_016": "Veuillez renseigner une adresse mail.",
	"400_POST_RECIPIENT_017": "Veuillez renseigner une adresse mail valide.",
	"400_POST_RECIPIENT_018": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_POST_RECIPIENT_020": "Veuillez renseigner un nom de famille valide.",
	"400_POST_RECIPIENT_021": "Veuillez renseigner un prénom valide.",
	"400_POST_RECIPIENT_023": "Veuillez renseigner une adresse mail valide.",
	"500_POST_RECIPIENT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_RECIPIENT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by PATCH requests on Recipients API */
    "400_PATCH_RECIPIENT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_RECIPIENT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_RECIPIENT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_RECIPIENT_012": "Veuillez renseigner un nom de famille.",
    "400_PATCH_RECIPIENT_016": "Veuillez renseigner une adresse mail.",
    "400_PATCH_RECIPIENT_017": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_RECIPIENT_020": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_RECIPIENT_021": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_RECIPIENT_023": "Veuillez renseigner une adresse mail valide.",
    "404_PATCH_RECIPIENT_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_RECIPIENT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_RECIPIENT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by DELETE requests on Recipients API */
    "400_DELETE_RECIPIENT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_DELETE_RECIPIENT_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_DELETE_RECIPIENT_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_DELETE_RECIPIENT_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_DELETE_RECIPIENT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_DELETE_RECIPIENT_101": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_DELETE_RECIPIENT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Groups API */
    "400_GET_GROUP_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_GROUP_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_GROUP_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_GROUP_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "404_GET_GROUP_051": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_GROUP_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_GROUP_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Groups API */
    "400_POST_GROUP_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_GROUP_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_GROUP_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_GROUP_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_GROUP_012": "Veuillez renseigner la société qui partage les éléments de ce groupe.",
    "400_POST_GROUP_013": "Veuillez renseigner la société qui reçoit le partage des éléments de ce groupe.",
    "400_POST_GROUP_014": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_GROUP_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_GROUP_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by PATCH requests on Groups API */
    "400_PATCH_GROUP_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_GROUP_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_GROUP_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_PATCH_GROUP_014": "Certains éléments n'ont pas pu être ajoutés au groupe, veuillez vérifier votre sélection.",
    "400_PATCH_GROUP_015": "Certains éléments n'ont pas pu être supprimés du groupe, veuillez vérifier votre sélection.",
    "404_PATCH_GROUP_050": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_PATCH_GROUP_014": "Certains éléments n'ont pas pu être ajoutés au groupe, veuillez vérifier votre sélection.",
    "422_PATCH_GROUP_015": "Certains éléments n'ont pas pu être supprimés du groupe, veuillez vérifier votre sélection.",
    "500_PATCH_GROUP_014": "Certains éléments n'ont pas pu être ajoutés au groupe, veuillez vérifier votre sélection.",
    "500_PATCH_GROUP_015": "Certains éléments n'ont pas pu être supprimés du groupe, veuillez vérifier votre sélection.",
    "500_PATCH_GROUP_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_PATCH_GROUP_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by DELETE requests on Groups API */
    "400_DELETE_GROUP_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_DELETE_GROUP_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_DELETE_GROUP_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by POST requests on Support API */
    "400_POST_SUPPORT_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_SUPPORT_001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_SUPPORT_002": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_SUPPORT_003": "Veuillez renseigner une date de commande estimée.",
    "400_POST_SUPPORT_004": "Veuillez renseigner une date de démarrage estimée.",
    "400_POST_SUPPORT_005": "Veuillez renseigner un type de service ou d'équipement valide.",
    "400_POST_SUPPORT_006": "Veuillez renseigner un type de service ou d'équipement.",
    "400_POST_SUPPORT_007": "Veuillez renseigner une quantité.",
    "400_POST_SUPPORT_008": "Veuillez renseigner une quantité valide.",
    "400_POST_SUPPORT_009": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_SUPPORT_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_POST_SUPPORT_011": "Veuillez renseigner au moins un équipement ou un service.",
    "400_POST_SUPPORT_012": "Veuillez renseigner une description valide (moins de 1000 caractères).",
    "400_POST_SUPPORT_013": "Veuillez renseigner au moins un équipement ou un service.",
    "400_POST_SUPPORT_014": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_POST_SUPPORT_060": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_101": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_102": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_103": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_104": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_105": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_106": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_107": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_108": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_109": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_110": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_POST_SUPPORT_111": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Countries API */
    "400_GET_I18N_COUNTRIES_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_I18N_COUNTRIES_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Languages API */
    "400_GET_I18N_LANGUAGES_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_I18N_LANGUAGES_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on Timezones API */
    "400_GET_I18N_TIMEZONES_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_I18N_TIMEZONES_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned by GET requests on all Entities API */
    "400_GET_ENTITY_000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ENTITY_010": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ENTITY_011": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ENTITY_012": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "400_GET_ENTITY_013": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "500_GET_ENTITY_100": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned in case of bad request */
	"400_BAD_REQUEST_0100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0101": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0102": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0103": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0104": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0105": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0106": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0107": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0108": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0109": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0110": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0111": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0112": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0113": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0114": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0115": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0116": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0117": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0118": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0119": "Veuillez renseigner une adresse mail.",
	"400_BAD_REQUEST_0120": "Veuillez renseigner un nom d'utilisateur.",
	"400_BAD_REQUEST_0121": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0122": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0123": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0124": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0125": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0126": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0127": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0128": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0129": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0130": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0131": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0132": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0133": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0134": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0135": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0137": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0139": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0141": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0142": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0143": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0144": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0145": "La date d'échéance du service n'est pas connue, veuillez saisir une date de clôture.",
	"400_BAD_REQUEST_0146": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0147": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0148": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0149": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0150": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0151": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0152": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0160": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0161": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0162": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0163": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0164": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0165": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0166": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0167": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0168": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0169": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0170": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0171": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0172": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0173": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0174": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"400_BAD_REQUEST_0175": "Une erreur s'est produite, veuillez contacter votre administrateur.",

	/* Error codes returned with 500 HTTP code. */
	"500_ERROR_0001": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0002": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0003": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0004": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0005": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0006": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0100": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0101": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0102": "Une erreur s'est produite lors de la création de la société, veuillez contacter votre administrateur.",
	"500_ERROR_0103": "Une erreur s'est produite lors l'accès aux données de la société, veuillez contacter votre administrateur.",
	"500_ERROR_0104": "Une erreur s'est produite lors l'accès aux données de la société, veuillez contacter votre administrateur.",
	"500_ERROR_0105": "Une erreur s'est produite lors l'accès aux données de la société, veuillez contacter votre administrateur.",
	"500_ERROR_0106": "Une erreur s'est produite lors l'accès à la liste des sociétés, veuillez contacter votre administrateur.",
	"500_ERROR_0107": "Une erreur s'est produite lors la modification de la société, veuillez contacter votre administrateur.",
	"500_ERROR_0108": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0109": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0110": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0111": "Une erreur s'est produite lors de la creation du navire, veuillez contacter votre administrateur.",
	"500_ERROR_0112": "Une erreur s'est produite lors de l'accès aux données du navire, veuillez contacter votre administrateur.",
	"500_ERROR_0113": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0114": "Une erreur s'est produite lors de la modification du navire, veuillez contacter votre administrateur.",
	"500_ERROR_0115": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0116": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0117": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0118": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0119": "Une erreur s'est produite lors de la création d'un équipement, veuillez contacter votre administrateur.",
	"500_ERROR_0120": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0121": "Une erreur s'est produite lors de la modification d'un équipement, veuillez contacter votre administrateur.",
	"500_ERROR_0123": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0124": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0125": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0126": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0127": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0128": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0129": "Un contact avec cette adresse mail existe déjà, veuillez renseigner une adresse mail différente.",
	"500_ERROR_0130": "Un contact avec ce nom d'utilisateur existe déjà, veuillez renseigner un nom d'utilisateur différent.",
	"500_ERROR_0131": "Une erreur s'est produite lors de la création d'un contact, veuillez contacter votre administrateur.",
	"500_ERROR_0132": "Une erreur s'est produite lors de la modification d'un contact, veuillez contacter votre administrateur.",
	"500_ERROR_0133": "Une erreur s'est produite lors de l'accès à la liste des contacts, veuillez contacter votre administrateur.",
	"500_ERROR_0134": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0135": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0136": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0137": "Une erreur s'est produite lors de la suppression d'un contact, veuillez contacter votre administrateur.",
	"500_ERROR_0138": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0139": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0140": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0141": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0142": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0143": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0144": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0145": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0146": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0147": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0148": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0149": "Une erreur s'est produite lors de la création d'un contrat, veuillez contacter votre administrateur.",
	"500_ERROR_0150": "Une erreur s'est produite lors de la modification d'un contrat, veuillez contacter votre administrateur.",
	"500_ERROR_0151": "Une erreur s'est produite lors de la modification d'un contrat, veuillez contacter votre administrateur.",
	"500_ERROR_0152": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0153": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0154": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0155": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0156": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0157": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0158": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0160": "Une erreur s'est produite lors de la création d'un service, veuillez contacter votre administrateur.",
	"500_ERROR_0161": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0162": "Une erreur s'est produite lors de la modification d'un service, veuillez contacter votre administrateur.",
	"500_ERROR_0163": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0164": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0165": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0166": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0167": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0168": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0169": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0170": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0174": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0175": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0176": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0177": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0178": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0179": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0180": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0181": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0182": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0183": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0184": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0185": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0186": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0187": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0188": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0189": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0190": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0191": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0192": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0193": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0194": "Cette opération n'a pas pu être créé car le service choisi n'est pas alloué.",
	"500_ERROR_0195": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0196": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0197": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0198": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0199": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0200": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0201": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0202": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0203": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0204": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0205": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0206": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0207": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0208": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0209": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0210": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0211": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0212": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0213": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0214": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0215": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0216": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0217": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0218": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0219": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0220": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0221": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0222": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0223": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0224": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0225": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0226": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0227": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0228": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0229": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0230": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0231": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0232": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0233": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0234": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0235": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0236": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0237": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0238": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0239": "Une erreur s'est produite, veuillez contacter votre administrateur.",
	"500_ERROR_0300": "L'opération n'a pas pu être créée car vous n'avez pas le droit d'accéder à cet équipement.",
	"500_ERROR_0301": "L'opération n'a pas pu être créée car vous n'avez pas le droit d'accéder à ce service.",
	"500_ERROR_0302": "L'opération n'a pas pu être créée car vous n'avez pas le droit d'accéder à ce navire.",

	/* Error codes returned with 422 HTTP code. */
    "422_DOMAIN_0600": "Une allocation ne peut pas être établie sur ce service.",
    "422_DOMAIN_0601": "Une allocation ne peut pas être établie sur cette balise.",
    "422_DOMAIN_0602": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0603": "Le statut du service ne permet pas cette dissociation.",
    "422_DOMAIN_0604": "La balise est installée sur le navire, vous ne pouvez pas les dissocier.",
    "422_DOMAIN_0605": "Ce contact est titulaire, vous ne pouvez pas lui appliquer ce rôle.",
    "422_DOMAIN_0606": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0607": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0608": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0609": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0610": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0611": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0612": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0614": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0615": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0616": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0617": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0619": "Cet équipement ne peut être ajouté au groupe car sa société propriétaire n'est pas la société de partage du groupe.",
    "422_DOMAIN_0620": "Ce navire ne peut être ajouté au groupe car sa société propriétaire n'est pas la société de partage du groupe.",
    "422_DOMAIN_0621": "Ce service ne peut être ajouté au groupe car sa société propriétaire n'est pas la société de partage du groupe.",
    "422_DOMAIN_0622": "Ce titulaire ne peut être ajouté au groupe car sa société propriétaire n'est pas la société de partage du groupe.",
    "422_DOMAIN_0623": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0624": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0625": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0626": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0627": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0628": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0629": "Cette opération ne peut pas être effectuée car au moins un équipement n'est pas appairé ou n'est pas à un statut éligible.",
    "422_DOMAIN_0630": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0631": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0632": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0633": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0634": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0638": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0639": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0640": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0641": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0642": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0643": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0644": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0645": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0646": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "422_DOMAIN_0647": "Ce contact est titulaire de certains services, vous ne pouvez pas le supprimer d'ESOP.",
    "422_DOMAIN_0648": "Ce contact est créateur de certains contrats, vous ne pouvez pas le supprimer d'ESOP.",
    "422_DOMAIN_0649": "Cet équipement est déjà présent dans ce groupe.",
    "422_DOMAIN_0650": "Ce navire est déjà présent dans ce groupe.",
    "422_DOMAIN_0651": "Ce service est déjà présent dans ce groupe.",
    "422_DOMAIN_0652": "Ce titulaire est déjà présent dans ce groupe.",
    "422_DOMAIN_0653": "Ce navire ne peut pas être supprimé car il est lié à un service actif ou inactif.",
    "422_DOMAIN_0654": "Ce navire ne peut pas être supprimé car une balise y est installée.",
    "422_DOMAIN_0655": "Ce navire ne peut pas être supprimé car il est présent dans un ou plusieurs groupes.",
    "422_DOMAIN_0656": "Ce contact est créateur de certains groupes, vous ne pouvez pas le supprimer d'ESOP.",

	/* Error codes returned with 403 or 405 HTTP code. */
    "405_FEAT_ACCESS_0000": "Une erreur s'est produite, veuillez contacter votre administrateur.",
    "403_FEAT_ACCESS_0001": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0100": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0101": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0110": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0111": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0112": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0120": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0130": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0140": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0150": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0160": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0161": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0162": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0170": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0171": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0180": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0181": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0182": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0183": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0190": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0200": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0201": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",
    "403_DATA_ACCESS_0202": "Une erreur s'est produite, vous allez être déconnecté, veuillez vous reconnecter.",

};

export default {
    ...messages,
    ...api_error_messages,
    ra: {
        ...messages.ra,
        action: {
            ...messages.ra.action,
            select: "Sélectionner",
            unselect: "Désélectionner",
            open_menu: "Ouvrir le menu",
            close_menu: "Fermer le menu"
        },
        auth: {
            ...messages.ra.auth,
            sign_in_error: "Nom d'utilisateur ou mot de passe incorrect."
        },
		notification: {
			deleted: "Suppression effectuée avec succès.",
			item_doesnt_exist: "Elément non trouvé."
		}
    },
    resources: {
		login: {
			profile:"Mon Profil",
			logout:"Déconnexion"
		},
        services: {
            name: "Services",
            nameOne: "Service",
            created: "Le service %{id} a été crée avec succès.",
            updated: "Le service %{id} a été mis à jour avec succès.",
            linked: "Service lié.",
            unlinked: "Service délié.",
            selected: " 1 service sélectionné |||| %{smart_count} services sélectionnés",
            fields: {
                id: "Identifiant ERP",
                type: "Type",
                status: "Statut",
                ownerId: "Propriétaire",
                clsContractId: "Identifiant ERP du Contrat",
                contract: "Contrat CLS",
                purchaseDate: "Date d'achat",
                equipmentId: "Equipement",
                mobileId: "Navire",
                holderId: "Titulaire",
                startDate: "Date de démarrage",
                dueDate: "Date d'échéance",
                query: "Rechercher",
                firstname: "Prénom",
                lastname: "Nom",
                email: "Adresse mail",
                edit: "éditer",
                links: "Allocations",
                purchaseDate_gte: "Date d'achat à partir de",
                purchaseDate_lte: "Date d'achat jusqu'à",
                startDate_gte: "Date de démarrage à partir de",
                startDate_lte: "Date de démarrage jusqu'à",
                dueDate_gte: "Date d'échéance à partir de",
                dueDate_lte: "Date d'échéance jusqu'à",
                "reseller.id": "Revendeur",
                itemCode: "Code article"
            },
            types: {
                "NEMO": "Service Nemo"
            }
        },
        equipments: {
            name: "Equipements",
            nameOne: "Equipement",
            created: "L'équipement %{id} a été créé avec succès.",
            updated: "L'équipement %{id} a été mis à jour avec succès.",
            linked: "Equipement lié.",
            unlinked: "Equipement délié.",
            selected: " 1 équipment sélectionné |||| %{smart_count} équipements sélectionnés",
            fields: {
                id: "Identifiant ERP",
                type: "Type",
                contractualStatus: "Statut",
                ownerId: "Propriétaire",
                clsContractId: "Identifiant ERP du Contrat",
                contract: "Contrat CLS",
                purchaseDate: "Date d'achat",
                shippingNumber: "Numéro de suivi",
                warrantyEndDate: "Date de fin de garantie",
                purchaseDate_gte: "Date d'achat à partir jusqu'à",
                purchaseDate_lte: "Date d'achat jusqu'à",
                warrantyEndDate_gte: "Date de fin de garantie à partir de",
                warrantyEndDate_lte: "Date de fin de garantie jusqu'à",
                startDate_gte: "Date de démarrage à partir de",
                startDate_lte: "Date de démarrage jusqu'à",
                serviceId: "Service",
                mobileId: "Navire",
                holderId: "Titulaire",
                linkedEquipmentId: "Equipement appairé",
                startDate: "Date de Démarrage",
                query: "Rechercher",
                links: "Allocations",
                "reseller.id": "Revendeur",
                itemCode: "Code article",
                old: "Ancien ",
                new: "Nouvel ",
								oldTransmitter: "Ancienne Balise ",
                newTransmitter: "Nouvelle Balise ",
                oldBase: "Ancien Socle ",
                newBase: "Nouveau Socle ",
                serialNumber: "Numéro de série",
            },
            types: {
                "NEMO-TRANSMITTER-STD": "Balise Nemo",
                "NEMO-BASE-STD": "Socle Nemo",
            }
        },
        mobiles: {
            name: "Navires",
            nameOne: "Navire",
            created: "Le navire %{name} a été créé avec succès.",
            confirmationMessage: "Le navire %{name} sera créé. Son propriétaire ne pourra être modifié. Voulez-vous continuer ?",
            updated: "Le navire %{name} a été mis à jour avec succès.",
            deletedContact:"Le navire %{name} sera supprimé. Cette action est irréversible. Voulez-vous continuer ?",
            linked: "Navire lié.",
            unlinked: "Navire délié.",
            selected: " 1 navire sélectionné |||| %{smart_count} navires sélectionnés",
            fields: {
                query: "Rechercher",
                id: "Identifiant ESOP",
                type: "Type",
                name: "Nom",
                rc: "Indicatif Radio (RC)",
                ir: "N° de Registre (IR)",
                xr: "Num d'immatriculation (XR)",
                links: "Allocations",
                holderId: "Titulaire",
                serviceId: "Service",
                equipmentId: "Equipement",
                ownerId: "Propriétaire",
                creatorId: "Créé par (Société)",
                flag: "Pavillon"
            },
            types: {
                Vessel: "Navire"
            }
        },
        holders: {
            name: "Titulaires",
            nameOne: "Titulaire",
            linked: "Titulaire lié.",
            unlinked: "Titulaire délié.",
            selected: " 1 titulaire sélectionné |||| %{smart_count} titulaires sélectionnés",
            fields: {
                query: "Rechercher",
                id: "Identifiant du titulaire",
                firstname: "Prénom",
                lastname: "Nom",
                links: "Allocations",
                phone: "Numéro de téléphone",
                country: "Pays",
                mobileId: "Navire",
                serviceId: "Service",
                equipmentId: "Equipement",
                organizationId: "Société",
                email: "Adresse mail",
                identifier: "Identifiant ESOP"
            }
        },
        groups: {
            name: "Groupes",
            nameOne: "Groupe ",
            created: "Le groupe a été créé avec succès.",
			createdContract: "Le groupe sera créé. Cette action est irréversible. Voulez-vous continuer ?",
            added: {
                services: "Service ajouté au groupe. |||| %{smart_count} services ajoutés au groupe.",
                equipments: "Equipement ajouté au groupe. |||| %{smart_count} devices ajoutés au groupe.",
                mobiles: "Navire ajouté au groupe. |||| %{smart_count} vessels ajoutés au groupe.",
                holders: "Titulaire ajouté au groupe. |||| %{smart_count} titulaires ajoutés au groupe."
            },
            fields: {
                id: "Identifiant ESOP",
                creationDate: "Date de création",
                sharedBy: "Partagé par",
                sharedWith: "Partagé avec",
                createdByContact: "Créé par le contact",
                createdByOrganization: "Créé par la société",
                query: "Rechercher",
                services: "Choisir des services",
                equipments: "Choisir des equipements",
                holders: "Choisir des titulaires",
                mobiles: "Choisir des navires",
                servicesIds: "Services",
                equipmentsIds: "Equipements",
                holdersIds: "Titulaires",
                mobilesIds: "Navires",
            },
            removed: {
                services:"Services supprimés du groupe.",
                equipments:"Equipements supprimés du groupe.",
                mobiles:"Navires supprimés du groupe.",
                holders:"Titulaires supprimés du groupe.",
            }
        },
        allocations: {
            name: "Allocations",
            nameOne: "Allocation",
            field: "Allocations",
            no: "Pas de ",
            createMultiple: "Allocation créée. |||| %{smart_count} allocations créées.",
            bulkEmpty: "Aucune allocation ne peut être créée avec ces entités.",
            selected: "%{nbResults} allocation(s) peu(ven)t être créé(s) avec votre sélection de %{nbResource} %{typeResource} et de %{nbReference} %{typeReference}.",
            fields: {
                equipmentId: "Equipement",
                holderId: "Titulaire",
                mobileId: "Navire",
                serviceId: "Service",
                query: "Rechercher"
            },
            actions: {
                equipmentIdLink: "Lier à un équipement",
                holderIdLink: "Lier à un titulaire",
                mobileIdLink: "Lier à un navire",
                serviceIdLink: "Lier à un service",
                equipmentIdTitle: "Choisir un équipement",
                holderIdTitle: "Choisir un titulaire",
                mobileIdTitle: "Choisir un navire",
                serviceIdTitle: "Choisir un service",
            }
        },
        operations: {
            name: "Opérations",
            nameOne: "Opération",
            empty: "Pas d'opérations",
            created: "L'opération %{type} a été créée avec succès.",
            createdStartup: "L'opération de mise en route du service %{serviceType} %{serviceIdentifier} a été créée avec succès.",
            bulkAOR:"Les opérations d'accusés de réception ont été créées avec succès, vos équipements sont désormais en attente de validation.",
            confirmationMessage:"L'opération %{type} sera créée. Cette action est irréversible. Voulez-vous continuer ?",
            fields: {
                id: "Identifiant de l'opération",
                type: "Type",
                status: "Statut",
                doerId: "Créée par (Société)",
                doerContactId: "Créée par (Contact)",
                creationDate: "Date de création",
                query: "Rechercher",
                comments: "Commentaire",
                mobiles: "Navire",
                equipments: "Equipement",
                holders: "Titulaire",
                services: "Service",
                links: "Opéré sur",
                creationDate_gte: "Date de création à partir de",
                creationDate_lte: "Date de création jusqu'à",
                closureDate: {
                    label: "Type de clôture",
                    type: "Type de clôture",
                    "AT_TERM": "Clôturer à terme",
                    "AT_SPECIFIED_DATE": "Clôturer à une date spécifique",
                    "AT-TERM": "Clôturer à terme",
                    "AT-SPECIFIC-DATE": "Clôturer à une date spécifique",
                },
                specific: {
                    closureDate: "Date de clôture"
                },
                common: {
                    creationDate: "Date de création"
                }
            },
            types: {
                installation: "Installation",
                startUp: "Mise en route",
                aor: "Accusé de réception",
                closure: "Clôture",
                simple: "Remplacement simple",
                pair: "Remplacement par paires",
                "NEMO-INSTALLATION": "Installation",
                "NEMO-START-UP": "Mise en route",
                "AOR": 'Accusé de réception',
                "NEMO-CLOSURE":"Clôture",
                "NEMO-SIMPLE-REPLACEMENT": "Remplacement simple",
                "NEMO-PAIR-REPLACEMENT": "Remplacement par paires",
                button: {
                    installation: "Installation",
                    startUp: "Mise en route",
                    aor: "Accusé de réception",
                    closure: "Clôture",
                    simple: "Remplacement simple",
                    pair: "Remplacement par paires"
                }
            }
        },
        externalcontracts: {
            name: "Externes",
            fields: {
                id: "Identifiant ESOP",
                status: "Statut",
                buyerId: "Acheteur",
                vendorId: "Vendeur",
                startDate: "Date de démarrage",
                startDate_gte: "Date de démarrage à partir de",
                startDate_lte: "Date de démarrage jusqu'à",
                dueDate: "Date d'échéance",
                query: "Rechercher",
                erpIdentifier: "Identifiant ERP",
                type: "Type",
                services: "Services",
                equipments: "Equipements",
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        incomingcontracts: {
            name: "Entrants",
            fields: {
                id: "Identifiant ESOP",
                status: "Statut",
                buyerId: "Acheteur",
                vendorId: "Vendeur",
                creatorId: "Créateur",
                startDate: "Date de démarrage",
                startDate_gte: "Date de démarrage à partir de",
                startDate_lte: "Date de démarrage jusqu'à",
                dueDate: "Date d'échéance",
                query: "Rechercher",
                erpIdentifier: "Identifiant ERP",
                type: "Type",
                services: "Services",
                equipments: "Equipements",
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        outcomingcontracts: {
            name: "Sortants",
            fields: {
                id: "Identifiant ESOP",
                status: "Statut",
                buyerId: "Acheteur",
                vendorId: "Vendeur",
                startDate: "Date de démarrage",
                startDate_gte: "Date de démarrage à partir de",
                startDate_lte: "Date de démarrage jusqu'à",
                dueDate: "Date d'échéance",
                query: "Rechercher",
                erpIdentifier: "ERP identifiant",
                type: "Type",
                services: "Services",
                equipments: "Equipements",
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        contracts: {
            name: "Contrats",
            nameOne: "Contrat",
            createdContract: "Le contrat sera créé. Cette action est irréversible. Voulez-vous continuer ?",
            created: "Le contrat a été créé avec succès.",
            fields: {
                id: "Identifiant ESOP",
                status: "Statut",
                buyerId: "Acheteur",
                vendorId: "Vendeur",
                startDate: "Date de démarrage",
                startDate_gte: "Date de démarrage à partir de",
                startDate_lte: "Date de démarrage jusqu'à",
                dueDate: "Date d'échéance",
                query: "Rechercher",
                erpIdentifier: "Identifiant ERP",
                type: "Type",
                services: "Services",
                equipments: "Equipements",
                projectCode: "Code projet",
                businessUnit: "Unité commerciale",
                salesperson: "Représentant"
            },
            types: {
                CLS: "CLS",
                ESOP: "ESOP"
            }
        },
        persons: {
            name: "Sociétés",
            nameOne: "Société",
            created: "La société %{name} (%{profile}) a été créée avec succès.",
            confirmationMessage: "La société %{name} sera créée en tant que %{profile}, ce profil ne pourra être modifié. Voulez-vous continuer ?",
            updated: "La société %{name} a été mise a jour avec succès.",
            fields: {
                erpIdentifier: "Identifiant ERP",
                name: "Nom",
                profile: "Profil",
                query: "Rechercher",
                id: "Identifiant ESOP",
                email: "Adresse mail",
                addressStreet1: "Numéro et libellé de la voie",
                addressStreet2: "Complément d’identification 1",
                addressStreet3: "Complément d’identification 2",
                addressZipCode: "Code postal",
                addressCity: "Ville",
                addressRegion: "Région",
                addressCountry: "Pays",
                phone: "Numéro de téléphone"
            },
            types: {
                Headquarters: "Siège social",
                Reseller: "Revendeur",
                Installer: "Installateur",
                Client: "Client",
            }
        },
        contacts: {
            name: "Contacts",
            nameOne: "Contact",
            created: "Le contact %{firstname} %{lastname} a été créé avec succès.",
            createdLastname: "Le contact %{lastname} a été créé avec succès.",
            updated: "Le contact %{firstname} %{lastname} a été mis à jour avec succès.",
            createdContact: "Le contact %{firstname} %{lastname} sera créé. Sa société et son nom d'utilisateur ne pourront être modifiés. Voulez-vous continuer ?",
            deletedContact: "Le contact %{firstname} %{lastname} sera supprimé. Cette action est irréversible. Voulez-vous continuer ?",
            fields: {
                id: "Identifiant ESOP",
                firstname: "Prénom",
                lastname: "Nom",
                personId: "Société",
                country: "Pays",
                role: "Rôle",
                username: "Nom d'utilisateur",
                email: "Adresse mail",
                phone: "Numéro de téléphone",
                rc: "Indicatif Radio",
                query: "Rechercher",
                organizationId: "Société",
                locale: "Langue",
                timezone: "Fuseau horaire",
                role: "Rôle",
            },
            types: {
                Admin: "Administrateur",
                Manager: "Manageur",
                Operator: "Operateur",
                Regular: "Regulier",
                Basic: "Basique",
            }
        },
        issues: {
            name: "Issues",
            nameOne: "Issue",
            empty: "No issue",
            created: "The issue has been successfully created.",
            updated: "The issue has been successfully updated.",
            aorError: " %{entityType} traités correctement: %{nbSuccess} , %{entityType} qui n'ont pas pu être traités: %{nbErrors}, veuillez vérifier votre sélection. [Erreurs: %{entityIds}]",
            multipleActionsError: "  %{entityType} qui n'ont pas pu être traités: %{nbErrors} , veuillez vérifier votre sélection. [Erreurs: %{entityIds}]",
            types: {
                Equipment: "equipment(s)",
                Mobile: "navire(s)",
                Service: "service(s)",
                Holder: "titulaire(s)",
                equipments: "equipment(s)",
                mobiles: "navire(s)",
                services: "service(s)",
                holders: "titulaire(s)"
            }
        },
        supports: {
            name: "Demande de support",
            types: {
                "INFORMATION_REQUEST": "Demande d'information",
                "DATA_CHANGE_REQUEST": "Demande de modification des données",
                "HELP_REQUEST": "Demande de support"
            },
            fields: {
                services: "Choisir un service",
                equipments: "Choisir un équipement"
            },
            created: "La demande de support a été envoyée."
        },
        recipients: {
            fields: {
                id: "Id",
                lastname:" Nom",
                firstname: "Prénom",
            },
            created: "Le bénéficiaire %{firstname} %{lastname} a été créé avec succès.",
            updated: "Le bénéficiaire %{firstname} %{lastname} a été mis à jour avec succès.",
            nameOne: "Bénéficiare",
            createdContact:"Le bénéficiaire %{firstname} %{lastname} sera créé. Voulez-vous continuer ?",
        },
        purchaseforecasts: {
            name: "Prévision d'achat",
            orderDate: "Date de commande",
            startDate: "Date de démarrage",
            equipmentType: "Type d'équipement",
            equipmentNumber: "Nombre d'équipements",
            serviceType: "Type de service",
            serviceNumber: "Nombre de services",
            incorrectEntry: "Champ incorrect",
            created: "La prévision d'achat a été envoyée.",
            createdContract:"La prévision d'achat sera envoyée. Cette action est irréversible. Voulez-vous continuer ?"
        },
        supportrequests:{
            created:"La demande de support a été envoyée.",
            createdContract:"La demande de support sera envoyée. Cette action est irréversible. Voulez-vous continuer ?"
        },
        dialogConfirmation: {
            title: "Confirmation",
            content: "Ce(tte) %{resource} ne peut etre modifié(e) ou supprimé(e). Voulez-vous continuer ?",
            confirm: "CONFIRMER",
            cancel: "ANNULER",
            saveButton: "SAUVEGARDER",
            created: "Ce(tte) %{resource} a été créé(e) avec succès.",
            createdMobile: "Ce navire sera créé, le propriétaire ne pourra être modifié. Voulez-vous continuer ?"
        },
        deleteConfirmation: {
            title: "Confirmation",
            contentGroup: "Ce groupe va être supprimé. Cette action est irréversible. Voulez-vous continuer ?",
            content: "Cette action va supprimer les %{type} sélectionnés du groupe. Voulez-vous continuer ?",
            confirm: "Suppression du service du groupe",
            contentRecipients: "Le bénéficiaire %{firstname} %{lastname} sera supprimé. Cette action est irréversible. Voulez-vous continuer ?"
        }
    },
    esop: {
        title: "ESOP",
        empty:"Pas de résultat",
        allocations: {
            beforeUnlink: "Cette action va délier %{ent1} de %{ent2}. Voulez-vous continuer ?",
            list: {
                title: "Allocations"
            }
        },
        bulk: {
            massLink: "Lier des %{resource} à des %{reference}"
        },
        dashboard: {
            title: "CLS Nemo - ESOP back-office",
            name: "Tableau de bord",
            content:"Bienvenue sur ESOP, gérer tous vos équipements et services."
        },
        groups: {
            adding: "Ajouter les %{resource} au groupe",
            empty: "Pas de groupes.",
            ungroupTitle: "Supprimer l'entité du groupe",
            ungroupContent: "Êtes vous sûr de vouloir supprimer cette entité du groupe ?",
            ungrouped: "Cette entité a été supprimée du groupe.",
            bulk: {
                removeFromGroup: "Retirer du groupe"
            },
            list: {
                title: "Liste de Groupes"
            },
            create: {
                title: "Creation de Groupe"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            actions: {
                backToList: "Revenir à la liste"
            },
            tabs: {
                summary: "Vue générale",
                services: "Services",
                equipments: "Equipements",
                holders: "Titulaires",
                mobiles: "Navires",
            }
        },
        contacts: {
            list: {
                title: "Liste de contacts"
            },
            create: {
                title: "Creation de contact"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            actions: {
                backToList: "Revenir à la liste"
            }
        },
        equipments: {
            list: {
                title: "Liste d'équipements"
            },
            bulk: {
                addToGroup: "Ajouter à un groupe",
                confirm: "Confirm delivery",
                linkToHolders: "Lier aux titulaires",
                linkToMobiles: "Lier aux navires",
                linkToServices: "Lier aux services",
                AOR: "Accusé de réception",
                addOperations: "Ajout d'opération",
                addIssue: "Signaler un problème"
            },
            create: {
                title: "Creation d'un équipement"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations",
                title_groups: "Groupes",
            },
            actions: {
                backToList: "Revenir à la liste",
                addToGroup: "Ajouter à un groupe"
            }
        },
        externalcontracts: {
            list: {
                title: "Liste des contrats externes"
            },
            create: {
                title: "Création d'un contrat externe"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            tabs: {
                summary: "Vue générale",
                services: "Services",
                equipments: "Equipements"
            },
            actions: {
                backToList: "Revenir à la liste"
            }
        },
        holders: {
            list: {
                title: "Liste des titulaires"
            },
            create: {
                title: "Création d'un titulaire"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations",
                title_groups: "Groupes",
                links_more: " de plus..."
            },
            actions: {
                backToList: "Revenir à la liste",
                addToGroup: "Ajouter à un groupe",
                edit: "Edit contact"
            },
            bulk: {
                addToGroup: "Ajouter à un groupe",
                linkToEquipments: "Lier aux équipements",
                linkToMobiles: "Lier aux navires",
                linkToServices: "Lier aux services",
                addOperations: "Ajout d'opérations",
                addIssue: "Signaler un problème"
            }
        },
        incomingcontracts: {
            list: {
                title: "Liste des contrats entrants",
                popin: "Contrats entrants",
            },
            create: {
                title: "Création d'un contrat entrant"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            tabs: {
                summary: "Vue générale",
                services: "Services",
                equipments: "Equipements"
            },
            actions: {
                backToList: "Revenir à la liste"
            }
        },
        mobiles: {
            list: {
                title: "Liste de navires"
            },
            create: {
                title: "Création d'un navire"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations",
                title_groups: "Groupes",
            },
            actions: {
                backToList: "Revenir à la liste",
                addToGroup: "Ajouter à un groupe"
            },
            bulk: {
                addToGroup: "Ajouter à un groupe",
                linkToEquipments: "Lier aux équipements",
                linkToHolders: "Lier aux titulaires",
                linkToServices: "Lier aux services",
                addOperations: "Ajout d'opérations",
                addIssue: "Signaler un problème"
            }
        },
        operations: {
            list: {
                title: "Liste d'opérations"
            },
            create: {
                title: "Création d'une opération",
                title_features: "Caractéristiques"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            status: {
                creation: "Création",
                done: "Terminée"
            },
            actions: {
                backToList: "Revenir à la liste",
                remove: {
                    mobiles: "Supprimer le navire de l'opération",
                    holders: "Supprimer le titulaire de l'opération",
                    equipments: "Supprimer l'équipement de l'opération",
                    services: "Supprimer le service de l'opération"
                },
                select: {
                    baseIdOld: {
                        link: "Choisir un socle à remplacer",
                        title: "Socle remplacé",
                        popinTitle: "Choisir un socle à remplacer"
                    },
                    baseIdNew: {
                        link: "Choisir un nouveau socle",
                        title: "Nouveau socle",
                        popinTitle: "Choisir un nouveau socle"
                    },
                    transmitterIdNew: {
                        link: "Choisir une nouvelle balise",
                        title: "Nouvelle balise",
                        popinTitle: "Choisir une nouvelle balise"
                    },
                    equipmentId: {
                        link: "Choisir un équipement",
                        title: "Equipement",
                        popinTitle: "Choisir un équipement"
                    },
                    equipmentIdOld: {
                        link: "Choisir un équipement à remplacer",
                        title: "Equipement remplacé",
                        popinTitle: "Choisir un équipement à remplacer"
                    },
                    equipmentIdNew: {
                        link: "Choisir un nouvel équipement",
                        title: "Nouvel équipement",
                        popinTitle: "Choisir un nouvel équipement"
                    },
                    pairedIdOld: {
                        title: "Equipement appairé remplacé",
                    },
                    serviceId: {
                        link: "Choisir un service",
                        title: "Service",
                        popinTitle: "Choisir un service"
                    },
                    holderId: {
                        link: "Choisir un titulaire",
                        title: "Titulaire",
                        popinTitle: "Choisir un titulaire"
                    },
                    mobileId: {
                        link: "Choisir un navire",
                        title: "Navire",
                        popinTitle: "Choisir un navire"
                    },
                },
                create: "Ajouter une opération",
                details: "Voir détails"
            }
        },
        persons: {
            list: {
                title: "Liste des Sociétés"
            },
            tabs: {
                summary: "Vue générale",
                contacts: "Contacts"
            },
            create: {
                title: "Création d'une Société"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations",
                purchaseForecast: "Créer une prévision d'achat"
            },
            actions: {
                backToList: "Revenir à la liste"
            }
        },
        outcomingcontracts: {
            list: {
                title: "Liste des contrats sortants"
            },
            create: {
                title: "Création d'un contrat sortant"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            tabs: {
                summary: "Vue générale",
                services: "Services",
                equipments: "Equipements"
            },
            actions: {
                backToList: "Revenir à la liste"
            }
        },
        contracts: {
            create: {
                title: "Création d'un contrat"
            },
            delete:"Supprimer",
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations"
            },
            tabs: {
                summary: "Vue générale",
                services: "Services",
                equipments: "Equipements"
            },
            actions: {
                backToList: "Revenir à la liste"
            },
            title: "Choisir des %{reference}"
        },
        services: {
            list: {
                title: "Liste des services"
            },
            bulk: {
                addToGroup: "Ajouter à un groupe",
                linkToEquipments: "Lier aux équipements",
                linkToHolders: "Lier aux titulaires",
                linkToMobiles: "Lier aux navires",
                addOperations: "Ajout d'opérations",
                closeServices: "Clôturer des services",
                addIssue: "Signaler un problème"
            },
            tabs: {
                summary: "Vue générale",
                recipients: "Bénéficiaires"
            },
            actions: {
                closeService: "Clôturer un service",
                backToList: "Revenir à la liste",
                addToGroup: "Ajouter à un groupe"
            },
            create: {
                title: "Créer un service"
            },
            show: {
                title_features: "Caractéristiques",
                title_links: "Allocations",
                title_groups: "Groupes",
            }
        },
        menu: {
            categories: {
                assets: "Entités",
                customers: "Clients",
                contracts: "Contrats"
            }
        },
        status: {
            allocated: "Alloué",
            available: "En stock",
            active: "Actif",
            inactive: "Inactif",
            closed: "Clos",
            deleted: "Supprimé",
            shipping: "En cours d'envoi",
            processing: "Traitement",
            new: "Nouveau",
            since: "depuis",
            pending: "En attente",
            unavailable: "Indisponible"
        },
        dialog: {
            cancel: "Annuler",
            select: "Selectionner",
            ok: "ok"
        },
        error: {
            token: {
                title: "Token error",
                content: "Votre jeton a changé ou votre compte a été modifié. Déconnexion puis connexion requise."
            }
        },
        supportrequest: {
            create: {
                title: "Demande de support",
                create: "Demande de support"
            },
            tabs: {
                services:"Services",
                equipments: "Equipements",
                summary: "Vue générale"
            }
        },
        recipients: {
            actions: {
                backToList: "Revenir à la liste",
                create: "Ajouter un nouveau bénéficiaire"
            },
            create: {
                title: "Créer un bénéficiaire"
            }
        },
        supportpurchase: {
            title: "Prévisions d'achat",
            buttonEquipment: "Ajouter des équipements",
            buttonService: "Ajouter des services"
        }
    }
}
