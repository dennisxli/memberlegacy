"use client";

import { useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const wholeNumber = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

type CalculatorValues = {
  eligibleCustomers: string;
  coveredCustomers: string;
  annualCostPerCoveredCustomer: string;
  fixedPilotCost: string;
  contributionMarginPerRelationship: string;
};

const initialValues: CalculatorValues = {
  eligibleCustomers: "",
  coveredCustomers: "",
  annualCostPerCoveredCustomer: "",
  fixedPilotCost: "",
  contributionMarginPerRelationship: "",
};

function parsePositiveNumber(value: string) {
  const parsed = Number(value.replaceAll(",", ""));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function ThresholdCalculator() {
  const [values, setValues] = useState<CalculatorValues>(initialValues);

  const eligibleCustomers = parsePositiveNumber(values.eligibleCustomers);
  const coveredCustomers = parsePositiveNumber(values.coveredCustomers);
  const annualCostPerCoveredCustomer = parsePositiveNumber(values.annualCostPerCoveredCustomer);
  const fixedPilotCost = parsePositiveNumber(values.fixedPilotCost);
  const contributionMarginPerRelationship = parsePositiveNumber(
    values.contributionMarginPerRelationship,
  );

  const coverageIsValid = coveredCustomers <= eligibleCustomers;
  const hasCompleteInputs =
    eligibleCustomers > 0 &&
    coveredCustomers > 0 &&
    annualCostPerCoveredCustomer > 0 &&
    fixedPilotCost > 0 &&
    contributionMarginPerRelationship > 0 &&
    coverageIsValid;

  const annualBenefitCost = coveredCustomers * annualCostPerCoveredCustomer;
  const totalAnnualCost = annualBenefitCost + fixedPilotCost;
  const incrementalRelationshipsRequired = hasCompleteInputs
    ? Math.ceil(totalAnnualCost / contributionMarginPerRelationship)
    : 0;
  const breakEvenRate = hasCompleteInputs
    ? (incrementalRelationshipsRequired / eligibleCustomers) * 100
    : 0;
  const requiredMarginPerEligibleMember = hasCompleteInputs
    ? totalAnnualCost / eligibleCustomers
    : 0;

  function updateValue(field: keyof CalculatorValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  return (
    <>
      <div className="calculator-grid threshold-calculator">
        <div className="calculator-controls threshold-controls">
          <div className="calculator-instructions">
            <span>Your inputs</span>
            <p>Use a specific cohort and your own approved planning assumptions.</p>
          </div>

          <div className="number-field-grid">
            <label className="number-field">
              <span>Eligible members</span>
              <small>People included in the business case denominator</small>
              <input
                name="eligibleCustomers"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                placeholder="e.g. 100,000"
                value={values.eligibleCustomers}
                onChange={(event) => updateValue("eligibleCustomers", event.target.value)}
              />
            </label>

            <label className="number-field">
              <span>Covered members</span>
              <small>People whose benefit cost is included</small>
              <input
                name="coveredCustomers"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                placeholder="e.g. 50,000"
                value={values.coveredCustomers}
                onChange={(event) => updateValue("coveredCustomers", event.target.value)}
              />
            </label>

            <label className="number-field">
              <span>Annual cost per covered member</span>
              <small>Estimated benefit and variable administration cost</small>
              <div className="currency-input">
                <span aria-hidden="true">$</span>
                <input
                  name="annualCostPerCoveredCustomer"
                  type="number"
                  min="0.01"
                  step="0.01"
                  inputMode="decimal"
                  placeholder="Enter amount"
                  value={values.annualCostPerCoveredCustomer}
                  onChange={(event) =>
                    updateValue("annualCostPerCoveredCustomer", event.target.value)
                  }
                />
              </div>
            </label>

            <label className="number-field">
              <span>Fixed annual pilot cost</span>
              <small>Implementation, operations, and measurement</small>
              <div className="currency-input">
                <span aria-hidden="true">$</span>
                <input
                  name="fixedPilotCost"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Enter amount"
                  value={values.fixedPilotCost}
                  onChange={(event) => updateValue("fixedPilotCost", event.target.value)}
                />
              </div>
            </label>

            <label className="number-field number-field-wide">
              <span>Contribution margin per retained, added, or upgraded relationship</span>
              <small>Annual value your finance team assigns to one incremental relationship</small>
              <div className="currency-input">
                <span aria-hidden="true">$</span>
                <input
                  name="contributionMarginPerRelationship"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Enter amount"
                  value={values.contributionMarginPerRelationship}
                  onChange={(event) =>
                    updateValue("contributionMarginPerRelationship", event.target.value)
                  }
                />
              </div>
            </label>
          </div>

          {!coverageIsValid ? (
            <p className="calculator-validation" role="alert">
              Covered members cannot exceed eligible members.
            </p>
          ) : null}
        </div>

        <div className="calculator-results threshold-results" aria-live="polite">
          <div className="results-kicker">Break even output</div>
          <div className="primary-result">
              <span>Incremental relationships required to break even</span>
            <strong>
              {hasCompleteInputs
                ? wholeNumber.format(incrementalRelationshipsRequired)
                : "Enter your inputs"}
            </strong>
          </div>
          <div className="result-list">
            <div>
              <span>Annual benefit cost</span>
              <strong>{hasCompleteInputs ? currency.format(annualBenefitCost) : "Not calculated"}</strong>
            </div>
            <div>
              <span>Total annual cost</span>
              <strong>{hasCompleteInputs ? currency.format(totalAnnualCost) : "Not calculated"}</strong>
            </div>
            <div>
              <span>Break even rate</span>
              <strong>{hasCompleteInputs ? `${breakEvenRate.toFixed(2)}%` : "Not calculated"}</strong>
            </div>
            <div>
              <span>Required margin per eligible member</span>
              <strong>
                {hasCompleteInputs
                  ? currency.format(requiredMarginPerEligibleMember)
                  : "Not calculated"}
              </strong>
            </div>
          </div>
          <div className="model-formula">
            <span>How the threshold works</span>
            <strong>Total annual cost ÷ contribution margin per relationship</strong>
            <small>
              Break even rate equals required incremental relationships divided by eligible members.
            </small>
          </div>
          <p>
            This tool does not predict retention, conversion, or program performance. It shows the
            business threshold your pilot would need to clear using the assumptions you enter.
          </p>
        </div>
      </div>

      <section className="strategic-value-panel" aria-labelledby="strategic-value-heading">
        <div className="strategic-value-heading">
          <span>Interpret the threshold</span>
          <h3 id="strategic-value-heading">
            The same cost threshold can be supported by different sources of business value.
          </h3>
          <p>Define the value levers and measurement denominators before judging the pilot.</p>
        </div>
        <div className="strategic-value-grid channel-value-grid">
          <article>
            <span>Acquisition and selection</span>
            <h4>New and higher-value relationships</h4>
            <p>
              Measure incremental members or higher-value product and tier selection against the
              approved pilot baseline.
            </p>
          </article>
          <article>
            <span>Retention and depth</span>
            <h4>Continued and deeper relationships</h4>
            <p>
              Evaluate continued relationships, greater product depth, balances, or usage where
              those outcomes fit the program objective.
            </p>
          </article>
          <article>
            <span>Optional participation</span>
            <h4>Approved enhancement conversion</h4>
            <p>
              Track member-paid enhancement conversion only where the approved program includes
              an optional offer.
            </p>
          </article>
          <article>
            <span>Denominator discipline</span>
            <h4>Eligible, activated, and covered differ</h4>
            <p>
              Keep each population distinct so the cost base, adoption, and break-even rate remain clear.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
