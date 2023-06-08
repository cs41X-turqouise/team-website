import React from "react";
import headerStyle from "../misc/header.module.css";
import styles from "./References.module.css";
import Reference from "./Reference";

const references = [
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