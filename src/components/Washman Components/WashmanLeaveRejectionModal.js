import { Modal } from "react-bootstrap";



function WashmanLeaveRejectionModal(){
    return(
        <div>
            <Modal show={showModal} onHide={() => setShowModal(false)} className="washman-modal">
                <Modal.Header closeButton>
                <Modal.Title>Pending Leave Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                You have a pending leave application. You cannot apply for new leave
                until the pending application is resolved.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default WashmanLeaveRejectionModal;