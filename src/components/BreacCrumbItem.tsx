import { ChevronRightIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Link, Separator, Text } from "@radix-ui/themes";

type BreadCrumbItemProps = {
    label: string,
    section: string,
    active: boolean
}

export const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({label, section, active}) => {
    
    // const handleScrollTo = (e) => {
    //     e.preventDefault();

    //     document.scroll
    // }

    return (
        <li className={`nav-item p-1 ${active ? 'active' : ''}`}>
            <Link color="gray" underline="none" href={section} className="flex">
                <DoubleArrowRightIcon className={`place-self-center me-2 fade-right ${ active ? "fade-right-in" : ""}`} />
                <Text as="span" className="capitalize">
                    {label}
                </Text>
                {/* <Box className="border-b-2 w-full m-auto ms-2"></Box> */}
            </Link>
        </li>
    );
}