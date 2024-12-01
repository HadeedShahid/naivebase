"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { filterObj } from "@/utils/constants";
import { waitlistFormSchema } from "@/utils/formSchema";
import { Input } from "./ui/input";
import MultiSelect from "./ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getQouteCost } from "@/lib/actions";
import FormLayout from "./form-layout";

const WaitlistForm = () => {
  const form = useForm<z.infer<typeof waitlistFormSchema>>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      industry: "",
      platforms: [],
      country: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof waitlistFormSchema>,
    {
      onSuccess,
      onError,
    }: { onSuccess: (msg?: string) => void; onError: (msg: string) => void }
  ) {
    try {
      await getQouteCost(values);
      onSuccess("Successfully joined the waitlist!");
    } catch (error) {
      onError(
        error instanceof Error ? error.message : "Failed to join waitlist"
      );
    }
  }
  return (
    <>
      <FormLayout
        title="Join Waitlist"
        description="Fill out the form below to join our waitlist"
        triggerContent="Join Waitlist"
        buttonProps={{ variant: "default", size: "lg" }}
      >
        {({ onSuccess, onError }) => (
          <Form {...form}>
            <form
              id="contact-form"
              onSubmit={form.handleSubmit((values) =>
                onSubmit(values, { onSuccess, onError })
              )}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{filterObj.name.label}</FormLabel>
                    <Input
                      placeholder={filterObj.name.placeholder}
                      value={field.value}
                      onChange={field.onChange}
                      type={filterObj.name.type}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{filterObj.email.label}</FormLabel>
                    <Input
                      placeholder={filterObj.email.placeholder}
                      value={field.value}
                      onChange={field.onChange}
                      type={filterObj.email.type}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="platforms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{filterObj.platforms.label}</FormLabel>
                    <MultiSelect
                      options={filterObj.platforms.options}
                      onChange={(values: any) => {
                        field.onChange(
                          values.map((option: any) => option.value)
                        );
                      }}
                      placeholder={filterObj.platforms.placeholder}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between gap-10">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>{filterObj.country.label}</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select country"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {filterObj.country.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>{filterObj.industry.label}</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="text-slate-500"
                              placeholder="Select industry"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {filterObj.industry.options.map((item) => {
                            return (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-between gap-10"></div>

              <div className="w-full text-right">
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </Form>
        )}
      </FormLayout>
    </>
  );
};

export default WaitlistForm;
