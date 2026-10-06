export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const {
      customerName,
      jobAddress,
      jobDescription,
      measurements,
      notes
    } = req.body;

    if (!jobDescription || !jobDescription.trim()) {
      return res.status(400).json({
        error: "Please add a job description before analysing the job."
      });
    }

    const jobInformation = `
CUSTOMER:
${customerName || "Not provided"}

JOB ADDRESS:
${jobAddress || "Not provided"}

CUSTOMER REQUEST / JOB DESCRIPTION:
${jobDescription}

MEASUREMENTS:
${measurements || "Not provided"}

OTHER NOTES:
${notes || "None provided"}
`;

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },

        body: JSON.stringify({
          model: "gpt-5-mini",

          instructions: `
You are the job analysis engine for Chris Job Tool.

Chris is a tradesperson using the tool to plan jobs accurately,
avoid forgotten costs and protect his profit.

Your job at this stage is NOT to invent a final price.

Analyse the information Chris has supplied and return a practical
pre-pricing review.

Identify:

1. JOB SCOPE
Summarise what the job appears to involve.

2. INFORMATION WE HAVE
List the useful information already supplied.

3. MISSING INFORMATION
Identify anything Chris needs to confirm before pricing accurately.

4. MEASUREMENTS TO CHECK
List measurements that are missing, unclear or worth verifying.

5. LIKELY MATERIALS
Suggest material categories likely to be required.
Do not invent exact quantities when there is insufficient information.

6. TOOLS & EQUIPMENT
Identify likely tools or equipment needed.

7. LABOUR CONSIDERATIONS
Highlight work stages that may affect labour time.

8. RISKS & PROFIT TRAPS
Identify access issues, waste, disposal, delivery, preparation,
unknown site conditions, specialist work or anything else that could
cause Chris to underprice the job.

9. QUESTIONS FOR CHRIS
Give a short practical checklist of questions that should be answered
before the tool moves on to detailed costing.

Be commercially cautious.
Never pretend information is known when it has not been supplied.
Do not produce a customer quotation yet.
          `,

          input: jobInformation
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI error:", data);

      return res.status(response.status).json({
        error: "AI analysis failed.",
        details: data
      });
    }

    return res.status(200).json({
      analysis: data.output_text
    });

  } catch (error) {
    console.error("Analyse job error:", error);

    return res.status(500).json({
      error: "Something went wrong while analysing the job."
    });
  }
}
