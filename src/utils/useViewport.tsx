import React, { ReactNode, FC } from 'react'

interface Props {
    children: ReactNode
}

const viewportContext = React.createContext({height: 0, width: 0});


export const ViewportProvider: FC<Props> = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};

export const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    
    const isMobile = width <= 460
    
    return { width, height, isMobile };
}