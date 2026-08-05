"use client";

import { useState } from "react";

const compactCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  notation: "compact",
});

const wholeNumber = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [members, setMembers] = useState(100_000);
  const [annualValue, setAnnualValue] = useState(480);
  const [retentionLift, setRetentionLift] = useState(1.1);
  const [monthlyCost, setMonthlyCost] = useState(0.25);

  const retainedMembers = members * (retentionLift / 100);
  const modeledValue = retainedMembers * annualValue;
  const annualCost = members * monthlyCost * 12;
  const netImpact = modeledValue - annualCost;
  const roi = annualCost > 0 ? (netImpact / annualCost) * 100 : 0;
  const breakEvenLift = members > 0 && annualValue > 0
    ? (annualCost / (members * annualValue)) * 100
    : 0;

  return (
    <div className="calculator-grid">
      <div className="calculator-controls">
        <div className="range-field">
          <div className="range-heading">
            <label htmlFor="members">Active members</label>
            <output htmlFor="members">{wholeNumber.format(members)}</output>
          </div>
          <input
            id="members"
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={members}
            onChange={(event) => setMembers(Number(event.target.value))}
          />
          <div className="range-limits" aria-hidden="true">
            <span>10K</span>
            <span>1M</span>
          </div>
        </div>

        <div className="range-field">
          <div className="range-heading">
            <label htmlFor="annual-value">Annual contribution margin per retained member</label>
            <output htmlFor="annual-value">${wholeNumber.format(annualValue)}</output>
          </div>
          <input
            id="annual-value"
            type="range"
            min="100"
            max="1200"
            step="20"
            value={annualValue}
            onChange={(event) => setAnnualValue(Number(event.target.value))}
          />
          <div className="range-limits" aria-hidden="true">
            <span>$100</span>
            <span>$1,200</span>
          </div>
        </div>

        <div className="range-field">
          <div className="range-heading">
            <label htmlFor="retention-lift">Modeled retention lift</label>
            <output htmlFor="retention-lift">{retentionLift.toFixed(1)} pts</output>
          </div>
          <input
            id="retention-lift"
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={retentionLift}
            onChange={(event) => setRetentionLift(Number(event.target.value))}
          />
          <div className="range-limits" aria-hidden="true">
            <span>0.1 pts</span>
            <span>3.0 pts</span>
          </div>
        </div>

        <div className="range-field">
          <div className="range-heading">
            <label htmlFor="monthly-cost">Monthly program cost per member</label>
            <output htmlFor="monthly-cost">${monthlyCost.toFixed(2)}</output>
          </div>
          <input
            id="monthly-cost"
            type="range"
            min="0.05"
            max="0.5"
            step="0.05"
            value={monthlyCost}
            onChange={(event) => setMonthlyCost(Number(event.target.value))}
          />
          <div className="range-limits" aria-hidden="true">
            <span>$0.05</span>
            <span>$0.50</span>
          </div>
        </div>
      </div>

      <div className="calculator-results" aria-live="polite">
        <div className="results-kicker">Your modeled annual scenario</div>
        <div className="primary-result">
          <span>Net value after program cost</span>
          <strong className={netImpact < 0 ? "negative" : undefined}>
            {compactCurrency.format(netImpact)}
          </strong>
        </div>
        <div className="result-list">
          <div>
            <span>Members retained</span>
            <strong>{wholeNumber.format(Math.round(retainedMembers))}</strong>
          </div>
          <div>
            <span>Value preserved</span>
            <strong>{compactCurrency.format(modeledValue)}</strong>
          </div>
          <div>
            <span>Annual program cost</span>
            <strong>{compactCurrency.format(annualCost)}</strong>
          </div>
          <div>
            <span>Modeled ROI</span>
            <strong className={roi < 0 ? "negative" : undefined}>{Math.round(roi)}%</strong>
          </div>
        </div>
        <div className="break-even">
          <span>Break-even retention lift</span>
          <strong>{breakEvenLift.toFixed(2)} percentage points</strong>
        </div>
        <p>
          This is a transparent planning model, not a performance guarantee. It excludes rollout,
          tax, and other implementation-specific costs.
        </p>
      </div>
    </div>
  );
}
