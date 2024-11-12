import { Avatar, Flex, Grid, Heading } from "@radix-ui/themes";

export const Details: React.FC = () => {
    return (
        <aside className="mt-5 rounded ">
            <Grid
                columns={{
                    initial: "1",
                    md: "1",
                }}
                gap="6"
            >
                <Flex
                    direction="column"
                    align={{
                        initial: "center",

                        md: "start",
                    }}
                    gap="0"
                >
                    <Flex gap="4">
                        <Avatar
                            src="/headshot.jpg"
                            fallback="Jesse Fentress Headshot"
                            size="7"
                            className="text-center"
                        />
                        <Flex direction="column" className="m-auto">
                            <Heading as="h1">Jesse Fentress</Heading>
                            <Heading
                                as="h2"
                                size="3"
                                weight="light"
                                color="gray"
                            >
                                Software Engineer
                            </Heading>
                        </Flex>
                    </Flex>
                </Flex>
            </Grid>
        </aside>
    );
};
