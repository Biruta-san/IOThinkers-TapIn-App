import { SafeAreaView } from "react-native-safe-area-context";
import { retriveColorString } from "../../shared/utils/enums/styleEnums";
import { tabRoutes } from "./tabRoutes";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useState } from "react";
import Text from "../../shared/components/Typography/Text";

const MainScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(
    tabRoutes.map((route) => ({
      key: route.name,
      title: route.name,
      icon: route.icon,
    }))
  );
  const renderScene = SceneMap(
    tabRoutes.reduce((acc, route) => {
      acc[route.name] = route.component;
      key = route.name;
      return acc;
    }, {})
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabBarPosition={"bottom"}
        renderTabBar={(props) => (
          <TabBar
            renderLabel={({ route, focused, color }) => (
              <Text fontSize={12} useThemeColor fontWeight={"bold"}>
                {route.title}
              </Text>
            )}
            renderIcon={({ route, focused, color }) => <route.icon />}
            indicatorStyle={{ backgroundColor: retriveColorString() }}
            style={{ backgroundColor: "white" }}
            {...props}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
