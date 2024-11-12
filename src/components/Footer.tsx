import { Box, Link, Text } from "@radix-ui/themes";

export const Footer: React.FC = () => {
    return (
        <footer className="text-start md:text-center lg:text-end mt-16 md:mt-56 h-24 md:mb-24">
            <Box>
                <Text color="gray" size="1">
                    Built using{" "}
                    <Link href="https://react.dev/" target="_blank">
                        React
                    </Link>{" "}
                    and the{" "}
                    <Link href="https://vite.dev/" target="_blank">
                        Vite
                    </Link>{" "}
                    build tool. Styled with{" "}
                    <Link
                        href="https://www.radix-ui.com/themes/docs/overview/getting-started"
                        target="_blank"
                    >
                        Radix UI Themes
                    </Link>{" "}
                    and{" "}
                    <Link href="https://tailwindcss.com/" target="_blank">
                        Tailwind CSS
                    </Link>
                    .
                </Text>
            </Box>
        </footer>
    );
};
