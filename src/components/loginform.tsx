import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { MoonLoader } from "react-spinners";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"; // Assurez-vous d'avoir les bonnes icônes importées
import Image from "next/image";

interface LoginFormProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => void;
    handleGithubLogin: () => void; // Ajout de la fonction pour le login avec GitHub
    handleGoogleLogin: () => void; // Ajout de la fonction pour le login avec Google
    isLoading: boolean;
}

export function LoginForm({ handleChange, handleSubmit, handleGithubLogin, handleGoogleLogin, isLoading }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(e, email, password);
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
                <Image src="/img/homie-logo.png" alt="homie-logo" width={250} height={150} />
            </div>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
                Please login to access your account.
            </p>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
                Don&apos;t have an account ? <a href="/signup" className="text-blue-500">Sign up !</a>
            </p>
            <form className="my-8" onSubmit={handleFormSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="homie@holbertonschool.com"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            handleChange(e);
                        }}
                        name="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            handleChange(e);
                        }}
                        name="password"
                    />
                </LabelInputContainer>
                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <MoonLoader color="#ffffff" size={24} />
                        </div>
                    ) : (
                        <>
                            Login &rarr;
                            <BottomGradient />
                        </>
                    )}
                </button>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                <div className="flex flex-col space-y-4">
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                        onClick={handleGithubLogin}
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Login with GitHub
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                        onClick={handleGoogleLogin}
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Login with Google
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default LoginForm;
