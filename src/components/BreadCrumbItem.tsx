import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Link, Text } from "@radix-ui/themes";

type BreadCrumbItemProps = {
    label: string;
    section: string;
    active: boolean;
};

export const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({
    label,
    section,
    active,
}) => {
    return (
        <li className={`nav-item p-1 ${active ? "active" : ""}`}>
            <Link color="gray" underline="none" href={section} className="flex">
                <DoubleArrowRightIcon
                    className={`place-self-center me-2 fade-right ${
                        active ? "fade-right-in" : ""
                    }`}
                />
                <Text as="span" weight="medium" className="capitalize">
                    {label}
                </Text>
            </Link>
        </li>
    );
};
