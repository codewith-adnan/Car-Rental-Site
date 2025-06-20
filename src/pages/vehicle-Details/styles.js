// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f8fd;
  font-family: 'poppins';
border: none;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardWrapper = styled.div`
  background-color: #f5f8fd;

  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  border: none;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
  height: 350px;
  object-fit: cover;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
  @media (max-width :768px) {
width    :100% ;

  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.50rem;

  @media (max-width :368px) {
    flex-direction: column;
      flex-wrap: wrap;
      display: flex;

    
  }
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 0.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const RightSection = styled.div`
  flex: 1;
  background-color:rgb(255, 255, 255);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e1e1e;
`;

export const HeartIcon = styled.div`
  color: #f44343;
  font-size: 1.25rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const StarIcon = styled.div`
  color: ${({ inactive }) => (inactive ? '#d1d5db' : '#fbbf24')};
  font-size: 1rem;
`;

export const ReviewerText = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
`;

export const DetailItem = styled.div``;

export const DetailLabel = styled.p`
  color: #9ca3af;
`;

export const DetailValue = styled.p`
  color: #111827;
  font-weight: 600;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

export const PriceUnit = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const OldPrice = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  text-decoration: line-through;
`;

export const RentButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e40af;
  }

`;

 // Catalog
export const CatalogSection = styled.section`
   max-width:78rem;
   font-family: 'poppins';
   margin-left: 2.5rem;
   background-color:rgb(145, 167, 204);
  width: 96%;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

export const CatalogHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0rem;
`;

export const CatalogHeading = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1E293B;
`;

export const CatalogCount = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  background: #2563EB;
  color: white;
  border-radius: 0.25rem;
  padding: 2px 0.5rem;
`;

export const CatalogArticle = styled.article`
  display: flex;
  gap: 1rem;
  margin-bottom: 0rem;
`;

export const CatalogImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CatalogContent = styled.div`
  flex: 1;
`;

export const CatalogTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CatalogNameBlock = styled.div``;

export const CatalogName = styled.h3`
  color: #0F172A;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  line-height: 1.25rem;
`;

export const CatalogRole = styled.p`
  font-size: 0.75rem;
  margin-top: 0rem;
  font-weight: 400;
  margin-bottom: 0rem;
  color:rgb(80, 141, 226);
`;

export const CatalogDate = styled.div`
  text-align: right;
  font-size: 0.75rem;
  color: #94A3B8;
  user-select: none;
`;

export const CatalogDescription = styled.p`
  font-size: 0.75rem;
  color: #475569;
  max-width: 650px;
  line-height: 1.5;
`;

export const CatalogRating = styled.div`
  margin-top: 0.75rem;
  color: #F59E0B;
  font-size: 0.875rem;
  user-select: none;
`;

export const CatalogShowAll = styled.button`
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color:rgb(80, 141, 226);

  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  border: none;
  cursor: pointer;
`;

// Recent Car Styles

export const CarContainer = styled.div`
  background: #f8fafc;
  font-family: 'poppins';
  padding: 2rem 1rem;
  margin-top: 0rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0rem;

  h4 {
    color: #334155;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: #3b82f6;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
`;

export const CarCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
`;

export const CarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  color: #64748b;
`;

export const CarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

export const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PriceAndButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PriceTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CarRentButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;

// top rated cars
export const TopRatedContainer = styled.div`
  background: #f8fafc;
  font-family: 'poppins';
  padding: 2rem 1rem;
  margin-top: 0rem;
`;

export const TopRatedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:0rem;

  h4 {
    color: #334155;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: #3b82f6;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;

export const TopRatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
`;

export const TopCarCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
`;

export const TopCarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const TopTag = styled.span`
  font-size: 0.75rem;
  color: #64748b;
`;

export const TopCarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const TopCarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

export const TopInfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TopPriceAndButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TopPriceTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TopCarRentButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;