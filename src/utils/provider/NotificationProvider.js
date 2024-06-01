// NotificationProvider.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { clearNotifications } from "./../slicer/notificationSlice";

const NotificationProvider = ({ children }) => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const toast = useToast();

  useEffect(() => {
    // console.log("here")
    if (notifications.length > 0) {
      notifications.forEach(({ type, title, description }) => {
        toast({
          title,
          description,
          status: type,
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      });

      dispatch(clearNotifications());
    }
  }, [dispatch, notifications, toast]);

  return <>{children}</>;
};

export default NotificationProvider;
