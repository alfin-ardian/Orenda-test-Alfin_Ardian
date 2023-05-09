import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TableComponent from "../../components/TableComponent";

const Index = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <>
      <p>hello world</p>
      <TableComponent />
    </>
  );
};

export default Index;
