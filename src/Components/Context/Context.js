import { createContext, useState } from "react";

export const AboutContext = createContext(null);

export default function AboutProvider({ children  }) {
    const [aboutOffset, setAboutOffset] = useState(0);
    return (<AboutContext.Provider value={{ aboutOffset, setAboutOffset }}>
        {children }
    </AboutContext.Provider>)
}