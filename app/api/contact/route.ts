import { NextResponse } from "next/server";
export async function POST(request:Request) {
  const webhook=process.env.REALSITE_CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({error:"Contact form is not configured"},{status:503});
  let body:Record<string,unknown>;
  try { body=await request.json(); } catch { return NextResponse.json({error:"Invalid request"},{status:400}); }
  const {name,email,message,phone,company,projectType}=body;
  if(typeof name!=="string"||!name.trim()||name.length>120||typeof email!=="string"||!/^\S+@\S+\.\S+$/.test(email)||email.length>200||typeof message!=="string"||message.trim().length<10||message.length>5000)return NextResponse.json({error:"Invalid contact details"},{status:400});
  const payload={name,email,message,phone,company,projectType,source:"getarealsite.com"};
  try {const response=await fetch(webhook,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),cache:"no-store"});if(!response.ok)throw new Error("Webhook failed");return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Delivery failed"},{status:502});}
}
