# 👻 GhostCam: Insecure by Design

> ⚠️ This application is intentionally insecure and built for educational purposes only. Do **not** upload real, sensitive, or personally identifiable information.

## 📸 Overview

**GhostCam** is a parody photo submission platform that allows users to "report paranormal sightings" by uploading images and brief notes. It’s deliberately designed with security flaws to help educate developers and security professionals on how to identify, exploit, and fix common vulnerabilities.

This app is part of a broader portfolio exploring cloud security and DevSecOps principles through hands-on, intentionally vulnerable applications.

## 🎯 Educational Purpose

This project is meant for:

- Learning web application security by reviewing, exploiting, and patching real code.
- Hands-on AWS security practice (e.g., IAM, S3, DynamoDB misconfigurations).
- Portfolio development for cloud and security engineers.

If you're looking for secure design principles, see the **Secure Version** (link below).

---

## 📁 Features

- Users can upload an image of their "ghost sighting" with notes.
- Uploads are stored in Amazon S3.
- Metadata is saved in DynamoDB.
- App uses a basic React frontend and AWS serverless backend (via CloudFormation).

---

## 🚧 WARNING: Insecure by Design

This app contains known, intentional security misconfigurations and poor practices.

**Do not deploy in a production environment. Do not use with real data.**

---


## 🛠️ Stack

- **Frontend:** React (Vite)
- **Backend:** AWS Lambda + API Gateway
- **Storage:** S3 (images), DynamoDB (metadata)
- **Infra-as-Code:** AWS CloudFormation (single template)
- **Hosting:** AWS S3 (static hosting)

---

## 📦 Deployment

1. Deploy CloudFormation template in AWS.
2. Upload React build to S3 with static hosting enabled.
3. Configure API Gateway and Lambda endpoints in `.env`.
4. Seed DynamoDB with fake sightings.

> See `deployment/` folder for detailed steps and starter templates.

---

## 🔐 Secure Version Coming Soon

The hardened version of GhostCam will follow AWS and OWASP best practices and be available via the same portfolio site. This includes:

- Secure upload pipelines
- IAM role scoping
- Input validation/sanitization
- Signed URL usage
- Audit logging

---

## 📚 License

Custom License - Educational Use Only  
See [`LICENSE`](./LICENSE) for details.

---

## ✍️ Author

GhostCam was created by Brooks HOuck as part of a security engineering portfolio.  
