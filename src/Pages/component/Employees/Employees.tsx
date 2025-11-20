
import { useContext } from "react";
import { InfoUser } from "../../../Components/Layout/Layout";
import { PageWrapper } from "../CreateEmployee/style";
import { CardContainer, DataItem, Info } from "./style";
import Button from "../../../Components/Button/Button";

function employees() {
const { name, surname, age, jobPosition ,onDataChange} = useContext(InfoUser);



  return (
    <PageWrapper>
      <CardContainer>
      <DataItem>Name</DataItem>
      <Info>{name}</Info>
      <DataItem>Surname</DataItem>
       <Info>{surname}</Info>
      <DataItem>Age</DataItem>
       <Info>{age}</Info>
      <DataItem>JobTitle</DataItem>
       <Info>{jobPosition}</Info>
       <Button name="DELETE" onClick={()=>{onDataChange(undefined)}} primary={true}  />
      </CardContainer>
    </PageWrapper>
  );
}
export default employees;
