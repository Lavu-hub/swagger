const database=require("../database10/db1")
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "loveleenkaurramgarhia@gmail.com",
    pass: "pgiisrqlxevuduoe", // NOT your normal Gmail password
  },
});
const registerStudent=async(req,res)=>{
    try{
        
       console.log(req.body); 
       const db=await database();
       const collection =db.collection('register1');
       const result=await collection.insertOne(req.body);
       if(result.acknowledged==true)
       {
           await sendEmail({
    to:req.body.email,
    subject: "Register Successfully",
    // text: "You are Registerd successfully with us, Heartly Welcome",
    html:`
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Welcome Email</title>
  <style>
    /* Basic reset for some clients */
    body,table,td { font-family: Arial, Helvetica, sans-serif; }
    a { text-decoration: none; }
    .btn {
      display: inline-block;
      padding: 12px 22px;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
    }
    @media only screen and (max-width:600px) {
      .container { width: 95% !important; }
      .hero { padding: 28px 16px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; -webkit-text-size-adjust:none; background-color:#f3f6fb;">

  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true">
    <v:fill type="gradient" color="#8ec5ff" color2="#e0c3fc" angle="90" />
  </v:background>
  <![endif]-->

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;background:linear-gradient(135deg,#8ec5ff 0%,#e0c3fc 100%);">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Container / Card -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="container" style="width:600px; max-width:600px; background: #ffffff; border-radius:12px; box-shadow:0 8px 30px rgba(20,30,70,0.12); overflow:hidden;">
          <tr>
            <td style="padding:28px 36px;" class="hero">

              <!-- Header / Logo -->
              <table role="presentation" width="100%">
                <tr>
                  <td style="text-align:left;">
                    <div style="display:inline-block; vertical-align:middle;">
                      <!-- Optional: replace with your logo img -->
                      <div style="width:56px;height:56px;border-radius:10px;background:linear-gradient(135deg,#6dd5ed,#2193b0); display:inline-flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:20px;">
                        L
                      </div>
                    </div>
                    <div style="display:inline-block; margin-left:12px; vertical-align:middle;">
                      <div style="font-size:18px; font-weight:700; color:#0b2840;">Welcome to Our Community</div>
                      <div style="font-size:13px; color:#6b7a90; margin-top:4px;">Thanks for registering — we’re happy you’re here</div>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Spacer -->
              <div style="height:20px;"></div>

              <!-- Main message -->
              <table role="presentation" width="100%">
                <tr>
                  <td style="padding:18px 0 8px 0; text-align:left;">
                    <h1 style="margin:0; font-size:26px; color:#0b2540; font-weight:800; line-height:1.05;">
                      Registration Successful 🎉
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding-top:12px; color:#41546b; font-size:15px; line-height:1.6;">
                    <p style="margin:0;">
                      Hi Sir <strong style="color:#0b2540;"></strong>,
                    </p>
                    <p style="margin:12px 0 0 0;">
                      You have been <strong>successfully registered</strong> with us. We’re delighted to have you on board — welcome to the family! If you ever need help, reply to this email and we’ll get back to you.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-top:18px;">
                    <a href="#" class="btn" style="background:linear-gradient(90deg,#6d5df6,#8ec5ff); color:#ffffff; border-radius:8px; padding:12px 22px; display:inline-block; font-weight:700;">
                      Get Started
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding-top:18px; color:#6b7a90; font-size:13px;">
                    <p style="margin:0;">
                      Account email: <strong style="color:#0b2540;">{{email}}</strong>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:26px;"></div>
              <div style="height:1px; background:#eef1f6;"></div>
              <div style="height:18px;"></div>

              <!-- Footer small text -->
              <table role="presentation" width="100%">
                <tr>
                  <td style="text-align:left; color:#89a0b8; font-size:12px;">
                    <p style="margin:0;">
                      Need help? Contact our support at <a href="mailto:support@example.com" style="color:#6d5df6;">support@example.com</a>
                    </p>
                  </td>
                  <td style="text-align:right; color:#89a0b8; font-size:12px;">
                    <p style="margin:0;">© <strong>2025 YourApp</strong></p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`,

  });
        res.send({
            "status":"Registered succesfulyy",
            "statuscode":200,
            "data":result
        })
       }
       else{
        res.send({
            "status":"oops:something went wrong",
            "statuscode":400,
        })
       }
    }
    catch(err)
    {
        res.send(err)
    }
}


async function sendEmail({ to, subject, text, html }) {
  try {
    const info = await transporter.sendMail({
    from: `loveleenkaurramgarhia@gmail.com`,
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
module.exports= {registerStudent}