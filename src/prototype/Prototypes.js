import React from "react";
import Header from "../misc/Header";
import Prototype from "./Prototype";
import styles from "./Prototypes.module.css";

const prototypes = [
    {
        title: "Prototype Demo Draft 1",
        embed: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSg9Zt71GVR_RcBmUrsMUXxtBdSLxz2X3GvoPcS_wLrQ0TVeZaQKpu3HA21X7vlSDANxa_oto9y0uTO/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen={true}></iframe>,
        file: "https://drive.google.com/file/d/1DrL4cdLyHBlssH5BGhmMRz0UqGmiB_mp/view?usp=sharing"
    },
    {
        title: "Prototype Demo Draft 2",
        embed: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR_8R7v-0LgDMXWO5mffARuEZAXcRECf0T14oGrZaVq9aHLu7s4wRizeYfW6YgYHw59cWzYpztssQR-/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen={true}></iframe>,
        file: "https://drive.google.com/file/d/17ORfGTD7bUy0pHoBMjaryipyrPrv8Ywb/view?usp=sharing"
    },
    {
        title: "Prototype Demo Draft 3",
        embed: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS-keN--P8c08YbIM1DqNbXTbTkXr8aRtmw19VCN-ZD2ZXs6zevYFjUgS-jMlpVFD-GFBjADZ8xBkN5/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen={true}></iframe>,
        file: "https://drive.google.com/file/d/1Yi91PT_RL6j8-quAAnwXiXHd9j6jN82O/view?usp=sharing"
    },
    {
        title: "Prototype Demo Final",
        embed: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR4WM9NLQUfDc0bW66l7bHuWXq1kNmxzq3vmUk44xEnbIPH4yQt0Med2ln78y89SfiZs6uMcEmtS19b/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen={true}></iframe>,
        file: "https://drive.google.com/file/d/1sHpj15Mh-dOZggHvbmhdz85Vg2ObCRrc/view?usp=sharing"
    },
];

const Prototypes = () => {
    return (
        <>
            <Header header="Prototype Presentations" />
            <div className={styles.prototypes}>
                {prototypes.map((prototype, key) =>
                    <Prototype
                        title={prototype.title}
                        embed={prototype.embed}
                        file={prototype.file}
                    />
                )}
            </div>
        </>
    );
};

export default Prototypes;
