import styled from "styled-components";

const InfoText = styled.p`
    font-size: 18px;
    font-weight: 500;
`;

export default ({allTasksCount, completedTasksCount}) => <>
    <InfoText>Всього завдань: {allTasksCount}</InfoText>
    <InfoText>Виконано: {completedTasksCount}</InfoText>
</>