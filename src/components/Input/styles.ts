import styled, { css}  from 'styled-components';
interface ContainerProps{
    isFocused: boolean;
    isFilled: boolean;
}
export const Container = styled.div<ContainerProps>`

        margin-top: 24px;
        background: #232129;
        border-radius: 10px;

        border: 2px solid #232129;
        color: #666360;

        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        & + div {
            margin-top: 8px;
        }
        ${props => props.isFocused && css`
            color: #FF9000;
            border: 2px solid #FF9000;
        `}

        ${props => props.isFilled && css`
            color: #FF9000;

        `}

        input {
            background: transparent;
            flex:1 ;
            border: 0;
            color: #F4EDE8;

            &::placeholder {
                color: #666360;
            }

        }
        svg {
            margin-right: 16px;
        }
`;
