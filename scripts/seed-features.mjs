
import { createClient } from 'next-sanity';

// User must provide token in .env.local or hardcode here temporarily
const token = process.env.SANITY_API_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!token) {
    console.error("Error: SANITY_API_TOKEN is missing in .env.local");
    console.error("Please add a write token to your environment variables.");
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: '2025-01-01',
    useCdn: false,
});

const features = [
    {
        _type: 'feature',
        title: 'Claim Scrubbing',
        description: 'Fix missing info (DOB, NPI) and coding errors (ICD-10, CPT) before submission to prevent denials.'
    },
    {
        _type: 'feature',
        title: 'Risk Assessment',
        description: 'Estimate the chance of denial based on Payer Rules and patterns from past claims.'
    },
    {
        _type: 'feature',
        title: 'Financial Clearance',
        description: 'Check eligibility, benefits, and estimate patient responsibility (copay/deductible) to prevent bad debt.'
    },
    {
        _type: 'feature',
        title: 'A/R Recovery',
        description: 'Find old denied/pending claims (15-minute audit), fix errors, and resubmit automatically.'
    },
];

async function seed() {
    console.log("Starting seed...");
    for (const feature of features) {
        try {
            await client.create(feature);
            console.log(`Created feature: ${feature.title}`);
        } catch (err) {
            console.error(`Failed to create ${feature.title}:`, err.message);
        }
    }
    console.log("Done!");
}

seed();
