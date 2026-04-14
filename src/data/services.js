import accountantImage from "../assets/images/accountant.jpeg";
import accountantAltImage from "../assets/images/accountant3.jpg";
import auditImage from "../assets/images/audit.jpg";
import nairaImage from "../assets/images/nigerian-naira-money-bills-tax.webp";

const services = [
  {
    slug: "accounting-services",
    title: "Accounting Services",
    description:
      "Reliable financial reporting and account management tailored for businesses in Nigeria.",
    fullExplanation:
      "We manage your core accounting cycle from transaction classification to month-end reporting, so your numbers stay accurate and decision-ready. You get clean financial statements, better visibility into profitability, and the confidence to present solid records to investors, partners, and regulators.",
    iconKey: "calculator",
    image: accountantImage,
    imageAlt: "Accounting documents and calculator on desk",
  },
  {
    slug: "book-keeping-services",
    title: "Book-keeping Services",
    description:
      "Accurate daily transaction records to keep your books clean, compliant, and audit-ready.",
    fullExplanation:
      "Our bookkeeping service captures and reconciles day-to-day transactions, tracks receivables and payables, and keeps your records organized in real time. This reduces errors, prevents reporting delays, and ensures your business is always ready for tax filing, audits, and lender reviews.",
    iconKey: "book",
    image: accountantAltImage,
    imageAlt: "Bookkeeping team reviewing business records",
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    description:
      "End-to-end payroll processing for teams of all sizes, including deductions and remittances.",
    fullExplanation:
      "We handle salary calculations, statutory deductions, remittances, and payroll reporting with consistency and confidentiality. Whether your team is small or growing, we help you pay staff on time, avoid compliance penalties, and maintain trust across your workforce.",
    iconKey: "wallet",
    image: nairaImage,
    imageAlt: "Payroll and salary planning with Nigerian naira notes",
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory",
    description:
      "Smart tax planning and guidance to minimize risk while staying compliant with local regulations.",
    fullExplanation:
      "From tax planning to filing support, we guide your business on practical ways to remain compliant while optimizing obligations legally. We help you interpret regulatory updates, prepare accurate documentation, and reduce surprises during tax assessments.",
    iconKey: "receipt",
    image: nairaImage,
    imageAlt: "Tax advisory and regulation reference material",
  },
  {
    slug: "audit-services",
    title: "Audit Services",
    description:
      "Independent audit support to improve transparency, confidence, and operational efficiency.",
    fullExplanation:
      "Our audit support strengthens financial transparency by reviewing records, controls, and reporting practices. We identify gaps early, recommend corrective actions, and help your organization build stronger governance for stakeholders, lenders, and regulators.",
    iconKey: "shield",
    image: auditImage,
    imageAlt: "Audit documents and compliance review desk",
  },
  {
    slug: "budgeting-and-forecasting",
    title: "Budgeting & Forecasting",
    description:
      "Data-informed budgeting and forecasting to help you make stronger financial decisions.",
    fullExplanation:
      "We design practical budgets and forward-looking forecasts aligned with your goals, market conditions, and cash flow realities. With scenario planning and periodic reviews, you can make smarter spending decisions and stay prepared for uncertainty.",
    iconKey: "chart",
    image: accountantImage,
    imageAlt: "Business budgeting charts and forecasting workspace",
  },
  {
    slug: "research-and-data-analytics",
    title: "Research and Data Analytics",
    description:
      "Turn financial and business data into clear insights for strategy and performance.",
    fullExplanation:
      "We transform raw operational and financial data into clear dashboards and insights that support better strategy. This includes trend analysis, performance benchmarking, and targeted recommendations that help leadership act quickly and confidently.",
    iconKey: "search",
    image: accountantAltImage,
    imageAlt: "Analyst reviewing business data and performance reports",
  },
  {
    slug: "business-consultancy",
    title: "Business Consultancy",
    description:
      "Practical business advisory to optimize structure, cash flow, and long-term growth.",
    fullExplanation:
      "Our consultancy support helps you solve growth bottlenecks, optimize processes, and strengthen financial discipline. We work with you on business model refinement, pricing clarity, and execution plans that are practical for your stage and market.",
    iconKey: "briefcase",
    image: accountantImage,
    imageAlt: "Business consultant presenting strategy plan",
  },
  {
    slug: "hr-consultancy",
    title: "HR Consultancy",
    description:
      "HR policy and workforce support to build compliant, productive, and people-first teams.",
    fullExplanation:
      "We support HR policy design, role structure, documentation standards, and employee process improvements that fit your business. The result is a more compliant and productive workforce with clearer expectations and stronger operational consistency.",
    iconKey: "users",
    image: accountantAltImage,
    imageAlt: "HR team discussion and workforce planning session",
  },
  {
    slug: "regulation-and-compliance",
    title: "Regulation & Compliance",
    description:
      "Stay aligned with evolving financial and corporate compliance requirements in Nigeria.",
    fullExplanation:
      "We help your organization stay aligned with changing regulatory obligations through compliance checklists, process reviews, and risk controls. This reduces legal exposure, improves operational confidence, and protects your business reputation.",
    iconKey: "scale",
    image: auditImage,
    imageAlt: "Compliance documentation and regulatory guidelines",
  },
];

export default services;
