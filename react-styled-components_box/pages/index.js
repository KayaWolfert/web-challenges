import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox $isBlack />
      <StyledBox />
    </div>
  );
}
