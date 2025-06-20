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

const AlertCancel = ({ onClose }) => {
  

  const handleConfirm = () => {
    onClose();
  };

  return (
    <Overlay>
      <Popup>
        <ImageWrapper>
          <CarImage src={cancel} alt="Car" />
            </ImageWrapper>
             <Message>
               You can’t cancel Booking now. The time for <br></br>cancel booking was
               2hr before the car pick.
            </Message>
        <ButtonRow>
          <YesButton onClick={handleConfirm}>Yes</YesButton>
          <NoButton onClick={onClose}>No</NoButton>
        </ButtonRow>
      </Popup>
    </Overlay>
  );
};

export default AlertCancel;
