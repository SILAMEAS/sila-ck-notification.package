export type typeNotification="success" | "info" | "warning" | "error";
export type typeAnimation="fade" | "pop" | "slide"
export interface NotificationProps {
    type: typeNotification;
    message: string;
    onClose: () => void;
    animation?: typeAnimation;
  }
  
  // Define the allowed positions
  export type PositionType =
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right";

  // Define the properties of a notification
  export interface NotificationProps {
    type: typeNotification;
    message: string;
    duration: number;
    animation?:typeAnimation;
  }
  
  // Define the return type of the hook
  export interface UseNotificationReturn {
    NotificationComponent: JSX.Element;
    triggerNotification: (notificationProps: NotificationProps) => void;
  }