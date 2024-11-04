import { Button, Flex, Spinner, TextArea, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react"

type FormValues = {
    from_name: string,
    subject: string,
    message: string
}

export const ContactForm: React.FC = () => {
    const form: any = useRef();
    const [formSuccess, setFormSuccess] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const handleFormValidation = (form) => {}

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsPending(true);
        handleFormValidation(form)
        // emailjs.sendForm(
        //     import.meta.env.VITE_EMAIL_SERVICE_ID,
        //     import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        //     form.current,
        //     {
        //         publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
        //     }
        // )
        // .then(() => {
            
        // })
        // .catch(() => {
        //     // Oh no error
        // })
        // .finally(() => setIsPending(false))
        setTimeout(() => setIsPending(false), 1000)
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <fieldset className="border-0" disabled={isPending}>
                <Flex direction="column" gap="4">
                    <TextField.Root placeholder="Your Name"></TextField.Root>
                    <TextField.Root placeholder="Subject"></TextField.Root>
                    <TextArea placeholder="Message..." size="3"></TextArea>
                    <Button className="w-full md:w-32" variant="soft">
                        <Spinner loading={isPending}></Spinner>
                        Send
                    </Button>
                </Flex>
            </fieldset>
        </form>
    );
}