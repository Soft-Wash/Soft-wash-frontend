import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import "../../styles/SupervisorStyles/SupNotification.css"
import { TaskContext } from '../../context/TaskContext';

function SupNotification() {
    const [notificationCount, setNotificationCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const { employeetasks } = useContext(TaskContext);
    // console.log({employeetasks});

    useEffect(() => {
        // Update notification count when employeetasks change
        setNotificationCount(employeetasks.filter(task => task.status === 'pending').length);
    }, [employeetasks]);

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
                <div className="modal_container" onClick={handleCloseModal}>
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
                            <ul>
                                {employeetasks.map((task, index) => (
                                    <li key={index}>
                                        <h2>{task.taskType}</h2>
                                        <p>Status: {task.status}</p>
                                        <p> Start Date: {task.startDate}</p>
                                        <p>End Date: {task.endDate}</p>
                                        {/* <p>Employee: {task.employee_id ? task.employee_id.fullName : "Unknown"}</p> */} 
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </article>
                </div>
            )}
        </div>

    );
};

export default SupNotification;
