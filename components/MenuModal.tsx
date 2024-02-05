import React from "react";
import { Menu } from "react-native-material-menu";

/**
 * Renders a menu modal with the given options and anchor.
 *
 * @param {boolean} visible - Whether the modal is visible
 * @param {any} setVisibel - Function to set the visibility of the modal
 * @param {React.ReactNode} anchor - The anchor element for the menu
 * @param {{name: string, path: StaticRoutes | RelativePathString | `${string}:${string}`}[]} options - The options for the menu
 * @return {React.ReactNode} The rendered menu modal component
 */

const MenuModal = ({
  visible,
  setVisible,
  anchor,
  children,
}: {
  visible: boolean;
  setVisible: (value: boolean) => void;
  anchor: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <Menu
      visible={visible}
      anchor={anchor}
      onRequestClose={() => setVisible(false)}
    >
      {children}
    </Menu>
  );
};

export default MenuModal;
