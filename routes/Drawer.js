import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";


import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import MyNotesStack from "./MyNotesStack"

const MainDrawerNavigator = createDrawerNavigator({
    Write: {
        screen: HomeStack,
    },
    Notes: {
        screen: MyNotesStack,
    },
    About: {
        screen: AboutStack,
    },
},
    {drawerPosition: "right",
});

export default createAppContainer(MainDrawerNavigator);