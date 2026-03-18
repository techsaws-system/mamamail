export type Template03HTMLValues = {
  fromName: string;
  to: string;
  replyTo?: string | null;

  trademarkName: string;
  serialNumber: string;
  contactNumber: string;
  appointmentNumber: string;
};

export const Template03HTML = (values: Template03HTMLValues) => {
  return `
<h1 align="center" style="
  margin:0;
  font-size:20px;
  font-weight:700;
  letter-spacing:0.3px;
">
  <a
    href="https://uspto.gov"
    target="_blank"
    rel="noopener noreferrer"
    style="
      color:#2563eb;
      text-decoration:underline;
      font-weight:700;
    "
  >
    United States Patent and Trademark Office (USPTO)
  </a>
</h1>

<p align="center" style="
  margin:6px 0 14px 0;
  font-size:14px;
  font-weight:600;
  color:#374151;
">
  Initial Trademark Examination Notice
</p>

<p align="center" style="
  margin:0;
  font-size:13px;
  color:#111;
  line-height:1.6;
">
  <strong>Trademark:</strong> ${values.trademarkName}
  <br/>
  <strong>Serial Number:</strong> ${values.serialNumber}
</p>


    <br/>
     <p>Dear Applicant,</p>

      <p>This correspondence is to formally notify you that your trademark application is currently under examination at the <strong>United States Patent and Trademark Office (USPTO)</strong>. Completion of this examination phase is mandatory for your application to advance to the publication stage.</p>

      <p>Your application is being actively reviewed and represented by <strong>William Unni Edwin</strong>, who will manage all correspondence, required filings, and any necessary amendments on your behalf. This review process typically requires <strong>6-8 months</strong> for completion. During this period, you may receive an <strong>Office Action</strong> requiring clarification, amendment, or submission of additional documentation. Timely compliance is necessary to maintain the active status of your application.</p>

      <p>At present, your application is undergoing initial substantive review by the examining authority. Preliminary examination indicates that additional clarification or refinement of the identification and classification of goods and/or services may be required to ensure accurate alignment with your actual commercial use.</p>

      <p>Pursuant to the <strong>Lanham Act (15 U.S.C. §1051 et seq.)</strong> and applicable USPTO regulations, incomplete or inaccurate information may result in the issuance of an <strong>Office Action</strong> and, if not properly addressed within the prescribed statutory period, could lead to <strong>Abandonment</strong> of the application.</p>

      <p>In accordance with USPTO verification procedures and international classification standards, all goods and services must be clear, definite, and correctly classified.</p>

      <p><strong>Live Verification Requirement</strong><br/>To proceed with examination and avoid processing delays, the trademark owner is required to complete a live verification call with the assigned examining officer</p>

      <p><strong>Appointment Details:</strong></p>
      <ul>
        <li><strong>Examining Attorney:</strong> William Unni Edwin</li>
        <li><strong>Contact Number:</strong> ${values.contactNumber}</li>
        <li><strong>Appointment Number:</strong> ${values.appointmentNumber}</li>
        <li><strong>Appointment Hours:</strong> 9:00 AM – 4:00 PM (PST)</li>
      </ul>

      <p>During this call, the examining officer will verify application details, review classification accuracy, and determine readiness for advancement toward publication.</p>

      <p><strong>Important:</strong> The verification call must be completed by the trademark owner. Please ensure the serial number is readily available at the time of the call. Failure to complete verification within the required timeframe may delay examination or result in further procedural action.</p>

      <p>Your timely cooperation will enable the USPTO to finalize its examination and move your application forward in the registration process, in accordance with the Lanham Act and applicable USPTO procedures.</p>

      <p><strong>Sincerely,<br/>The TEAS support team<br/>United States Patent and Trademark Office (USPTO)</strong></p>
  `;
};
