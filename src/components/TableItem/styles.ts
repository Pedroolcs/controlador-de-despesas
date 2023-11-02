import styled from "styled-components";

export const TableLine = styled.tr``; 

export const TableColumn = styled.td`
    padding: 10px 0; 
`;
export const ButtonColumn = styled.td`
    padding: 10px 0; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;

export const RemoveButton = styled.button`
    background-color: #B22222; /* Vermelho */
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #A52A2A; /* Vermelho mais escuro no hover */
    }
`;