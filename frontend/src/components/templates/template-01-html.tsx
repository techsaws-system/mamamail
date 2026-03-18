export type Template01HTMLValues = {
  fromName: string;
  to: string;
  replyTo?: string | null;

  trademarkName: string;
  serialNumber: string;
  contactNumber: string;
  appointmentNumber: string;
};

export const Template01HTML = (values: Template01HTMLValues) => {
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

    <br/>
     <p>Dear Applicant,</p>

      <p>Your trademark application is currently under initial examination at the <strong>United States Patent and Trademark Office (USPTO)</strong>.</p>

      <p>A preliminary review may require clarification or modification of the listed goods and/or services to ensure proper classification and compliance with USPTO standards. If any issues are identified, the USPTO will issue an <strong>Office Action</strong> outlining the required amendments. Failure to respond within the prescribed period may result in delay or abandonment of the application.</p>

      <p>As part of the examination and record-verification process, verification must be completed through a live phone call to confirm classification and application details.</p>

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
