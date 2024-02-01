import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./navigation.css";

export default function Navigation() {
  return (
    <>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item two content</NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator" />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </>
  );
}
