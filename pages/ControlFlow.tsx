
import React from 'react';
import TopicSection from '../components/TopicSection';

const ControlFlow: React.FC = () => {
  return (
    <div className="py-4">
      <div className="mb-12">
        <span className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">Unit 2</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-2">Control Flow Structures</h1>
        <p className="mt-4 text-slate-600 text-lg">
          Mastering the art of decision-making and repetitive execution in C programming.
        </p>
      </div>

      <TopicSection 
        title="1. Conditional Branching (if-else)"
        description="Conditional statements allow a program to follow different paths based on specific criteria. In academic contexts, understanding the 'Short-circuit' evaluation and nested structures is critical for exam logic questions."
        diagram={`
          graph TD
          A[Start] --> B{Condition True?}
          B -- Yes --> C[Execute If-Block]
          B -- No --> D[Execute Else-Block]
          C --> E[Next Statement]
          D --> E
        `}
        code={`
#include <stdio.h>

int main() {
    int score = 85;
    
    // Multi-way selection using if-else ladder
    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C\\n");
    }
    
    return 0;
}
        `}
        examFocus={[
          "Difference between 'nested if' and 'else-if ladder'.",
          "Dangling Else problem: Which 'if' does an 'else' belong to in nested structures?",
          "Short-circuit evaluation in logical expressions (&& and ||)."
        ]}
        summary={[
          "If statements evaluate non-zero as true.",
          "Else blocks are optional but recommended for robust code.",
          "Braces {} are optional for single statements but mandatory for blocks."
        ]}
      />

      <TopicSection 
        title="2. Iterative Logic (Loops)"
        description="Loops are used to execute a block of code multiple times. BIT exams often test your ability to trace loop variables and understand the subtle difference between 'entry-controlled' and 'exit-controlled' loops."
        diagram={`
          graph LR
          subgraph "While Loop (Entry-Controlled)"
          W1[Check Condition] --> W2{True?}
          W2 -- Yes --> W3[Body]
          W3 --> W1
          W2 -- No --> W4[Exit]
          end
        `}
        code={`
#include <stdio.h>

int main() {
    // 1. For loop: Used when iterations are known
    for (int i = 0; i < 5; i++) {
        printf("Iteration %d\\n", i);
    }

    // 2. Do-While: Guarantees at least one execution
    int count = 10;
    do {
        printf("Executed once even if condition fails\\n");
    } while (count < 5);

    return 0;
}
        `}
        examFocus={[
          "Comparison: while vs do-while (entry vs exit control).",
          "How to create an infinite loop using for(;;).",
          "Predicting output of nested loops (Common in dry-run questions)."
        ]}
        summary={[
          "For loops consist of initialization, condition, and increment.",
          "Break statement terminates the loop completely.",
          "Continue statement skips the current iteration and goes to the next."
        ]}
      />
    </div>
  );
};

export default ControlFlow;
