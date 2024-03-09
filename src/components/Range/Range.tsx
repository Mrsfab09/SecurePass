import styled from "styled-components";

export function Range() {
  const Range = styled.div`
    height: 80px;
    width: 380px;
    background: #fff;
    border-radius: 10px;
    padding: 0 65px 0 45px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  `;
  const SliderValue = styled.div`
    position: relative;
    width: 100%;
  `;
  const Span = styled.span`
    position: absolute;
    height: 45px;
    width: 45px;
    transform: translateX(-70%) scale(0);
    font-weight: 500;
    top: -40px;
    line-height: 55px;
    z-index: 2;
    color: #fff;
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
  `;
  const Field = styled.div``;
  const ValueLeft = styled.div``;
  const ValueRight = styled.div``;

  return (
    <Range>
      <SliderValue>
        <Span>50</Span>
      </SliderValue>
      <Field>
        <ValueLeft>0</ValueLeft>
        <input type="range" />
        <ValueRight>50</ValueRight>
      </Field>
    </Range>
  );
}
