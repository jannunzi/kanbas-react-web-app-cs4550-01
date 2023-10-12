import React from "react";
import { useParams } from "react-router-dom";
function Add() {
  const { a, b } = useParams();
  const params = useParams();
  return (
    <div>
      <h2>Add Path Parameters</h2>
      {JSON.stringify(params)}
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
export default Add;
