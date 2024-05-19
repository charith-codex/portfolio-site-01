//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json(); //fix issue
  //const { body } = await req.json();
  //const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["greeneye360k@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>Thank you for contacting us!</h1>
          <p>
            <em>Your message was submitted</em>
          </p>
          <hr />
          <h2>{subject}</h2>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
