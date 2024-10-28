# node_modules\react-native-tab-view\src\TabBar.tsx - Linha 445

const {key, ...rest} = props;

return (
        <>
          {gap > 0 && index > 0 ? <Separator width={gap} /> : null}
          {renderTabBarItem ? (
            renderTabBarItem(props)
          ) : (
            <TabBarItem key={key} {...rest} />
          )}
        </>
      );
