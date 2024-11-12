import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Flex, Link } from "@radix-ui/themes";

export const Socials: React.FC = () => {
    return (
        <Flex
            justify={{
                initial: "center",
                md: "start",
            }}
            gap="3"
            className="mt-9"
        >
            <Link
                href="https://www.linkedin.com/in/jesse-fentress"
                target="_blank"
                className="text-gray-500 hover:text-slate-200"
            >
                <LinkedInLogoIcon className="social-icon hover:text-white" />
            </Link>
            <Link
                href="https://github.com/JesseFentress"
                target="_blank"
                className="text-gray-500 hover:text-slate-200"
            >
                <GitHubLogoIcon className="social-icon" />
            </Link>
        </Flex>
    );
};
