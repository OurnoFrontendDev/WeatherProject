import React from 'react';
import styled from 'styled-components';

const SkeletonWrapper = styled.div`
    background-color: #e0e0e0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

const Shimmer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
    );
    animation: shimmer 1.5s infinite;
    position: absolute;
    top: 0;
    left: 0;

    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`;

export const Skeleton: React.FC<{ width?: string; height?: string }> = ({ width = '100%', height = '100%' }) => {
    return (
        <SkeletonWrapper style={{ width, height }}>
            <Shimmer />
        </SkeletonWrapper>
    );
};

