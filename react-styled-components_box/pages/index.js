import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxesWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
       
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxesWithStyledComponents/>
      
    </div>
  );
}
