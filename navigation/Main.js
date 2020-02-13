import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import bottom1 from "./bottom1";
import top1 from "./top1";
import D from "../screens/D";

const Main = createStackNavigator({
    topTabs: {
        screen: top1,
        navigationOptions: {
            // header : null
            title : 'WE LOVE KPOP 🖤'
        },
        // Detail: D
    }, 
}, {
    mode : "modal"
});

export default createAppContainer(Main)