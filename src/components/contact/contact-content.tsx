"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InsetGrainient } from "@/components/landing/inset-grainient";
import { TechLabel } from "@/components/landing/tech-label";
import { domainAcceptsMail } from "@/app/contact/actions";
import { cn } from "@/lib/utils";

const countryOptions = [
  { name: "United States", dial: "+1" },
  { name: "Canada", dial: "+1" },
  { name: "United Kingdom", dial: "+44" },
  { name: "United Arab Emirates", dial: "+971" },
  { name: "India", dial: "+91" },
  { name: "Singapore", dial: "+65" },
  { name: "Germany", dial: "+49" },
  { name: "Australia", dial: "+61" },
  { name: "France", dial: "+33" },
  { name: "Japan", dial: "+81" },
  { name: "China", dial: "+86" },
  { name: "South Korea", dial: "+82" },
  { name: "Brazil", dial: "+55" },
  { name: "Mexico", dial: "+52" },
  { name: "South Africa", dial: "+27" },
  { name: "Saudi Arabia", dial: "+966" },
  { name: "Qatar", dial: "+974" },
  { name: "Netherlands", dial: "+31" },
  { name: "Ireland", dial: "+353" },
  { name: "Other", dial: "+" },
];

const teamSizes = ["0-10", "10-100", "100-500", "500+"] as const;

const glassSelectTrigger =
  "h-8 w-full min-w-0 text-primary-foreground [&_svg]:text-primary-foreground data-placeholder:text-primary-foreground";

const blockedEmailDomains = new Set([
  "gmail.com",
  "outlook.com",
  "proton.me",
]);

const emailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function emailDomain(email: string) {
  return email.split("@")[1]?.trim().toLowerCase() ?? "";
}

function personalEmailMessage(domain: string) {
  if (blockedEmailDomains.has(domain) || domain.endsWith(".proton.me")) {
    return "Use a business email — personal providers like Gmail, Outlook, and Proton are not accepted.";
  }
  return null;
}

function isValidNationalNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 6 && digits.length <= 12;
}

function isValidE164(dialCode: string, national: string) {
  const cc = dialCode.replace(/\D/g, "");
  const n = national.replace(/\D/g, "");
  if (cc.length < 1 || cc.length > 3) return false;
  if (!isValidNationalNumber(n)) return false;
  const total = cc.length + n.length;
  return total >= 8 && total <= 15;
}

export function ContactContent() {
  const [country, setCountry] = React.useState("United States");
  const [customDial, setCustomDial] = React.useState("+");
  const [teamSize, setTeamSize] = React.useState<string | null>(null);
  const [optIn, setOptIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [phoneError, setPhoneError] = React.useState<string | null>(null);
  const [agreeError, setAgreeError] = React.useState<string | null>(null);
  const [dialError, setDialError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const customDialRef = React.useRef<HTMLInputElement>(null);

  const isOther = country === "Other";
  const dial = isOther
    ? customDial
    : (countryOptions.find((item) => item.name === country)?.dial ?? "+1");

  React.useEffect(() => {
    if (!isOther) return;
    customDialRef.current?.focus();
  }, [isOther]);

  function updateCountry(next: string) {
    setCountry(next);
    if (next === "Other") setCustomDial("+");
  }

  function updateCustomDial(value: string) {
    const digits = value.replace(/[^\d]/g, "").slice(0, 3);
    setCustomDial(digits ? `+${digits}` : "+");
    setDialError(null);
  }

  async function validateEmail(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      setEmailError("Enter a business email.");
      return false;
    }
    if (!emailFormat.test(trimmed)) {
      setEmailError("Enter a valid email address.");
      return false;
    }
    const domain = emailDomain(trimmed);
    const personal = personalEmailMessage(domain);
    if (personal) {
      setEmailError(personal);
      return false;
    }
    const acceptsMail = await domainAcceptsMail(domain);
    if (!acceptsMail) {
      setEmailError("This email domain does not appear to accept mail.");
      return false;
    }
    setEmailError(null);
    return true;
  }

  function validatePhone(nextDial = dial, nextPhone = phone) {
    if (isOther && nextDial.replace(/\D/g, "").length < 1) {
      setDialError("Enter a country code of 1–3 digits.");
      return false;
    }
    setDialError(null);
    if (!nextPhone.trim()) {
      setPhoneError("Enter a phone number.");
      return false;
    }
    if (!isValidE164(nextDial, nextPhone)) {
      setPhoneError("Enter a valid phone number for the selected country code.");
      return false;
    }
    setPhoneError(null);
    return true;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!optIn) {
      setAgreeError("Please agree to receive communications before submitting.");
      return;
    }
    if (!teamSize) return;
    setAgreeError(null);
    setSubmitting(true);
    const emailOk = await validateEmail(email);
    const phoneOk = validatePhone();
    if (!emailOk || !phoneOk) {
      setSubmitting(false);
      return;
    }
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`,
      `Company: ${data.get("company") ?? ""}`,
      `Job title: ${data.get("jobTitle") ?? ""}`,
      `Email: ${email.trim()}`,
      `Phone: ${dial} ${phone.replace(/\D/g, "")}`,
      `Country: ${country}`,
      `Team size: ${teamSize}`,
    ];
    const href = `mailto:demo@purplelens.ai?subject=${encodeURIComponent(
      "Contact request"
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSubmitting(false);
  }

  return (
    <section className="relative -mt-px overflow-hidden pb-16 pt-0 text-primary-foreground lg:pb-24">
      <InsetGrainient wash="hero" className="overflow-hidden" />
      <div
        className="pointer-events-none absolute top-0 right-[max(0px,calc(50%-40rem))] left-[max(0px,calc(50%-40rem))] h-px bg-white/70"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-8 px-4 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-16 lg:pt-28">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28">
          <TechLabel className="text-primary-foreground/75">
            [ Contact Us ]
          </TechLabel>
          <h1 className="text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
            Get In Touch With Us!
          </h1>
          <p className="max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Tell us about your environment and we&apos;ll follow up with a
            focused walkthrough — no generic pitch deck.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative min-w-0 border border-white/42 bg-white/10 p-4 backdrop-blur-md sm:p-8"
        >
          <span className="pointer-events-none absolute top-0 left-0 size-2.5 border-t border-l border-white/75" />
          <span className="pointer-events-none absolute top-0 right-0 size-2.5 border-t border-r border-white/75" />
          <span className="pointer-events-none absolute bottom-0 left-0 size-2.5 border-b border-l border-white/75" />
          <span className="pointer-events-none absolute right-0 bottom-0 size-2.5 border-r border-b border-white/75" />

          <FieldGroup>
            <h2 className="text-2xl font-medium tracking-tight">
              Request a conversation
            </h2>

            <FieldGroup className="grid sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="firstName">First Name*</FieldLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">Last Name*</FieldLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  autoComplete="family-name"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="company">Company name*</FieldLabel>
                <Input
                  id="company"
                  name="company"
                  required
                  autoComplete="organization"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="jobTitle">Job Title*</FieldLabel>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  required
                  autoComplete="organization-title"
                />
              </Field>
              <Field data-invalid={emailError ? true : undefined}>
                <FieldLabel htmlFor="email">Business Email*</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  aria-invalid={emailError ? true : undefined}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError(null);
                  }}
                  onBlur={() => {
                    if (email.trim()) void validateEmail(email);
                  }}
                />
                <FieldError>{emailError}</FieldError>
              </Field>
              <Field data-invalid={phoneError || dialError ? true : undefined}>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <InputGroup className="min-w-0">
                  <InputGroupAddon align="inline-start">
                    {isOther ? (
                      <Input
                        ref={customDialRef}
                        value={customDial}
                        maxLength={4}
                        onChange={(event) =>
                          updateCustomDial(event.target.value)
                        }
                        inputMode="numeric"
                        autoComplete="tel-country-code"
                        aria-label="Country code"
                        aria-invalid={dialError ? true : undefined}
                        className="h-7 w-16 border-0 bg-transparent px-1 shadow-none"
                      />
                    ) : null}
                    <Select
                      value={country}
                      onValueChange={(value) => {
                        if (typeof value === "string") updateCountry(value);
                      }}
                    >
                      <SelectTrigger
                        aria-label="Country code"
                        className={cn(
                          glassSelectTrigger,
                          "h-7 border-0 bg-transparent px-1 shadow-none",
                          isOther ? "w-7" : "w-[4.75rem]"
                        )}
                      >
                        {isOther ? null : dial}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {countryOptions.map((item) => (
                            <SelectItem key={item.name} value={item.name}>
                              {item.dial === "+"
                                ? `Other`
                                : `${item.dial} ${item.name}`}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </InputGroupAddon>
                  <InputGroupInput
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={phone}
                    aria-invalid={phoneError ? true : undefined}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setPhoneError(null);
                    }}
                    onBlur={() => validatePhone()}
                  />
                </InputGroup>
                <FieldError>{dialError ?? phoneError}</FieldError>
              </Field>
            </FieldGroup>

            <Field>
              <FieldLabel htmlFor="country">Country*</FieldLabel>
              <Select
                value={country}
                onValueChange={(value) => {
                  if (typeof value === "string") updateCountry(value);
                }}
              >
                <SelectTrigger id="country" className={glassSelectTrigger}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countryOptions.map((item) => (
                      <SelectItem key={item.name} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="teamSize">Team size*</FieldLabel>
              <Select
                value={teamSize ?? undefined}
                onValueChange={(value) => {
                  if (typeof value === "string") setTeamSize(value);
                }}
              >
                <SelectTrigger id="teamSize" className={glassSelectTrigger}>
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {teamSizes.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <FieldDescription className="text-primary-foreground [&>a]:text-primary-foreground [&>a]:underline">
              We use this information to respond to your enquiry. Read our{" "}
              <a href="/#privacy">Privacy Policy</a> to see how we handle it.
            </FieldDescription>

            <Field
              orientation="horizontal"
              data-invalid={agreeError ? true : undefined}
            >
              <Checkbox
                id="optIn"
                checked={optIn}
                required
                aria-invalid={agreeError ? true : undefined}
                onCheckedChange={(checked) => {
                  setOptIn(checked === true);
                  if (checked === true) setAgreeError(null);
                }}
              />
              <FieldLabel htmlFor="optIn" className="font-normal">
                I agree to receive other communications from PurpleLens.*
              </FieldLabel>
            </Field>
            <FieldError>{agreeError}</FieldError>

            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="h-11 w-full rounded-full px-6 sm:w-fit"
              disabled={!teamSize || !optIn || submitting}
            >
              Submit
              <ArrowRight data-icon="inline-end" />
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
}
