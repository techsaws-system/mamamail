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
  <div style="margin:0; padding:0; background:#f9fafb;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center">

          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="
            background:#ffffff;
            font-family: Arial, Helvetica, sans-serif;
            color:#111;
            padding:24px;
          ">

            <!-- Header -->
            <tr>
              <td align="center" style="
                font-size:20px;
                font-weight:700;
                color:#0f172a;
                letter-spacing:0.3px;
              ">
                United States Patent and Trademark Office (USPTO)
              </td>
            </tr>

            <tr>
              <td align="center" style="
                font-size:14px;
                font-weight:600;
                color:#374151;
                padding-top:6px;
                padding-bottom:16px;
              ">
                Initial Examination Notice
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="border-top:1px solid #e5e7eb; padding-top:16px;"></td>
            </tr>

            <!-- Meta -->
            <tr>
              <td style="font-size:13px; color:#374151; padding-bottom:16px;">
                <strong style="color:#111;">Trademark:</strong> ${values.trademarkName}<br/>
                <strong style="color:#111;">Serial Number:</strong> ${values.serialNumber}
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="font-size:14px; color:#111; line-height:1.6;">
                Dear Applicant,<br/><br/>

               Pursuant to <strong>15 U.S.C. §§1051-1052</strong> and in accordance with <strong>TMEP §§1401.02, 806.01, and 1202</strong>, your trademark application is currently undergoing initial examination at the <strong>United States Patent and Trademark Office (USPTO)</strong>.<br/><br/>

                Preliminary review indicates that additional clarification or modification of the identified goods and/or services may be required to ensure proper classification and compliance with USPTO standards. Under the Nice Agreement, all goods and services must be clearly defined, accurately classified, and aligned with the applicant’s actual commercial activity.<br/><br/>

                <strong>As part of the examination and record-verification process, verification must be completed through a live phone call to confirm classification and application details.</strong><br/><br/>

                Failure to address classification-related matters during examination may result in the issuance of an Office Action or delay in the prosecution of the application. To ensure accuracy of record and to avoid any procedural delays, you are respectfully requested to be available for a brief verification call regarding the examination details of your application.<br/><br/>

                <strong>Appointment Details:</strong><br/><br/>

                <strong>Examining Officer:</strong> William Unni Edwin<br/>
                <strong>Contact Number:</strong> ${values.contactNumber}<br/>
                <strong>Appointment Number:</strong> ${values.appointmentNumber}<br/>
                <strong>Appointment Hours:</strong> 9:00 AM – 4:00 PM (PST)<br/><br/>

                Your cooperation in this matter will assist in the continued examination of your application toward publication.<br/><br/>

                <strong>Regards,<br/>The TEAS support team</strong>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `;
};
