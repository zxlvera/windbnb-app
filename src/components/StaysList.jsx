import React, { useContext } from "react";
import styled from "styled-components";
import { StaysContext } from "../context";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 38rem;
  grid-gap: 2rem;
  justify-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Description = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const DescBlock = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  color: #eb5757;
`;

const SuperHost = styled.div`
  width: 100px;
  height: 28px;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
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
  margin-bottom: 2rem;
`;

const StaysList = () => {
  const appContext = useContext(StaysContext);
  const { data } = appContext;
  console.log(data);
  return (
    <>
      <GridLayout>
        {data.map((item, index) => (
          <div key={index}>
            <Grid>
              <Img src={item.photo} alt={item.title} />
              <Description>
                <DescBlock>
                  {item.superHost && (
                    <SuperHost>
                      <SuperHostTxt>SUPER HOST</SuperHostTxt>
                    </SuperHost>
                  )}
                  {item.beds > 0 ? (
                    <h6>
                      {item.type} . {item.beds}{" "}
                      {item.beds > 1 ? <span>beds</span> : <span>bed</span>}
                    </h6>
                  ) : (
                    <h6>{item.type}</h6>
                  )}
                </DescBlock>
                <Rating>
                  <i className="material-icons">star</i>
                  <h6 style={{ marginLeft: "0.5rem" }}>{item.rating}</h6>
                </Rating>
              </Description>
              <h2>{item.title}</h2>
            </Grid>
          </div>
        ))}
      </GridLayout>
    </>
  );
};

export default StaysList;
