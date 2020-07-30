import React from 'react'
import styled from 'styled-components'
import img from '../src/Assets/header_img.jpg'
import '../src/Cards/card-style.css'




export default function Header(props) {
    return (
        <MainContainer>
            <h1>Studious</h1>
            
        </MainContainer>
    )
}

const MainContainer = styled.header`
    background: url(${img}) no-repeat center/cover;
    height: 10rem;

    h1 {
        transform: translate(-50%, -50%);
        color: #fff;
        font-weight: 900;
        position: absolute;
        top: 10%;
        left: 50%
    }
`;
