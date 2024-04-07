import { render } from "@react-email/render";
import nodemailer from "nodemailer";

function Email() {
  return <h1>Hello</h1>;
}

async function Tets() {
  const transporter = nodemailer.createTransport({
    host: "smtp.webmgo.ro",
    port: 587,
    secure: true,
    auth: {
      user: "itec",
      pass: "Itec2024!",
    },
  });

  const emailHtml = render(<Email />);

  const options = {
    from: "itec@webmgo.ro",
    to: "calistenice8@gmail.com",
    subject: "hello world",
    html: emailHtml,
  };

  await transporter.sendMail(options);
}

export default Tets;
