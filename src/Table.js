import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

//test
const PRODUCT = [
  {
    id: 1,
    name: "iPhone 13",
    imageURL: "https://m.media-amazon.com/images/I/718iXsqfamL._AC_SL1500_.jpg",
    price: 20,
  },
  {
    id: 2,
    name: "Samsung Galaxy S20",
    imageURL: "https://m.media-amazon.com/images/I/712EnrdhVLL._AC_SL1500_.jpg",
    price: 25,
  },
  {
    id: 3,
    name: "Huawei P30 Lite 4Go 128Go Bleu",
    imageURL: "https://m.media-amazon.com/images/I/71iPLdFG0jL._AC_SL1200_.jpg",
    price: 30,
  },
  {
    id: 4,
    name: "iPhone 13",
    imageURL: "https://m.media-amazon.com/images/I/718iXsqfamL._AC_SL1500_.jpg",
    price: 20,
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    imageURL: "https://m.media-amazon.com/images/I/712EnrdhVLL._AC_SL1500_.jpg",
    price: 25,
  },
  {
    id: 6,
    name: "Huawei P30 Lite 4Go 128Go Bleu",
    imageURL: "https://m.media-amazon.com/images/I/71iPLdFG0jL._AC_SL1200_.jpg",
    price: 30,
  },
];

//axios
// const data = axios.get();

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 75px 125px;
  width: 70%;
  margin: 0% 15%;
  border-radius: 5px;
  padding: 20px;
  @media (max-width: 768px) {
    grid-gap: 75px 15px;
  }
`;
const List = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 180px;
  height: 200px;
  margin-top: 30px;
`;
const ImageContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;
const Item = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 32px;
`;
const Button = styled.button`
  width: 125px;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #0171e2;
  border-radius: 20px;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  :hover {
    background-color: rgb(255, 255, 255);
    color: #0171e2;
    border: 1px solid #0171e2;
    cursor: pointer;
  }
`;

//FIXEME: to put baseURL
const api = axios.create({
  baseURL: "",
});

export default () => {
  const [products, setProducts] = useState([]);

  //FIXME:to use axios or fetch, using http get:
  // const getProducts = async () => {
  //   try {
  //     setProducts(await api.get());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  useEffect(() => {
    //FIXEME: put query
    // getProducts();
  }, []);

  return (
    <Container>
      {PRODUCT.map((el, index) => {
        return (
          <List key={index}>
            <ImageContainer>
              <Image src={el.imageURL} />
            </ImageContainer>
            <Item>
              <Name>{el.name}</Name>
            </Item>
            <Item>
              <Price>à partir de {el.price} €</Price>
            </Item>
            <Item>
              <Button>acheter</Button>
            </Item>
          </List>
        );
      })}
    </Container>
  );
};
