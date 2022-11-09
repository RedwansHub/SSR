import React from 'react'

var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: 'searchspectretest@gmail.com',
	  pass: '55.spectre.55'
	}
  });

var mailOptions = {
	from: 'searchspectretest@gmail.com',
	to: 'rizzdon64@gmail.com',
	subject: 'Sending Email via Node.js',
	text: 'That was easy!'
};
let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'window',
    path: '/usr/sbin/sendmail'
});
transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  });

const Resume = () => {
  return (
        <div className='container' style={{padding: 20}}>
			<form >
				
				<input type='text' name='name' placeholder='Name'/>
				<input type='email' name='email' placeholder='Email'/>
				<input type='subject' name='subject' placeholder='Subject'/>
				<input type='file' name='resume[]' />
				<button type='submit'>Submit</button>
			</form>
		</div>
  )
}

export default Resume