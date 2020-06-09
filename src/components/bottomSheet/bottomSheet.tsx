import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";

interface BottomSheetProps {
  height: number;
}

const BottomSheet: React.FC<BottomSheetProps> = React.forwardRef(
  ({ children, height }, ref) => {
    return (
      <RBSheet
        ref={ref}
        closeOnDragDown
        closeOnPressMask
        customStyles={{
          wrapper: {
            // backgroundColor: "transparent",
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          },
          draggableIcon: {
            backgroundColor: "transparent"
          }
        }}
        height={height}
      >
        {children}
      </RBSheet>
    );
  }
);

export default BottomSheet;
