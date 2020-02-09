export const scrollBarStyle = () => `
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 15px;
        overflow-x: auto;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #b2b2b2;
    }
`;