import React from "react";
import headerStyle from "../misc/header.module.css";
import styles from "./References.module.css";
import Reference from "./Reference";

const references = [
    {
        link: "https://journals.sagepub.com/doi/pdf/10.1177/2057047317719469?casa_token=Uo56eabWvZMAAAAA:JOcDEW1pcTQ9nCf3W52WGhVr4Wy6LVKssXiuyPN1OT2p6Wjn0pDEDrRCNZ5n0aQUablEm3vKf4r7Aw",
        citation: "Droumeva, M. (2017). Soundmapping as critical cartography: Engaging publics in listening to the environment. Communication and the Public, 2(4), 335–351. https://doi.org/10.1177/2057047317719469"
    },
    {
        link: "https://www.jstor.org/stable/26779225",
        citation: "HOLANDA, C., REBELO, P., & PAZ, A. (2016). Soundmaps as iDocs? Modes of Interactivity for Storytelling with Sound. Leonardo Music Journal, 26, 80–82. https://www.jstor.org/stable/26779225"
    },
    {
        link: "https://www.cambridge.org/core/journals/organised-sound/article/distributing-authorship-at-a-localised-scale-developing-public-engagement-in-sound-mapping/817AF8BBE659C569F4DBB397A73E6AE7",
        citation: "McCafferty, C. (2021). Distributing Authorship at a Localised Scale: Developing public engagement in sound mapping. Organised Sound, 26(2), 255-264. doi:10.1017/S1355771821000297"
    }
];

const References = () => {
    return (
        <>
            <h1 className={headerStyle.header}>References</h1>
            <ol className={styles.references}>
                {references.map((reference, key) => 
                    <Reference
                        link={reference.link}
                        citation={reference.citation}
                        key={key}
                    />
                )}
            </ol>
        </>
    );
};

export default References;