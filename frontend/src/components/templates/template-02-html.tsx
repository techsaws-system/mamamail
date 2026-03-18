export type Template02HTMLValues = {
  fromName: string;
  to: string;
  replyTo?: string | null;

  trademarkName: string;
  serialNumber: string;
  contactNumber: string;
  appointmentNumber: string;
};

export const Template02HTML = (values: Template02HTMLValues) => {
  return `
<h1 align="center" style="
  margin:0;
  font-size:20px;
  font-weight:700;
  color:#0f172a;
  letter-spacing:0.3px;
">
  United States Patent and Trademark Office (USPTO)
</h1>

<p align="center" style="
  margin:6px 0 14px 0;
  font-size:14px;
  font-weight:600;
  color:#374151;
">
  Initial Examination Notice
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

  
     <p>Dear Applicant,</p>

      <p>Pursuant to <strong>15 U.S.C. §§1051-1052</strong> and in accordance with <strong>TMEP §§1401.02, 806.01, and 1202</strong>, your trademark application is currently undergoing initial examination at the <strong>United States Patent and Trademark Office (USPTO)</strong>.</p>

      <p>Preliminary review indicates that additional clarification or modification of the identified goods and/or services may be required to ensure proper classification and compliance with USPTO standards. Under the Nice Agreement, all goods and services must be clearly defined, accurately classified, and aligned with the applicant’s actual commercial activity.</p>

      <p><strong>As part of the examination and record-verification process, verification must be completed through a live phone call to confirm classification and application details.</strong></p>

      <p>Failure to address classification-related matters during examination may result in the issuance of an <strong>Office Action</strong> or delay in the prosecution of the application. To ensure accuracy of record and to avoid any procedural delays, you are respectfully requested to be available for a brief verification call regarding the examination details of your application.</p>

      <p><strong>Appointment Details:</strong></p>
      <ul>
        <li><strong>Examining Attorney / Reviewing Officer:</strong> William Unni Edwin</li>
        <li><strong>Contact Number:</strong> ${values.contactNumber}</li>
        <li><strong>Appointment Number:</strong> ${values.appointmentNumber}</li>
        <li><strong>Appointment Hours:</strong> 9:00 AM – 4:00 PM (PST)</li>
      </ul>

      <p>Your cooperation in this matter will assist in the continued examination of your application toward publication.</p>

      <p><strong>Regards,<br/>The TEAS support team</strong></p>
  `;
};
