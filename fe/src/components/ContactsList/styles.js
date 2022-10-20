import styled from "styled-components";

export const Container = styled.div` 
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-size: 24px;
    }
    a {
        font-size: 16px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover{
            background: ${({ theme }) => theme.colors.primary.main};
            color: #fff;
        }
    }
`;


export const DivisonLine = styled.div` 
    margin-top: 16px;
    color: #BCBCBC;
    opacity: 0.2;
    border-radius: 1px;
`;


export const ListContainer = styled.div` 
    margin-top: 16px;
    margin-bottom: 8px;
    
    header {
        button{
            background-color: transparent;
            border: none;
            display: flex; 
            align-items: center;

            span {
                margin-right: 8px;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.primary.main};
            }
        }
    }
`;

export const Card = styled.div`
    padding: 16px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + &{
        margin-top: 16px;
    }

    .info {
        .contact-name {
            display: flex;
            align-items: center;
        
            small {
                background: ${({ theme }) => theme.colors.primary.lighter};
                border-radius: 4px;
                padding: 6px 3px;
                font-size: 12px;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.primary.main};
                text-transform: uppercase;
                margin-left: 8px;
            }
        }

        span{
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }

    .actions{
        display: flex;
        align-items: center;

        button {
            background: transparent;
            border: none;
            margin-left: 8px;
        }
    }
`;NewContact