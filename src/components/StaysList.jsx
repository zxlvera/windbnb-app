import React, { useContext } from "react";
import styled from "styled-components";
import { StaysContext } from "../context";

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Img = styled.img`
  border-radius: 24px;
  width: 500px;
  height: 269px;
  object-fit: cover;
`;

const StaysList = () => {
  const appContext = useContext(StaysContext);
  const { data } = appContext;
  console.log(data);
  return (
    <>
      <h1>Stays in Finland</h1>
      <GridLayout>
        {data.map((item, index) => (
          <>
            <div key={index}>
              <Img key={index} src={item.photo} alt={item.title} />
              {item.beds > 0 ? (
                <h6>
                  {item.type} . {item.beds} beds
                </h6>
              ) : (
                <h6>{item.type}</h6>
              )}
              <h3>{item.title}</h3>
            </div>
          </>
        ))}
      </GridLayout>
    </>
  );
};

export default StaysList;
