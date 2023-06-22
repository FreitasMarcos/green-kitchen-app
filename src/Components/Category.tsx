import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export const itemCategory = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "Bebidas",
        icon: <Entypo name="drink" size={30} color="#007500" />,
        route: "Drink"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bs",
        name: "Lanches",
        icon: <MaterialCommunityIcons name="food-takeout-box" size={30} color="#007500" />,
        route: "Snack"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bq",
        name: "Doces e Sobremesas",
        icon: <FontAwesome5 name="candy-cane" size={30} color="#007500" />,
        route: "Candy"
    }
]