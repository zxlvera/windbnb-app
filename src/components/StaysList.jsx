import React, { useContext } from "react";
import styled from "styled-components";
import { StaysContext } from "../context";

const GridLayout = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 40rem;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
`;

const Description = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const DescriptionTxt = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;
const SuperHost = styled.div`
  width: 100px;
  height: 28px;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 12px;
`;

const SuperHostTxt = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 15px;
`;

const Img = styled.img`
  border-radius: 24px;
  width: 400px;
  height: 269px;
  object-fit: cover;
`;

const StaysList = () => {
  const appContext = useContext(StaysContext);
  const { data } = appContext;
  console.log(data);
  return (
    <>
      <GridLayout>
        {data.map((item, index) => (
          <>
            <Grid>
              <Img key={index} src={item.photo} alt={item.title} />
              <Description>
                <DescriptionTxt>
                  {item.superHost && (
                    <SuperHost>
                      <SuperHostTxt>SUPER HOST</SuperHostTxt>
                    </SuperHost>
                  )}
                  {item.beds > 0 ? (
                    <h6>
                      {item.type} . {item.beds}{" "}
                      {item.beds.length > 1 ? (
                        <span>bed</span>
                      ) : (
                        <span>bed</span>
                      )}
                    </h6>
                  ) : (
                    <h6>{item.type}</h6>
                  )}
                </DescriptionTxt>
                <h6>{item.rating}</h6>
              </Description>
              <h3>{item.title}</h3>
            </Grid>
          </>
        ))}
      </GridLayout>
    </>
  );
};

export default StaysList;
