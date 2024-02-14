import React, { useState } from 'react';
import "../../styles/SupervisorStyles/SupNotification.css"

function SupNotification() {

    const [notificationCount, setNotificationCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
  
    const handleNotificationClick = () => {
      // Reset notification count when clicked
      setNotificationCount(0);
      // You can also trigger additional actions here, like showing a notification list
      setShowModal(true);
    };

    const handleCloseModal = () => {
        // Close modal
        setShowModal(false);
    };

    

    return (
      <div className="notification-bell" onClick={handleNotificationClick}>
        <i className="fas fa-bell bg-bell"></i>
        {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
        
        {showModal && (
          <div className="modal" onClick={handleCloseModal}>
            <article className="modal-container" onClick={(e) => e.stopPropagation()}>
              <header className="modal-container-header">
                <h3 className="modal-container-title">
                  <i className="fas fa-bell sm-bell"></i>
                  Notifications
                </h3>
                <button className="icon-button" onClick={handleCloseModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                  </svg>
                </button>
              </header>
              <section className="modal-container-body rtf">
                <h2>Heading one.</h2>
                <p>dubitandum. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Sed utrum  </p>
                <h2>Heading two.</h2>
                <p>Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Negat enim summo bono afferre  </p>
              </section>
            </article>
          </div>
        )}
      </div>
    );
  };
  
  export default SupNotification;