import React from "react";
import Header from "../misc/Header";
import styles from "./References.module.css";
import Reference from "./Reference";

const references = [
    {
        link: "https://eos.org/editors-vox/how-is-modern-climate-change-affecting-landscape-processes",
        citation: "Amy E. East, J. B. S. (2022, February 11). How is modern climate change affecting landscape processes? Eos.",
        citationLink: "https://eos.org/editors-vox/how-is-modern-climate-change-affecting-landscape-processes"
    },
    {
        link: "",
        citation: "Baylor, B. (2023, May 22). Sound Map for a Changing Landscape. Google Slides. Other, Hothouse Project. Retrieved June 7, 2023.",
        citationLink: ""
    },
    {
        link: "https://www.leawo.org/entips/how-to-get-wav-files-online-1114.html",
        citation: "Brooks, D. (2021). WAV file. LEAWO. Retrieved July 5, 2023, from",
        citationLink: "https://www.leawo.org/entips/how-to-get-wav-files-online-1114.html"
    },
    {
        link: "https://brobible.com/culture/article/what-are-rich-people-problems-like/",
        citation: "Charles, D. (2022). Stacks of $100 Bills. BroBible. Retrieved 2023, from",
        citationLink: "https://brobible.com/culture/article/what-are-rich-people-problems-like/"
    },
    {
        link: "https://www.vikinghcs.com/a-changing-landscape/",
        citation: "Correia, D. (2018). Tree healthy on one side and ruined on the other. Vikinghcs. Retrieved 2023, from",
        citationLink: "https://www.vikinghcs.com/a-changing-landscape/"
    },
    {
        link: "https://dims.apnews.com/dims4/default/b6641e3/2147483647/strip/true/crop/3000x1050+0+0/resize/767x268!/format/webp/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Ff1063120e77a45a2accb0067c02379b3%2F3000.jpeg",
        citation: "Coyle, J. (2021). Times Square near 42nd Street in New York City, in the 1920s. . Associated Press News. AP. Retrieved June 28, 2023, from",
        citationLink: "https://dims.apnews.com/dims4/default/b6641e3/2147483647/strip/true/crop/3000x1050+0+0/resize/767x268!/format/webp/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Ff1063120e77a45a2accb0067c02379b3%2F3000.jpeg"
    },
    {
        link: "https://journals.sagepub.com/doi/pdf/10.1177/2057047317719469?casa_token=Uo56eabWvZMAAAAA:JOcDEW1pcTQ9nCf3W52WGhVr4Wy6LVKssXiuyPN1OT2p6Wjn0pDEDrRCNZ5n0aQUablEm3vKf4r7Aw",
        citation: "Droumeva, M. (2017). Soundmapping as critical cartography: Engaging publics in listening to the environment. Communication and the Public, 2(4), 335–351.",
        citationLink: "https://doi.org/10.1177/2057047317719469"
    },
    {
        link: "https://www.freepik.com/free-vector/programmers-concept-with-flat-design_2456089.html",
        citation: "FreePik.com. (2018b). Programmers concept . Freepik. Retrieved June 29, 2023, from",
        citationLink: "https://www.freepik.com/free-vector/programmers-concept-with-flat-design_2456089.html"
    },
    {
        link: "https://www.jstor.org/stable/26779225",
        citation: "HOLANDA, C., REBELO, P., & PAZ, A. (2016). Soundmaps as iDocs? Modes of Interactivity for Storytelling with Sound. Leonardo Music Journal, 26, 80–82.",
        citationLink: "https://www.jstor.org/stable/26779225"
    },
    {
        link: "https://scitechdaily.com/new-research-shows-sea-level-will-rise-faster-than-previously-thought/",
        citation: "(2021, February 20). HOMEEARTH NEWS New Research Shows Sea Level Will Rise Faster Than Previously Thought. Scitechdaily. Retrieved June 9, 2023, from",
        citationLink: "https://scitechdaily.com/new-research-shows-sea-level-will-rise-faster-than-previously-thought/"
    },
    {
        link: "https://eos.org/editors-vox/how-is-modern-climate-change-affecting-landscape-processes",
        citation: "(2020, December 16). How is Modern Climate Change Affecting Landscape Processes? Eos. Retrieved June 9, 2023, from",
        citationLink: "https://eos.org/editors-vox/how-is-modern-climate-change-affecting-landscape-processes"
    },
    {
        link: "https://thoughtbrick.com/life-discussion/meeting-people-where-theyre-at-everyday-life/",
        citation: "Hudson, C. (2019). People walking in Street. ThoughtBrick. Retrieved 2023, from",
        citationLink: "https://thoughtbrick.com/life-discussion/meeting-people-where-theyre-at-everyday-life/"
    },
    {
        link: "https://blogs.edf.org/climate411/2017/10/30/a-real-halloween-horror-story-the-five-scariest-aspects-of-climate-change/",
        citation: "Ivanovich, C. (2017, October 30). A real halloween horror story: The five scariest aspects of climate change. Climate 411.",
        citationLink: "https://blogs.edf.org/climate411/2017/10/30/a-real-halloween-horror-story-the-five-scariest-aspects-of-climate-change/"
    },
    {
        link: "https://www.bbc.com/future/article/20230612-did-climate-change-cause-canadas-wildfires",
        citation: "Kaminski, I. (2023). Canadian Wildfires. BBC Future. Retrieved June 23, 2023, from",
        citationLink: "https://www.bbc.com/future/article/20230612-did-climate-change-cause-canadas-wildfires"
    },
    {
        link: "https://mirzaleka.medium.com/exploring-javascript-ecosystem-popular-tools-frameworks-libraries-7901703ec88f",
        citation: "Leka, M. (2020). JavaScript Ecosystem: Popular Tools, Frameworks, and Libraries. mirzaleka medium. Retrieved June 28, 2023, from",
        citationLink: "https://mirzaleka.medium.com/exploring-javascript-ecosystem-popular-tools-frameworks-libraries-7901703ec88f"
    },
    {
        link: "https://www.cambridge.org/core/journals/organised-sound/article/distributing-authorship-at-a-localised-scale-developing-public-engagement-in-sound-mapping/817AF8BBE659C569F4DBB397A73E6AE7",
        citation: "McCafferty, C. (2021). Distributing Authorship at a Localised Scale: Developing public engagement in sound mapping. Organised Sound, 26(2), 255-264.",
        citationLink: "doi:10.1017/S1355771821000297"
    },
    {
        link: "https://flex-solution.com/page/blog/software-risks",
        citation: "Palyukh, S. (2023, July 7). Software development risks. FlexSolution - B2B programming services.",
        citationLink: "https://flex-solution.com/page/blog/software-risks"
    },
    {
        link: "https://www.azocleantech.com/article.aspx?ArticleID=1082",
        citation: "Pilkington, B. (2020). Water rising on a city. AZO Cleantech. Retrieved June 23, 2023, from",
        citationLink: "https://www.azocleantech.com/article.aspx?ArticleID=1082"
    },
    {
        link: "https://www.arch2o.com/humans-changed-landscape-planet-earth/",
        citation: "River changing over time. (n.d.). Arch2O. Retrieved June 29, 2023, from",
        citationLink: "https://www.arch2o.com/humans-changed-landscape-planet-earth/"
    },
    {
        link: "https://blog.nationalarchives.gov.uk/digital-archiving-context-everything/",
        citation: "Sheridan, J. (2018). Digital Archive. The National Archives. Retrieved July 5, 2023, from",
        citationLink: "https://blog.nationalarchives.gov.uk/digital-archiving-context-everything/"
    },
    {
        link: "https://vistasofvirginia.com/locations/",
        citation: "The Coastal Plain. (2023). Vistas of Virginia. Retrieved June 29, 2023, from",
        citationLink: "https://vistasofvirginia.com/locations/"
    },
    {
        link: "https://www.usatoday.com/story/money/personalfinance/2017/08/16/how-stop-being-family-atm-and-learn-say-no/565316001/",
        citation: "Weston, L. (2017). Hands Giving & Receiving Money. USA Today. Retrieved June 30, 2023, from",
        citationLink: "https://www.usatoday.com/story/money/personalfinance/2017/08/16/how-stop-being-family-atm-and-learn-say-no/565316001/"
    },
    {
        link: "https://www.cdw.com/content/cdw/en/articles/datacenter/what-is-data-storage.html",
        citation: "What is Data Storage? Definition, Benefits & Types of Data Storage. (2022). Retrieved July 7, 2023, from",
        citationLink: "https://www.cdw.com/content/cdw/en/articles/datacenter/what-is-data-storage.html"
    }
];

const References = () => {
    return (
        <>
            <Header header="References" />
            <ol className={styles.references}>
                {references.map((reference, key) => 
                    <Reference
                        link={reference.link}
                        citation={reference.citation}
                        citationLink={reference.citationLink}
                        key={key}
                    />
                )}
            </ol>
        </>
    );
};

export default References;