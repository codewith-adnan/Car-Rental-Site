import {
  Container,
  Section,
  TopRow,
  ProfileImageWrapper,
  ProfileUploadButton,
  SaveButton,
  InputGroup,
  ProfileLabel,
  ProfileInput,
  RadioGroup,
  RadioLabel,
  UploadSection,
  UploadLabel,
  UploadInput,
  ImageUploadGroup,
  UploadInfoBox,
  LicenceUploadButton,
} from './styles';

import { FaUpload } from 'react-icons/fa';
import Alex from '../../assets/images/Alex.png';

const ProfileForm = () => {
  return (
    <Container>
      <Section>
        <TopRow>
          <ProfileImageWrapper>
            <img src={Alex} alt="Profile" />
            <ProfileUploadButton><FaUpload /> Upload Picture</ProfileUploadButton>
          </ProfileImageWrapper>
          <SaveButton>Save Profile</SaveButton>
        </TopRow>

        <InputGroup>
          <div>
            <ProfileLabel>Full Name</ProfileLabel>
            <ProfileInput placeholder="Enter Full Name" />
          </div>
          <div>
            <ProfileLabel>Email</ProfileLabel>
            <ProfileInput placeholder="Enter Email" />
          </div>
          <div>
            <ProfileLabel>Phone</ProfileLabel>
            <ProfileInput placeholder="Enter Phone Number" />
          </div>
          <div>
            <ProfileLabel>Post Code</ProfileLabel>
            <ProfileInput placeholder="Enter Post Code" />
          </div>
          <div>
            <ProfileLabel>Address</ProfileLabel>
            <ProfileInput placeholder="Enter Address" />
          </div>
          <div>
            <ProfileLabel>Gender</ProfileLabel>
            <RadioGroup>
              <RadioLabel>
                <input type="radio" name="gender" defaultChecked /> Male
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="gender" /> Female
              </RadioLabel>
            </RadioGroup>
          </div>
        </InputGroup>
      </Section>

      <UploadSection>
        <div>
          <UploadLabel>Driving Licence</UploadLabel>
          <UploadInput placeholder="Enter Driving Licence Number" />
        </div>

        <ImageUploadGroup>
          <UploadLabel>Front Image of Licence</UploadLabel>
          <UploadInfoBox>
            Upload your licence front image,<br />
            Supported Formats: JPG, PNG,<br />
            Max File Size: 5MB.
          </UploadInfoBox>
          <LicenceUploadButton><FaUpload /> Upload Picture</LicenceUploadButton>
        </ImageUploadGroup>

        <ImageUploadGroup>
          <UploadLabel>Back Image of Licence</UploadLabel>
          <UploadInfoBox>
            Upload your licence back image,<br />
            Supported Formats: JPG, PNG,<br />
            Max File Size: 5MB.
          </UploadInfoBox>
          <LicenceUploadButton><FaUpload /> Upload Picture</LicenceUploadButton>
        </ImageUploadGroup>
      </UploadSection>
    </Container>
  );
};

export default ProfileForm;
