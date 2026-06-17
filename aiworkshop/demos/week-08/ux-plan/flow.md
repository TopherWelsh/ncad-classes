# Diagnose My Plant - Task Flow

```mermaid
flowchart TD
A[Open app] --> B[Choose plant or add new plant]
B --> C[Take or upload leaf photo]
C --> D{Photo clear enough?}
D -- No --> D1[Show retake tips: light, distance, focus] --> C
D -- Yes --> E[Ask three context questions: watering, light, recent change]
E --> F{High-risk symptom?}
F -- Yes --> F1[Show urgent care warning + advise local expert/source]
F -- No --> G[Show possible causes with confidence labels]
G --> H[Pick care plan]
H --> I{User can do step today?}
I -- No --> I1[Save smaller first step + reminder]
I -- Yes --> J[Start 7-day check-in]
J --> K[Follow-up photo]
```

Unhappy paths:
1. Bad photo quality: retake with specific guidance.
2. Risky diagnosis: avoid false certainty and route to expert/source.
3. User cannot do full care plan: shrink to one first step.

