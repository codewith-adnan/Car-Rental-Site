
import {
  Overlay,
  Popup,
  ImageWrapper,
  CarImage,
  Message,
  ButtonRow,
  YesButton,
  NoButton,
} from "./styles";
import cancel from "../../assets/images/cancel.png";

const CancelPopup = ({ onClose, onConfirmCancel }) => {
  

  const handleConfirm = () => {
    onClose();           
    onConfirmCancel();   
  };

  return (
    <Overlay>
      <Popup>
        <ImageWrapper>
          <CarImage src={cancel} alt="Car" />
           </ImageWrapper>
            <Message>
              Are you sure you want to cancel this order?<br />
              After canceling, you have 2 warnings left.<br />
             After that, your account will be blocked.
           </Message>
           <ButtonRow>
          <YesButton onClick={handleConfirm}>Yes</YesButton>
          <NoButton onClick={onClose}>No</NoButton>
        </ButtonRow>
      </Popup>
    </Overlay>
  );
};

export default CancelPopup;
