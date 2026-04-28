from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

OUTPUT = "public/Resume-Naveen-Kumar-DataAnalyst.pdf"

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=1.8*cm,
    rightMargin=1.8*cm,
    topMargin=1.5*cm,
    bottomMargin=1.5*cm,
)

DARK = colors.HexColor("#1a1a2e")
ACCENT = colors.HexColor("#0f3460")
GRAY = colors.HexColor("#555555")
LIGHT_GRAY = colors.HexColor("#888888")
WHITE = colors.white

styles = getSampleStyleSheet()

name_style = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=20, textColor=DARK, spaceAfter=2, alignment=TA_CENTER)
contact_style = ParagraphStyle("contact", fontName="Helvetica", fontSize=9, textColor=GRAY, spaceAfter=2, alignment=TA_CENTER)
section_style = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10, textColor=ACCENT, spaceBefore=10, spaceAfter=3, letterSpacing=1)
body_style = ParagraphStyle("body", fontName="Helvetica", fontSize=9, textColor=DARK, leading=13, spaceAfter=2)
bullet_style = ParagraphStyle("bullet", fontName="Helvetica", fontSize=9, textColor=DARK, leading=13, leftIndent=12, spaceAfter=2)
bold_body = ParagraphStyle("bold_body", fontName="Helvetica-Bold", fontSize=9, textColor=DARK, leading=13)
sub_style = ParagraphStyle("sub", fontName="Helvetica-Oblique", fontSize=9, textColor=GRAY, leading=12, spaceAfter=3)
tag_style = ParagraphStyle("tag", fontName="Helvetica", fontSize=8, textColor=LIGHT_GRAY, leading=11)

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cccccc"), spaceAfter=4, spaceBefore=2)

def section(title):
    return [Paragraph(title.upper(), section_style), hr()]

def bullet(text):
    return Paragraph(f"• {text}", bullet_style)

story = []

# ── HEADER ──────────────────────────────────────────────────────────
story.append(Paragraph("Naveen Kumar", name_style))
story.append(Paragraph(
    "+91 8302906048  |  naveen.kumar2024@nst.rishihood.edu.in  |  "
    "<a href='https://linkedin.com/in/naveendhaterwal' color='#0f3460'>LinkedIn</a>  |  "
    "<a href='https://github.com/naveendhaterwal' color='#0f3460'>GitHub</a>  |  "
    "<a href='https://leetcode.com/naveendhaterwal' color='#0f3460'>LeetCode</a>  |  "
    "<a href='https://codeforces.com/profile/naveendhaterwal' color='#0f3460'>Codeforces</a>",
    contact_style
))
story.append(Spacer(1, 6))

# ── PROFESSIONAL SUMMARY ────────────────────────────────────────────
story += section("Professional Summary")
story.append(Paragraph(
    "Data Science student and aspiring Data Analyst with hands-on experience in Python, SQL, and data pipeline development. "
    "Skilled in data cleaning, exploratory analysis, dashboard design, and deriving actionable business insights from large datasets. "
    "LeetCode 1400+ and Codeforces 900+.",
    body_style
))
story.append(Spacer(1, 4))

# ── EDUCATION ───────────────────────────────────────────────────────
story += section("Education")

edu_data = [
    ["Bachelor of Technology (Data Science)", "2024 – 2028"],
    ["Newton School of Technology, Rishihood University  |  Grade: 7.696/10.0", ""],
    ["Intermediate (Class XII) — Noble Kingdom Senior Secondary School", "2022 – 2023"],
    ["Grade: 90.2%", ""],
    ["Matriculation (Class X) — Noble Kingdom Senior Secondary School", "2020 – 2021"],
    ["Grade: 94.0%", ""],
]

for row in edu_data:
    t = Table([[Paragraph(row[0], bold_body if not row[0].startswith("Grade") and not row[0].startswith("Newton") else body_style),
                Paragraph(row[1], ParagraphStyle("right", fontName="Helvetica", fontSize=9, textColor=GRAY, alignment=TA_RIGHT))]],
              colWidths=["75%", "25%"])
    t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 1)]))
    story.append(t)

story.append(Spacer(1, 4))

# ── EXPERIENCE ──────────────────────────────────────────────────────
story += section("Experience")

t = Table([[Paragraph("Backend & Data Integration Intern — Advit Itec", bold_body),
            Paragraph("May 2025 – Sep 2025  |  Remote", ParagraphStyle("right", fontName="Helvetica", fontSize=9, textColor=GRAY, alignment=TA_RIGHT))]],
          colWidths=["65%", "35%"])
t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0)]))
story.append(t)

story.append(bullet("Architected MySQL database schemas and implemented a secure data persistence layer with robust filtering and querying capabilities for an admin analytics dashboard."))
story.append(bullet("Built automated data extraction and document generation pipelines, integrating external APIs (WhatsApp/Email) and cloud storage (Cloudinary) for reliable data delivery."))
story.append(bullet("Designed end-to-end data flows for a customer onboarding application, ensuring accurate data capture and processing of multi-step form submissions."))
story.append(bullet("Collaborated in a team of 4 using Agile practices to ensure scalable system architecture and timely delivery of backend data services."))
story.append(Spacer(1, 4))

# ── PROJECTS ────────────────────────────────────────────────────────
story += section("Projects")

projects = [
    {
        "title": "Google Play Store Data Pipeline",
        "tags": "Python · Pandas · Data Quality · ELT",
        "link": "https://github.com/manjeet090223/Section-A_G-13_Google_Play_Store",
        "bullets": [
            "Built a robust data cleaning and ELT pipeline for a 2.3M-row dataset using Python and Pandas.",
            "Automated missing value imputation, data type normalization (Size, Installs, Dates), and quality validation to produce an analysis-ready output.",
            "Documented a full transformation log covering mean/median/mode imputation strategies for downstream BI and ML tasks.",
        ]
    },
    {
        "title": "Housing Market Intelligence Dashboard",
        "tags": "Excel · Pivot Tables · Market Analysis · Data Visualization",
        "link": "https://docs.google.com/spreadsheets/d/1QU5AEmZaSJcBjNW9MoLuTMz_-Acxpx7rbuLUTRQnjZs/edit",
        "bullets": [
            "Built an interactive Excel dashboard analyzing property prices, market trends, and buyer behavior across regions.",
            "Identified investment opportunities using price driver analysis, geographic segmentation, and market trend visualization.",
        ]
    },
    {
        "title": "Enterprise Data Analytics Capstone",
        "tags": "Excel · Power Query · Data Architecture · BI Dashboard",
        "link": "",
        "bullets": [
            "Implemented a structured 5-sheet data architecture: raw staging → cleaning → transformation logs → analytical modeling → final BI dashboard.",
            "Reduced analysis cycle time through automated Power Query workflows and calculated fields.",
        ]
    },
    {
        "title": "Loan Analysis & Credit Risk Dashboard",
        "tags": "Excel · Risk Analytics · Financial Data · Pivot Tables",
        "link": "https://docs.google.com/spreadsheets/d/10VAas0NO_DYNAqTqYEzLkhtKDtzOlmknq3i-KbzAJVk/edit",
        "bullets": [
            "Analyzed 9,996 borrower records to identify key default drivers: Debt-to-Income ratio, Loan-to-Value (LTV), Credit Score, and Region.",
            "Quantified risk: LTV > 100% carries 71.2% default rate; DTI > 50% carries 42.3% — delivering actionable credit risk signals.",
            "Segmented defaults by loan purpose (Business 3,584 | Personal 3,805) and region (North, South, Central) to support lending strategy decisions.",
        ]
    },
]

for p in projects:
    link_text = f" (<a href='{p['link']}' color='#0f3460'>Link</a>)" if p['link'] else ""
    story.append(Paragraph(f"<b>{p['title']}</b>{link_text}", body_style))
    story.append(Paragraph(p['tags'], tag_style))
    for b in p['bullets']:
        story.append(bullet(b))
    story.append(Spacer(1, 4))

# ── SKILLS ──────────────────────────────────────────────────────────
story += section("Skills")

skills = [
    ("Languages", "Python, SQL, JavaScript"),
    ("Data Tools", "Pandas, NumPy, Matplotlib, Scikit-learn, Jupyter Notebook, Google Colab"),
    ("BI & Analytics", "Microsoft Excel (Pivot Tables, Power Query), Tableau, Google Sheets"),
    ("Databases", "MySQL, PostgreSQL"),
    ("Other", "Git, Data Cleaning, ETL Pipelines, Statistical Analysis, Data Visualization"),
]

for label, val in skills:
    t = Table([[Paragraph(f"<b>{label}:</b>", body_style), Paragraph(val, body_style)]],
              colWidths=["22%", "78%"])
    t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 2)]))
    story.append(t)

story.append(Spacer(1, 4))

# ── EXTRA-CURRICULAR ────────────────────────────────────────────────
story += section("Extra-Curricular Activities")
story.append(bullet("Competitive Programmer: LeetCode 1400+ and Codeforces 900+ — strong algorithmic thinking applied to data problem-solving and query optimization."))
story.append(bullet("Relevant Coursework: Database Management Systems, Data Structures & Algorithms, Python Programming, Statistics for Data Science."))
story.append(bullet("Open Source Contributor at GetAlby (Bitcoin Lightning ecosystem) under Summer of Bitcoin 2025 — raised 6 PRs with 3 merged into production repositories."))

# ── BUILD ────────────────────────────────────────────────────────────
doc.build(story)
print(f"✅ Resume built: {OUTPUT}")
