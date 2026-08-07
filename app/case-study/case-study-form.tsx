"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function CaseStudyForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/case-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your request.");
      }

      form.reset();
      setSubmissionState("success");
      setMessage("Thank you. Someone from Member Legacy will reach out within 48 hours.");
    } catch (error) {
      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again shortly.",
      );
    }
  }

  return (
    <form className="case-study-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Request access</span>
        <h2>Tell us about your priorities.</h2>
        <p>All fields are required. We will respond within 48 hours.</p>
      </div>

      <div className="form-field-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          Title
          <input
            name="title"
            type="text"
            autoComplete="organization-title"
            maxLength={120}
            required
          />
        </label>
      </div>

      <label>
        Company email
        <input name="companyEmail" type="email" autoComplete="email" maxLength={160} required />
      </label>

      <label>
        Phone number
        <input name="phone" type="tel" autoComplete="tel" maxLength={40} required />
      </label>

      <label>
        Why are you interested?
        <textarea name="interest" rows={5} minLength={20} maxLength={1500} required />
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="button case-study-submit" type="submit" disabled={submissionState === "submitting"}>
        {submissionState === "submitting" ? "Sending request" : "Request a case study"}
        <ArrowRight aria-hidden="true" size={17} />
      </button>

      <p className="form-privacy">
        By submitting, you agree that Member Legacy may contact you about this request. Review our{" "}
        <Link href="/privacy">privacy notice</Link>.
      </p>

      {message ? (
        <div
          className={`form-message ${submissionState === "success" ? "success" : "error"}`}
          role={submissionState === "error" ? "alert" : "status"}
        >
          {submissionState === "success" ? <CheckCircle2 aria-hidden="true" size={18} /> : null}
          <span>{message}</span>
        </div>
      ) : null}
    </form>
  );
}
