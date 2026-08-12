"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function DesignPilotForm() {
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
      const response = await fetch("/api/pilot", {
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
      setMessage("Thank you. Someone from Member Legacy will respond within 48 hours.");
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
    <form className="case-study-form pilot-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Pilot inquiry</span>
        <h2>Tell us what you want to evaluate.</h2>
        <p>Fields marked with an asterisk are required. We respond within 48 hours.</p>
      </div>

      <label>
        <span className="field-label">Name <b className="required-mark">*</b></span>
        <input name="name" type="text" autoComplete="name" maxLength={100} required />
      </label>

      <div className="form-field-row">
        <label>
          <span className="field-label">Work email <b className="required-mark">*</b></span>
          <input name="workEmail" type="email" autoComplete="email" maxLength={160} required />
        </label>
        <label>
          <span className="field-label">Company <b className="required-mark">*</b></span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={160}
            required
          />
        </label>
      </div>

      <label>
        <span className="field-label">Primary use case <b className="required-mark">*</b></span>
        <select name="primaryUseCase" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option value="Financial membership or paid tier">
            Financial membership or paid tier
          </option>
          <option value="Commerce membership">Commerce membership</option>
          <option value="Other recurring member platform">Other recurring member platform</option>
        </select>
      </label>

      <label>
        <span className="field-label">
          Business objective or question <b className="optional-mark">Optional</b>
        </span>
        <textarea
          name="businessObjective"
          rows={5}
          maxLength={2000}
          placeholder="What cohort, membership objective, or economic question are you evaluating?"
        />
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="button case-study-submit"
        type="submit"
        disabled={submissionState === "submitting"}
      >
        {submissionState === "submitting" ? "Sending request" : "Request a pilot working session"}
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
