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
        <span>Program inquiry</span>
        <h2>Tell us where the relationship begins.</h2>
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
        <span className="field-label">
          Website <b className="optional-mark">Optional</b>
        </span>
        <input
          name="companyWebsite"
          type="url"
          inputMode="url"
          autoComplete="url"
          maxLength={240}
          placeholder="https://"
        />
      </label>

      <label>
        <span className="field-label">
          What product or service do your customers rely on? <b className="required-mark">*</b>
        </span>
        <input
          name="productService"
          type="text"
          maxLength={300}
          placeholder="Describe the core product or service"
          required
        />
      </label>

      <label>
        <span className="field-label">
          Who is the target customer group? <b className="optional-mark">Optional</b>
        </span>
        <input
          name="targetCustomerGroup"
          type="text"
          maxLength={300}
          placeholder="For example, premium-tier members, active renters, enrolled families, or account holders"
        />
      </label>

      <label>
        <span className="field-label">
          What business objective are you evaluating? <b className="required-mark">*</b>
        </span>
        <select name="businessObjective" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option value="Differentiate the core offering">Differentiate the core offering</option>
          <option value="Acquire new customers">Acquire new customers</option>
          <option value="Increase product or tier selection">Increase product or tier selection</option>
          <option value="Improve engagement or retention">Improve engagement or retention</option>
          <option value="Create a new revenue stream">Create a new revenue stream</option>
          <option value="Explore family continuity more broadly">Explore family continuity more broadly</option>
        </select>
      </label>

      <label>
        <span className="field-label">
          What would you want the family to be able to continue? <b className="optional-mark">Optional</b>
        </span>
        <textarea
          name="familyOutcome"
          rows={5}
          maxLength={2000}
          placeholder="Describe the value or support that should continue"
        />
      </label>

      <label>
        <span className="field-label">
          Approximate eligible population <b className="optional-mark">Optional</b>
        </span>
        <select name="eligiblePopulation" defaultValue="">
          <option value="">Select one</option>
          <option value="Under 25,000">Under 25,000</option>
          <option value="25,000 to 100,000">25,000 to 100,000</option>
          <option value="100,000 to 500,000">100,000 to 500,000</option>
          <option value="500,000 to 1 million">500,000 to 1 million</option>
          <option value="More than 1 million">More than 1 million</option>
          <option value="Not yet defined">Not yet defined</option>
        </select>
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Fax number
        <input name="faxNumber" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="button case-study-submit"
        type="submit"
        disabled={submissionState === "submitting"}
      >
        {submissionState === "submitting" ? "Sending request" : "Request a working session"}
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
