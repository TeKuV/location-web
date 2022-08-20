import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import DomainAddRoundedIcon from '@mui/icons-material/DomainAddRounded';

export const housingTypeTypos = [
    {
        label: "Logement entier",
        description: "Un logement entier rien que pour vous",
    },
    {
        label: "Chambre partagée",
        description: "Un espace couchage et des parties communes qui peuvent être partagés avec d'autres personnes",
    },
    {
        label: "Chambre privée",
        description: "Une chambre privée dans un logement ou un hôtel, avec des parties communes partagées avec d'autres personnes",
    },
]

export const roomAndBedTypos = {
    titles: ["Chambres", "Lits", "Salles de bain"],
    possiblesValues: [1,2,3,4,5,6,7,"8+"]
}

export const propertyTypesTypos = [
    {
      label: "Maison",
      icon: <HouseRoundedIcon fontSize={'large'} />
    },
    {
        label: "Appartement",
        icon: <ApartmentRoundedIcon fontSize={'large'} />
    },
    {
        label: "Maison d'hôtes",
        icon: <OtherHousesRoundedIcon fontSize={'large'} />
    },
    {
        label: "Hôtel",
        icon: <DomainAddRoundedIcon fontSize={'large'} />
    },
]

export const equipmentsTypos = [
    {
        label: "Produits et services de base",
        options: [
            "Wifi",
            "Lave-linge",
            "Climatisation",
            "Espace de travail dédié",
            "Sèche-cheveux",
            "Cuisine",
            "Sèche-linge",
            "Chauffage",
            "Télévision",
            "Fer à repasser"
        ],
    },
    {
        label: "Caractéristiques",
        options: [
            "Piscine",
            "Parking gratuit sur place",
            "Lit pour bébé",
            "Barbecue",
            "Cheminée",
            "Jacuzzi",
            "Station de recharge pour véhicules électriques",
            "Salle de sport",
            "Petit déjeuner",
            "Logement fumeur",
        ]
    },
    {
        label: "Emplacement",
        options: [
            "Bord de mer",
            "Front de mer",
        ]
    },
    {
        label: "Sécurité",
        options: [
            "Détecteur de fumée",
            "Détecteur de monoxyde de carbone",
        ]
    },
]

export const reservationOptionsTypos = [
    {
        label: "Réservation instantanée",
        description: "Logements que vous pouvez réserver sans attendre l'approbation de l'hôte",
    },
    {
        label: "Arrivée autonome",
        description: "Accès facile au logement à l'arrivée.",
    },
]

export const accessibilityElementsTypos = [
    {
        label: "Entrée et stationnement pour les voyageurs",
        options: [
            "Entrée de plain-pied pour les voyageurs",
            "Place de parking accessible",
            "Largeur de l'entrée des voyageurs supérieure à 81 centimètres",
            "Accès de plain-pied à l'entrée",
        ]
    },
    {
        label: "Chambre",
        options: [
            "Accès de plain-pied à la chambre",
            "Largeur de l'entrée de la chambre supérieure à 81 centimètres",
        ]
    },
    {
        label: "Salle de bain",
        options: [
            "Accès de plain-pied à la salle de bains",
            "Barre d'appui pour douche",
            "Douche de plain-pied",
            "Largeur de l'entrée de la salle de bain supérieure à 81 centimètres",
            "Barre d'appui pour toilettes",
            "Siège de douche ou de bain"
        ]
    },{
        label: "Équipement d'accessibilité",
        options: [
            "Lève-personne mobile ou fixé au plafond",
        ]
    },

]

export const exceptionnalStaysTypos = [
    {
        label: "Superhôte",
        description: "Séjournez chez des hôtes reconnus.",
    },
    {
        label: "LeKwatt Plus",
        description: "Une sélection d'hébergements vérifiés selon des critères de qualité et de design",
    },
]

export const hostLanguageTypos = [
    "Anglais",
    "Allemand",
    "Italien",
    "Espagnol",
    "Arabe",
    "Portugais",
    "Indonésien",
    "Thaï",
    "Polonais",
    "Tagalog",
    "Suédois",
    "Finnois",
    "Hongrois",
    "Français",
    "Japonais",
    "Russe",
    "Chinois (simplifié)",
    "Hindi",
    "Turc",
    "Néerlandais",
    "Grec",
    "Malais",
    "Malais",
    "Norvégien",
    "Norvégien",
]