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
import algorithmFlow1 from "./resources/algorithm_flow_1.png";
import algorithmFlow2 from "./resources/algorithm_flow_2.png";
import algorithmFlow3 from "./resources/algorithm_flow_3.png";
import algorithmFlow4 from "./resources/algorithm_flow_4.png";
import algorithmFlow5 from "./resources/algorithm_flow_5.png";
import algorithmFlow6 from "./resources/algorithm_flow_6.png";
import algorithmFlow7 from "./resources/algorithm_flow_7.png";
import guiMockup1 from "./resources/gui_mockup_1.png";
import guiMockup2 from "./resources/gui_mockup_2.png";
import guiMockup3 from "./resources/gui_mockup_3.png";
import databaseSchema from "./resources/database_schema.png";

const deliverablesData = [
    {
        id: "current-process-flow",
        images: [
            currentProcessFlow
        ],
        title: "Current Process Flow",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: false,
            isRisks: false,
            additionalStyles: ""
        }
    },
    {
        id: "solution-process-flow",
        images: [
            solutionProcessFlow
        ],
        title: "Solution Process Flow",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: false,
            isRisks: false,
            additionalStyles: ""
        }
    },
    {
        id: "mfcd",
        images: [
            mfcd
        ],
        title: "MFCD",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: false,
            isRisks: false,
            additionalStyles: ""
        }
    },
    {
        id: "competition-matrix",
        images: [
            competitionMatrix
        ],
        title: "Competition Matrix",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: false,
            isRisks: false,
            additionalStyles: "bg-black"
        }
    },
    {
        id: "algorithm-flow",
        images: [
            algorithmFlow1,
            algorithmFlow2,
            algorithmFlow3,
            algorithmFlow4,
            algorithmFlow5,
            algorithmFlow6,
            algorithmFlow7
        ],
        title: "Algorithm Flow",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: true,
            isRisks: false,
            additionalStyles: "bg-black"
        }
    },
    {
        id: "gui-mockups",
        images: [
            guiMockup1,
            guiMockup2,
            guiMockup3
        ],
        title: "GUI Mockups",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: true,
            isRisks: false,
            additionalStyles: ""
        }
    },
    {
        id: "database-schema",
        images: [
            databaseSchema
        ],
        title: "Database Schema",
        subtitles: null,
        risks: null,
        mitigations: null,
        specifications: {
            iterable: false,
            isRisks: false,
            additionalStyles: ""
        }
    },
    {
        id: "technical-risks",
        images: [
            potentialDesignMatrix,
            implementationMatrix1,
            implementationMatrix2,
            interfaceMatrix1,
            interfaceMatrix2,
            verificationMatrix,
            maintenanceMatrix
        ],
        title: "Technical Risks",
        subtitles: [
            "Potential Design",
            "Implementation",
            "Implementation",
            "Interface",
            "Interface",
            "Verification",
            "Maintenance"
        ],
        risks: [
            [
                "T1: Designs that are fundamentally flawed, infeasible, unstable or below Brendan's standards.",
                "T2: A poor design will expose itself as functional defects or hurdles to development that hinder project progress."
            ],
            [
                "T3: We will adopt off-the-shelf software.",
                "T4: There are inadequate resources for implementation and testing."                
            ],
            [
                "T5: Poor change management exists.",
                "T6: Poor data migration and tech integration can hinder any operation."
            ],
            [
                "T7: Spending too much time refining the look and feel of a user interface at the expense of Brendan's requirements.",
                "T8: Ignoring or deferring system-to-system interface requirements until the design phase or later."
            ],
            [
                "T9: We confuse which system \"owns\" the interfaces, creating delays in critical, cross-project planning.",
                "T10: We separate interface requirements from analysis models."
            ],
            [
                "T11: Every identity verification is unique.",
                "T12: The accounts are all different, so the level of risk for a verification varies.",
                "T13: Risk levels can change as technology, regulations, consumer behavior and criminal activities evolve."
            ],
            [
                "T14:  Data loss and service interruption cripple any online service."
            ]
        ],
        mitigations: [
            [
                "RMT1: Careful design planning prior to implementation can highlight any potential flaws in the design.",
                "RMT2: Through copious testing of functional aspects of the project, prior to completion of the total project."
            ],
            [
                "RMT3: Research all options, testing the software, and confirming vendor support before committing to any third-party software.",
                "RMT4: By pinpointing resources that can be dedicated to working with the vendor as well as rigorous testing prior to deployment of any code."
            ],
            [
                "RMT5: Our team will be using Git by adopting GitFlow for branching, enforcing code reviews, and maintain continuous integration.",
                "RMT6: We will establish a rollback plan, encourage collaboration, implement backup and disaster recovery measures, and monitor changes for improvement."
            ],
            [
                "RMT7: Proper project planning and prioritization via identification of functional requirements and prototyping.",
                "RMT8: Iterative development that touches each system of the project even if it’s not complete."
            ],
            [
                "RMT9: By starting interface analysis early in the design process we can assign system ownership before potential cross-project issues arise.",
                "RMT10: By drafting analysis models at the beginning of the project we can reduce interface requirement segregation."
            ],
            [
                "RMT11: OAuth provides a secure way to authenticate users.",
                "RMT12:  OAuth's inherent flexibility allows it to cater to different levels of risk associated with various account types.",
                "RMT13:  OAuth adapts to changing risk levels by allowing for the revocation and renewal of tokens."
            ],
            [
                "RMT14: Through the use of our various developer tools we will perform regular updates and maintenance."
            ]
        ],
        specifications: {
            iterable: true,
            isRisks: true,
            additionalStyles: ""
        }
    },
    {
        id: "security-risks",
        images: [
            securityRiskMatrix
        ],
        title: "Security Risks",
        subtitles: null,
        risks: [
            [
                "S1: DOS attacks are a common concern.",
                "S2: Injection attacks are unfortunately not completely avoidable."
            ]
        ],
        mitigations: [
            [
                "SM1: We will implement IP tracking/firewalls.",
                "SM2: We will ensure to validate all user data."
            ]
        ],
        specifications: {
            iterable: false,
            isRisks: true,
            additionalStyles: ""
        }
    },
    {
        id: "customer-risks",
        images: [
            customerMatrix
        ],
        title: "Customer Risks",
        subtitles: null,
        risks: [
            [
                "U1: Users have unauthorized access.",
                "U2: Users have privacy concerns.",
                "U3: Users have difficulty using new interfaces."
            ]
        ],
        mitigations: [
            [
                "RMU1: OAuth 2.0 protocol will reduce the impact of unauthorized access.",
                "RMU2: We will have transparent privacy policies detailing how user data is used, stored, and protected.",
                "RMU3:  We will conduct usability testing."
            ]
        ],
        specifications: {
            iterable: false,
            isRisks: true,
            additionalStyles: ""
        }
    },
    {
        id: "legal-risks",
        images: [
            legalMatrix1,
            legalMatrix2
        ],
        title: "Legal Risks",
        subtitles: null,
        risks: [
            [
                "S1: Defamation- This is not to degrade or slander those within the local area affected or the county it reflects.",
                "S2: Privacy Laws- Laws as far as user data will follow the laws of of each participating county."
            ],
            [
                "S3: Consent- Those who use their location as a contributor  when a file(s) are uploaded, the data collected will be under the contributor’s own consent to share the files voluntarily.",
                "S4: COPPA - The Children's Online Privacy Protection Act protects children under the age of 13."
            ]
        ],
        mitigations: [
            [
                "RMS1: We establish a clear and accessible reporting mechanism for users to flag inappropriate or infringing content.",
                "RMS2: We will implement privacy policies, anonymization of data published or shared."
            ],
            [
                "RMS3: We will Implement strict content submission policies, requiring users to confirm ownership the rights to the content they upload or it's in the public domain.",
                "RMS4: We will use OAuth to ensure no one under the age of 13 user the site directly."
            ]
        ],
        specifications: {
            iterable: true,
            isRisks: true,
            additionalStyles: ""
        }
    }
];

export { deliverablesData };