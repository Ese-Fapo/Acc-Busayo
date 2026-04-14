import {
  BookOpen,
  Briefcase,
  Calculator,
  ChartColumnIncreasing,
  ReceiptText,
  Scale,
  SearchCheck,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import IconBox from "../ui/IconBox";

const iconMap = {
  accounting: Calculator,
  calculator: Calculator,
  book: BookOpen,
  payroll: Wallet,
  wallet: Wallet,
  tax: ReceiptText,
  receipt: ReceiptText,
  audit: ShieldCheck,
  shield: ShieldCheck,
  budgeting: ChartColumnIncreasing,
  chart: ChartColumnIncreasing,
  research: SearchCheck,
  search: SearchCheck,
  consultancy: Briefcase,
  briefcase: Briefcase,
  hr: Users,
  users: Users,
  compliance: Scale,
  scale: Scale,
};

export default function ServiceItem({ service }) {
  const Icon = iconMap[service.iconKey] ?? Briefcase;
  const navigate = useNavigate();

  const handleCardOpen = () => {
    navigate(`/services#${service.slug}`);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardOpen();
    }
  };

  return (
    <li>
      <div
        className="service-card-link"
        role="button"
        tabIndex={0}
        onClick={handleCardOpen}
        onKeyDown={handleCardKeyDown}
        aria-label={`Open full details for ${service.title}`}
      >
        <IconBox
          icon={Icon}
          title={service.title}
          description={service.description}
          imageSrc={service.image}
          imageAlt={service.imageAlt}
          footer={
            <Link
              to={`/services/${service.slug}`}
              className="btn btn--primary service-read-more"
              onClick={(event) => event.stopPropagation()}
            >
              Read More
            </Link>
          }
        />
      </div>
    </li>
  );
}
