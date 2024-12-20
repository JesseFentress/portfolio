import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import {
    Box,
    Flex,
    Heading,
    Link,
    Section,
    Strong,
    Text,
} from "@radix-ui/themes";

export const ContactSection: React.FC<any> = () => {
    return (
        <Section id="contact">
            <Heading
                as="h2"
                size="9"
                className="pb-9 uppercase text-iris-10"
                weight="medium"
            >
                Reach out
            </Heading>
            <Box>
                <Text color="gray" className="pb-6 hidden sm:block" size={"3"}>
                    Feel free to get in touch via{" "}
                    <span>
                        <Strong className="whitespace-nowrap text-white">
                            one of the links
                        </Strong>
                    </span>{" "}
                    or leave me a message on social media!
                </Text>
                <Flex
                    direction="column"
                    className="justify-self-center sm:justify-self-auto"
                >
                    <Flex align="center" gap="4">
                        <MobileIcon color="gray" />
                        <Link
                            href="tel:2157914772"
                            color="gray"
                            className="hover:text-white cursor-pointer"
                        >
                            +1 (215) 791-4772
                        </Link>
                    </Flex>
                    <Flex align="center" gap="4">
                        <EnvelopeClosedIcon color="gray" />
                        <Link
                            href="mailto:jesse.s.fentress@gmail.com"
                            color="gray"
                            className="hover:text-white cursor-pointer"
                        >
                            jesse.s.fentress@gmail.com
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Section>
    );
};
