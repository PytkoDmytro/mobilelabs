const functions = require('firebase-functions');

const json = [
    {   
    	"equipmentName": "Home Professional WAY32891EU",
        "equipmentType": "11.11.19",
        "workingArea": "24 month",
        "price":  "Foxtrot, Forum Lviv",
        "description": "ActiveOXeygen tech., compact",
        "photoUrl": "https://my-bosch.com.ua/image/catalog/banners/WAW32640EU-action.jpg" 
    },
    {
        "equipmentName": "Serie|6 Microwave FEM553MB0",
        "equipmentType": "06.10.19",
        "workingArea": "16 month",
        "price":  "Eldorado, Victoriad Gardens",
        "description": "AutoPilot 8, Powerful grill",
        "photoUrl": "https://media3.bosch-home.com/Product_Shots/300x300/MCSA02496116_FEM553MB0_Microwave_Bosch_25L_STP_def.jpg" 
    },
    {
        "equipmentName": "STEAMER| Serie 8 HSG656RS1",
        "equipmentType": "03.03.19",
        "workingArea": "30 month",
        "price":  "Pocket Store, King Cross",
        "description": "DishAssist tech., EcoClean Direct",
        "photoUrl": "https://media3.bosch-home.com/Product_Shots/300x300/MCSA00766700_411048_HSG636BS1_def.jpg" 
    },
    {
        "equipmentName": "WALL HOOD|Serie 4 DWK97HM60",
        "equipmentType": "28.04.18",
        "workingArea": "12 month",
        "price":  "Epicenter, King Cross",
        "description": "TouchSelect and EcoSilence Drive tech.",
        "photoUrl": "https://media3.bosch-home.com/Product_Shots/300x300/MCSA01732881_STP_DWK97HM60_1174529_def.jpg"
    },
    {
       "equipmentName": "СOOLER|Serie 8 Antifingerprint KGF49PI40",
        "equipmentType": "03.07.19",
        "workingArea": "48 month",
        "price":  "Tech Industry, KievTC",
        "description": "Perfect Fit, Stainless steel, VitaFresh pro 0°C",
        "photoUrl": "https://media3.bosch-home.com/Product_Shots/900x506/MCSA03011823_J2522_2327548_KGF49PI40_def.jpg"
    },
    {
        "equipmentName": "Serie | 4 Freezer GSN36VL3P",
        "equipmentType": "04.12.19",
        "workingArea": "36 month ",
        "price":  "Comfy, Forum Lviv",
        "description": "ANoFrost, VarioZone, BigBox, Perfect Fit",
        "photoUrl": "https://media3.bosch-home.com/Product_Shots/900x506/MCSA02325632_i0475_1729386_GSN36VL3P_cmyk_def.jpg"
    },
    {
        "equipmentName": "Serie | 4 Dryer WTM83261OE",
        "equipmentType": "02.05.19",
        "workingArea": "26 month",
        "price":  "Foxtrot, KievTC",
        "description": "AutoDry tech.,SensivityDryingSystem, Antivibr.",
        "photoUrl": "hhttps://media3.bosch-home.com/Product_Shots/900x506/MCSA02963857_WTM83261OE_def.jpg"
    }
];
exports.equipment = functions.https.onRequest((request, response) => {response.send(json);
});

