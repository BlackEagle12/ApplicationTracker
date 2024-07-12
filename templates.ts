class collection  {
    searchboxValue: string; //not null
    location: {
        state: string, // not null
        country: string // not null
    };
    searchType: searchType = searchType.job //not null 
    datePosted: datePosted = datePosted.anytime; //not null
    experienceLavel: experienceLavel[]; // null
    company: string[]; // null
    remote: remote[]; // null
    jobType: jobType | undefined = undefined; // null
    isEasyApply: boolean = false; // not null
    under10Applicant: boolean = false; // not null
    inYourNetwork: boolean = false; // not null
    faireChanceEmployer: boolean = false; // not null
    industry: industry; // null -> otherValuesCanBeAdded
    jobFunction: jobFunction; // null -> otherValuesCanBeAdded
    jobTitle: jobTitle; // null --> recomanded to be null
    Benefits: benifits; // null
    Commitments: commitments //null
}

enum searchType{
    all,
    people,
    job,
    post,
    companies,
    schools,
    groups,
    events
}

enum datePosted{
    anytime,
    pastMonth,
    pastWeek,
    past24Hours
}

enum experienceLavel{
    internship,
    entryLavel,
    associate,
    midSeniourLavel,
    director,
    executive
}

enum remote{
    remote,
    onSite,
    hybride
}

enum jobType{
    fullTime,
    partTime,
    contract,
    internship
}

enum industry{
    ITServicesandITConsulting,
    SoftwareDevelopment,
    StaffingAndRecruiting,
    "Technology,InformationAndInternet",
    "Technology,InformationAndMedia",
    HumanResourcesServices,
    FinancialServices,
    InformationTechnologyAndServices,
    BusinessConsultingAndServices,
    HumanResources,
    MediaAndTelecommunications,
    Retail,
    InformationServices,
    ProfessionalServices,
    Banking
}

enum jobFunction{
    InformationTechnology,
    Engineering,
    Other,
    BusinessDevelopment,
    Sales,
    Design,
    Consulting,
    "Art/Creative",
    Management,
    Finance,
    ProductManagement,
    ProjectManagement
}

enum jobTitle{
    SoftwareEngineer,
    FullStackEngineer,
    JavascriptDeveloper,
    ApplicationDeveloper,
    PythonDeveloper,
    FrontendDeveloper,
    BackEndDeveloper,
    JavaSoftwareEngineer,
    SeniorSoftwareEngineer,
    CloudEngineer,
    SeniorJavaSoftwareEngineer,
    SeniorDotnetDeveloper
}

enum benifits{
    MedicalInsurance,
    VisionInsurance,
    DentalInsurance,
    "401(k)",
    PensionPlan,
    PaidMaternityLeave,
    PaidPaternityLeave,
    CommuterBenefits,
    StudentLoanAssistance,
    TuitionAssistance,
    DisabilityInsurance
}

enum commitments{
    CareerGrowthAndLearning,
    DiversityEquityAndInclusion,
    EnvironmentalSustainability,
    SocialImpact,
    "WorkLifeBalance"
}