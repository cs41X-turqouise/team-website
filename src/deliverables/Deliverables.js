import React from "react";
import styles from "./Deliverables.module.css";
import Header from "../misc/Header";
import Deliverable from "./Deliverable";
import Risks from "./Risks";

import currentProcessFlow from "./resources/current_process_flow.png";
import solutionProcessFlow from "./resources/solution_process_flow.png";
import mfcd from "./resources/mfcd.png";
import competitionMatrix from "./resources/competition_matrix.png";
import potentialDesignMatrix from "./resources/potential_design_matrix.png";
import implementationMatrix1 from "./resources/implementation_matrix_1.png";
import implementationMatrix2 from "./resources/implementation_matrix_2.png";
import interfaceMatrix1 from "./resources/interface_matrix_1.png";
import interfaceMatrix2 from "./resources/interface_matrix_2.png";
import verificationMatrix from "./resources/verification_matrix.png";
import maintenanceMatrix from "./resources/maintenance_matrix.png";
import securityRiskMatrix from "./resources/security_risk_matrix.png";
import customerMatrix from "./resources/customer_matrix.jpg";
import legalMatrix1 from "./resources/legal_matrix_1.png";
import legalMatrix2 from "./resources/legal_matrix_2.png";

const images = [
    currentProcessFlow,
    solutionProcessFlow,
    mfcd,
    competitionMatrix
];

const riskImages = [
    [
        potentialDesignMatrix,
        implementationMatrix1,
        implementationMatrix2,
        interfaceMatrix1,
        interfaceMatrix2,
        verificationMatrix,
        maintenanceMatrix
    ],
    [
        securityRiskMatrix
    ],
    [
        customerMatrix
    ],
    [
        legalMatrix1,
        legalMatrix2
    ]
];

const riskDescriptions = [
    [
        {
            title: "Potential Design",
            risks: [
                "T1: Designs that are fundamentally flawed, infeasible, unstable or below Brendan's standards.",
                "T2: A poor design will expose itself as functional defects or hurdles to development that hinder project progress."
            ],
            mitigations: [
                "RMT1: Careful design planning prior to implementation can highlight any potential flaws in the design.",
                "RMT2: Through copious testing of functional aspects of the project, prior to completion of the total project."
            ]
        },
        {
            title: "Implementation",
            risks: [
                "T3: We will adopt off-the-shelf software.",
                "T4: There are inadequate resources for implementation and testing."
            ],
            mitigations: [
                "RMT3: Research all options, testing the software, and confirming vendor support before committing to any third-party software.",
                "RMT4: By pinpointing resources that can be dedicated to working with the vendor as well as rigorous testing prior to deployment of any code."
            ]
        },
        {
            title: "Implementation",
            risks: [
                "T5: Poor change management exists.",
                "T6: Poor data migration and tech integration can hinder any operation."
            ],
            mitigations: [
                "RMT5: Our team will be using Git by adopting GitFlow for branching, enforcing code reviews, and maintain continuous integration.",
                "RMT6: We will establish a rollback plan, encourage collaboration, implement backup and disaster recovery measures, and monitor changes for improvement."
            ]
        },
        {
            title: "Interface",
            risks: [
                "T7: Spending too much time refining the look and feel of a user interface at the expense of Brendan's requirements.",
                "T8: Ignoring or deferring system-to-system interface requirements until the design phase or later."
            ],
            mitigations: [
                "RMT7: Proper project planning and prioritization via identification of functional requirements and prototyping.",
                "RMT8: Iterative development that touches each system of the project even if it’s not complete."
            ]
        },
        {
            title: "Interface",
            risks: [
                "T9: We confuse which system \"owns\" the interfaces, creating delays in critical, cross-project planning.",
                "T10: We separate interface requirements from analysis models."
            ],
            mitigations: [
                "RMT9: By starting interface analysis early in the design process we can assign system ownership before potential cross-project issues arise.",
                "RMT10: By drafting analysis models at the beginning of the project we can reduce interface requirement segregation."
            ]
        },
        {
            title: "Verification",
            risks: [
                "T11: Every identity verification is unique.",
                "T12: The accounts are all different, so the level of risk for a verification varies.",
                "T13: Risk levels can change as technology, regulations, consumer behavior and criminal activities evolve."
            ],
            mitigations: [
                "RMT11: OAuth provides a secure way to authenticate users.",
                "RMT12:  OAuth's inherent flexibility allows it to cater to different levels of risk associated with various account types.",
                "RMT13:  OAuth adapts to changing risk levels by allowing for the revocation and renewal of tokens."
            ]
        },
        {
            title: "Maintenance Problems",
            risks: [
                "T14:  Data loss and service interruption cripple any online service."
            ],
            mitigations: [
                "RMT14: Through the use of our various developer tools we will perform regular updates and maintenance."
            ]
        }
    ],
    [
        {
            title: "Security",
            risks: [
                "S1: DOS attacks are a common concern.",
                "S2: Injection attacks are unfortunately not completely avoidable."
            ],
            mitigations: [
                "SM1: We will implement IP tracking/firewalls.",
                "SM2: We will ensure to validate all user data."
            ]
        }
    ],
    [
        {
            title: "User/Customer",
            risks: [
                "U1: Users have unauthorized access.",
                "U2: Users have privacy concerns.",
                "U3: Users have difficulty using new interfaces."
            ],
            mitigations: [
                "RMU1: OAuth 2.0 protocol will reduce the impact of unauthorized access.",
                "RMU2: We will have transparent privacy policies detailing how user data is used, stored, and protected.",
                "RMU3:  We will conduct usability testing."
            ]
        }
    ],
    [
        {
            title: "Legal",
            risks: [
                "S1: Defamation- This is not to degrade or slander those within the local area affected or the county it reflects.",
                "S2: Privacy Laws- Laws as far as user data will follow the laws of of each participating county."
            ],
            mitigations: [
                "RMS1: We establish a clear and accessible reporting mechanism for users to flag inappropriate or infringing content.",
                "RMS2: We will implement privacy policies, anonymization of data published or shared."
            ]
        },
        {
            title: "Legal",
            risks: [
                "S3: Consent- Those who use their location as a contributor  when a file(s) are uploaded, the data collected will be under the contributor’s own consent to share the files voluntarily.",
                "S4: COPPA - The Children's Online Privacy Protection Act protects children under the age of 13."
            ],
            mitigations: [
                "RMS3: We will Implement strict content submission policies, requiring users to confirm ownership the rights to the content they upload or it's in the public domain.",
                "RMS4: We will use OAuth to ensure no one under the age of 13 user the site directly."
            ]
        }
    ]
];

const options = [
    "Current Process Flow",
    "Solution Process Flow",
    "MFCD",
    "Competition Matrix"
];

const risks = [
    "Technical Risks",
    "Security Risks",
    "Customer Risks",
    "Legal Risks"
];

const goToDeliverable = id => {
    const element = document.getElementById(id);
    element.scrollIntoView();
}

const Deliverables = () => {
    return (
        <>
            <Header header="Deliverables" />
            <div className="w-screen">

                <div className="grid grid-cols-1 gap-4 ">

                    {images.map((image, key) =>
                        <Deliverable
                            key={key}
                            title={options[key]}
                            id={options[key].replaceAll(' ', '').toLowerCase()}
                            image={image}
                        />
                    )}

                    {riskImages.map((images, key) =>
                        <Risks
                            key={key}
                            risks={riskDescriptions[key]}
                            images={images}
                            title={risks[key]}
                            id={risks[key].replaceAll(' ', '').toLowerCase()}
                        />
                    )}

                </div>

                <div className="fixed text-sm md:text-base
                 left-1/2 translate-x-[-50%]
                 w-[90vw]
                 md:w-[768px]
                 h-20
                 bottom-0 flex justify-center 
                 backdrop-blur-md border-t-black 
                 border-t-2 border-solid rounded-t-3xl
                 bg-opacity-25 bg-green-400">

                    {options.map((option, key) =>
                        <a
                            key={key}
                            onClick={() => { goToDeliverable(options[key].replaceAll(' ', '').toLowerCase()); }}
                            className={styles.navigational}
                        >
                            {option}
                        </a>
                    )}

                    {risks.map((risk, key) =>
                        <a
                            key={key}
                            onClick={() => { goToDeliverable(risks[key].replaceAll(' ', '').toLowerCase()); }}
                            className={styles.navigational}
                        >
                            {risk}
                        </a>
                    )}

                </div>
                
		        <div class="h-20"></div>            
            </div>
        </>
    );
};

export default Deliverables;