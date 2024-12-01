"use client";
import React, { ReactNode, useState } from "react";
import { ButtonProps } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Layout from "./ui/layout";

interface FormLayoutProps {
  children: ReactNode | (({ onSuccess, onError }: FormHandlers) => ReactNode);
  title?: string;
  description?: string;
  triggerContent?: ReactNode;
  buttonProps?: ButtonProps;
  trigger?: ReactNode;
}

interface FormHandlers {
  onSuccess: (message?: string) => void;
  onError: (message?: string) => void;
}

const FormLayout = ({
  children,
  title,
  description,
  triggerContent,
  buttonProps,
  trigger,
}: FormLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = (message?: string) => {};

  const handleError = (message?: string) => {};

  return (
    <>
      <Layout
        title={title}
        description={description}
        triggerContent={triggerContent}
        buttonProps={buttonProps}
        trigger={trigger}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {typeof children === "function"
          ? children({ onSuccess: handleSuccess, onError: handleError })
          : children}
      </Layout>
    </>
  );
};

export default FormLayout;
