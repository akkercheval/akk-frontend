# Amanda Kay Kercheval

akkercheval@gmail.com | [linkedin.com/in/AmandaKercheval](https://www.linkedin.com/in/AmandaKercheval) | [github.com/akkercheval](https://github.com/akkercheval)

---

## Professional Summary

Software engineer with nearly 10 years of full-stack web application development experience across Java, C#, Angular, and TypeScript, working in federal government, large-scale commercial enterprise, and client-facing consulting environments. CompTIA Security+ certified with a consistent record of delivering secure, well-tested code in Agile teams — including division-wide security remediation for USMC personnel systems, CI/CD pipeline ownership at J.B. Hunt, and WCAG 2.2 compliance work on an AWS Lambda-based automated remediation pipeline for an e-learning platform. Adapts readily to new stacks and domains, most recently shifting from Java to C# mid-engagement while becoming the sole developer on a WCAG accessibility initiative. Experienced mentoring junior developers and interns, documenting processes adopted across teams, and using AI-assisted development tools (GitHub Copilot, Kiro) to accelerate delivery without sacrificing code quality.

---

## Experience

### Beacon Hill Solutions Group
**Contract Software Engineer** | Remote | April 2025 – Present
*Employed by Beacon Hill; contracted to Clean Slate Technology Group*

**Contract: Lincoln Learning Solutions** | April 2025 – October 2025

Sole developer (after initial paired phase) on a WCAG 2.2 accessibility compliance initiative for Lincoln Learning's e-learning platform, which delivers courses to students through platforms including Canvas.

**Phase 1 — Automated remediation pipeline and diagnostic tooling**

- Designed and built an AWS Lambda function (C#) that executes on each learning object publish event, scanning the full HTML document and automatically remediating identified WCAG 2.2 violations: correcting low color contrast, removing non-compliant image anchors, and adding descriptive alt text to images from a pre-generated reference list.
- Lambda preserved both the original and remediated HTML versions, giving Lincoln Learning's team granular control to accept or override remediations individually or in bulk.
- Adapted quickly to a near-complete technology stack change — shifting from Java/Spring Boot to C# as the primary back-end language for this engagement.
- Extended a teammate's database query tool into a suite of issue-specific scanners; built a combined scanner that diffed original and remediated versions of a published learning object, providing clear before/after evidence of remediation effectiveness.
- Researched accessibility issues and authored standalone HTML documents with findings and remediation recommendations, formatted for direct attachment to ADO stories.
- Became sole developer within three months as the paired teammate was reassigned.

**Phase 2 — Direct application remediation**

- Updated and extended the Lambda remediation pipeline based on findings from the June third-party audit.
- Remediated WCAG 2.2 violations directly in Lincoln Learning's C# back-end services and helper applications.
- Updated the Wave learning object authoring application and the Activity Application Player (course delivery used by students in Canvas and similar LMS platforms), addressing front-end violations in Angular, TypeScript, and CSS.
- Applied AI-assisted development using Kiro throughout both phases for research, code generation, and unit testing.

**Technologies:** C#, AWS Lambda, Angular, TypeScript, CSS, HTML, Azure DevOps, Kiro

---

### J.B. Hunt Transport, Inc.
**Software Engineer III** | Lowell, AR (Remote) | February 2022 – October 2025

*(Hired via TEKsystems contract-to-hire, February – August 2022; converted to direct hire August 2022)*

Developed and maintained internal enterprise web applications serving J.B. Hunt's driver and safety management operations across two application teams — Training (Feb 2022 – Jan 2025) and Safety (Jan 2025 – Oct 2025) — in a fast-paced Agile environment with continuous delivery.

**Training Application** *(Feb 2022 – Jan 2025)*

- Recommended and helped implement in-progress auto-save after identifying that drivers frequently lost training progress due to connectivity drops on mobile devices in remote locations.
- Led the Training team's conversion from monthly releases to Helm-based continuous delivery in Azure DevOps; authored internal Wiki documentation subsequently adopted by other application teams.
- Diagnosed a data integrity issue in a batch process — added instrumentation, traced the root cause to an identity collision on role change, and built a remediation path to restore training credit for affected drivers.
- Identified recurring patterns in support tickets that led to two targeted code changes; support ticket volume dropped approximately 30% following those changes.
- Loaned with a teammate to a separate application team for two months to assist with their Helm modernization effort.
- Formally mentored two college interns over separate six-month periods: weekly check-ins, technical and academic progress discussions, end-of-term evaluations.
- Maintained unit test coverage at or above 80%; used GitHub Copilot to accelerate test generation, saving approximately half a day to a full day per story.

**Safety Application** *(Jan 2025 – Oct 2025)*

- Maintained the Safety application through dependency updates, support rotation, modernization work, and feature additions in a large, complex legacy codebase.

**Technologies:** Java, Spring Boot, Angular, TypeScript, SCSS, HTML, JDBC, JPA, JUnit, Mockito, ActiveMQ, Kafka, Elasticsearch, Helm, Azure DevOps, Git, MS SQL Server, Postman, K9s, Dynatrace, Maven, GitHub Copilot

---

### Technology Services Organization (TSO), USMC
**Application Software Developer (GS-11)** | Indianapolis, IN | January 2017 – February 2022

*Hired as a federal civilian employee (GS-11) in March 2018 after 14 months as a contractor through InfoReliance Corporation.*

Developed and maintained mission-critical Java web applications used daily by active-duty United States Marines across all ranks and commands, including Marine OnLine (MOL), Leave and Liberty, Command Legal Action, Awards, and Family Readiness.

- Delivered full-stack features and bug fixes across Java EE web applications using Spring Framework, JSF, PrimeFaces, EclipseLink/JPA, HTML, and CSS; developed and optimized Oracle PL/SQL queries, stored procedures, and scripts.
- Led a significant back-end redesign of a MOL unit information management page, rearchitecting data access across systems to retrieve information from a separate database table correctly end-to-end.
- Built a new Java application and repository from the ground up to replace a legacy native SQL process — sole developer from design through deployment.
- Participated in a division-wide security remediation stand-down, addressing all HP Fortify findings: rewrote code to add input validation, sanitized user input against SQL injection, and masked PII (SSNs) with internal IDs. All findings fully remediated, mitigated, or tracked.
- Contributed to a process improvement moving production release cadence from quarterly to monthly.
- Mentored a career-changing developer over approximately two months using structured pair programming from environment setup through independent work.

**Technologies:** Java EE, Spring Framework, Struts, EclipseLink/Toplink, JPA, JSF, PrimeFaces, HTML, CSS, JSP, Oracle PL/SQL, Maven, Jenkins, Subversion, HP Fortify

---

### IUPUI, Department of Computer Science
**Teaching Assistant** | Indianapolis, IN | May 2015 – May 2016

- Served as TA for two semesters of Programming Concepts (JavaScript) and one semester of Advanced Game Development.
- Graded assignments, provided written feedback, and answered student questions during office hours.

---

## Education

**Indiana University Purdue University Indianapolis (IUPUI / Purdue University Indianapolis)**
Bachelor of Science, Computer Science | May 2016
Minor: Mathematics | Minor: French
GPA: 3.648 / 4.00 | Dean's List, 3 semesters

---

## Certifications

| Certification | Issuer | Date |
|---|---|---|
| CompTIA Security+ | CompTIA | Certified 2019; Renewed 2022, 2025 |
| *AWS Cloud Practitioner* | *Amazon Web Services* | *In progress* |

---

## Skills

### Languages
Java, JavaScript/TypeScript, C#, HTML5, CSS/SCSS, SQL (MS SQL Server T-SQL, Oracle PL/SQL)

### Frameworks & Libraries
Spring Boot, Spring Framework, Angular, TypeScript, JDBC, JPA, JUnit, Mockito, Lombok, ActiveMQ, Kafka, Elasticsearch, Struts, JSF, PrimeFaces, EclipseLink/Toplink

React — familiar; in active use on personal project (BCC Music)

### Tools & Platforms
Git, Azure DevOps, Maven, Jenkins, Eclipse, Visual Studio Code, Postman, Jira, K9s, Dynatrace, Oracle WebLogic, Oracle SQL Developer, Microsoft SQL Server Management Studio, HP Fortify, Subversion, npm, Helm, AWS Lambda

### Practices
Agile/Scrum, RESTful API design, CI/CD pipelines, Secure coding, Unit testing, Code review, WCAG accessibility standards, AI-assisted development (GitHub Copilot, Kiro)

---

## Personal Projects

### BCC Music
Full-stack web application to catalog the music libraries of the Boone County Community Band and Orchestra.
- Backend: Java, Spring Boot, JDBC, Maven
- Database: MS SQL Server
- Frontend: React, TypeScript, CSS

### Boone County Symphony Celebrates America's 250th
Event website for a community symphony concert, July 5, 2026.
[symphony.boonecountyin.org](https://symphony.boonecountyin.org/)
- Designed and built landing page and participant registration forms.

---

## Volunteer Activities

### Boone County Community Orchestra
**Board Member / Music Librarian / Performer** | March 2015 – Present
- Elected to Board of Directors, September 2024.
- Serve as music librarian: manage sheet music catalog, transpose and digitize parts using Dorico.
- Maintain orchestra website; perform on clarinet.

### Boone County Community Band
**Electronic Communications Chair / Performer** | May 2012 – Present
- Lead community outreach via email, social media, and fliers.
- Maintain website; transpose and digitize music library using Dorico; perform on clarinet.
